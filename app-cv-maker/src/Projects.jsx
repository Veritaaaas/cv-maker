import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import './projects.css';

function Projects({ projects, setProjects }) {
  const [isAdding, setIsAdding] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [descriptions, setDescriptions] = useState(['']);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleDescriptionChange = (e, index) => {
    const values = [...descriptions];
    values[index] = e.target.value;
    setDescriptions(values);
  };

  const handleRemoveDescriptionClick = (index) => {
    const values = [...descriptions];
    values.splice(index, 1);
    setDescriptions(values);
  };

  const handleCancelClick = () => {
    setIsAdding(false);
    setProjectTitle('');
    setDescriptions(['']);
    setEditingIndex(null);
  };

  const handleSaveClick = () => {
    if (editingIndex !== null) {
      const newProjects = [...projects];
      newProjects[editingIndex] = { projectTitle, descriptions };
      setProjects(newProjects);
      setEditingIndex(null);
    } else {
      setProjects([...projects, { projectTitle, descriptions }]);
    }
    setIsAdding(false);
    setProjectTitle('');
    setDescriptions(['']);
  };

  const handleDeleteClick = () => {
    if (editingIndex !== null) {
      const newProjects = [...projects];
      newProjects.splice(editingIndex, 1);
      setProjects(newProjects);
      setIsAdding(false);
      setProjectTitle('');
      setDescriptions(['']);
      setEditingIndex(null);
    }
  };

  const handleProjectClick = (project, index) => {
    setIsAdding(true);
    setProjectTitle(project.projectTitle);
    setDescriptions(project.descriptions);
    setEditingIndex(index);
  };

  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project" key={index} onClick={() => handleProjectClick(project, index)}>
            <h4>{project.projectTitle}</h4>
          </div>
        ))}
      </div>
      <div className="add-project">
        {!isAdding && (
          <button className="add-project-button" onClick={handleAddClick}>
            <div className="add-div"><FontAwesomeIcon icon={faPlus} className="add-icon"/>Project</div>
          </button>
        )}
        {isAdding && (
          <div className='project-form'>
            <label>Title</label>
            <input type='text' placeholder='Project Title' value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
            <label>Descriptions</label>
            <div className='descriptions'>
                {descriptions.map((description, index) => (
                <div key={index} className='description'>
                    <input type='text' placeholder='Project Description' value={description} onChange={(e) => handleDescriptionChange(e, index)} />
                    <button className='remove-description' onClick={() => handleRemoveDescriptionClick(index)}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                ))}
            </div>
            <div className='add-description'>
              <button className='add' onClick={() => setDescriptions([...descriptions, ''])}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div className='project-form-options'>
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
    </div>
  )
}

export default Projects;