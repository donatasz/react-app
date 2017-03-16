import React, {Component} from 'react';
import ApiClient from '../lib/ApiClient';
import debounce from '../lib/debounce';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import ProjectSearch from '../components/ProjectSearch';
import ProjectList from '../components/ProjectList';
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
        ApiClient.get(searchTerm, (response) => {
            this.setState({
                projects: response.projects
            });
        });
    }

    render() {
        const projects = this.state.projects;

        return (
            <div className="page-container">
                <PageHeader/>
                <section className="main-content">
                    <h1>Behance</h1>
                    <p>The leading online platform to showcase & discover creative work. The creative world updates
                        their work in one place to broadcast it widely and efficiently. Companies explore the work and
                        access talent on a global scale.</p>
                    <ProjectSearch getProjects={debounce(this.getProjects, 200)}/>
                    <ProjectList projects={projects}/>
                    <PageFooter/>
                </section>
            </div>
        );
    }
}

export default App;
