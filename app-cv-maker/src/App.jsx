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

 const [languages, setLanguages] = useState([]);
const [frameworks, setFrameworks] = useState([]);
const [tools, setTools] = useState([]);

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
        <Work_experience />
        <Education />
      </div>
      <div className="output-container">
        <Resume 
          fullName={fullName || undefined} 
          email={email || undefined} 
          phoneNumber={phoneNumber || undefined} 
          address={address || undefined}
          
          languages={languages.length > 0 ? languages : ['Python', 'JavaScript', 'Java']}
          frameworks={frameworks.length > 0 ? frameworks : ['React', 'Django', 'Spring']}
          tools={tools.length > 0 ? tools : ['Docker', 'Jenkins', 'Git']}
        />
      </div>
    </div>
 )
}

export default App;