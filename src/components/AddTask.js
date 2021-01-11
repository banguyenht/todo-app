import React from 'react'
import { connect } from 'react-redux'
import * as types from '../constants/ActionTypes'
import * as actions from '../actions/index'

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      status: '',
    }
  }
  onHideClick = () => {
    this.props.onCloseForm()
  }

  onChange = (event) => {
    var target = event.target
    var name = target.name
    var value = target.value
    console.log('status: ' + value)
    this.setState({
      [name] : value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onAddTask(this.state)
    // this.props.onAddTask(this.state)
  }
  render() {
    return(
      <div className='task-form'>
        <h5 className='title'>
          Adding Task
          <span className='fa fa-times-circle ml-10 close-new' onClick = {this.onHideClick}></span>
        </h5>
        <form onSubmit ={this.onSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <br />
            <input
              name='name' type='text' className='form-control'
              value = {this.state.name}
              onChange = {this.onChange}
            >
            </input>
            <br />
            <lable>Status</lable> 
            <br />
            <select
              className='form-control w150'
              name ='status'
              value={this.state.status}
              onChange = {this.onChange}
            >
              <option value= {true}>Active</option>
              <option value={false}>Deactive</option>
            </select>
            <br />
            <div>
              <span>
                <button className='btn btn-warning' type='submit'>Save</button>
                <button className='btn btn-danger ml-10' type='button'
                  onClick={this.onHideClick}
                >Cancel</button>
              </span>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProp = (state) => {
  return {  }
}

const mapDispatchToProp = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(AddTask)