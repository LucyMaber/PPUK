import React from "react";
import BodyPage from './partials/BodyPage';
import Container from 'react-bootstrap/Container';

const PrivacyPolicyPage = () => {
  return (
    <BodyPage title={"Privacy Policy"}>
      <Container className="container pb-5 mb-5">
        <h1>Privacy Policy Overview (GDPR Compliant)</h1>
        <h2>1. Purpose and Scope</h2>
        <p>
          <strong>Why We Have a Policy:</strong> This Privacy Policy outlines how the Pirate Party UK collects, uses, and protects your personal information in compliance with the General Data Protection Regulation (GDPR). It applies to information gathered through the website, membership forms, and any other interactions with the Party.
        </p>
        <p>
          <strong>Changes to the Policy:</strong> The policy may be updated periodically. Significant changes will be communicated via mandatory notifications, as GDPR does not allow users to opt out of communications necessary for legal compliance or significant updates.
        </p>
        
        <h2>2. Contact Information</h2>
        <p>
          <strong>Data Protection Officer (DPO):</strong> For GDPR-specific inquiries, please contact our Data Protection Officer through the contact options available on our website.
        </p>
        
        <h2>3. Information Collection</h2>
        <p>
          <strong>Direct Information:</strong> The Party collects information you provide directly, such as during registration, membership processes, or forum participation.
        </p>
        <p>
          <strong>Indirect Information:</strong> Data about your website usage, including page visits and resources accessed, is collected. This data is anonymized and aggregated for statistical purposes and is collected under the Party’s legitimate interest to improve services.
        </p>
        <p>
          <strong>Data Processing on this Website:</strong> Various data is transmitted to us from your computer, depending on the browser and operating system type, version, and settings. Some of the data that may be collected include:
        </p>
        <ul>
          <li>Browser type/version</li>
          <li>Operating system used</li>
          <li>Referrer URL (the previously visited page)</li>
          <li>Host name of the accessing computer (IP address)</li>
          <li>Time of the server request</li>
        </ul>
        <p>
          The Pirate Party strictly rejects the storage of such data. However, in cases where our systems are misused for criminal offences, we may be obligated to store this and other data and hand it over to investigating authorities. If allowed, we will inform you in such cases. In the event of an ongoing procedure, this data may be released to participating authorities or private individuals.
        </p>
        <p>
          <strong>Third-Party Data Transmission:</strong> If it becomes necessary to pass on your data to third parties, we will ask for your permission in advance for each transmission individually. The following declaration gives you an overview of how we ensure this protection and what kind of data is collected for what purpose.
        </p>
        
        <h2>4. Use of Information</h2>
        <p>
          <strong>Legal Basis:</strong> Your personal data is processed based on your consent, compliance with legal obligations, or the Party’s legitimate interests.
        </p>
        <p>
          <strong>Third-Party Sharing:</strong> The Party will not share your information with third parties without your explicit consent unless required by law. If it becomes necessary to share your data with third parties, we will seek your permission for each instance.
        </p>
        <p>
          <strong>Purpose:</strong> Collected data is used to improve services, fulfill commitments, and communicate about campaigns and services. Users can manage their communication preferences but cannot opt out of essential notifications required by law or necessary for significant updates.
        </p>
        
        <h2>5. Data Security</h2>
        <p>
          <strong>Security Measures:</strong> Personal information is stored on secure servers, and any data transfer is encrypted. Although complete security cannot be guaranteed, the Party commits to doing its best to protect user data. Access to your data is restricted to authorized personnel only.
        </p>
        <p>
          <strong>Data Breach Protocol:</strong> In the event of a data breach, affected individuals will be notified within 72 hours in compliance with GDPR requirements.
        </p>
        
        <h2>6. User Rights Under GDPR</h2>
        <ul>
          <li><strong>Access:</strong> You have the right to request access to your personal data at any time.</li>
          <li><strong>Rectification:</strong> You have the right to request correction of any inaccurate or incomplete personal data.</li>
          <li><strong>Erasure:</strong> You have the right to request the deletion of your personal data under certain circumstances (right to be forgotten).</li>
          <li><strong>Restriction of Processing:</strong> You can request the restriction of processing your data in certain situations.</li>
          <li><strong>Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format and to transmit that data to another controller.</li>
          <li><strong>Objection:</strong> You have the right to object to the processing of your personal data based on legitimate interests.</li>
          <li><strong>Automated Decision-Making:</strong> You have the right not to be subject to a decision based solely on automated processing, including profiling, unless necessary for contractual reasons.</li>
          <li><strong>Withdraw Consent:</strong> You can withdraw your consent to data processing at any time without affecting the lawfulness of processing based on consent before its withdrawal.</li>
        </ul>
        <p>
          Requests can be made to the Data Protection Officer through the contact options available on our website. The Party will respond to such requests within one month as required by GDPR.
        </p>
        
        <h2>7. Donations and PPERA Compliance</h2>
        <p>
          <strong>Donation Rules:</strong> Under the Political Parties, Elections and Referendums Act 2000 (PPERA), the Party is required to report:
        </p>
        <ul>
          <li>All permissible benefits that add up to over £11,180 from the same source in the same calendar year, including benefits received by different sections of the Party.</li>
          <li>All impermissible donations, which are those that come from a source not permitted under the law.</li>
          <li>All permissible donations over £11,180 from a single source.</li>
        </ul>
        <p>
          <strong>Data Retention:</strong> The Party will retain all relevant donation and loan information as long as required to fulfill its reporting obligations to the correct authorities.
        </p>
        
        <h2>8. Membership Portal Collaboration</h2>
        <p>
          <strong>Co-Management:</strong> The membership portal is co-managed with Pirate Party Austria and the Pirate Party International IT group, which provides server space for free. The portal is partially controlled by the Austrian Pirate Party working group. You can review their privacy policy <a href="https://piratenpartei.at/rechtliches/datenschutzerklaerung/">here</a>.
        </p>
        
        <h2>9. Website Hosting and External Links</h2>
        <p>
          <strong>Website Hosting:</strong> The static website is hosted on GitHub via GitHub Pages and utilizes Cloudflare for content delivery and security services. This hosting arrangement helps ensure the website’s availability and protection against various online threats.
        </p>
        <p>
          <strong>External Links:</strong> This policy applies only to the Pirate Party UK’s services and websites. It does not cover external sites linked from the Party’s website.
        </p>
      </Container>
    </BodyPage>
  );
};

export default PrivacyPolicyPage;
