import React from 'react';
import './App.css';
import TaskControl from './components/TaskControl'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import Demo from './trainning/demo'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      isDisplay: false,
      taskEditting: null
    }
  }

  componentDidMount() {
    if(localStorage && localStorage.getItem('tasks')) {
      const tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({ tasks: tasks })
    }
  }

  randomId() {
    return Math.random().toString(36).substr(2, 9)
  }

  onAddTask = () => {
    this.setState({ isDisplay: true })
  }

  onHideClick = () => {
    this.setState({ isDisplay: false, taskEditting: null })
  }

  onSubmit = (data) => {
    var { tasks } = this.state
    data.id = this.randomId()
    tasks.push(data)
    this.setState({
      tasks: tasks,
      isDisplay: false
    })
      localStorage.setItem('tasks', JSON.stringify(tasks))
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

  render() {
    const { tasks, isDisplay } = this.state
    const formTask = isDisplay ?
      <AddTask onHideClick={this.onHideClick}
        onSubmit={this.onSubmit}
        taskEditting = {this.state.taskEditting}
        /> : ''
    const classForTable =  isDisplay ? 'col col-md-8' : 'col col-md-12'
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
            <TaskList tasks = {tasks} onUpdateStatus={this.onUpdateStatus} onDeleteItem = {this.onDeleteItem}
              onUpdateItem = {this.onUpdateItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
