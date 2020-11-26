import React from 'react';
import './App.css';
import TaskControl from './components/TaskControl'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import { connect } from 'react-redux'
import * as actions from './actions/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskEditting: null
    }
  }

  onUpdateStatus = (taskId) => {
    var index = this.findIndex(taskId)
    var tasks = this.state.tasks
    if(index != -1) {
      tasks[index].status = !tasks[index].status
      this.setState({tasks: tasks})
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }


  onDeleteItem = (taskId) => {
    var index = this.findIndex(taskId)
    var tasks = this.state.tasks
    if(index != -1) {
      tasks.splice(index, 1)
      this.setState({task: tasks})
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  onUpdateItem = (taskId) => {
    var index = this.findIndex(taskId)
    var tasks= this.state.tasks
    if(index != -1) {
      this.setState({ isDisplay: true })
      this.setState({taskEditting: tasks[index]})
    }
  }

  findIndex = (id) => {
    var tasks = this.state.tasks;
    var result = -1
    tasks.forEach((task, index) => {
      if(task.id === id) {
        result = index
      }
    })
    return result
  }

  onAddTask = () => {
    console.log()
  }

  render() {
    const { tasks } = this.state
    const formTask = this.props.isDisplayForm
      <AddTask onHideClick={this.onHideClick}
        onSubmit={this.onSubmit}
        taskEditting = {this.state.taskEditting}
        /> : ''
    const classForTable =  this.props.is_open ? 'col col-md-8' : 'col col-md-12'
    return (
      <div className="container">
        <h4 className='text-center'>TODO APP</h4>
        <div className='row'>
          <div className='col col-md-4'>
            { formTask }
          </div>
          <div className={classForTable}>
            <button className='btn btn-primary' onClick={ this.onAddTask }>Add Task</button>
            <TaskControl />
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    isDisplayForm: state.isDisplayForm
  }
}

const mapDispatchToProp = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
