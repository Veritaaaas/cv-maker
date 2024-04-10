import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark, faTrash, faGraduationCap, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './education.css';

function Education({ educations, setEducations }) {
  const [isAdding, setIsAdding] = useState(false);
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [location, setLocation] = useState('');
  const [awards, setAwards] = useState(['']);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleAwardChange = (e, index) => {
    const values = [...awards];
    values[index] = e.target.value;
    setAwards(values);
  };

  const handleRemoveAwardClick = (index) => {
    const values = [...awards];
    values.splice(index, 1);
    setAwards(values);
  };

  const handleCancelClick = () => {
    setIsAdding(false);
    setUniversity('');
    setDegree('');
    setTimeFrame('');
    setLocation('');
    setAwards(['']);
    setEditingIndex(null);
  };

  const handleSaveClick = () => {
    if (editingIndex !== null) {
      const newEducations = [...educations];
      newEducations[editingIndex] = { university, degree, timeFrame, location, awards };
      setEducations(newEducations);
      setEditingIndex(null);
    } else {
      setEducations([...educations, { university, degree, timeFrame, location, awards }]);
    }
    setIsAdding(false);
    setUniversity('');
    setDegree('');
    setTimeFrame('');
    setLocation('');
    setAwards(['']);
  };

  const handleDeleteClick = () => {
    if (editingIndex !== null) {
      const newEducations = [...educations];
      newEducations.splice(editingIndex, 1);
      setEducations(newEducations);
      setIsAdding(false);
      setUniversity('');
      setDegree('');
      setTimeFrame('');
      setLocation('');
      setAwards(['']);
      setEditingIndex(null);
    }
  };

  const handleEducationClick = (education, index) => {
    setIsAdding(true);
    setUniversity(education.university);
    setDegree(education.degree);
    setTimeFrame(education.timeFrame);
    setLocation(education.location);
    setAwards(education.awards);
    setEditingIndex(index);
  };

  return (
    <div className="Education">
      <div className='Education-Header' onClick={() => setIsFormVisible(!isFormVisible)}>
        <h1><FontAwesomeIcon icon={faGraduationCap}/>Education</h1>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </div>
      
      {isFormVisible && (
        <>
            <div className="education-list">
            {!isAdding && educations.map((education, index) => (
                <div className="education" key={index} onClick={() => handleEducationClick(education, index)}>
                <h4>{education.university}</h4>
                </div>
            ))}
            </div>
          <div className="add-education">
            {!isAdding && (
              <button className="add-education-button" onClick={handleAddClick}>
                <div className="add-div"><FontAwesomeIcon icon={faPlus} className="add-icon"/>Education</div>
              </button>
            )}
            {isAdding && (
              <div className="education-form">
                <label>University</label>
                <input type="text" placeholder="Enter your university" value={university} onChange={(e) => setUniversity(e.target.value)} />
                <label>Degree</label>
                <input type="text" placeholder="Enter your degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
                <label>Time Frame</label>
                <input type="text" placeholder="Enter your time frame" value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)} />
                <label>Location</label>
                <input type="text" placeholder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <label>Awards</label>
                <div className='awards'>
                  {awards.map((award, index) => (
                    <div key={index} className='award'>
                      <input type='text' placeholder='award' value={award} onChange={(e) => handleAwardChange(e, index)} />
                      <button className='remove-award' onClick={() => handleRemoveAwardClick(index)}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                  ))}
                </div>
                <div className="add-award">
                  <button className='add' onClick={() => setAwards([...awards, ''])}><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <div className='education-form-options'>
                  <div>
                    <button className='delete' onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} className='trash-icon'/>Delete</button>
                  </div>
                  <div>
                    <button className='cancel' onClick={handleCancelClick}>Cancel</button>
                    <button className='save' onClick={handleSaveClick}>Save</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Education;