import React, { Component } from 'react';
import { connect } from "react-redux";
import TasksPage from './components/TasksPage';
import {createTask, editTask} from './actions'

class App extends Component {
  onCreatetask = ({ title, description }) => {
    this.props.dispatch(createTask({title, description}))
  }

  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, {status}))
  }

  render() {
    return (
      <div className="main-content">
        <TasksPage
          tasks={this.props.tasks}
          onCreatetask={this.onCreatetask}
          onStatusChange={this.onStatusChange}
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
