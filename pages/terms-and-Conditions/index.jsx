import React from 'react'
import { PolPara, PolText, PolicyMainHeading } from '../cookiesPolicy/index'
import HomeFooter from "@/src/Component/Core/HomeFooter/HomeFooter";
import Header from '@/src/Component/App/Home/Header/Header'

function TermsConditions() {
  return (
    <>
    <Header />
    <div className='bg-[rgba(255,255,255,0.05)]'>
      <section className="PolicySections">
        <div className="px-[20px] pb-[400px] pt-[200px] md:px-[10px] max-w-[1450px] mx-auto lg:max-w-[720px]">
          <PolicyMainHeading Head="Terms of Service"/>

          <div className="PolicyDivs pt-[40px]">
            <div className="policyitems">
              <PolText Textheading="1. Introduction"/>
              <PolPara Paragraphs="These Terms of Use (these “Terms”) govern your access to and use of certain
                products, services and properties made available by Project Merlin, Inc. (“Project
                Merlin,” “we,” “us” or “our”). (As used herein, the term “you” (including any variant)
                refers to each individual who enters into these Terms on such individual’s own
                behalf or any entity on behalf of which an individual enters into these Terms.) Our
                products, services and properties include, without limitation, the minting of
                certain digital assets; our online and/or mobile services, including the website
                through which these Terms are made available (the “Website”), and software
                provided on or in connection with those services (collectively, the “Service”).
                Certain features of the Service may be subject to additional guidelines, terms, or
                rules (“Supplemental Terms”), which will be displayed in connection with such
                features. These Terms and all such Supplemental Terms, which are incorporated
                by reference, are collectively referred to as the “Agreement”. If these Terms are
                inconsistent with any Supplemental Terms, the Supplemental Terms shall control
                solely with respect to such services"/>
                 <br />

              <PolPara Paragraphs="Except as described below, you must be at least 18 years of age, or the age of legal
                majority in your jurisdiction (if different than 18), to register for our services. If you
                are entering into these Terms of Use or Links Terms on behalf of an individual
                under the age of 18, you represent, warrant and covenant that you have the
                authority to do so on behalf of such individual and anyone else who has legal
                rights regarding such individual. You agree to these Terms of Use or Links Terms,
                on your own behalf, as well as on behalf of such minor individual and you agree to
                be responsible for the acts and omissions of such minor individual. You agree to
                indemnify and hold harmless Links from and against any damages or claims
                arising out of or relating to (i) such acts and/or omissions and (ii) any actual or
                alleged breach of the terms of this paragraph."/>
                 <br />

              <PolPara Paragraphs="PROJECT MERLIN OFFERS CERTAIN NON-FUNGIBLE TOKENS FOR USERS TO
                MINT. WE ARE NOT A BROKER, FINANCIAL INSTITUTION, OR CREDITOR. YOU
                AGREE THAT PROJECT MERLIN SHALL NOT BE A PARTY TO OR HAVE ANY
                RESPONSIBILITY OR LIABILITY FOR, ARISING OUT OF, RELATING TO,
                ASSOCIATED WITH OR RESULTING FROM ANY DISPUTES BETWEEN YOU AND
                ANY THIRD PARTY WITH RESPECT TO THE OFFERING, PURCHASE, SALE, USE,
                MISUSE, PROVISION OR FAILURE TO PROVIDE ANY NFT."/>
                 <br />

              <PolPara Paragraphs="PLEASE READ SECTION 17 OF THIS AGREEMENT CAREFULLY, AS IT CONTAINS AN
                ARBITRATION AGREEMENT WHICH WILL, WITH LIMITED EXCEPTIONS, REQUIRE
                DISPUTES BETWEEN US TO BE SUBMITTED TO BINDING AND FINAL
                ARBITRATION. UNLESS YOU OPT OUT OF THE ARBITRATION AGREEMENT: (1)
                YOU WILL ONLY BE PERMITTED TO PURSUE CLAIMS AND SEEK RELIEF AGAINST
                US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY
                CLASS OR REPRESENTATIVE ACTION OR PROCEEDING; AND (2) YOU ARE
                AGREEING TO MANDATORY INDIVIDUAL ARBITRATION FOR THE RESOLUTION
                OF DISPUTES AND WAIVING YOUR RIGHT TO A JURY TRIAL ON YOUR CLAIMS."/>
                <br />

              <PolPara Paragraphs="PLEASE BE AWARE THAT SECTION 6 OF THIS AGREEMENT, BELOW, CONTAINS
                YOUR OPT-IN CONSENT TO RECEIVE COMMUNICATIONS FROM US, INCLUDING
                VIA EMAIL"/>

                <br />

              <PolPara Paragraphs="THIS AGREEMENT IS IMPORTANT AND AFFECTS YOUR LEGAL RIGHTS, SO
                PLEASE READ CAREFULLY. BY CLICKING ON ANY “I ACCEPT” BUTTON,
                PURCHASING OR OFFERING TO PURCHASE NFTS THROUGH THE SERVICE, "/>

                <br />

              <PolPara Paragraphs="Please refer to our Privacy Policy for information about how we collect, use and
                share personal information about you. By submitting data through the Service,
                you expressly consent to the collection, use and disclosure of your personal data
                in accordance with the Privacy Policy."/>
                <br />

              <PolPara Paragraphs="Project Merlin reserves the right to change or modify this Agreement at any time
                and in our sole discretion. If we make changes to this Agreement, we will provide
                notice of such changes, such as by sending an email notification, providing notice
                through the Service or updating the “Last Updated” date at the beginning of this
                Agreement. By continuing to access or use the Service at any point after such
                update, you confirm your acceptance of the revised Terms and all of the terms
                incorporated therein by reference. We encourage you to review this Agreement
                frequently to ensure that you understand the terms and conditions that apply
                when you access or use the Service. If you do not agree to the revised Terms, you
                may not access or use the Service."/>

            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="2. Our Service"/>
              <PolPara Paragraphs="a. The Service is a software application made available by Project Merlin to,
                among other things, enable users of the Service (“Users”) to mint unique nonfungible tokens (collectively, “NFTs”), implemented on the Ethereum blockchain
                (the “Blockchain Platform”) using smart contracts. You may only participate in the
                minting of any NFT by linking an electronic wallet that allows you to purchase,
                store, and engage in transactions using cryptocurrency and NFTs (each, a “Digital Wallet”) on supported bridge extensions. Before minting an NFT, you must
                connect and unlock your Digital Wallet through the Service. Once you submit an
                order to mint an NFT, your order is passed on through the Digital Wallet to the
                applicable bridge extension, which completes the transaction on the Blockchain
                Platform on your behalf."/>
                <br />
              <PolPara Paragraphs="b. Project Merlin may in its sole discretion elect to provide support services to
                Users, but Project Merlin has no obligation to do so."/>
                <br />
              <PolPara Paragraphs="c. ALL TRANSACTIONS INITIATED THROUGH OUR SERVICE ARE EFFECTED BY
                THIRD-PARTY DIGITAL WALLET EXTENSIONS. BY USING OUR SERVICES YOU
                AGREE THAT SUCH TRANSACTIONS ARE GOVERNED BY THE TERMS OF SERVICE
                AND PRIVACY POLICY FOR THE APPLICABLE EXTENSIONS."/>
                <br />
            </div>

            <div className="policyitems">
              <PolText Textheading="3. User Representations and Warranties"/>
              <PolPara Paragraphs="a. You must be eighteen (18) years old to use the Service. By using the Service, you
                agree to (i) provide accurate, current, and complete information about yourself,
                (ii) maintain and promptly update from time to time as necessary such
                information, (iii) maintain the security of your Digital Wallet and accept all risks of
                unauthorized access to your Digital Wallet and to the information you provide to
                us, and (iv) immediately notify us if you discover or otherwise suspect any security
                breaches related to your use of the Service."/>
                <br />
              <PolPara Paragraphs="b. You agree that you will not:"/>
              <br />
              <ul className='policyUl'>
                <li> buy, sell, rent, or lease access to the Service without our written permission;</li>
                <li>log in or try to log in to access the Service through unauthorized third party
                  applications or clients.</li>
              </ul>
              <br />
              <PolPara Paragraphs="c. Project Merlin may require you to provide additional information and
                documents from time to time, including without limitation at the request of any
                competent authority or in order to help Project Merlin comply with applicable
                law, regulation, or policy, including laws related to anti-laundering (legalization) of
                incomes obtained by criminal means, or for counteracting financing of terrorism.
                Project Merlin may also require you to provide additional information and
                documents in cases where it has reasons to believe that: (i) your Digital Wallet or
                other access to the Service is being used for money laundering or for any other
                illegal activity; (ii) you have concealed or reported false identification information
                and other details; or (iii) transactions effected via your Digital Wallet were effected
                in breach of this Agreement. In such cases, Project Merlin, in its sole discretion,
                may pause or cancel your transactions until such requested additional
                information and documents have been reviewed by Project Merlin and accepted
                as satisfying the requirements of applicable law, regulation, or policy. If you do not
                provide complete and accurate information and documents in response to such a
                request, Project Merlin may refuse to provide any NFT, Content (as defined
                below), product, service and/or further access to the Service to you."/>

              <PolPara Paragraphs="d. When you use the Service, you hereby represent and warrant, to and for the
                benefit of Project Merlin, its affiliates, and its and their respective representatives,
                as follows: You are sophisticated, experienced and knowledgeable regarding
                NFTs. Additionally, you have conducted an independent investigation of the
                Service and the matters contemplated by these Terms, have formed your own
                independent judgment regarding the benefits and risks of and necessary and
                desirable practices regarding the foregoing, and, in making the determination to
                use the Service, you have relied solely on the results of such investigation and
                such independent judgement. Without limiting the generality of the foregoing,
                you understand, acknowledge and agree that the legal requirements pertaining
                to blockchain technologies and digital assets generally, including the NFTs, are
                uncertain, and you have conducted an independent investigation of such
                potentially applicable legal requirements and the resulting risks and
                uncertainties, including the risk that one or more governmental entities or other
                persons may assert that any digital assets or cryptographic tokens (including the
                NFTs) may constitute securities under applicable legal requirements. You hereby
                irrevocably disclaim and disavow reliance upon any statements or
                representations made by or on behalf of, or information made available by,
                Project Merlin, in determining to enter into this Agreement, mint any NFT, or
                otherwise use the Service."/>
                <br />

              <PolPara Paragraphs="e. You must provide all equipment and software necessary to connect to the
                Service. You are solely responsible for any fees, including Internet connection or
                mobile fees, that you incur when accessing the Service."/>
                <br />
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="4. Minting an NFT"/>
              <PolPara Paragraphs="a. By minting an NFT, you agree to comply with any terms, including licenses or
                payment rights that are embedded within or otherwise included with any NFT
                that you purchase. Project Merlin does not guarantee that NFTs will be
                transferable to any other platform"/>
                <br />
              <PolPara Paragraphs="b. Your ability to mint an NFT may be subject to certain additional eligibility
                requirements, as determined by us in our sole discretion and such requirements
                may be indicated on the Service."/>
                <br />
              <PolPara Paragraphs="c. Project Merlin may set limits on or other terms regarding the sale of NFTs
                comprising Project Merlin’s Content, including, without limitation, any fee
                payable in connection with any subsequent sale of an NFT, whether or not such
                sale takes place on or through the Service (each such sale, a “Secondary Sale,” and
                such fee, a “Secondary Sale Fee”), and Project Merlin will display such terms at
                point of sale or otherwise within the Service (the “NFT Terms,” as set forth above)."/>
                <br />
              <PolPara Paragraphs="d. Project Merlin is not and shall not be a party to any transaction or dispute
                between any initial minter of an NFT and any subsequent owner of such NFT,
                whether arising from any rights granted in that NFT or otherwise, unless
                otherwise set forth in connection with such NFT."/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="5. Pricing and Fees; Payments"/>
              <PolPara Paragraphs="a. All pricing and payment terms for NFTs are as indicated at point of sale or
                otherwise on the Service, and any payment obligations you incur are binding at
                the time of minting. Unless otherwise set forth on the applicable Service, you are
                solely responsible for any gas fees or other transaction fees in connection with
                any NFT that you mint. You may not substitute any other currency, whether
                cryptocurrency or fiat currency, for any currency in which you have contracted to
                pay at the time of purchase. For clarity, no fluctuation in the value of any currency,
                whether cryptocurrency or otherwise, shall impact or excuse your obligations
                with respect to any obligation to pay any amounts."/>
              <PolPara Paragraphs="b. When you mint an NFT, you agree that you have read, understand, and agree
                to be bound by any terms and conditions applicable to the Secondary Sale of that
                NFT, including any Secondary Sale Fee (regardless of whether such Secondary
                Sale Fee is enforced or supported by the third-party platform or marketplace that
                facilitates a Secondary Sale). You further agree that, if you sell an NFT, you will
                bind the purchaser of the NFT to such Secondary Sale terms and conditions."/>
              <PolPara Paragraphs="c. Payment processing for each NFT is provided by one or more third-party
                service providers, including without limitation digital wallet bridge extensions
                (each, a “Payment Processor”). Project Merlin may add or change any Payment
                Processor at any time. Such services may be subject to additional terms or
                conditions required by the applicable Payment Processor. If you do not have the
                right to use a particular Payment Processor, you may not be able to access and
                use the Services."/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="6. Consent to Electronic Communication"/>
              <PolPara Paragraphs="By contacting Project Merlin via email, signing up to be white-listed for a sale of
                NFTs, or by using the Service, you consent to receive electronic communications
                from Project Merlin (e.g., via email, or by posting notices to the Service). These
                communications may include, but are not limited to: notices about your use of
                the Service, updates concerning new and existing features on the Service,
                communications concerning promotions run by us or our third-party partners,
                and other news concerning Project Merlin and industry developments. For
                contractual purposes, you (a) consent to receive communications from Project
                Merlin in an electronic form; and (b) agree that all terms and conditions,
                agreements, notices, disclosures, and other communications that Project Merlin
                provides to you electronically satisfy any legal requirement that such
                communications would satisfy if it were to be in writing. The foregoing does not
                affect your statutory rights, including but not limited to the Electronic Signatures
                in Global and National Commerce Act at 15 U.S.C. §7001 et seq. (“E-Sign”). You
                should maintain copies of electronic communications from us by printing a paper
                copy or saving an electronic copy."/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="7. Ownership"/>
              <PolPara Paragraphs="Unless otherwise indicated in writing by us, the Service and all content and other
                materials contained therein, including, without limitation, the Project Merlin logo
                and all designs, text, graphics, pictures, information, data, software, sound files,
                other files and the selection and arrangement thereof (collectively, “Content”) are
                the proprietary property of Project Merlin or our affiliates or licensors, as
                applicable. The Project Merlin logo and any Project Merlin product or service
                names, logos or slogans that may appear on the Service are trademarks of Project
                Merlin or our affiliates and may not be copied, imitated or used, in whole or in
                part, without our prior written permission. You may not use any metatags or
                other “hidden text” utilizing “Project Merlin,” or any other name, trademark or
                product or service name of Project Merlin or our affiliates without our prior
                written permission. In addition, the look and feel of the Service and Content,
                including, without limitation, all page headers, custom graphics, button icons and
                scripts, constitute the service mark, trademark or trade dress of Project Merlin
                and may not be copied, imitated or used, in whole or in part, without our prior
                written permission. All other trademarks, registered trademarks, product names
                and other names or logos mentioned on the Service are the property of their
                respective owners and may not be copied, imitated or used, in whole or in part,
                without the permission of the applicable trademark holder. Reference to any
                products, services, processes or other information by name, trademark,
                manufacturer, supplier or otherwise does not constitute or imply endorsement,
                sponsorship or recommendation by Project Merlin."/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="8. License to Our Service and Content"/>
              <PolPara Paragraphs="a. You are hereby granted a limited, revocable, nonexclusive, nontransferable,
                  non-assignable, non-sublicensable, “as-is” license to access and use the Service
                  and Content for your own personal, non-commercial use; provided, however, that
                  such license is subject to this Agreement and does not include any right to (i) sell,
                  resell, or use commercially the Service or Content, (ii) distribute, publicly perform,
                  or publicly display any Content, (iii) modify or otherwise make any derivative uses
                  of the Service or Content, or any portion thereof, (iv) use any data mining, robots,
                  or similar data gathering or extraction methods, (v) download (other than page
                  caching) any portion of the Service or Content, except as expressly permitted by
                  us, and (vi) use the Service or Content other than for their intended purposes. This
                  license is subject to your compliance with the Acceptable Use Policy set forth in
                  Section 10 below"/>
                <PolPara Paragraphs="b. You are granted a limited, nonexclusive, nontransferable right to create a text
                  hyperlink to the Service for noncommercial purposes, provided that such link
                  does not portray Project Merlin or our affiliates or any of our Services, Content,
                  products or services in a false, misleading, derogatory or otherwise defamatory
                  manner, and provided further that the linking site does not contain any adult or
                  illegal material or any material that is offensive, harassing or otherwise
                  objectionable in Project Merlin’s sole discretion. This limited right may be revoked
                  at any time. You may not use a logo or other proprietary graphic of Project Merlin
                  to link to the Service or Content without our express written permission. Further,
                  you may not use, frame or utilize framing techniques to enclose any Project
                  Merlin trademark, logo or other proprietary information, including the images
                  found on the Service, the content of any text or the layout or design of any page,
                  or form contained on a page, on the Service without our express written consent."/>
                <PolPara Paragraphs="c. Project Merlin may from time-to-time change or discontinue any or all aspects
                  or features of the Service, including by (i) altering the smart contracts which are
                  included in the Blockchain Platform pursuant to upgrades, forks, security incident
                  responses or chain migrations, (ii) deactivating or deleting Content that Project
                  Merlin in its sole discretion determines has been abandoned; or (iii) repossessing
                  any NFTs that Project Merlin in its sole discretion determines have been
                  abandoned. In such events, you may no longer be able to access, interact with or,
                  read the data from the Service."/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="9. Third-Party Services; Third-Party Terms"/>
              <PolPara Paragraphs="The Service may contain links to third-party properties (“Third-Party Properties”)
                and applications (“Third-Party Applications”). When you click on a link to a ThirdParty Property or Third-Party Application, such as a bridge extension, you are
                subject to the terms and conditions (including privacy policies) of such other
                property or application. Such Third-Party Properties and Third-Party Applications
                are not under the control of Project Merlin. Project Merlin is not responsible for
                any Third-Party Properties or Third-Party Applications. Project Merlin provides
                links to these Third-Party Properties and Third-Party Applications only as a
                convenience and does not review, approve, monitor, endorse, warrant, or make
                any representations with respect to Third-Party Properties or Third-Party
                Applications, or their products or services. You use all links in Third-Party
                Properties, and Third-Party Applications at your own risk. When you leave our
                Service, our Terms and policies no longer govern. You should review all applicable
                agreements and policies, including privacy and data gathering practices, of any
                Third-Party Properties or Third-Party Applications, and should make whatever
                investigation you feel necessary or appropriate before proceeding with any
                transaction with any third party."/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="10. Acceptable Use Policy"/>
              <PolPara Paragraphs="You agree that you are solely responsible for your conduct while participating in
                the minting, purchase or sale of NFTs or otherwise accessing or using the Service.
                You agree that you will abide by this Agreement and will not:"/>
                <br />
              <PolPara Paragraphs="a. Provide false or misleading information to Project Merlin;"/>
              <PolPara Paragraphs="b. Use or attempt to use another User’s linked Digital Wallet without
                authorization from such User and Project Merlin;"/>
              <PolPara Paragraphs="c. Pose as another person or entity;"/>
              <PolPara Paragraphs="d. Use the Service in any manner that could interfere with, disrupt, negatively
                affect or inhibit other Users from fully enjoying the Service, or that could damage,
                disable, overburden or impair the functioning of the Service in any manner;"/>
              <PolPara Paragraphs="e. Develop, utilize, or disseminate any software, or interact with any API in any
                manner, that could damage, harm, or impair the Service;"/>
              <PolPara Paragraphs="f. Reverse engineer any aspect of the Service, or do anything that might discover
                source code or bypass or circumvent measures employed to prevent or limit
                access to any service, area, or code of the Service;"/>
              <PolPara Paragraphs="g. Attempt to circumvent any content-filtering techniques we employ, or attempt
                to access any feature or area of the Service that you are not authorized to access;"/>
              <PolPara Paragraphs="h. Use any robot, spider, crawler, scraper, script, browser extension, offline reader,
                or other automated means or interface not authorized by us to access the Service,
                extract data or otherwise interfere with or modify the rendering of Service pages
                or functionality;"/>
              <PolPara Paragraphs="i. Collect or harvest data from our Service that would allow you to contact
                individuals, companies, or other persons or entities, or use any such data to
                contact such entities;"/>
              <PolPara Paragraphs="j. Use data collected from our Service for any direct marketing activity (including
                without limitation, email marketing, SMS marketing, telemarketing, and direct
                marketing);"/>
              <PolPara Paragraphs="k. Bypass or ignore instructions that control all automated access to the Service;"/>
              <PolPara Paragraphs="l. Use the Service for any illegal or unauthorized purpose, or engage in, encourage,
                or promote any activity that violates any applicable law or this Agreement;"/>
              <PolPara Paragraphs="m. Use the Blockchain Platform to carry out any illegal activities in connection
                with or in any way related to your access to and use of the Service, including but
                not limited to money laundering, terrorist financing or deliberately engaging in
                activities designed to adversely affect the performance of the Blockchain
                Platform, or the Service;"/>
              <PolPara Paragraphs="n. Engage in or knowingly facilitate any “front-running,” “wash trading,” “pump
                and dump trading,” “ramping,” “cornering” or fraudulent, deceptive or
                manipulative trading activities, including:"/>
                <br />

                <ul className='policyUl'>
                  <li> trading an NFT at successively lower or higher prices for the purpose of
                      creating or inducing a false, misleading or artificial appearance of activity in
                      such NFT, unduly or improperly influencing the market price for such NFT
                      trading on the Service or establishing a price which does not reflect the
                      true state of the market in such NFT;</li>
                  <li>for the purpose of creating or inducing a false or misleading appearance of
                      activity in an NFT or creating or inducing a false or misleading appearance
                      with respect to the market in an NFT: (A) executing or causing the
                      execution of any transaction in an NFT which involves no material change
                      in the beneficial ownership thereof; or (B) entering any order for the
                      purchase or sale of an NFT with the knowledge that an order of
                      substantially the same size, and at substantially the same price, for the sale
                      of such NFT, has been or will be entered by or for the same or different
                      parties; or</li>
                  <li>participating in, facilitating, assisting or knowingly transacting with any
                      pool, syndicate or joint account organized for the purpose of unfairly or
                      deceptively influencing the market price of an NFT.
                      </li>
                </ul>

                <br />

            </div>

            <div className="policyitems">
              <PolText Textheading="11. Investigations"/>
              <PolPara Paragraphs="If Project Merlin becomes aware of any possible violations by you of this
                Agreement, Project Merlin reserves the right to investigate such violations. If, as a
                result of the investigation, Project Merlin believes that criminal activity may have
                occurred, Project Merlin reserves the right to refer the matter to, and to cooperate
                with, any and all applicable legal authorities. Project Merlin is entitled, except to
                the extent prohibited by applicable law, to disclose any information or materials
                on or in the Service, including your Content, in Project Merlin’s possession in
                connection with your use of the Service, to (i) comply with applicable laws, legal
                process or governmental request; (ii) enforce this Agreement, (iii) respond to any
                claims that your Content violates the rights of third parties, (iv) respond to your
                requests for customer service, or (v) protect the rights, property or personal safety
                of Project Merlin, its Users, or the public, and all law enforcement or other
                government officials, as Project Merlin in its sole discretion believes to be
                necessary or appropriate. By agreeing to this Agreement, you hereby provide your
                irrevocable consent to such monitoring. You acknowledge and agree that you
                have no expectation of privacy concerning your use of the Service, including
                without limitation text, voice, or video communications."/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="12. Release"/>
              <PolPara Paragraphs="You hereby release and forever discharge Project Merlin and our officers,
                employees, agents, successors, and assigns (the “Project Merlin Entities”) from,
                and hereby waive and relinquish, each and every past, present and future dispute,
                claim, controversy, demand, right, obligation, liability, action and cause of action
                of every kind and nature (including personal injuries, death, and property
                damage), that has arisen or arises directly or indirectly out of, or that relates
                directly or indirectly to, the Service (including any interactions with, or act or
                omission of, other Users of the Service or any Third-Party Properties). IF YOU ARE
                A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE
                SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: “A
                GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR OR
                RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER
                FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM
                OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH
                THE DEBTOR OR RELEASED PARTY.”"/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="13. Assumption of Risk Related to NFTs"/>
              <PolPara Paragraphs="You acknowledge and agree that:"/>
              <br />
              <PolPara Paragraphs="a. The prices of digital assets are extremely volatile. Fluctuations in the price of
                other digital assets could materially and adversely affect the NFTs, which may also
                be subject to significant price volatility. We cannot and do not guarantee that any
                purchasers of NFTs will not lose money."/>
              <PolPara Paragraphs="b. You are solely responsible for determining what, if any, taxes apply to your
                transactions involving NFTs. Neither Project Merlin nor any other Project Merlin
                Entity is responsible for determining the taxes that may apply to transactions
                involving NFTs."/>
              <PolPara Paragraphs="c. NFTs exist and can be transferred only by virtue of the ownership record
                maintained on the blockchain supporting such NFTs."/>
              <PolPara Paragraphs="d. There are risks associated with using digital currency and digital assets,
                including but not limited to, the risk of hardware, software and Internet
                connections, the risk of malicious software introduction, the risk that third parties
                may obtain unauthorized access to your information, and the risk of purchasing
                (i) counterfeit or mislabeled assets, (ii) assets that are vulnerable to metadata
                decay, (iii) assets on smart contracts with bugs, and (iv) assets that may become
                untransferable"/>
              <PolPara Paragraphs="e. Upgrades to the Blockchain Platform, a hard fork in the Blockchain Platform, a
                failure or cessation of the Blockchain Platform, or a change in how transactions
                are confirmed on the Blockchain Platform may have unintended, adverse effects
                on all blockchains using such technologies, including without limitation your
                transactions involving NFTs purchased on Project Merlin."/>
              <PolPara Paragraphs="f. The legal and regulatory regime governing blockchain technologies,
                cryptocurrencies, and tokens is evolving, and new regulations or policies may
                materially adversely affect the development of the Service and the NFTs."/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="14. Indemnification"/>
              <PolPara Paragraphs="To the fullest extent permitted by applicable law, you agree to indemnify, defend,
                and hold harmless Project Merlin and the Project Merlin Entities from and against
                all actual or alleged third party claims, damages, awards, judgments, losses,
                liabilities, obligations, penalties, interest, fees, expenses (including, without
                limitation, attorneys’ fees and expenses) and costs (including, without limitation,
                court costs, costs of settlement, and costs of or associated with pursuing
                indemnification and insurance), of every kind and nature whatsoever arising out
                of or related to this Agreement or your use of the Service, whether known or
                unknown, foreseen or unforeseen, matured or unmatured, or suspected or
                unsuspected, in law or equity, whether in tort, contract or otherwise (collectively,
                “Claims”), including, but not limited to, damages to property or personal injury,
                that are caused by, arise out of or are related to (a) your use or misuse of the
                Service, Content or NFTs, including, without limitation, any act or omission
                involving any third party in connection with the listing, buying, selling, or trading
                of any NFTs hereunder; (b) any feedback you provide; (c) your violation of this
                Agreement; (d) your violation of the rights of any third party, including another
                User; (e) any breach or non-performance of any covenant or agreement made by
                you; (f) your listing, buying, selling, or trading of any NFTs; or (g) any off-chain
                benefits (including the furnishing, or any failure to furnish, or any acts or
                omissions of or attributable to you or any third party in respect of the same). You
                agree to promptly notify Project Merlin of any third-party Claims and cooperate
                with Project Merlin Entities in defending such Claims. You further agree that
                Project Merlin Entities shall have control of the defense or settlement of any thirdparty Claims. THIS INDEMNITY IS IN ADDITION TO, AND NOT IN LIEU OF, ANY
                OTHER INDEMNITIES SET FORTH IN A SEPARATE WRITTEN AGREEMENT
                BETWEEN YOU AND PROJECT MERLIN"/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="15. Disclaimers"/>
              <PolPara Paragraphs="THE SERVICE, CONTENT CONTAINED THEREIN, AND NFTS LISTED THEREIN ARE
                PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES
                OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED. PROJECT MERLIN
                (AND ITS SUPPLIERS) MAKE NO WARRANTY THAT THE SERVICE: (A) WILL MEET
                YOUR REQUIREMENTS; (B) WILL BE AVAILABLE ON AN UNINTERRUPTED,
                TIMELY, SECURE, OR ERROR-FREE BASIS; OR (C) WILL BE ACCURATE, RELIABLE,
                COMPLETE, LEGAL, OR SAFE. PROJECT MERLIN DISCLAIMS ALL OTHER
                WARRANTIES OR CONDITIONS, EXPRESS OR IMPLIED, INCLUDING, WITHOUT
                LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT AS TO
                THE SERVICE OR ANY CONTENT CONTAINED THEREIN. PROJECT MERLIN DOES
                NOT REPRESENT OR WARRANT THAT CONTENT ON THE SERVICE IS ACCURATE,
                COMPLETE, RELIABLE, CURRENT, OR ERROR-FREE. WE WILL NOT BE LIABLE
                FOR ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN RELIANCE
                ON MATERIAL OR INFORMATION, CONTAINED ON THE SERVICE. WHILE
                PROJECT MERLIN ATTEMPTS TO MAKE YOUR ACCESS TO AND USE OF THE
                SERVICE AND CONTENT SAFE, PROJECT MERLIN CANNOT AND DOES NOT
                REPRESENT OR WARRANT THAT THE SERVICE, CONTENT, OR ANY NFTS LISTED
                ON OUR SERVICE OR OUR SERVERS ARE FREE OF VIRUSES OR OTHER
                HARMFUL COMPONENTS. WE CANNOT GUARANTEE THE SECURITY OF ANY
                DATA THAT YOU DISCLOSE ONLINE. YOU ACCEPT THE INHERENT SECURITY
                RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE
                INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR ANY BREACH OF
                SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE."/>
              <PolPara Paragraphs="WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU
                SUSTAIN AS A RESULT OF YOUR USE OF THE SERVICE. WE TAKE NO
                RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO YOU FOR, ANY USE OF
                NFTS, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS
                ARISING FROM: (I) USER ERROR SUCH AS FORGOTTEN PASSWORDS,
                INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED ADDRESSES; (II)
                SERVER FAILURE OR DATA LOSS; (III) CORRUPTED DIGITAL WALLET FILES; (IV)
                UNAUTHORIZED ACCESS TO APPLICATIONS; OR (V) ANY UNAUTHORIZED THIRD
                PARTY ACTIVITIES, INCLUDING WITHOUT LIMITATION THE USE OF VIRUSES,
                PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST THE
                SERVICE OR NFTS."/>
              <PolPara Paragraphs="NFTS ARE INTANGIBLE DIGITAL ASSETS. THEY EXIST ONLY BY VIRTUE OF THE
                OWNERSHIP RECORD MAINTAINED IN THE BLOCKCHAIN NETWORK. ANY
                TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY UNIQUE DIGITAL ASSET
                OCCURS ON THE DECENTRALIZED LEDGER WITHIN THE BLOCKCHAIN
                PLATFORM. WE DO NOT GUARANTEE THAT PROJECT MERLIN OR ANY PROJECT
                MERLIN ENTITY CAN EFFECT THE TRANSFER OF TITLE OR RIGHT IN ANY NFTS."/>
              <PolPara Paragraphs="WE CANNOT AND DO NOT GUARANTEE THAT ANY NFT WILL HAVE OR RETAIN
                ANY INHERENT VALUE, OR THAT YOU WILL BE ABLE TO SELL OR RESELL ANY
                NFT ACQUIRED THROUGH THE SERVICE."/>
              <PolPara Paragraphs="Project Merlin is not responsible for any losses or harms sustained by you due to
                vulnerability or any kind of failure, abnormal behavior of software (e.g., smart
                contract), blockchains, or any other features of or inherent to the NFTs. Project
                Merlin is not responsible for casualties due to developers’ or representatives’ delay
                or failure to report any issues with any blockchain supporting NFTs, including
                without limitation forks, technical node issues, or any other issues that result in
                losses of any sort."/>
              <PolPara Paragraphs="Nothing in this Agreement shall exclude or limit liability of either party for fraud,
                death or bodily injury caused by negligence, violation of laws, or any other activity
                that cannot be limited or excluded under the laws applicable to your jurisdiction.
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
                WARRANTIES IN CONTRACTS WITH CONSUMERS, SO THE ABOVE EXCLUSION
                MAY NOT APPLY TO YOU."/>
            </div>
            <br />

            <div className="policyitems">
              <PolText Textheading="16. Limitation of Liability"/>
              <PolPara Paragraphs="TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL PROJECT
                MERLIN BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR
                ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR
                PUNITIVE DAMAGES ARISING FROM THIS AGREEMENT, THE SERVICE, ANY NFTS,
                OR FOR ANY DAMAGES RELATED TO LOSS OF REVENUE, LOSS OF PROFITS,
                LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF
                GOODWILL, OR LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING
                NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE
                AND EVEN IF PROJECT MERLIN HAS BEEN ADVISED OF THE POSSIBILITY OF
                SUCH DAMAGES. ACCESS TO, AND USE OF, THE SERVICE IS UNDERTAKEN BY
                YOU AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY
                RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE
                DEVICE OR LOSS OF DATA RESULTING THEREFROM."/>
              <PolPara Paragraphs="NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN NO
                EVENT SHALL THE MAXIMUM AGGREGATE LIABILITY OF PROJECT MERLIN
                ARISING OUT OF OR IN ANY WAY RELATED TO THIS AGREEMENT, YOUR ACCESS
                TO AND USE OF THE SERVICE, OR ANY NFTS MINTED, PURCHASED, OR SOLD
                THROUGH THE SERVICE EXCEED THE GREATER OF (A) $100 OR (B) THE AMOUNT
                RETAINED BY PROJECT MERLIN IN THE TRANSACTION OR INCIDENT THAT IS
                THE SUBJECT OF THE CLAIM."/>
              <PolPara Paragraphs="Some jurisdictions do not allow the exclusion or limitation of incidental or
                consequential damages, so the above limitation or exclusion may not apply to
                you."/>

            </div>
            <br />
            <div className="policyitems">
              <PolText Textheading="17. Dispute Resolution"/>
              <PolPara Paragraphs="Please read carefully the following arbitration agreement (“Arbitration
                Agreement”). It requires you to arbitrate disputes with Project Merlin and limits
                the manner in which you can seek relief from us."/>
            </div>
          </div>
        </div>
      </section>
    </div>
    <HomeFooter />
    </>

  )
}

export default TermsConditions