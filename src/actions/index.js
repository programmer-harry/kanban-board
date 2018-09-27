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

function editTaskSucceeded(task) {
  return {
    type: 'EDIT_TASK_SUCCEEDED',
    payload: {
      task
    }
  }
}

function getTaskById(tasks, id) {
  return tasks.find(task => task.id === id)
}

export function editTask(id, params = {}) {
  return (dispatch, getState) => {
    const task = getTaskById(getState().tasks.tasks, id)
    const updatedTask = Object.assign({}, task, params)
    api.editTask(id, updatedTask)
      .then(res => dispatch(editTaskSucceeded(res.data)))
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
