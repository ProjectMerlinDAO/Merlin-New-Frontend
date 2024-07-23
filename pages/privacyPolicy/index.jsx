import React from 'react'
import { PolPara, PolText, PolicyMainHeading } from '../cookiesPolicy'
import HomeFooter from "../../src/Component/Core/HomeFooter/HomeFooter";
import Header from '../../src/Component/App/Home/Header/Header'

function PrivacyPolicy() {
  return (
    <div className='bg-[rgba(255,255,255,0.05)]'>
      <Header/>
      <section className="PolicySections">
        <div className="px-[20px] pb-[400px] pt-[200px] md:px-[10px] max-w-[1450px] mx-auto lg:max-w-[720px]">
          <PolicyMainHeading Head="Privacy Policy"/>
          <div className="PolicyDivs pt-[40px]">
            <div className="policyitems">
                <PolPara Paragraphs="This Privacy Policy provides our privacy policy regarding the
                  nature, purpose, use, and sharing of personal data or other
                  information collected from the users of the website
                  projectmerlin.io and other websites which use subdomains of
                  projectmerlin.io (the „Site”). We are committed to protecting
                  and respecting your privacy. Please read this carefully as this
                  Privacy Policy is legally binding when you use the Site."/>
                  <br />
                <PolPara Paragraphs="As used in this Privacy Policy we us or our refers to
                  Merlin Technology Limited, a Seychelles based limited liability
                  company. You can reach us with any request relating to this
                  Privacy Policy via contact details provided below."/>
                  <br />
              </div>
              <div className="policyitems">
                <PolPara Paragraphs="Data processing in connection with the Site"/>
                <PolText Textheading="Use of Cookies and Similar Technologies"/>
                <PolPara Paragraphs="The Site is using cookies. Cookies are small text files that are
                  placed on your computer by websites that you visit. They are
                  widely used in order to make websites work, or work more
                  efficiently, as well as to provide information to the owners of
                  the site. Cookies are typically stored on your computer's hard
                  drive. Information collected from cookies is used by us to
                  evaluate the effectiveness of our Site and analyze trends. The
                  information collected from cookies allows us to determine
                  such things as which parts of the Site are most visited and
                  difficulties our visitors may experience in accessing the SIte.
                  With this knowledge, we can improve the quality of your
                  experience on the Site by recognizing and delivering more of
                  the most desired features and information, as well as by
                  resolving access difficulties."/>
                <PolPara Paragraphs="We use third party service providers, to assist us in better
                  understanding the use of our Site. Our service providers will
                  place cookies on the hard drive of your computer (or use
                  similar technologies) and will receive information that we
                  select that will educate us on such things as how visitors
                  navigate around our Site. This information is aggregated to
                  provide statistical data about our users' browsing actions and
                  patterns, and does not personally identify individuals. This
                  information may include:"/>
                  <br />
                <ul className='policyUl'>
                  <li> Computer or mobile device information,</li>
                  <li>Website usage information, such as:</li>
                  <ul>
                    <li>Page views,</li>
                    <li>Button clicks,</li>
                    <li>Input form changes (without the values being entered),</li>
                    <li>Errors.</li>
                  </ul>
                </ul>
                <br />
                <PolPara Paragraphs="Our service providers analyses this information and provides
                  us with aggregate reports. The information and analysis
                  provided by our service providers will be used to assist us in
                  better understanding our visitors' interests in our Site and
                  how to better serve those interests. If you want to avoid using
                  cookies altogether, you can disable cookies in your browser.
                  However, disabling cookies might make it impossible for you
                  to use certain features of the Site. Your use of the Site with a
                  browser that is configure to accept cookies constitutes an
                  acceptance of our and third-party cookies"/>               
              </div>
              <div className="policyitems">
                <PolText Textheading="Email Marketing"/>
                <PolPara Paragraphs="If you subscribe to our newsletter we may occasionally
                  communicate project news, updates, promotions and related
                  information relating to Project Merlin. We shall only do this
                  where you have given us your consent. If you want to opt out
                  of receiving promotional and marketing emails in relation to
                  which you might receive in accordance with this section, you
                  can best opt out by clicking unsubscribe at the bottom of an
                  email we sent you."/>
              </div>
              <div className="policyitems">
                <PolText Textheading="Your inquiries"/>
                <PolPara Paragraphs="You may contact us by e-mail to the following e-mail address:
                  support@projectmerlin.io. We use the data that you provide
                  in an email to us, which you may give voluntarily, only in order
                  to answer your contact question or to reply to your email in
                  the best possible manner."/>
              </div>
              <div className="policyitems">
                <PolText Textheading="Social media "/>
                <PolPara Paragraphs="We may use plugins from social networks such as GitHub,
                  YouTube, Reddit, X(formerly Twitter), Telegram, Medium on
                  the Site. When you activate them (by clicking on them), the
                  operators of the respective social networks may record that
                  you are on the Site and may use this information. This
                  processing of your personal data lays in the responsibility of
                  these individual social media platforms and occurs according
                  to their privacy policies. Please check with these individual
                  social media platforms regarding their privacy policies. We
                  are not responsible for data collected by these individual
                  social media platforms."/>
              </div>
              <div className="policyitems">
                <PolText Textheading="Right to access"/>
                <PolPara Paragraphs="As a data subject you have the right to obtain from us free
                  information about your personal data processed at any time
                  and a copy of this information. Furthermore, you will have
                  access to the following information: the purposes of the
                  processing; the categories of personal data concerned; where
                  possible, the envisaged period for which the personal data
                  will be processed, or, if not possible, the criteria used to
                  determine that period; the existence of the right to request
                  from us rectification or erasure of personal data, or restriction
                  of processing of personal data concerning you, or to object to
                  such processing; the existence of the right to lodge a
                  complaint with a supervisory authority; where the personal
                  data are not collected directly from you, any available
                  information as to their source; and the existence of
                  automated decision-making, including profiling, and, at least
                  in those cases, meaningful information about the logic
                  involved, as well as the significance and envisaged
                  consequences of such processing for you."/>
              </div>
              <div className="policyitems">
                <PolText Textheading="Right to rectification"/>
                <PolPara Paragraphs="You have the right to obtain from us, without undue delay,
                  the rectification of inaccurate personal data concerning you.
                  Taking into account the purposes of the processing, you shall
                  have the right to have incomplete personal data completed,
                  including by means of providing a supplementary statement."/>
              </div>
              <div className="policyitems">
                <PolText Textheading="Right to be forgotten"/>
                <PolPara Paragraphs="You have the right to obtain from us the erasure of personal
                  data concerning you as soon as possible, and we shall have
                  the obligation to erase personal data without undue delay
                  where required by the law, including when:"/>
                  <br />
                <ul className="policyUl">
                  <li>the personal data is no longer necessary in relation to
                      the purposes for which they were collected or otherwise
                      processed;</li>
                  <li>there is no longer a legal ground for the processing;</li>
                  <li>you object to the processing and there are no overriding
                      legitimate grounds for the processing;</li>
                  <li>the personal data has been unlawfully processed;</li>
                  <li>the personal data must be erased for compliance with a
                      legal obligation in accordance with the applicable law to
                      which we are subject.
                      </li>
                </ul>
                <br />
              </div>
              <div className="policyitems">
                <PolText Textheading="Right to restriction of processing"/>
                <PolPara Paragraphs="You have the right to obtain from the Foundation restriction
                  of processing where one of the following applies:"/>
                  <br />
                <ul className="policyUl">
                  <li>the accuracy of the personal data is contested by you, for
                      a period enabling us to verify the accuracy of the
                      personal data;</li>
                  <li>the processing is unlawful and you oppose the erasure of
                      the personal data and requests instead the restriction of
                      their use instead;
                      </li>
                  <li>we no longer needs the personal data for the purposes
                      of the processing, but they are required by you for the
                      establishment, exercise or defense of legal claims; and/o</li>
                  <li>you have objected to processing pursuant to applicable
                      laws.</li>
                </ul>
                <br />
              </div>
              <div className="policyitems">
                <PolText Textheading="Right to object"/>
                <PolPara Paragraphs="You have the right to object, on grounds relating to your
                  particular situation, at any time, to the processing of personal
                  data concerning you. We shall no longer process the personal
                  data in the event of the objection, unless we can demonstrate
                  reasonable grounds for the processing, which override the
                  interests, rights and freedoms of you, or for the establishment,
                  exercise or defense of legal claims. "/>
              </div>
              <div className="policyitems">
                <PolText Textheading="Right to withdraw data protection consent"/>
                <PolPara Paragraphs="You have the right to withdraw your consent to processing of
                  your personal data at any time."/>
                  <br />
              </div>
              <div className="policyitems">
                <PolText Textheading="International transfers"/>
                <PolPara Paragraphs="We are entitled to transfer your personal data to third parties
                  abroad for the purposes of the data processing."/>
              </div>
              <div className="policyitems">
              <PolPara Paragraphs="As personal data processors, they are obliged to protect data
                  privacy to the same extent as we ourselves. We choose the
                  processors carefully to ensure compliance with applicable laws."/>
              </div>
              <div className="policyitems">
                <PolText Textheading="Data security"/>
                <PolPara Paragraphs="We use appropriate technical and organizational security
                  measures to protect your personal data. Our security
                  measures are continuously being improved in line with
                  technical developments."/>
                <PolPara Paragraphs="Please note that any data transmission on the Internet (e.g.
                  communication by e-mail) is generally not secure and we
                  accept no liability for data transmitted to us via the Internet.
                  Unfortunately, absolute protection is not technically possible.
                  This information does not apply to the websites of third
                  parties and the corresponding links given on the Site. We
                  assume no responsibility and liability for these."/>
              </div>
              <div className="policyitems">
                <PolText Textheading="Duration of data processing"/>
                <PolPara Paragraphs="We will process your personal data only for the period
                  necessary to achieve the purpose of the processing, or as
                  required by applicable laws. After the period the personal
                  data will be deleted."/>
              </div>
              <div className="policyitems">
                <PolText Textheading="Amendments to this Policy"/>
                <PolPara Paragraphs="We may amend this Privacy Policy at any time by posting the
                  amended version on the Site including the effective date of
                  the amended version. The current version of the Privacy
                  Policy, as published on the Site, is applicable.
                  "/>
              </div>
              <div className="policyitems">
                <PolText Textheading="Contact"/>
                <PolPara Paragraphs="Please contact us with questions, comments, or concerns
                regarding our Privacy Policy as well as with any requests at
                " Links="  support@projectmerlin.io" path="mailto:support@projectmerlin.io"/>
              </div>
          </div>
        </div>
      </section>
      <HomeFooter/>
    </div>
  )
}
export default PrivacyPolicy;