import React, { Component } from 'react'

class TaskItem extends Component {
  state = {
    editing: false
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
          <button className='btn btn-danger ml-10'>Edit</button>
          <button className='btn btn-danger ml-10'>Delete</button>
        </td>
      </tr>
    )
  }
}

export default TaskItem