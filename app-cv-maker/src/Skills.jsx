import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus, faCode, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './skills.css';

function Skills( { languages, setLanguages, frameworks, setFrameworks, tools, setTools }) {
  const [newLanguage, setNewLanguage] = useState('');
  const [newFramework, setNewFramework] = useState('');
  const [newTool, setNewTool] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddClick = (setList, newList, setNewList) => {
    if (newList) {
      setList(prevList => [...prevList, newList]);
      setNewList('');
    }
  };

  const handleRemoveClick = (index, setList) => {
    setList(prevList => {
      const values = [...prevList];
      values.splice(index, 1);
      return values;
    });
  };

  const handleHeaderClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="Skills">
      <div className='Skills-Header' onClick={handleHeaderClick}>
        <h1><FontAwesomeIcon icon={faCode} className='icon'/> Skills</h1>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </div>
      {isFormVisible && (
        <>
          <label>Programming Languages</label>
          <div className='programming-languages-list'>
            {languages.map((language, index) => (
              <div className='programming-language' key={index}>
                <p>{language}</p>
                <button className='remove' onClick={() => handleRemoveClick(index, setLanguages)}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
            ))}
            <div className='add-programming-language'>
              <input type='text' value={newLanguage} onChange={(e) => setNewLanguage(e.target.value)} placeholder='Python' />
              <button className='add' onClick={() => handleAddClick(setLanguages, newLanguage, setNewLanguage)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
          </div>
          <label>Frameworks</label>
          <div className='frameworks-list'>
            {frameworks.map((framework, index) => (
              <div className='framework' key={index}>
                <p>{framework}</p>
                <button className='remove' onClick={() => handleRemoveClick(index, setFrameworks)}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
            ))}
            <div className='add-framework'>
              <input type='text' value={newFramework} onChange={(e) => setNewFramework(e.target.value)} placeholder='React' />
              <button className='add' onClick={() => handleAddClick(setFrameworks, newFramework, setNewFramework)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
          </div>
          <label>Tools</label>
          <div className='tools-list'>
            {tools.map((tool, index) => (
              <div className='tool' key={index}>
                <p>{tool}</p>
                <button className='remove' onClick={() => handleRemoveClick(index, setTools)}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
            ))}
            <div className='add-tool'>
              <input type='text' value={newTool} onChange={(e) => setNewTool(e.target.value)} placeholder='Git' />
              <button className='add' onClick={() => handleAddClick(setTools, newTool, setNewTool)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Skills;