import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import './work.css';

function Work_experience({ works, setWorks }) {
  const [isAdding, setIsAdding] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [contributions, setContributions] = useState(['']);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleSaveClick = () => {
    if (editingIndex !== null) {
      const newWorks = [...works];
      newWorks[editingIndex] = { companyName, position, timeFrame, contributions };
      setWorks(newWorks);
      setEditingIndex(null);
    } else {
      setWorks([...works, { companyName, position, timeFrame, contributions }]);
    }
    setIsAdding(false);
    setCompanyName('');
    setPosition('');
    setTimeFrame('');
    setContributions(['']);
  };

  const handleWorkClick = (work, index) => {
    setIsAdding(true);
    setCompanyName(work.companyName);
    setPosition(work.position);
    setTimeFrame(work.timeFrame);
    setContributions(work.contributions);
    setEditingIndex(index);
  };

  const handleRemoveContributionClick = (index) => {
    const values = [...contributions];
    values.splice(index, 1);
    setContributions(values);
  };

  const handleCancelClick = () => {
    setIsAdding(false);
    setCompanyName('');
    setPosition('');
    setTimeFrame('');
    setContributions(['']);
    setEditingIndex(null);
  };

  const handleDeleteClick = () => {
    if (editingIndex !== null) {
      const newWorks = [...works];
      newWorks.splice(editingIndex, 1);
      setWorks(newWorks);
      setIsAdding(false);
      setCompanyName('');
      setPosition('');
      setTimeFrame('');
      setContributions(['']);
      setEditingIndex(null);
    }
  };

  return (
    <div className="Experience">
      <h1>Work Experience</h1>
      <div className="works-list">
        {works.map((work, index) => (
          <div className="work" key={index} onClick={() => handleWorkClick(work, index)}>
            <h4>{work.companyName}</h4>
          </div>
        ))}
        <div className="add-work">
          {!isAdding && (
            <button className="add-work-button" onClick={handleAddClick}>
              <div className="add-div"><FontAwesomeIcon icon={faPlus} className="add-icon"/>Work</div>
            </button>
          )}
          {isAdding && (
            <div className="work-form">
              <label>Company</label>
              <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              <label>Position</label>
              <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
              <label>Time Frame</label>
              <input type="text" placeholder="Time Frame" value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)} />
              <label>Contributions</label>
              <div className="contributions">
                {contributions.map((contribution, index) => (
                  <div className="contribution" key={index}>
                    <input value={contribution} onChange={(e) => {
                      const values = [...contributions];
                      values[index] = e.target.value;
                      setContributions(values);
                    }} />
                    <button className="remove" onClick={() => handleRemoveContributionClick(index)}><FontAwesomeIcon icon={faXmark} /></button>
                  </div>
                ))}
              </div>
              <div className="add-contribution">
                <button className="add" onClick={() => setContributions([...contributions, ''])}><FontAwesomeIcon icon={faPlus} /></button>
              </div>
              <div className='work-form-options'>
                <div>
                  <button className='delete' onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} className="trash-icon"/>Delete</button>
                </div>
                <div>
                  <button className='cancel' onClick={handleCancelClick}>Cancel</button>
                  <button className='save' onClick={handleSaveClick}>Save</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Work_experience;