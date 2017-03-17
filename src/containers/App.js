import React, {Component} from 'react';
import ApiClient from '../lib/ApiClient';
import debounce from '../lib/debounce';
import ProjectHeader from '../components/ProjectHeader';
import ProjectSearch from '../components/ProjectSearch';
import ProjectList from '../components/ProjectList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../assets/styles/main.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: []
        };

        this.getProjects = this.getProjects.bind(this);
    }

    componentWillMount() {
        this.getProjects();
    }

    getProjects(searchTerm = 'cars') {
        ApiClient.getProjects(searchTerm, (response) => {
            this.setState({
                projects: response.projects
            });
        });
    }

    render() {
        const projects = this.state.projects;

        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <ProjectHeader/>
                <ProjectSearch getProjects={debounce(this.getProjects, 200)}/>
                <ProjectList projects={projects}/>
            </ReactCSSTransitionGroup>
        );
    }
}

export default App;
