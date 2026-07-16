import './WelcomeBanner.css';
import Skyline from '../assets/Skyline';

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <div className="welcome-banner__content">
        <div className="welcome-banner__chip">
          <span className="welcome-banner__chip-text">COGNIZANT · BENGALURU</span>
        </div>
        <p className="welcome-banner__subtitle">Please join us in welcoming</p>
        <h1 className="welcome-banner__name">Babak Hodjat</h1>
        <p className="welcome-banner__accent">to Bengaluru</p>
        <p className="welcome-banner__body">
          Delighted to have you with us. Here's to bold ideas, great people, and a warm Bengaluru welcome.
        </p>
      </div>
      <div className="welcome-banner__skyline">
        <Skyline />
      </div>
    </div>
  );
};

export default WelcomeBanner;
