import React from 'react';

const ProjectSearch = (props) => {

    return (
        <div className="project-search">
            <input className="project-search__input" onChange={(event) => props.getProjects(event.target.value)} type="text" placeholder="Search for projects..."/>
        </div>
    );

};

export default ProjectSearch;
