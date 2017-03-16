import React, {Component} from 'react';
import ApiClient from '../lib/ApiClient';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import ProjectList from '../components/ProjectList';
import '../assets/styles/main.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: []
        };
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        ApiClient.get('car', (response) => {
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
                    <p>The leading online platform to showcase & discover creative work. The creative world updates their work in one place to broadcast it widely and efficiently. Companies explore the work and access talent on a global scale.</p>
                    <ProjectList projects={projects}/>
                    <PageFooter/>
                </section>
            </div>
        );
    }
}

export default App;
