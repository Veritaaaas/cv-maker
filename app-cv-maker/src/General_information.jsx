import React, { useState } from 'react';
import './general_info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function General_information({ fullName, setFullName, email, setEmail, phoneNumber, setPhoneNumber, address, setAddress }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleHeaderClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="Personal-Information">
      <div className='Personal-Information-Header' onClick={handleHeaderClick}>
        <h1><FontAwesomeIcon icon={faUser} className='icon'/>Personal Information</h1>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown}/>
      </div>
      {isFormVisible && (
        <div className='personal-info-form'>
          <label>Full Name</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" />
          <label>Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="City, PH" />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johndoe@gmail.com" />
          <label>Phone Number</label>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="012345679" />
        </div>
      )}
    </div>
  )
}

export default General_information;