import React, { useState } from 'react';
import Resume from "./Resume";
import Skills from './Skills';
import General_information from "./General_information";
import Education from "./Education";
import Work_experience from "./Work_experience";

function App() {
 const [fullName, setFullName] = useState('');
 const [email, setEmail] = useState('');
 const [phoneNumber, setPhoneNumber] = useState('');
 const [address, setAddress] = useState('');

 const [languages, setLanguages] = useState(['Python']);
const [frameworks, setFrameworks] = useState(['React']);
const [tools, setTools] = useState(['Git']);

 return (
    <div className="content">
      <div className="input-container">
        <General_information 
          fullName={fullName} 
          setFullName={setFullName} 
          email={email} 
          setEmail={setEmail} 
          phoneNumber={phoneNumber} 
          setPhoneNumber={setPhoneNumber} 
          address={address} 
          setAddress={setAddress} 
        />
        <Skills 
          languages={languages} 
          setLanguages={setLanguages} 
          frameworks={frameworks} 
          setFrameworks={setFrameworks} 
          tools={tools} 
          setTools={setTools}
        />
        <Education />
        <Work_experience />
      </div>
      <div className="output-container">
        <Resume 
          fullName={fullName || undefined} 
          email={email || undefined} 
          phoneNumber={phoneNumber || undefined} 
          address={address || undefined}
          
          languages={languages}
          frameworks={frameworks}
          tools={tools}
        />
      </div>
    </div>
 )
}

export default App;