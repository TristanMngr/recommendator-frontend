import * as React from 'react';
class ModuleList extends React.Component {
    state = {
        modules: [],
        isLoading: false
    };

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('http://localhost:8080/modules')
            .then(response => response.json())
            .then(data => this.setState({modules: data, isLoading: false}));
    }
    render() {
        const {modules, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <div>
                <h2>Module List</h2>
                {modules.map((module) =>
                    <div key={module.id}>
                        {module.name}
                    </div>
                )}
            </div>
        );
    }
}
export default ModuleList;