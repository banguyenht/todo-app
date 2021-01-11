import React, { Component } from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux'

class TaskList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const taskElements = this.props.tasks.map((task, index) => {
      return(<TaskItem key = { index } task = {task} index = {index}/>)
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

const mapStateToProps = (state) => {
  return { tasks: state.tasks }
}

export default connect(mapStateToProps, null)(TaskList)