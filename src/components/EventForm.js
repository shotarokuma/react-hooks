import React, {useState} from 'react'
import { CREATE_EVENT,DELETE_ALL_EVENT} from '../actions/'

const EventForm = ({state, dispatch}) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({type: CREATE_EVENT ,title,body})
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('Are you OK for delting all events?')
    if (result) dispatch({type:DELETE_ALL_EVENT,})
  }

  const uncreatable = title === '' || body === ''

  const undeletable = state.length === 0

  return (
    <>
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
        <button className="btn btn-primary" onClick={addEvent} disabled={uncreatable}>create event</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={undeletable}>delete all events</button>
      </form>
    </>
  )
}

export default EventForm
