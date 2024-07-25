"use client";
import Head from "next/head";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import styles from "./page.module.css";
import ProjectBanner from "@/components/projectBanner";
import caseData from "../caseData";
import { asrm } from "../caseData";

export default function Project() {
  return (
    <>
      <Nav isProjectPage={true} isAboutPage={true} />
      <div className={styles.container}>
        <div className={styles.sectionContainer} id={styles.banner}>
          <div className={`${styles.subsection2} ${styles.textFlexEnd}`}>
            <ProjectBanner
              key={asrm.id}
              title={asrm.title}
              description={asrm.description}
              projectType={asrm.projectType}
              category={asrm.category}
              timeline={asrm.timeline}
              tools={asrm.tools}
            />
          </div>
          <div
            className={`${styles.subsection2} ${styles.subsection2Image}`}
            id={styles.bannerImage}
          >
            <img
              src="./images/projects/asrm/onboarding.png"
              alt="ASRM onboarding"
            />
          </div>
        </div>
        <div className={styles.sectionContainer} id={styles.intro}>
          <div className={`${styles.subsection2} ${styles.textFlexStart}`}>
            <div className={styles.textCol}>
              <span>The Problem</span>
              <p>
                ASRM, a community of respiratory medicine professionals in
                Kazakhstan, faced the challenge of creating a digital platform
                to enhance their mission. Without an online presence, healthcare
                professionals struggled to discover relevant medical events and
                lacked efficient ways to network and collaborate within the
                community.
              </p>
            </div>
          </div>
          <div
            className={`${styles.subsection2} ${styles.subsection2Image}`}
            id={styles.introImage}
          >
            <img
              src="./images/projects/asrm/index-page.png"
              alt="Tranzitka visuals"
            />
          </div>
          <div className={`${styles.subsection2} ${styles.textFlexEnd}`}>
            <div className={styles.textCol}>
              <span>The Solution</span>
              <p>
                I have designed a user-friendly app for ASRM, enabling
                healthcare professionals to easily find and register for medical
                events and connect with peers.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer} id={styles.visuals}>
          <div className={`${styles.subsection2}§`} id={styles.visualsImage}>
            <img
              src="./images/projects/asrm/visuals.png"
              alt="Tranzitka visuals"
            />
          </div>
        </div>
        <div className={styles.darkBackground}>
          <div className={styles.sectionContainer} id={styles.products}>
            <div className={`${styles.subsection2} ${styles.textFlexEnd}`}>
              <div className={styles.textCol}>
                <span>Registration</span>
                <p>
                  Condensing registration to four simple steps with only
                  essential questions ensures faster completion, enhancing user
                  satisfaction and fostering a positive platform perception.
                </p>
              </div>
            </div>
            <div
              className={`${styles.subsection2} ${styles.subsection2Image}`}
              id={styles.productsImage}
            >
              <img
                src="./images/projects/asrm/registration-page.png"
                alt="Tranzitka products"
              />
            </div>
          </div>
          <div className={styles.sectionContainer} id={styles.products}>
            <div className={`${styles.subsection2} ${styles.textFlexEnd}`}>
              <div className={styles.textCol}>
                <p>
                  The decision to include these specific filter options was
                  influenced by valuable input gathered from user interviews.
                </p>
              </div>
            </div>
            <div
              className={`${styles.subsection2} ${styles.subsection2Image}`}
              id={styles.introImage}
            >
              <img
                src="./images/projects/asrm/home-page.png"
                alt="Tranzitka products"
              />
            </div>
            <div className={`${styles.subsection2} ${styles.textFlexEnd}`}>
              <div className={styles.textCol}>
                <span>Event Page</span>
                <p>
                  The event page was designed for user convenience, ensuring
                  that important event details are easily accessible and
                  prominently displayed. Users can save the event for later
                  consideration or promptly RSVP, simplifying the
                  decision-making process and encouraging user engagement.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.sectionContainer} id={styles.products}>
            <div className={`${styles.subsection2} ${styles.textFlexCenter}`}>
              <div className={styles.textCol}>
                <span>Track your events with ease</span>
                <p>
                  Positioned at the top half, the calendar provides a visual
                  timeline of events, complemented by a list of events at the
                  bottom, offering users a dual navigation approach for a
                  comprehensive view of their scheduled activities.
                </p>
                <p>
                  This layout caters to different user preferences, ensuring
                  accessibility and a seamless experience in tracking events.
                </p>
              </div>
            </div>
            <div
              className={`${styles.subsection2} ${styles.subsection2Image}`}
              id={styles.introImage}
            >
              <img
                src="./images/projects/asrm/events-page.png"
                alt="Tranzitka products"
              />
            </div>
            <div className={`${styles.subsection2} ${styles.textFlexCenter}`}>
              <div className={styles.textCol}>
                <p>
                  When a user clicks on an event box, a sliding window smoothly
                  reveals essential event details. This design choice aims to
                  provide a quick overview without disrupting the overall user
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.sectionContainer} id={styles.products}>
            <div className={`${styles.subsection2} ${styles.textFlexSpace}`}>
              <div className={styles.textCol}>
                <span>be in control of your data</span>
                <p>
                  The profile page is designed to prioritize user privacy,
                  control, and an enhanced event experience.
                </p>
              </div>
              <div className={styles.textCol}>
                <p>
                  Featuring a submenu with three distinct sections, the design
                  provides users with structured options to share information
                  based on their comfort and preferences.
                </p>
              </div>
            </div>
            <div
              className={`${styles.subsection2} ${styles.subsection2Image}`}
              id={styles.introImage}
            >
              <img
                src="./images/projects/asrm/profile-page.png"
                alt="Tranzitka products"
              />
            </div>
            <div className={`${styles.subsection2} ${styles.textFlexCenter}`}>
              <div className={styles.textCol}>
                <p>
                  Checkboxes are incorporated for granular control over
                  visibility to event organizers, respecting users' privacy
                  choices.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.sectionContainer} id={styles.products}>
            <div className={`${styles.subsection2} ${styles.textFlexStart}`}>
              <div className={styles.textCol}>
                <p>
                  The inbox serves as a central hub for managing and navigating
                  conversations to foster meaningful connections between users
                  and organizations.
                </p>
              </div>
            </div>
            <div
              className={`${styles.subsection2} ${styles.subsection2Image}`}
              id={styles.introImage}
            >
              <img
                src="./images/projects/asrm/inbox-page.png"
                alt="Tranzitka products"
              />
            </div>
            <div className={`${styles.subsection2} ${styles.textFlexCenter}`}>
              <div className={styles.textCol}>
                <span>Connect with organizations</span>
                <p>
                  Users can engage in meaningful conversations initiated by
                  company representatives or by utilizing the search bar to find
                  specific companies of interest.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.sectionContainer} id={styles.products}>
            <div className={`${styles.subsection2} ${styles.textFlexCenter}`}>
              <div className={styles.textCol}>
                <span>review shortlisted events</span>
                <p>
                  The "Saved" page serves as a space where individuals can
                  conveniently review and decide on events they have expressed
                  interest in.
                </p>
              </div>
            </div>
            <div
              className={`${styles.subsection2} ${styles.subsection2Image}`}
              id={styles.introImage}
            >
              <img
                src="./images/projects/asrm/more-page.png"
                alt="Tranzitka products"
              />
            </div>
            <div className={`${styles.subsection2} ${styles.textFlexSpace}`}>
              <div className={styles.textCol}>
                <span>stay updated through quick reminders</span>
                <p>
                  The page features reminders for close events, upcoming
                  registration deadlines, and events aligned with user
                  preferences, catering to user’s immediate needs and interests.
                </p>
              </div>
              <div className={styles.textCol}>
                <p>
                  The event boxes included in each section of the notifications
                  page provide a quick snapshot of the relevant details, making
                  it convenient for users to review and take action.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.darkBackground}>
        <Footer />
      </div>
    </>
  );
}
