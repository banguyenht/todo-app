import React from 'react'
import '../search.css'

export default class TaskSearchController extends React.Component {
  render() {
    return(
      <div className='input-group mt-30'>
        <input type='text' placeholder='Key word..' className='form-control'>
        </input>
        <span>
            <button className='btn btn-primary'>Search</button>
          </span>
      </div>
    )
  }
}