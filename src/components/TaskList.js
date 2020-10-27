import React, { Component } from 'react'

export default class TaskList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const taskElements = this.props.tasks.map((task, index) => {
      return(<TaskItem key = { index } task = {task} index = {index}
        onUpdateStatus = {this.props.onUpdateStatus}
        onDeleteItem = { this.props.onDeleteItem }
        onUpdateItem = {this.props.onUpdateItem}
      />)
    })
    return(
      <div>
        <table className="table table-bordered mt-30">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan='2' className='text-center'>
                <input type='text'></input>
              </td>
              <td>
                <select className='form-control'>
                  <option>All</option>
                  <option>Active</option>
                  <option>Deactive</option>
                </select>
              </td>
              <td></td>
            </tr>
            { taskElements }
          </tbody>
        </table>
      </div>
    )
  }
}

class TaskItem extends Component {
  constructor(props) {
    super(props)
  }

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }

  onDeleteItem = () => {
    this.props.onDeleteItem(this.props.task.id)
  }

  onUpdateItem = () => {
    this.props.onUpdateItem(this.props.task.id)
  }
  render() {
    const task = this.props.task
    
    const className = task.status === true ? 'active' : 'deactive'
    return(
      <tr>
        <th scope="row">{this.props.index + 1}</th>
        <td>{ task.name }</td>
        <td>
          <span>
            <label className={ className } onClick={this.onUpdateStatus}>
              { task.status === true ? 'Active' : 'Deactive' }</label>
          </span>
        </td>
        <td>
          <button className='btn btn-danger ml-10' onClick = { this.onUpdateItem }>Edit</button>
          <button className='btn btn-danger ml-10' onClick = { this.onDeleteItem }>Delete</button>
        </td>
      </tr>
    )
  }
}