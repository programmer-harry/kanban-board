import React, { Component } from 'react';
import { connect } from "react-redux";
import TasksPage from './components/TasksPage';

class App extends Component {
  onCreatetask = ({ title, description }) => {
    this.props.dispatch({
      type: 'CREATE_TASK',
      payload: {
        title,
        description
      }
    })
  }
  render() {
    console.log('props from App: ', this.props) /* {dispatch: function() {}, tasks: []} */
    return (
      <div className="main-content">
        <TasksPage
          tasks={this.props.tasks}
          onCreatetask={this.onCreatetask}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps)(App);
