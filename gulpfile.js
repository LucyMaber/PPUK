const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const fs = require('fs');
const plumber = require('gulp-plumber');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const nodeExternals = require('webpack-node-externals');
const ext_replace = require('gulp-ext-replace');
const autoprefixer = require('autoprefixer');
const each = require('gulp-each');
const inline = require('gulp-inline');
const minifyInline = require('gulp-minify-inline');
const purgecss = require('gulp-purgecss');
const cleanCSS = require('gulp-clean-css');
const markdown = require('markdown-it')();
const matter = require('gray-matter');
const rimraf = require('gulp-rimraf');
const SitemapAndIndexStream = require('sitemap').SitemapAndIndexStream;
const SitemapStream = require('sitemap').SitemapStream;
const { createWriteStream } = require('fs');
const { resolve } = require('path');
const { createGzip } = require('zlib');

const domain = "https://ukpirate.party/";
let sitemapList = [];

// Webpack configuration
const webpackConfig = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  output: {
    filename: "[name].js",
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.jsx', ".tsx"],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        },
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      }
    ],
  }
};

// Utility function to require modules from string
function requireFromString(src, filename) {
  const Module = module.constructor;
  const m = new Module(filename, module.parent);
  m.filename = path.resolve(process.cwd(), filename);
  m.paths = Module._nodeModulePaths(path.dirname(m.filename));
  m._compile(src, filename);
  return m.exports;
}
var rimraf2 = require('rimraf');

// Utility function to delete all contents except .git
function cleanDirectoryExceptGit(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (file !== '.git') {
      rimraf2.sync(path.join(dir, file));
    }
  });
}

// Clean task
function clean(cb) {
  cleanDirectoryExceptGit('./output'); // Remove everything except '.git' in 'output'
  rimraf2.sync('./temp'); // Remove everything in 'temp'
  cb();
}

// copy CNAME
function copy_cname(done){
  return gulp.src("src/CNAME").pipe(gulp.dest("output/"));
}


// Create necessary directories
function mkdir(done) {
  fs.mkdirSync('./output', { recursive: true });
  fs.mkdirSync('./output/media', { recursive: true }); // Ensure 'output/media' is created
  fs.mkdirSync('./temp', { recursive: true });
  done();
}
// Compile and render article pages
function generateArticlePages(done) {
  const articles = [];
  const ARTICLES_PER_PAGE = 10;
  fs.mkdirSync('temp/article', { recursive: true });

  const filesInSrcDir = fs.readdirSync('articles');
  filesInSrcDir.forEach((file) => {
    if (path.extname(file) === '.md') {
      const fileName = path.basename(file, '.md');
      const fileContent = fs.readFileSync(path.join('articles', file), 'utf8');
      const { data, content } = matter(fileContent);
      sitemapList.push({ /* ...sitemap details... */ });

      articles.push({ data: { ...data, slug: fileName }, content, fileName });
    }
  });

  articles.sort((a, b) => new Date(b.data.publishDate) - new Date(a.data.publishDate));
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  return gulp
    .src('src/article/ArticleListPage.jsx')
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig))
    .pipe(each((jsxContent, file, callback) => {
      try {
        const ArticleListPage = requireFromString(jsxContent.toString(), file.path).default;

        for (let page = 0; page < totalPages; page++) {
          const articlesForCurrentPage = articles.slice(page * ARTICLES_PER_PAGE, (page + 1) * ARTICLES_PER_PAGE);
          const App = ArticleListPage({ articles: articlesForCurrentPage, pageNo: page, totalPages });
          const renderedPage = ReactDOMServer.renderToString(App);
          fs.writeFileSync(`temp/article/page-${page}.html`, renderedPage);
        }

        callback(null, jsxContent);
      } catch (err) {
        callback(err);
      }
    }));
}



// Compile and render individual articles
function generateArticles() {
  // Return the main gulp stream)
  return gulp.src("src/article/ArticlePage.jsx")
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig))
    .pipe(each((articleJSXContent, file, callback) => {
      // Handle asynchronous reading of markdown files
      gulp.src("src/articles/*.md")
        .pipe(each((content, file, cb) => {
          try {
            const { data, content: markdownText } = matter(content.toString());
            const htmlContent = markdown.render(markdownText);
            const articleModule = requireFromString(articleJSXContent.toString(), file.path);
            const ArticleComponent = articleModule.default({
              article: {
                id: file.path,
                imageUrl: data.imageUrl,
                imageAlt: data.imageAlt,
                title: data.title,
                filename: "article.html",
                slug: data.slug,
                summary: data.summary,
                tags: data.keywords,
                name: data.author[0].name,
                datePublished: new Date(Date.parse(data.publishDate)),
                htmlContent,
              }
            });
            const renderedArticle = ReactDOMServer.renderToString(ArticleComponent);
            // Write file and resolve the promise
            fs.writeFileSync(`temp/article/${path.basename(file.path, '.md')}.html`, renderedArticle);
          } catch (err) {
            console.error(`Error in file ${file.path}:`, err);
            cb(err); // Handle errors properly
          }
        }))
        callback(null, articleJSXContent);
    }));
}


// Build static pages
function buildStaticPage(done) {
  const filesInSrcDir = fs.readdirSync('src/');
  const entryPoints = {};

  filesInSrcDir.forEach(file => {
    const fileExtension = path.extname(file);
    if (['.jsx'].includes(fileExtension)) {
      const fileName = path.basename(file, fileExtension);
      entryPoints[fileName] = path.resolve(__dirname, 'src', file);
    }
  });

  return gulp.src(["src/*.js","src/*.jsx"])
    .pipe(plumber())
    .pipe(webpackStream({ ...webpackConfig, entry: entryPoints }))
    .pipe(each((jsxContent, file, callback) => {
      try {
        const moduleFromJSX = requireFromString(jsxContent.toString(), file.path);
        const App = moduleFromJSX.default || moduleFromJSX;
        const renderedPage = ReactDOMServer.renderToString(App({}));
        callback(null, renderedPage);
      } catch (err) {
        console.error(`Error in file ${file.path}:`, err);
        callback(err);
      }
    }))
    .pipe(ext_replace('.html'))
    .pipe(gulp.dest("temp/"))
    .on('end', done);
}

// Copy and optimize styles
// Copy and optimize styles
function copyStyles() {
  return gulp.src('src/styles/**/*.css') // Corrected the glob pattern to match all CSS files
    // .pipe(purgecss({ content: ['temp/**/*.html'] })) // Uncomment if you want to use purgecss
    .pipe(cleanCSS())
    .pipe(gulp.dest('temp/styles'));
}

// Inline CSS and JS into HTML
// Inline CSS and JS into HTML
function autoInline() {
  return gulp
    .src('temp/**/*.html') // Source all HTML files in the temp directory
    .pipe(
      inline({
        base: 'temp/',
        css: [cleanCSS], // Use cleanCSS to optimize the CSS
        disabledTypes: ['img'], // Disable inlining of images (if you don't want them inlined)
      })
    )
    .pipe(minifyInline()) // Minify the inlined CSS and JS
    .pipe(ext_replace('.html')) // Ensure files have .html extensions
    .pipe(gulp.dest('output/')); // Output to the final directory
}


// Copy media files
function copyMedia() {
  return gulp.src('src/media/**/*')
    .pipe(gulp.dest('output/media'));
}

// Copy assets to the output directory
function copyToOutput() {
  return gulp.src(['temp/**/*', "src/*.txt"])
    .pipe(gulp.dest('output/'));
}
// Generate sitemap
function buildPlainSiteMap(cb) {
  try {
    fs.mkdirSync('./output/sitemap', { recursive: true });

    const sms = new SitemapAndIndexStream({
      getSitemapStream: (i) => {
        const sitemapStream = new SitemapStream({ hostname: domain });
        const path = `./output/sitemap/sitemap-${i}.xml`;
    
        const ws = sitemapStream.pipe(createWriteStream(resolve(path)));
        ws.on('error', (err) => {
          console.error(`Error writing sitemap ${path}: ${err.message}`);
        });
    
        // Correct the URL construction
        return [new URL(path, domain).toString(), sitemapStream, ws];
      },
    });
    
    sitemapList.forEach(item => sms.write(item));
    sms.end();
    cb();
  } catch (err) {
    console.error('Error building sitemap:', err);
    cb(err);
  }
}

exports.default = gulp.series(
  clean,
  mkdir,
  copyMedia,
  buildStaticPage,
  generateArticlePages,
  generateArticles,
  copyStyles,
  copy_cname,
  autoInline,
  copyToOutput,
  buildPlainSiteMap
);

exports.clean = clean;
exports.mkdir = mkdir;
