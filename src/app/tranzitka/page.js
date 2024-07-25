"use client";
import Head from "next/head";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import styles from "./page.module.css";
import ProjectBanner from "@/components/projectBanner";
import caseData from "../caseData";
import { tranzitka } from "../caseData";

export default function Project() {
  return (
    <>
      <Nav isProjectPage={true} isAboutPage={true} />
      <div className={styles.container}>
        <div className={styles.sectionContainer} id={styles.banner}>
          <div className={`${styles.subsection2} ${styles.textFlexEnd}`}>
            <ProjectBanner
              key={tranzitka.id}
              title={tranzitka.title}
              description={tranzitka.description}
              projectType={tranzitka.projectType}
              category={tranzitka.category}
              timeline={tranzitka.timeline}
              tools={tranzitka.tools}
            />
          </div>
          <div
            className={`${styles.subsection2} ${styles.subsection2Image}`}
            id={styles.bannerImage}
          >
            <img
              src="./images/projects/tranzitka/5screens.png"
              alt="Tranzitka screens"
            />
          </div>
        </div>
        <div className={styles.sectionContainer} id={styles.intro}>
          <div className={`${styles.subsection2} ${styles.textFlexStart}`}>
            <div className={styles.textCol}>
              <span>The Problem</span>
              <p>
                Tranzitka, Kazakhstan's premier triathlon store, faced the
                challenge of establishing its online presence from scratch.
                Potential customers were unable to explore the extensive
                offerings and engage with the vibrant biking community that
                Tranzitka fosters.
              </p>
            </div>
          </div>
          <div
            className={`${styles.subsection2} ${styles.subsection2Image}`}
            id={styles.introImage}
          >
            <img
              src="./images/projects/tranzitka/index-page.png"
              alt="Tranzitka visuals"
            />
          </div>
          <div className={`${styles.subsection2} ${styles.textFlexEnd}`}>
            <div className={styles.textCol}>
              <span>The Solution</span>
              <p>
                To tackle the challenge, I have designed a robust and visually
                appealing online platform for Tranzitka.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer} id={styles.visuals}>
          <div
            className={`${styles.subsection2}§`}
            id={styles.visualsImage}
          >
            <img
              src="./images/projects/tranzitka/visuals.png"
              alt="Tranzitka visuals"
            />
          </div>
          <div className={`${styles.subsection2} ${styles.textFlexStart}`}>
            <div className={styles.textCol}>
              <p className={styles.specialPadding}>
                I was requested to build around the logo that was provided
                to me by the company, without making alterations. Its sleek
                lines and bright color inspired the choice of color scheme,
                typography, and icons.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer} id={styles.products}>
        <div className={`${styles.subsection2} ${styles.textFlexSpace}`}>
            <div className={styles.textCol}>
              <p>
              Each filter category, from product type to color and price, is meticulously organized to streamline the shopping experience.              </p>
            </div>
            <div className={styles.textCol}>
              <p>
              The product detail page balances aesthetics with functionality, providing comprehensive product information with a clean layout.
              </p>
            </div>
          </div>
          <div
            className={`${styles.subsection2} ${styles.subsection2Image}`}
            id={styles.productsImage}
          >
            <img
              src="./images/projects/tranzitka/products-page.png"
              alt="Tranzitka products"
            />
          </div>
        </div>
        <div className={styles.sectionContainer} id={styles.products}>
        <div className={`${styles.subsection2} ${styles.textFlexSpace}`}>
            <div className={styles.textCol}>
              <p>
              Straightforward login and sign-up processes complemented by intuitive account management tools.
              </p>
            </div>
            {/* <div className={styles.textCol}>
              <span>Reflection</span>
              <p>
              The product detail page balances aesthetics with functionality, providing comprehensive product information with a clean layout.
              </p>
            </div> */}
          </div>
          <div
            className={`${styles.subsection2} ${styles.subsection2Image}`}
            id={styles.productsImage}
          >
            <img
              src="./images/projects/tranzitka/login-page.png"
              alt="Tranzitka login"
            />
          </div>
        </div>
        {/* <Section
          id={styles.banner}
          leftContent={
            // <div className={styles.projects}>
            <ProjectBanner
              key={tranzitka.id}
              title={tranzitka.title}
              description={tranzitka.description}
              projectType={tranzitka.projectType}
              category={tranzitka.category}
              timeline={tranzitka.timeline}
              tools={tranzitka.tools}
            />
            // </div>
          }
          rightContent={
            <div className={styles.bannerImage}>
              <img
                src="./images/projects/tranzitka/5screens.png"
                alt="Tranzitka screens"
              />
            </div>
          }
          isLeft={true}
        />
         <Section
          id={styles.index}
          leftContent={
            <div className={styles.sectionText}>
              <span>
                The homepage serves as the gateway to the brand, highlighting
                key services, latest offers, and popular categories. With an
                inviting design that combines stunning imagery and clear
                calls-to-action, this page sets the stage for a compelling brand
                story and shopping experience.
              </span>
            </div>
          }
          rightContent={
            <div className={styles.contentImage}>
              <img
                src="./images/projects/tranzitka/index-page.png"
                alt="Index page"
              />
            </div>
          }
          isLeft={false}
        />
        <Section
          id={styles.gallery}
          leftContent={
            <div className={styles.sectionText}>
              <span>
                Each filter category, from product type to color and price, is
                meticulously organized to streamline the shopping experience.
              </span>
            </div>
          }
          rightContent={
            <div className={styles.contentImage}>
              <img
                src="./images/projects/tranzitka/gallery-page.png"
                alt="Gallery page"
                // width={100}
              />
            </div>
          }
          isLeft={true}
        />
        <Section
          id={styles.product}
          leftContent={
            <div className={styles.sectionText}>
              <span>
                The product detail page balances aesthetics with functionality,
                providing comprehensive product information with a clean layout.
              </span>
            </div>
          }
          rightContent={
            <div className={styles.contentImage}>
              <img
                src="./images/projects/tranzitka/product-page.png"
                alt="Product page"
              />
            </div>
          }
          isLeft={false}
        />
        <Section
          id={styles.login}
          leftContent={
            <div className={styles.sectionText}>
              <span>
              Straightforward login and sign-up processes complemented by
              intuitive account management tools.
              </span>
            </div>
          }
          rightContent={
            <div className={styles.contentImage}>
              <img
                src="./images/projects/tranzitka/login-page.png"
                alt="Login page"
              />
            </div>
          }
          isLeft={true}
        />
        <Section
          id={styles.visuals}
          leftContent={
            <>
              <div className={styles.sectionText}>
                <span>
                  I was requested to build around the logo that was provided to
                  me by the company, without making alterations. Its sleek lines
                  and bright color inspired the choice of color scheme,
                  typography, and icons.
                </span>
              </div>
            </>
          }
          rightContent={
            <>
              <div class={styles.subsectionContainer}>
                <div class={styles.subsectionRow}>
                  <div class={styles.visualsHeading}>logo</div>
                  <div class={styles.logoContainer}>
                    <div class={`${styles.logoItem} ${styles.logoBw}`}>
                      <img src="/images/projects/tranzitka/borodach.png" />
                    </div>
                    <div class={`${styles.logoItem} ${styles.logoColor}`}>
                      <img src="/images/projects/tranzitka/borodachzhel2 2.png" />
                    </div>
                  </div>
                </div>
                <div class={styles.subsectionColumn}>
                  <div class={styles.columnChild}>
                    <div class={styles.visualsHeading}>typography</div>
                    <img src="/images/projects/tranzitka/font.png" />
                  </div>
                  <div class={styles.columnChild}>
                    <div class={styles.visualsHeading}>colors</div>
                    <div class={styles.colorContainer}>
                      <div class={`${styles.colorItem} ${styles.color1}`}></div>
                      <div class={`${styles.colorItem} ${styles.color2}`}></div>
                      <div class={`${styles.colorItem} ${styles.color3}`}></div>
                      <div class={`${styles.colorItem} ${styles.color4}`}></div>
                      <div class={`${styles.colorItem} ${styles.color5}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          isLeft={false}
        />  */}
      </div>
      <Footer />
    </>
  );
}

// components/Section.js
const Section = ({ id, leftContent, rightContent, isLeft }) => {
  return (
    <div className={`${styles.section} ${id}`}>
      {isLeft ? (
        <>
          <div className={styles.sectionLeft}>{leftContent}</div>
          <div className={styles.sectionRight}>{rightContent}</div>
        </>
      ) : (
        <>
          <div className={styles.sectionRight}>{rightContent}</div>
          <div className={styles.sectionLeft}>{leftContent}</div>
        </>
      )}
    </div>
  );
};

// components/Subsection.js
const VisualsContainer = ({
  heading,
  shortVisuals,
  longVisuals,
  shortFirst,
}) => {
  return (
    <div className={styles.visualsRow}>
      {shortFirst ? (
        <>
          <div className={styles.visualsShortItem}>{shortVisuals}</div>
          <div className={styles.visualsLongItem}>{longVisuals}</div>
        </>
      ) : (
        <>
          <div className={styles.visualsLongItem}>{longVisuals}</div>
          <div className={styles.visualsShortItem}>{shortVisuals}</div>
        </>
      )}
    </div>
  );
};
