import Head from 'next/head';
import Link from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta name='description' content='The terms of use for interacting with the JGM Strategy consulting website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container sx={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
        <h1>Terms of Use</h1>
        <p><i>Last updated March 20, 2023.</i></p>
        <h2>Agreement to Our Legal Terms</h2>
        <p>
          We are JGM Strategy Consulting (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;
          &quot;our&quot;).
        </p>
        <p>
          We operate the website{' '}
          <Link href='/'>
            jgmstrategy.com
          </Link>
          {' '}(the &quot;Site&quot;), as well as any other
          related products and services that refer or link to these legal terms (the &quot;Legal
          Terms&quot;) (collectively, the &quot;Services&quot;).
        </p>
        <p>We create strategies that deliver real-time results.</p>
        <p>
          These Legal Terms constitute a legally binding agreement made between you, whether
          personally or on behalf of an entity (&quot;you&quot;), and JGM Strategy Consulting,
          concerning your access to and use of the Services. You agree that by accessing the
          Services, you have read, understood, and agreed to be bound by all of these Legal Terms.
          IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED
          FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
        <p>
          Supplemental terms and conditions or documents that may be posted on the Services from
          time to time are hereby expressly incorporated herein by reference. We reserve the right,
          in our sole discretion, to make changes or modifications to these Legal Terms from time
          to time. We will alert you about any changes by updating the &quot;Last updated&quot;
          date of these Legal Terms, and you waive any right to receive specific notice of each
          such change. It is your responsibility to periodically review these Legal Terms to stay
          informed of updates. You will be subject to, and will be deemed to have been made aware
          of and to have accepted, the changes in any revised Legal Terms by your continued use of
          the Services after the date such revised Legal Terms are posted.
        </p>
        <p>
          The Services are intended for users who are at least 18 years old. Persons under the age
          of 18 are not permitted to use or register for the Services.
        </p>
        <h2>Table of Contents</h2>
        <p>Please click on each item to expand and view details.</p>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='our-services-content'
              id='our-services-header'
            >
              <Typography sx={{ fontWeight: 600 }}>1. Our Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                The information provided when using the Services is not intended for distribution
                to or use by any person or entity in any jurisdiction or country where such
                distribution or use would be contrary to law or regulation or which would subject
                us to any registration requirement within such jurisdiction or country. Accordingly,
                those persons who choose to access the Services from other locations do so on their
                own initiative and are solely responsible for compliance with local laws, if and to
                the extent local laws are applicable.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                The Services are not tailored to comply with industry-specific regulations (Health
                Insurance Portability and Accountability Act (HIPAA), Federal Information Security
                Management Act (FISMA), etc.), so if your interactions would be subjected to such
                laws, you may not use the Services. You may not use the Services in a way that
                would violate the Gramm-Leach-Bliley Act (GLBA).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='ip-content'
              id='ip-header'
            >
              <Typography sx={{ fontWeight: 600 }}>2. Intellectual Property Rights</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontWeight: 500, paddingBottom: '1rem' }}>
                Our intellectual property
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We are the owner or the licensee of all intellectual property rights in our
                Services, including all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics in the Services
                (collectively, the &quot;Content&quot;), as well as the trademarks, service marks,
                and logos contained therein (the &quot;Marks&quot;).
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Our Content and Marks are protected by copyright and trademark laws (and various
                other intellectual property rights and unfair competition laws) and treaties in
                the United States and around the world.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                The Content and Marks are provided in or through the Services &quot;AS IS&quot; for
                your personal, non-commercial use or internal business purpose only.
              </Typography>
              <Typography sx={{ fontWeight: 500, paddingBottom: '1rem' }}>
                Your use of our Services
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Subject to your compliance with these Legal Terms, including the &quot;PROHIBITED
                ACTIVITIES&quot; section below, we grant you a non-exclusive, non-transferable,
                revocable license to:
              </Typography>
              <ul>
                <li>access the Services; and</li>
                <li>
                  download or print a copy of any portion of the Content to which you have properly
                  gained access.
                </li>
                <li>solely for your personal, non-commercial use or internal business purpose.</li>
              </ul>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Except as set out in this section or elsewhere in our Legal Terms, no part of the
                Services and no Content or Marks may be copied, reproduced, aggregated, republished,
                uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed,
                sold, licensed, or otherwise exploited for any commercial purpose whatsoever,
                without our express prior written permission.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                If you wish to make any use of the Services, Content, or Marks other than as set
                out in this section or elsewhere in our Legal Terms, please address your request
                to:{' '}
                <a href='mailto:contact@jgmstrategy.com'>
                  contact@jgmstrategy.com
                </a>
                . If we ever grant you the permission to post, reproduce, or publicly display
                any part of our Services or Content, you must identify us as the owners or
                licensors of the Services, Content, or Marks and ensure that any copyright or
                proprietary notice appears or is visible on posting, reproducing, or displaying
                our Content.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We reserve all rights not expressly granted to you in and to the Services,
                Content, and Marks.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Any breach of these Intellectual Property Rights will constitute a material
                breach of our Legal Terms and your right to use our Services will terminate
                immediately.
              </Typography>
              <Typography sx={{ fontWeight: 500, paddingBottom: '1rem' }}>
                Your submissions
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Please review this section and the &quot;PROHIBITED ACTIVITIES&quot; section
                carefully prior to using our Services to understand the (a) rights you give us
                and (b) obligations you have when you post or upload any content through the
                Services.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                Submissions: By directly sending us any question, comment, suggestion, idea,
                feedback, or other information about the Services (&quot;Submissions&quot;), you
                agree to assign to us all intellectual property rights in such Submission. You
                agree that we shall own this Submission and be entitled to its unrestricted use
                and dissemination for any lawful purpose, commercial or otherwise, without
                acknowledgment or compensation to you.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                You are responsible for what you post or upload: By sending us Submissions through
                any part of the Services you:
              </Typography>
              <ul>
                <li>
                  confirm that you have read and agree with our &quot;PROHIBITED ACTIVITIES&quot;
                  and will not post, send, publish, upload, or transmit through the Services any
                  Submission that is illegal, harassing, hateful, harmful, defamatory, obscene,
                  bullying, abusive, discriminatory, threatening to any person or group, sexually
                  explicit, false, inaccurate, deceitful, or misleading;
                </li>
                <li>
                  to the extent permissible by applicable law, waive any and all moral rights to
                  any such Submission;
                </li>
                <li>
                  warrant that any such Submission are original to you or that you have the
                  necessary rights and licenses to submit such Submissions and that you have full
                  authority to grant us the above-mentioned rights in relation to your Submissions;
                  and
                </li>
                <li>
                  warrant and represent that your Submissions do not constitute confidential
                  information.
                </li>
                <li>
                  You are solely responsible for your Submissions and you expressly agree to
                  reimburse us for any and all losses that we may suffer because of your breach of
                  (a) this section, (b) any third party’s intellectual property rights, or (c)
                  applicable law.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='user-representations-content'
              id='user-representations-header'
            >
              <Typography sx={{ fontWeight: 600 }}>3. User Representations</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                By using the Services, you represent and warrant that: (1) you have the legal
                capacity and you agree to comply with these Legal Terms; (2) you are not a minor
                in the jurisdiction in which you reside; (3) you will not access the Services
                through automated or non-human means, whether through a bot, script or otherwise;
                (4) you will not use the Services for any illegal or unauthorized purpose; and
                (5) your use of the Services will not violate any applicable law or regulation.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                If you provide any information that is untrue, inaccurate, not current, or
                incomplete, we have the right to suspend or terminate your account and refuse any
                and all current or future use of the Services (or any portion thereof).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='payment-content'
              id='payment-header'
            >
              <Typography sx={{ fontWeight: 600 }}>4. Purchases and Payment</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We accept the following forms of payment:
              </Typography>
              <ul>
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
                <li>Discover</li>
                <li>PayPal</li>
              </ul>
              <Typography sx={{ paddingBottom: '1rem' }}>
                You agree to provide current, complete, and accurate purchase and account
                information for all purchases made via the Services. You further agree to promptly
                update account and payment information, including email address, payment method,
                and payment card expiration date, so that we can complete your transactions and
                contact you as needed. Sales tax will be added to the price of purchases as deemed
                required by us. We may change prices at any time. All payments shall be in US
                dollars.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                You agree to pay all charges at the prices then in effect for your purchases and
                any applicable shipping fees, and you authorize us to charge your chosen payment
                provider for any such amounts upon placing your order. If your order is subject to
                recurring charges, then you consent to our charging your payment method on a
                recurring basis without requiring your prior approval for each recurring charge,
                until such time as you cancel the applicable order. We reserve the right to correct
                any errors or mistakes in pricing, even if we have already requested or received
                payment.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We reserve the right to refuse any order placed through the Services. We may,
                in our sole discretion, limit or cancel quantities purchased per person, per
                household, or per order. These restrictions may include orders placed by or under
                the same customer account, the same payment method, and/or orders that use the same
                billing or shipping address. We reserve the right to limit or prohibit orders that,
                in our sole judgment, appear to be placed by dealers, resellers, or distributors.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='cancellation-content'
              id='cancellation-header'
            >
              <Typography sx={{ fontWeight: 600 }}>5. Cancellation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                You can cancel your subscription at any time by contacting us using the contact
                information provided below. Your cancellation will take effect at the end of the
                current paid term.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                If you are unsatisfied with our Services, please email us at{' '}
                <Link href='mailto:contact@jgmstrategy.com'>
                  contact@jgmstrategy.com
                </Link>
                .
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='prohibited-content'
              id='prohibited-header'
            >
              <Typography sx={{ fontWeight: 600 }}>6. Prohibited Activities</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                You may not access or use the Services for any purpose other than that for which
                we make the Services available. The Services may not be used in connection with any
                commercial endeavors except those that are specifically endorsed or approved by us.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                As a user of the Services, you agree not to:
              </Typography>
              <ul>
                <li>
                  Systematically retrieve data or other content from the Services to create or
                  compile, directly or indirectly, a collection, compilation, database, or
                  directory without written permission from us.
                </li>
                <li>
                  Trick, defraud, or mislead us and other users, especially in any attempt to
                  learn sensitive account information such as user passwords.
                </li>
                <li>
                  Circumvent, disable, or otherwise interfere with security-related features of
                  the Services, including features that prevent or restrict the use or copying
                  of any Content or enforce limitations on the use of the Services and/or the
                  Content contained therein.
                </li>
                <li>
                  Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
                </li>
                <li>
                  Use any information obtained from the Services in order to harass, abuse,
                  or harm another person.
                </li>
                <li>
                  Make improper use of our support services or submit false reports of abuse
                  or misconduct.
                </li>
                <li>
                  Use the Services in a manner inconsistent with any applicable laws or regulations.
                </li>
                <li>
                  Engage in unauthorized framing of or linking to the Services.
                </li>
                <li>
                  Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses,
                  or other material, including excessive use of capital letters and spamming
                  (continuous posting of repetitive text), that interferes with any party&apos;s
                  uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts,
                  alters, or interferes with the use, features, functions, operation, or
                  maintenance of the Services.
                </li>
                <li>
                  Engage in any automated use of the system, such as using scripts to send
                  comments or messages, or using any data mining, robots, or similar data
                  gathering and extraction tools.
                </li>
                <li>
                  Delete the copyright or other proprietary rights notice from any Content.
                </li>
                <li>
                  Attempt to impersonate another user or person or use the username of another user.
                </li>
                <li>
                  Upload or transmit (or attempt to upload or to transmit) any material that
                  acts as a passive or active information collection or transmission mechanism,
                  including without limitation, clear graphics interchange formats
                  (&quot;gifs&quot;), 1&times;1 pixels, web bugs, cookies, or other similar devices
                  (sometimes referred to as &quot;spyware&quot; or &quot;passive collection
                  mechanisms&quot; or &quot;pcms&quot;).
                </li>
                <li>
                  Interfere with, disrupt, or create an undue burden on the Services or the
                  networks or services connected to the Services.
                </li>
                <li>
                  Harass, annoy, intimidate, or threaten any of our employees or agents engaged
                  in providing any portion of the Services to you.
                </li>
                <li>
                  Attempt to bypass any measures of the Services designed to prevent or restrict
                  access to the Services, or any portion of the Services.
                </li>
                <li>
                  Copy or adapt the Services&apos; software, including but not limited to Flash,
                  PHP, HTML, JavaScript, or other code.
                </li>
                <li>
                  Except as permitted by applicable law, decipher, decompile, disassemble, or
                  reverse engineer any of the software comprising or in any way making up a part
                  of the Services.
                </li>
                <li>
                  Except as may be the result of standard search engine or Internet browser usage,
                  use, launch, develop, or distribute any automated system, including without
                  limitation, any spider, robot, cheat utility, scraper, or offline reader that
                  accesses the Services, or use or launch any unauthorized script or other software.
                </li>
                <li>
                  Use a buying agent or purchasing agent to make purchases on the Services.
                </li>
                <li>
                  Make any unauthorized use of the Services, including collecting usernames
                  and/or email addresses of users by electronic or other means for the purpose
                  of sending unsolicited email, or creating user accounts by automated means or
                  under false pretenses.
                </li>
                <li>
                  Use the Services as part of any effort to compete with us or otherwise use the
                  Services and/or the Content for any revenue-generating endeavor or commercial
                  enterprise.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='user-generated-content'
              id='user-generated-header'
            >
              <Typography sx={{ fontWeight: 600 }}>7. User Generated Contributions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                The Services does not offer users to submit or post content. We may provide you with
                the opportunity to create, submit, post, display, transmit, perform, publish,
                distribute, or broadcast content and materials to us or on the Services, including
                but not limited to text, writings, video, audio, photographs, graphics, comments,
                suggestions, or personal information or other material (collectively,
                &quot;Contributions&quot;). Contributions may be viewable by other users of the
                Services and through third-party websites. As such, any Contributions you
                transmit may be treated in accordance with the Services&apos; Privacy Policy.
                When you create or make available any Contributions, you thereby represent and
                warrant that:
              </Typography>
              <ul>
                <li>
                  The creation, distribution, transmission, public display, or performance, and the
                  accessing, downloading, or copying of your Contributions do not and will not
                  infringe the proprietary rights, including but not limited to the copyright,
                  patent, trademark, trade secret, or moral rights of any third party.
                </li>
                <li>
                  You are the creator and owner of or have the necessary licenses, rights,
                  consents, releases, and permissions to use and to authorize us, the Services,
                  and other users of the Services to use your Contributions in any manner
                  contemplated by the Services and these Legal Terms.
                </li>
                <li>
                  You have the written consent, release, and/or permission of each and every
                  identifiable individual person in your Contributions to use the name or
                  likeness of each and every such identifiable individual person to enable
                  inclusion and use of your Contributions in any manner contemplated by the
                  Services and these Legal Terms.
                </li>
                <li>
                  Your Contributions are not false, inaccurate, or misleading.
                </li>
                <li>
                  Your Contributions are not unsolicited or unauthorized advertising, promotional
                  materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of
                  solicitation.
                </li>
                <li>
                  Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing,
                  libelous, slanderous, or otherwise objectionable (as determined by us).
                </li>
                <li>
                  Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
                </li>
                <li>
                  Your Contributions are not used to harass or threaten (in the legal sense of
                  those terms) any other person and to promote violence against a specific person
                  or class of people.
                </li>
                <li>
                  Your Contributions do not violate any applicable law, regulation, or rule.
                </li>
                <li>
                  Your Contributions do not violate the privacy or publicity rights of any third
                  party.
                </li>
                <li>
                  Your Contributions do not violate any applicable law concerning child
                  pornography, or otherwise intended to protect the health or well-being of minors.
                </li>
                <li>
                  Your Contributions do not include any offensive comments that are connected to
                  race, national origin, gender, sexual preference, or physical handicap.
                </li>
                <li>
                  Your Contributions do not otherwise violate, or link to material that violates,
                  any provision of these Legal Terms, or any applicable law or regulation.
                </li>
                <li>
                  Any use of the Services in violation of the foregoing violates these Legal Terms
                  and may result in, among other things, termination or suspension of your rights
                  to use the Services.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='license-content'
              id='license-header'
            >
              <Typography sx={{ fontWeight: 600 }}>8. Contribution License</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                You and Services agree that we may access, store, process, and use any
                information and personal data that you provide following the terms of the Privacy
                Policy and your choices (including settings).
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                By submitting suggestions or other feedback regarding the Services, you agree that
                we can use and share such feedback for any purpose without compensation to you.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We do not assert any ownership over your Contributions. You retain full ownership
                of all of your Contributions and any intellectual property rights or other
                proprietary rights associated with your Contributions. We are not liable for any
                statements or representations in your Contributions provided by you in any area on
                the Services. You are solely responsible for your Contributions to the Services and
                you expressly agree to exonerate us from any and all responsibility and to refrain
                from any legal action against us regarding your Contributions.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='third-party-content'
              id='third-party-header'
            >
              <Typography sx={{ fontWeight: 600 }}>9. Third-Party Websites and Content</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                The Services may contain (or you may be sent via the Site) links to other websites
                (&quot;Third-Party Websites&quot;) as well as articles, photographs, text,
                graphics, pictures, designs, music, sound, video, information, applications,
                software, and other content or items belonging to or originating from third
                parties (&quot;Third-Party Content&quot;). Such Third-Party Websites and
                Third-Party Content are not investigated, monitored, or checked for accuracy,
                appropriateness, or completeness by us, and we are not responsible for any
                Third-Party Websites accessed through the Services or any Third-Party Content
                posted on, available through, or installed from the Services, including the
                content, accuracy, offensiveness, opinions, reliability, privacy practices, or
                other policies of or contained in the Third-Party Websites or the Third-Party
                Content. Inclusion of, linking to, or permitting the use or installation of any
                Third-Party Websites or any Third-Party Content does not imply approval or
                endorsement thereof by us. If you decide to leave the Services and access the
                Third-Party Websites or to use or install any Third-Party Content, you do so at
                your own risk, and you should be aware these Legal Terms no longer govern. You
                should review the applicable terms and policies, including privacy and data
                gathering practices, of any website to which you navigate from the Services or
                relating to any applications you use or install from the Services. Any purchases
                you make through Third-Party Websites will be through other websites and from
                other companies, and we take no responsibility whatsoever in relation to such
                purchases which are exclusively between you and the applicable third party. You
                agree and acknowledge that we do not endorse the products or services offered on
                Third-Party Websites and you shall hold us blameless from any harm caused by your
                purchase of such products or services. Additionally, you shall hold us blameless
                from any losses sustained by you or harm caused to you relating to or resulting in
                any way from any Third-Party Content or any contact with Third-Party Websites.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='advertisers-content'
              id='advertisers-header'
            >
              <Typography sx={{ fontWeight: 600 }}>10. Advertisers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We allow advertisers to display their advertisements and other information in
                certain areas of the Services, such as sidebar advertisements or banner
                advertisements. We simply provide the space to place such advertisements, and
                we have no other relationship with advertisers.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='services-content'
              id='services-header'
            >
              <Typography sx={{ fontWeight: 600 }}>11. Services Management</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We reserve the right, but not the obligation, to: (1) monitor the Services
                for violations of these Legal Terms; (2) take appropriate legal action against
                anyone who, in our sole discretion, violates the law or these Legal Terms,
                including without limitation, reporting such user to law enforcement authorities;
                (3) in our sole discretion and without limitation, refuse, restrict access to,
                limit the availability of, or disable (to the extent technologically feasible) any
                of your Contributions or any portion thereof; (4) in our sole discretion and
                without limitation, notice, or liability, to remove from the Services or otherwise
                disable all files and content that are excessive in size or are in any way
                burdensome to our systems; and (5) otherwise manage the Services in a manner
                designed to protect our rights and property and to facilitate the proper
                functioning of the Services.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='privacy-content'
              id='privacy-header'
            >
              <Typography sx={{ fontWeight: 600 }}>12. Privacy Policy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We care about data privacy and security. Please review our Privacy Policy:{' '}
                <Link href='/privacy'>
                  jgmstrategy.com/privacy
                </Link>
                . By using the Services, you agree to be bound by our Privacy Policy, which is
                incorporated into these Legal Terms. Please be advised the Services are hosted in
                the United States. If you access the Services from any other region of the world
                with laws or other requirements governing personal data collection, use, or
                disclosure that differ from applicable laws in the United States, then through
                your continued use of the Services, you are transferring your data to the
                United States, and you expressly consent to have your data transferred to and
                processed in the United States.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='termination-content'
              id='termination-header'
            >
              <Typography sx={{ fontWeight: 600 }}>13. Term and Termination</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                These Legal Terms shall remain in full force and effect while you use the
                Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE
                THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS
                TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY
                PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF
                ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF
                ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
                SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
                WARNING, IN OUR SOLE DISCRETION.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                If we terminate or suspend your account for any reason, you are prohibited from
                registering and creating a new account under your name, a fake or borrowed name,
                or the name of any third party, even if you may be acting on behalf of the third
                party. In addition to terminating or suspending your account, we reserve the right
                to take appropriate legal action, including without limitation pursuing civil,
                criminal, and injunctive redress.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='modifications-content'
              id='modifications-header'
            >
              <Typography sx={{ fontWeight: 600 }}>14. Modifications and Interruptions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We reserve the right to change, modify, or remove the contents of the Services at
                any time or for any reason at our sole discretion without notice. However, we
                have no obligation to update any information on our Services. We will not be
                liable to you or any third party for any modification, price change, suspension,
                or discontinuance of the Services.
              </Typography>
              <Typography sx={{ paddingBottom: '1rem' }}>
                We cannot guarantee the Services will be available at all times. We may experience
                hardware, software, or other problems or need to perform maintenance related to
                the Services, resulting in interruptions, delays, or errors. We reserve the right
                to change, revise, update, suspend, discontinue, or otherwise modify the Services
                at any time or for any reason without notice to you. You agree that we have no
                liability whatsoever for any loss, damage, or inconvenience caused by your
                inability to access or use the Services during any downtime or discontinuance of
                the Services. Nothing in these Legal Terms will be construed to obligate us to
                maintain and support the Services or to supply any corrections, updates, or
                releases in connection therewith.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='governing-content'
              id='governing-header'
            >
              <Typography sx={{ fontWeight: 600 }}>15. Governing Law</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                These Legal Terms and your use of the Services are governed by and construed in
                accordance with the laws of the State of California applicable to agreements made
                and to be entirely performed within the State of California, without regard to its
                conflict of law principles.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='corrections-content'
              id='corrections-header'
            >
              <Typography sx={{ fontWeight: 600 }}>16. Corrections</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                There may be information on the Services that contains typographical errors,
                inaccuracies, or omissions, including descriptions, pricing, availability, and
                various other information. We reserve the right to correct any errors,
                inaccuracies, or omissions and to change or update the information on the Services
                at any time, without prior notice.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='agreement-content'
              id='agreement-header'
            >
              <Typography sx={{ fontWeight: 600 }}>17. Agreement</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ paddingBottom: '1rem' }}>
                These Legal Terms and any policies or operating rules posted by us on the
                Services or in respect to the Services constitute the entire agreement and
                understanding between you and us. Our failure to exercise or enforce any right
                or provision of these Legal Terms shall not operate as a waiver of such right
                or provision. These Legal Terms operate to the fullest extent permissible by law.
                We may assign any or all of our rights and obligations to others at any time. We
                shall not be responsible or liable for any loss, damage, delay, or failure to act
                caused by any cause beyond our reasonable control. If any provision or part of a
                provision of these Legal Terms is determined to be unlawful, void, or
                unenforceable, that provision or part of the provision is deemed severable from
                these Legal Terms and does not affect the validity and enforceability of any
                remaining provisions. There is no joint venture, partnership, employment or agency
                relationship created between you and us as a result of these Legal Terms or use of
                the Services. You agree that these Legal Terms will not be construed against us by
                virtue of having drafted them. You hereby waive any and all defenses you may have
                based on the electronic form of these Legal Terms and the lack of signing by the
                parties hereto to execute these Legal Terms.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </>
  );
}