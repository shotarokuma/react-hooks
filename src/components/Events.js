import React ,{useContext}from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'


const Events = () => {
  const { state } = useContext(AppContext)
  return (
    <>
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
            state.map((event, index) => (<Event key={index} event={event}/>))
          }
        </tbody>
      </table>
    </>
  )
}

export default Events