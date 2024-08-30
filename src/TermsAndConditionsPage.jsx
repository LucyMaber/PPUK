import React from "react";
import BodyPage from './partials/BodyPage';
import Container from 'react-bootstrap/Container';

const TermsAndConditionsPage = () => {
  return (
    <BodyPage title={"Terms and Conditions"}>
      <Container className="container pb-5 mb-5">
        <h1>Terms and Conditions</h1>
        <p>
          When becoming a member you agree to abide by the rules and constitution of the Pirate Party.
        </p>
        <p>
          We may contact you from time to time by email. We will try to minimize the number of emails sent to you; however, you can sign up for additional emails by registering to our mailing list. You can check and update your mailing list subscriptions on your account profile page. We reserve the right to send out occasional important updates to all members, regardless of your subscription preferences.
        </p>
        <p>
          Please also take note of our privacy policy.
        </p>
        <p>
          The Pirate Party reserves the right to update these Terms and Conditions at any time. Members will be notified of significant changes, and it is recommended to review these terms periodically to stay informed of any updates.
        </p>

        <h2>Donations</h2>
        <p>
          The party membership fee currently stands at £10. Non-member collaborators can participate for free but will not have full membership rights.
        </p>
        <p>
          In compliance with party funding laws, if donations of more than £500 (including membership fees) are made, your details will be checked to ensure you are registered on a UK electoral register. For donations of more than £7,500 to the party in the course of a calendar year, the amount of the donation and the name of the person or company donating will be reported to the Electoral Commission for publication on their public register of donations.
        </p>
        <p>
          You understand that it is a criminal offence to make donations in a way that attempts to evade these rules. More information about party funding laws can be found <a href="#">here</a>.
        </p>
        <p>
          To assist with the processing of payments and to ensure compliance with legal obligations, donors who make aggregate contributions of more than £500 will be contacted personally. Please ensure that you provide contact details where you can be reached, as failure to do so may necessitate the refund of your donation.
        </p>
        <p>
          For enquiries about contributions to the party, please check back soon for more information.
        </p>

        <h2>Note for residents in Northern Ireland</h2>
        <p>
          We are not currently registered as a political party in Northern Ireland.
        </p>
        <p>
          We recommend that instead of becoming a member of a Pirate Party that can't currently cover Northern Ireland, you should register for our site and contact the campaigns or nominations team. We want to give pirates from Northern Ireland the benefit of our experience in setting up the mainland section of the party, and let them make their own decisions about how closely they want to be connected to it.
        </p>
        <p>
          If you have read all that and still want to support the mainland party, feel free to become a member or give a donation, but please be aware that the mainland party can't contest seats in Northern Ireland, and that you will probably need to pay another membership fee if a Northern Ireland party were set up in future.
        </p>
      </Container>
    </BodyPage>
  );
};

export default TermsAndConditionsPage;
