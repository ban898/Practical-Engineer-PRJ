import classes from "./WelcomePage.module.css";
import BlueButton from "../components/BlueButton";
import TransparentButton from "../components/TransparentButton";
import MainImage from "../img/dashboard.png";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import AndroidIcon from "@mui/icons-material/Android";
import PinterestIcon from "@mui/icons-material/Pinterest";

const WelcomePage = () => {
  return (
    <main>
      <section>
        <div className={classes.headerMain}>
          <h1>CRM-X Platform</h1>
          <h1>Dashboard with E-Commerce</h1>
        </div>
        <div className={classes.headerSlogan}>
          Presenting CRM-X, the ultimate Technology Startup
        </div>
        <div className={classes.buttonContainer}>
          <BlueButton />
          <TransparentButton />
        </div>
      </section>
      <section className={classes.imageSection}>
        <img className={classes.mainImg} src={MainImage} alt="Dashboard" />
      </section>
      <section>
        <div className={classes.aboutSection}>
          <div className={classes.aboutIconsSection}>
            <AppleIcon
              color="disabled"
              sx={{
                fontSize: "80px",
                marginLeft: "125px",
              }}
            />
            <FacebookIcon
              color="disabled"
              sx={{
                fontSize: "80px",
                marginLeft: "125px",
              }}
            />
            <GoogleIcon
              color="disabled"
              sx={{
                fontSize: "80px",
                marginLeft: "125px",
              }}
            />
            <InstagramIcon
              color="disabled"
              sx={{
                fontSize: "80px",
                marginLeft: "125px",
              }}
            />
            <AndroidIcon
              color="disabled"
              sx={{
                fontSize: "80px",
                marginLeft: "125px",
              }}
            />
            <PinterestIcon
              color="disabled"
              sx={{
                fontSize: "80px",
                marginLeft: "125px",
              }}
            />
          </div>
        </div>
        <div className={classes.aboutContentSection}>lorem</div>
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
