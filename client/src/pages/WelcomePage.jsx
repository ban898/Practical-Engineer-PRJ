import classes from "./WelcomePage.module.css";
import BlueButton from "../components/BlueButton";
import TransparentButton from "../components/TransparentButton";
import MainImage from "../img/dashboard.png";
import SecondImage from "../img/analyticsImg.jpg";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MonitorIcon from "@mui/icons-material/Monitor";
import VerifiedIcon from "@mui/icons-material/Verified";
import PriceCardButton from "../components/PriceCardButton";
import { useState } from "react";

const WelcomePage = () => {
  const [firstShowHideSecond, setfirstShowHideSecond] = useState(true);

  const btn1Handler = () => {
    console.log(firstShowHideSecond);
    setfirstShowHideSecond(true);
  };

  const btn2Handler = () => {
    console.log(firstShowHideSecond);
    setfirstShowHideSecond(false);
  };

  // Animation Should be clicked on PriceCardButton and anImate priceCard

  const firstPriceTabClasses = firstShowHideSecond
    ? classes.CardShow
    : classes.CardHide;

  const secondPriceTabClasses = firstShowHideSecond
    ? classes.CardHide
    : classes.CardShow;

  return (
    <main>
      <section id="Home">
        <div className={classes.headerMain}>
          <div className={classes.mainHeader}>CRM-X Platform</div>
          <div className={classes.mainHeader}>Dashboard with E-Commerce</div>
        </div>
        <div className={classes.headerSlogan}>
          Presenting CRM-X, the ultimate Technology Startup
        </div>
        <div className={classes.buttonContainer}>
          <BlueButton buttonText="Get Started" />
          <TransparentButton
            buttonText="Browse Pages"
            fontSize="18.4px"
            fontWeight="500"
          />
        </div>
      </section>
      <section className={classes.imageSection}>
        <img className={classes.mainImg} src={MainImage} alt="Dashboard" />
      </section>
      <section id="Features">
        <div className={classes.aboutSection}>
          <div className={classes.aboutLeftSide}>
            <img src={SecondImage} alt="Secondary" />
          </div>
          <div className={classes.aboutRightSide}>
            <div className={classes.aboutRightHeader}>Why CRM-X ?</div>
            <div className={classes.aboutRightSlogan}>
              We make it easy
              <br /> to track all users analytics
            </div>
            <div className={classes.aboutRightTextWrapper}>
              <div className={classes.aboutRightRow}>
                <div className={classes.aboutRightIcon}>
                  <StackedLineChartIcon sx={{ color: "rgb(25, 118, 210)" }} />
                </div>
                <div className={classes.aboutRightText}>
                  <h3>Advanced tracking</h3>
                  <p>
                    we set out to create a way for small and medium-sized <br />
                    enterprises to track the performance of their brand and
                    <br />
                    gauge how consumers perceived it.
                  </p>
                </div>
              </div>
              <div className={classes.aboutRightRow}>
                <div className={classes.aboutRightIcon}>
                  <MonitorIcon sx={{ color: "rgb(25, 118, 210)" }} />
                </div>
                <div className={classes.aboutRightText}>
                  <h3>In-depth monitoring</h3>
                  <p>
                    Ensure maximum productivity for the people using your <br />
                    applications. Make sure your applications are always running{" "}
                    <br />
                    at maximum performance. Say goodbye to preventable <br />
                    outages, late nights or weekend emergencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Pricing">
        <div className={classes.priceContainer}>
          <div className={classes.priceHeader}>
            Our payment plan is easy to understand
          </div>
          <div className={classes.priceSuggest}>
            <div className={classes.priceTab}>
              <PriceCardButton
                onClick={btn1Handler}
                buttonText="Pay Monthly"
                show={firstShowHideSecond}
              />
            </div>
            <div className={classes.priceTab}>
              <PriceCardButton
                onClick={btn2Handler}
                buttonText="Pay Anunally"
                show={firstShowHideSecond}
              />
            </div>
          </div>
        </div>

        <div className={firstPriceTabClasses} id="monthly">
          <div className={classes.priceTabs}>
            <div className={classes.priceBig}>
              <div className={classes.priceBigHeader}>Pro</div>
              <div className={classes.priceBigMain}>
                <div className={classes.priceCenterText}>
                  <div className={classes.pricePlusNumber}>
                    <h1>$</h1>
                    <div className={classes.numberContainer}>
                      <div className={classes.onlyNumber}>12</div>
                      <h1 style={{ fontSize: "40px" }}>/mo</h1>
                    </div>
                  </div>
                  <p>$144 per Person billed Yearly</p>
                </div>
              </div>
              <div className={classes.priceBigButtons}>
                <a href="/login" className={classes.btn1}>
                  Start free Trail
                </a>
                <a href="/login" className={classes.btn2}>
                  Sign in & manage your account
                </a>
              </div>
            </div>
            <div className={classes.priceContent}>
              <div className={classes.priceContentHeader}>
                Try Our product for free for one month
              </div>
              <div className={classes.priceContentP}>
                No credit card is required, start for free, and pick a plan
                later. You can cancel anytime.
              </div>
              <div className={classes.featGrid}>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Cloud Storage
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Private Access
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Comments
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Export to PNG
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Unlimited Shares
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Embed Links
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Print PDF Ready
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={secondPriceTabClasses} id="annually">
          <div className={classes.priceTabs}>
            <div className={classes.priceBig}>
              <div className={classes.priceBigHeader}>Pro</div>
              <div className={classes.priceBigMain}>
                <div className={classes.priceCenterText}>
                  <div className={classes.pricePlusNumber}>
                    <h1>$</h1>
                    <div className={classes.numberContainer}>
                      <div className={classes.onlyNumber}>16</div>
                      <h1 style={{ fontSize: "40px" }}>/mo</h1>
                    </div>
                  </div>
                  <p>$144 per Person billed Yearly</p>
                </div>
              </div>
              <div className={classes.priceBigButtons}>
                <a href="/login" className={classes.btn1}>
                  Start free Trail
                </a>
                <a href="/login" className={classes.btn2}>
                  Sign in & manage your account
                </a>
              </div>
            </div>
            <div className={classes.priceContent}>
              <div className={classes.priceContentHeader}>
                Try Our product for free for one month
              </div>
              <div className={classes.priceContentP}>
                No credit card is required, start for free, and pick a plan
                later. You can cancel anytime.
              </div>
              <div className={classes.featGrid}>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Cloud Storage
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Private Access
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Comments
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Export to PNG
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Unlimited Shares
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Embed Links
                </div>
                <div className={classes.featFlexItem}>
                  <VerifiedIcon color="primary" />
                  Print PDF Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="About-Us"></section>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </main>
  );
};

export default WelcomePage;

//-------------------------------------------------------------------------------------
// <div className={classes.aboutIconsSection}>
//             <AppleIcon
//               color="disabled"
//               sx={{
//                 fontSize: "100px",
//                 marginLeft: "125px",
//               }}
//             />
//             <FacebookIcon
//               color="disabled"
//               sx={{
//                 fontSize: "100px",
//                 marginLeft: "125px",
//               }}
//             />
//             <GoogleIcon
//               color="disabled"
//               sx={{
//                 fontSize: "100px",
//                 marginLeft: "125px",
//               }}
//             />
//             <InstagramIcon
//               color="disabled"
//               sx={{
//                 fontSize: "100px",
//                 marginLeft: "125px",
//               }}
//             />
//             <AndroidIcon
//               color="disabled"
//               sx={{
//                 fontSize: "100px",
//                 marginLeft: "125px",
//               }}
//             />
//           </div>
// <div className={classes.aboutContentSection}>lorem</div>

// import AppleIcon from "@mui/icons-material/Apple";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GoogleIcon from "@mui/icons-material/Google";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import AndroidIcon from "@mui/icons-material/Android";
// import PinterestIcon from "@mui/icons-material/Pinterest";

//----------------------------------------------------
