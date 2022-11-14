import classes from "./WelcomePage.module.css";
import BlueButton from "../components/BlueButton";
import TransparentButton from "../components/TransparentButton";
import MainImage from "../img/dashboard.png";
import SecondImage from "../img/analyticsImg.jpg";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MonitorIcon from "@mui/icons-material/Monitor";

const WelcomePage = () => {
  return (
    <main>
      <section>
        <div className={classes.headerMain}>
          <div className={classes.mainHeader}>CRM-X Platform</div>
          <div className={classes.mainHeader}>Dashboard with E-Commerce</div>
        </div>
        <div className={classes.headerSlogan}>
          Presenting CRM-X, the ultimate Technology Startup
        </div>
        <div className={classes.buttonContainer}>
          <BlueButton buttonText={"Get Started"} />
          <TransparentButton
            buttonText={"Browse Pages"}
            fontSize="18.4px"
            fontWeight="500"
          />
        </div>
      </section>
      <section className={classes.imageSection}>
        <img className={classes.mainImg} src={MainImage} alt="Dashboard" />
      </section>
      <section>
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
