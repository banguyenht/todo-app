import React from 'react'

export default class TaskSortController extends React.Component {
  render() {
    return(
      <div className="mt-30">
        <select className='form-control w150'>
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Acrive</option>
          <option>Deactive</option>
        </select>
      </div>
    )
  }
}