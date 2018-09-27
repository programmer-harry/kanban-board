import * as api from '../api'

function createTaskSucceeded(task) {
  return {
    type: 'CREATE_TASK_SUCCEEDED',
    payload: {
      task
    }
  }
}

export function createTask({title, description, status = 'Unstarted'}) {
  return dispatch => {
    api.createTask({title, description, status})
      .then(response => dispatch(createTaskSucceeded(response.data)))
  }
}

export function editTask(id, params = {}) {
  return {
    type: 'EDIT_TASK',
    payload: {
      id,
      params
    }
  }
}

export function fetchTasksSucceded(tasks) {
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: { tasks }
  }
}

export function fetchTasks() {
  return dispatch => {
    api.fetchTasks()
      .then(response => dispatch(fetchTasksSucceded(response.data)))
  }
}
