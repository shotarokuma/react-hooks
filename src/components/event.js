import React from 'react'

import { DELETE_EVENT } from '../actions/'

const Event = ({ dispatch, event }) => {
  const handleClickDeleteButton = () => {
    const result = window.confirm(`Are you OK for delting ${event.id} event?`)
    if (result) dispatch({ type: DELETE_EVENT, id: event.id })
  }
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>delete</button></td>
    </tr>
  )
}
export default Event