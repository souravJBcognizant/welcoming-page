import React from 'react';
import './Welcome.css';

interface WelcomeProps {
  className?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ className = '' }) => {
  return (
    <div className={`welcome-container ${className}`}>
      <div className="welcome-content">
        {/* Badge/Chip */}
        <div className="welcome-badge">
          COGNIZANT · BENGALURU
        </div>
        
        {/* Subheading */}
        <p className="welcome-subheading">
          Please join us in welcoming
        </p>
        
        {/* Main Heading */}
        <h1 className="welcome-heading">
          Babak Hodjat
        </h1>
        
        {/* Title */}
        <p className="welcome-title">
          Chief Technology Officer
        </p>
        
        {/* Date */}
        <p className="welcome-date">
          Starting November 18, 2024
        </p>
      </div>
      
      {/* Skyline Decoration */}
      <div className="skyline-decoration">
        <svg 
          viewBox="0 0 1200 675" 
          preserveAspectRatio="none"
          className="skyline-svg"
          aria-hidden="true"
        >
          {/* Building 1 */}
          <rect x="20" y="585" width="60" height="90" fill="#FFFFFF" rx="3" />
          
          {/* Building 2 */}
          <rect x="85" y="545" width="50" height="130" fill="#FFFFFF" rx="3" />
          
          {/* Building 3 */}
          <rect x="140" y="605" width="70" height="70" fill="#FFFFFF" rx="3" />
          
          {/* Building 4 */}
          <rect x="215" y="525" width="45" height="150" fill="#FFFFFF" rx="3" />
          
          {/* Building 5 */}
          <rect x="265" y="565" width="55" height="110" fill="#FFFFFF" rx="3" />
          
          {/* Building 6 */}
          <rect x="325" y="590" width="60" height="85" fill="#FFFFFF" rx="3" />
          
          {/* Building 7 */}
          <rect x="390" y="535" width="50" height="140" fill="#FFFFFF" rx="3" />
          
          {/* Building 8 */}
          <rect x="410" y="555" width="50" height="120" fill="#FFFFFF" rx="3" />
          
          {/* Building 9 */}
          <rect x="465" y="580" width="60" height="95" fill="#FFFFFF" rx="3" />
          
          {/* Building 10 */}
          <rect x="530" y="515" width="45" height="160" fill="#FFFFFF" rx="3" />
          
          {/* Building 11 */}
          <rect x="580" y="595" width="70" height="80" fill="#FFFFFF" rx="3" />
          
          {/* Building 12 */}
          <rect x="655" y="545" width="55" height="130" fill="#FFFFFF" rx="3" />
          
          {/* Building 13 */}
          <rect x="715" y="570" width="60" height="105" fill="#FFFFFF" rx="3" />
          
          {/* Building 14 */}
          <rect x="780" y="600" width="65" height="75" fill="#FFFFFF" rx="3" />
          
          {/* Building 15 */}
          <rect x="850" y="525" width="45" height="150" fill="#FFFFFF" rx="3" />
          
          {/* Building 16 */}
          <rect x="900" y="585" width="60" height="90" fill="#FFFFFF" rx="3" />
          
          {/* Building 17 */}
          <rect x="965" y="555" width="55" height="120" fill="#FFFFFF" rx="3" />
          
          {/* Building 18 */}
          <rect x="1025" y="605" width="70" height="70" fill="#FFFFFF" rx="3" />
          
          {/* Building 19 */}
          <rect x="1100" y="525" width="50" height="150" fill="#FFFFFF" rx="3" />
        </svg>
      </div>
    </div>
  );
};

export default Welcome;