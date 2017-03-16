import React, { Component } from 'react';
import ListItem from '../components/ListItem';

class ProjectList extends Component {

    render() {

        const props = this.props;

        return (

        <ul className="behance-projects">
            {props.projects.map((item) =>
                <ListItem key={item.id} item={item} />
            )}
        </ul>


        );
    }
}

export default ProjectList;
