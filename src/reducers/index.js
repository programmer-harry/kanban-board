const initialState = {
  tasks: [],
  isLoading: false
}

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_TASK': {
      return {tasks: state.tasks.concat(action.payload)}
    }

    case 'EDIT_TASK_SUCCEEDED': {
      const {payload} = action
      const nextTasks = state.tasks.map(task => {
        if (task.id === payload.task.id) {
          return payload.task
        }

        return task
      })

      return {
        ...state,
        tasks: nextTasks
      }
    }

    /*
     * Dispatched when a request is initiated. Typically used to
     * render a loading indicator (which you’ll do in this section).
     */
    case 'FETCH_TASKS_STARTED': {
      return {
        ...state,
        isLoading: true
      }
    }

    /*
     * Dispatched when a request is completed successfully. Takes data
     * from the response body and loads it into the store. Also
     * dispatched when a request fails for any reason, such as a network
     * failure or a response with a non-200 status code. Payloads
     * often include an error message from the server.
     */
    case 'FETCH_TASKS_SUCCEEDED': {
      return {
        ...state,
        isLoading: false,
        tasks: action.payload.tasks,
      }
    }

    case 'CREATE_TASK_SUCCEEDED': {
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.task)
      }
    }

    default: {
      return state
    }
  }
}
