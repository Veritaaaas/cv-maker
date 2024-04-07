import React from 'react';

function General_information({ fullName, setFullName, email, setEmail, phoneNumber, setPhoneNumber, address, setAddress }) {
    return (
        <div className="Personal-Information">
            <h1>Personal Information</h1>
            <label>Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" />
            <label>Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="City, PH" />
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johndoe@gmail.com" />
            <label>Phone Number</label>
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="012345679" />
            
        </div>
    )
}

export default General_information;