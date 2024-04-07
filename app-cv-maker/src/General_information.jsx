import React from 'react';

function General_information({ fullName, setFullName, email, setEmail, phoneNumber, setPhoneNumber, address, setAddress }) {
    return (
        <div className="Personal-Information">
            <h1>Personal Information</h1>
            <label>Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" />
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <label>Phone Number</label>
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" />
            <label>Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" />
        </div>
    )
}

export default General_information;