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

  const [works, setWorks] = useState([
    {
      companyName: 'Company A',
      position: 'Software Engineer',
      timeFrame: 'Jan 2020 - Present',
      contributions: [
        'Developed and maintained web applications using Django and React',
        'Implemented CI/CD pipelines using Jenkins and Docker',
      ],
    },
    // more works...
  ]);

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
        <Work_experience works={works} setWorks={setWorks} />
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

          works={works}
        />
      </div>
    </div>
 )
}

export default App;