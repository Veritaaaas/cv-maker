
function General_information() {
    return (
        <div className="Personal-Information">
            <h1>Personal Information</h1>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
            <label>Address</label>
            <input type="text" placeholder="Enter your address" />
        </div>
    )
}

export default General_information;