import React, { useReducer, useState } from 'react'

import Event from './event'

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch(
      {
        type: 'CREATE_EVENT',
        title,
        body
      }
    )
    setTitle('')
    setBody('')
  }
  return (
    <div className="container-fluid">
      <h4>event create form</h4>
      <form>
        <div className="from-group">
          <label htmlFor="fromEventitle">title</label>
          <input className="form-control" id="fromEventitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="fromEventBody">body</label>
          <textarea className="form-control" id="fromEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={addEvent}>create event</button>
        <button className="btn btn-danger">delete all events</button>
      </form>

      <h4>event</h4>
      <table className="table table-hover table-info">
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((event, index) => (<Event key = {index} event = {event} dispatch = {dispatch}/>))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
