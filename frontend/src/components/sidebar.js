import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HamburgerMenu from '../images/Hamburger-icon.png'

const Sidebar = ({ emptyAttendanceErrorMessage, emptyRankingErrorMessage, analysisMessage, desiredAttendance, venueCapacity, setVenueCapacity, handleInputChange, inviteCount, setInviteCount, setDesiredAttendance, costPerPerson, setCostPerPerson, runSortedList}) => {
  const [isExpanded, setIsExpanded] = useState(true); // state to track sidebar visibility
  
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded); // toggle the state between true and false
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className='sidebar-header'>
        <div className="toggle" onClick={toggleSidebar}>
          <img src={HamburgerMenu} alt="three line hamburger menu"/>
        </div>
        {isExpanded && (
        
            <div className='sidebar-header-font'>
              <p>Click the hamburger icon to toggle back and forth with your guestlist. Fill out the questions and click 'Run List' to get a custom breakdown.</p>
            </div>
 
        )}
      </div>
      {isExpanded && (
        <div className='sidebar-inputs'>
          {emptyRankingErrorMessage !== null
            ? (
                <div className="alert alert-danger" role="alert">
                    {emptyRankingErrorMessage}
                </div>
            )
            : null
          }
          {emptyAttendanceErrorMessage !== null
            ? (
                <div className="alert alert-danger" role="alert">
                    {emptyAttendanceErrorMessage}
                </div>
            )
            : null
          }
          <div className='sidebar-capacity'>
            <div className='sidebar-capacity-text'>
              <p>What is the capacity of the venue?</p>
            </div>
            <div className='sidebar-capacity-input'>
              <Form.Control 
                type="number"
                value={venueCapacity}
                onChange={(e) => handleInputChange(e, setVenueCapacity, 'venueCapacity')}
              />
            </div>
          </div>
          <div className='sidebar-attendance'>
            <div className='sidebar-attendance-text'>
              How many guests would you like to attend?
            </div>
            <div className='sidebar-attendance-input'>
              <Form.Control 
                type="number"
                value={desiredAttendance}
                onChange={(e) => handleInputChange(e, setDesiredAttendance, 'desiredAttendance')}
              />
            </div>
          </div>
          <div className='sidebar-cost'>
            <div className='sidebar-cost-text'>
              How much does it cost per person?
            </div>
            <div className='sidebar-cost-input'>
              <Form.Control 
                type="number"
                value={costPerPerson}
                onChange={(e) => handleInputChange(e, setCostPerPerson, 'costPerPerson')}
              />
            </div>
          </div>
        </div>
      )}
      {isExpanded && (
        <div className="analysis-message">
          <p>
           {analysisMessage}
          </p>
        </div>
      )}
      {isExpanded && (
        <div className='run-list-button'>
          <Button onClick={runSortedList}>Run List</Button>
        </div>
      )}
    </div>
  );
  
};

export default Sidebar;