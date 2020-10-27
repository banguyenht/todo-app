import React from 'react'
import TaskSearchController from './TaskSearchController'
import TaskSortController from './TaskSortController'

export default class TaskControl extends React.Component {
  render() {
    return(
      <div className='row'>
        <div className='col col-md-6'>
          <TaskSearchController />
        </div>
        <div className='col col-md-6'>
          <TaskSortController />
        </div>
      </div>
    )
  }
}