import React from 'react';
import './Welcome.css';

interface WelcomeProps {
  className?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ className = '' }) => {
  return (
    <div className={`welcome-container ${className}`}>
      <div className="welcome-content">
        {/* Heading */}
        <h1 className="welcome-heading">
          Welcome to Our Platform
        </h1>
        
        {/* Subheading */}
        <h2 className="welcome-subheading">
          Discover amazing features and possibilities
        </h2>
        
        {/* Body Text */}
        <p className="welcome-body">
          Experience a seamless journey with our intuitive design and powerful features. 
          We're here to help you achieve your goals with ease and efficiency.
        </p>
        
        {/* CTA Button */}
        <button className="welcome-cta-button" type="button">
          Get Started
        </button>
      </div>
      
      {/* Skyline Decoration */}
      <div className="skyline-decoration">
        <svg 
          viewBox="0 0 1200 200" 
          preserveAspectRatio="none"
          className="skyline-svg"
          aria-hidden="true"
        >
          {/* Building 1 - Tallest left */}
          <rect x="50" y="40" width="80" height="160" fill="#2a3f5f" />
          <rect x="60" y="50" width="10" height="10" fill="#ffd700" opacity="0.8" />
          <rect x="80" y="50" width="10" height="10" fill="#ffd700" opacity="0.8" />
          <rect x="100" y="50" width="10" height="10" fill="#ffd700" opacity="0.8" />
          <rect x="60" y="70" width="10" height="10" fill="#ffd700" opacity="0.8" />
          <rect x="100" y="70" width="10" height="10" fill="#ffd700" opacity="0.8" />
          
          {/* Building 2 - Medium */}
          <rect x="150" y="80" width="100" height="120" fill="#364d6d" />
          <rect x="165" y="90" width="15" height="15" fill="#ffd700" opacity="0.7" />
          <rect x="190" y="90" width="15" height="15" fill="#ffd700" opacity="0.7" />
          <rect x="215" y="90" width="15" height="15" fill="#ffd700" opacity="0.7" />
          <rect x="165" y="115" width="15" height="15" fill="#ffd700" opacity="0.7" />
          <rect x="215" y="115" width="15" height="15" fill="#ffd700" opacity="0.7" />
          
          {/* Building 3 - Skyscraper */}
          <rect x="280" y="20" width="60" height="180" fill="#1e2d3d" />
          <rect x="290" y="30" width="8" height="8" fill="#ffd700" opacity="0.9" />
          <rect x="305" y="30" width="8" height="8" fill="#ffd700" opacity="0.9" />
          <rect x="320" y="30" width="8" height="8" fill="#ffd700" opacity="0.9" />
          <rect x="290" y="50" width="8" height="8" fill="#ffd700" opacity="0.9" />
          <rect x="320" y="50" width="8" height="8" fill="#ffd700" opacity="0.9" />
          <rect x="290" y="70" width="8" height="8" fill="#ffd700" opacity="0.9" />
          <rect x="305" y="70" width="8" height="8" fill="#ffd700" opacity="0.9" />
          
          {/* Building 4 - Wide low */}
          <rect x="370" y="120" width="120" height="80" fill="#3a4f6f" />
          <rect x="385" y="130" width="20" height="15" fill="#ffd700" opacity="0.6" />
          <rect x="415" y="130" width="20" height="15" fill="#ffd700" opacity="0.6" />
          <rect x="445" y="130" width="20" height="15" fill="#ffd700" opacity="0.6" />
          <rect x="385" y="155" width="20" height="15" fill="#ffd700" opacity="0.6" />
          <rect x="445" y="155" width="20" height="15" fill="#ffd700" opacity="0.6" />
          
          {/* Building 5 - Tall center */}
          <rect x="520" y="35" width="90" height="165" fill="#2c3e50" />
          <rect x="535" y="45" width="12" height="12" fill="#ffd700" opacity="0.8" />
          <rect x="555" y="45" width="12" height="12" fill="#ffd700" opacity="0.8" />
          <rect x="575" y="45" width="12" height="12" fill="#ffd700" opacity="0.8" />
          <rect x="535" y="70" width="12" height="12" fill="#ffd700" opacity="0.8" />
          <rect x="575" y="70" width="12" height="12" fill="#ffd700" opacity="0.8" />
          <rect x="555" y="95" width="12" height="12" fill="#ffd700" opacity="0.8" />
          
          {/* Building 6 - Medium right */}
          <rect x="640" y="90" width="80" height="110" fill="#34495e" />
          <rect x="650" y="100" width="10" height="10" fill="#ffd700" opacity="0.7" />
          <rect x="670" y="100" width="10" height="10" fill="#ffd700" opacity="0.7" />
          <rect x="690" y="100" width="10" height="10" fill="#ffd700" opacity="0.7" />
          <rect x="650" y="120" width="10" height="10" fill="#ffd700" opacity="0.7" />
          <rect x="690" y="120" width="10" height="10" fill="#ffd700" opacity="0.7" />
          
          {/* Building 7 - Narrow tall */}
          <rect x="750" y="50" width="50" height="150" fill="#2a3f5f" />
          <rect x="760" y="60" width="8" height="8" fill="#ffd700" opacity="0.8" />
          <rect x="775" y="60" width="8" height="8" fill="#ffd700" opacity="0.8" />
          <rect x="760" y="80" width="8" height="8" fill="#ffd700" opacity="0.8" />
          <rect x="775" y="80" width="8" height="8" fill="#ffd700" opacity="0.8" />
          <rect x="760" y="100" width="8" height="8" fill="#ffd700" opacity="0.8" />
          
          {/* Building 8 - Wide medium */}
          <rect x="830" y="100" width="110" height="100" fill="#3a4f6f" />
          <rect x="845" y="110" width="18" height="12" fill="#ffd700" opacity="0.6" />
          <rect x="875" y="110" width="18" height="12" fill="#ffd700" opacity="0.6" />
          <rect x="905" y="110" width="18" height="12" fill="#ffd700" opacity="0.6" />
          <rect x="845" y="135" width="18" height="12" fill="#ffd700" opacity="0.6" />
          <rect x="905" y="135" width="18" height="12" fill="#ffd700" opacity="0.6" />
          
          {/* Building 9 - Tallest right */}
          <rect x="970" y="25" width="70" height="175" fill="#1e2d3d" />
          <rect x="980" y="35" width="10" height="10" fill="#ffd700" opacity="0.9" />
          <rect x="1000" y="35" width="10" height="10" fill="#ffd700" opacity="0.9" />
          <rect x="1020" y="35" width="10" height="10" fill="#ffd700" opacity="0.9" />
          <rect x="980" y="60" width="10" height="10" fill="#ffd700" opacity="0.9" />
          <rect x="1020" y="60" width="10" height="10" fill="#ffd700" opacity="0.9" />
          <rect x="1000" y="85" width="10" height="10" fill="#ffd700" opacity="0.9" />
          
          {/* Building 10 - Small right edge */}
          <rect x="1070" y="130" width="60" height="70" fill="#364d6d" />
          <rect x="1080" y="140" width="10" height="10" fill="#ffd700" opacity="0.7" />
          <rect x="1100" y="140" width="10" height="10" fill="#ffd700" opacity="0.7" />
          <rect x="1080" y="160" width="10" height="10" fill="#ffd700" opacity="0.7" />
          <rect x="1100" y="160" width="10" height="10" fill="#ffd700" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
};

export default Welcome;