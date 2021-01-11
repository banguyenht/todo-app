import React, { Component } from 'react'
import * as actions from '../actions/index'
import { connect } from 'react-redux'

class TaskItem extends Component {
  onClickEdit = () => {
    this.props.onOpenForm()
  };

  onUpdateStatus = (task_id) => {
    this.props.onUpdateStatus(task_id)
  }

  render() {
    const task = this.props.task
    console.log('task item: ' + this.props.task.status)
    const className = task.status === true ? 'active' : 'deactive'
    return(
      <tr>
        <th scope="row">{this.props.index + 1}</th>
        <td>{ task.name }</td>
        <td>
          <span>
            <button className={ className } onClick = { this.onUpdateStatus(task.id) }>
              { task.status ? 'Deactive' : 'Active' }</button>
          </span>
        </td>
        <td>
          <button className='btn btn-danger ml-10' onClick = { this.onClickEdit }>Edit</button>
          <button className='btn btn-danger ml-10'>Delete</button>
        </td>
      </tr>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    isDisplayForm: state.isDisplayForm
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    onOpenForm: () => {
      dispatch(actions.openForm())
    },
    onUpdateStatus: (task_id) => {
      // dispatch(actions.updateStatus(task_id))
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(TaskItem)