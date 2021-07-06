import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="container-fluid">
      <h4>event create form</h4>
      <form>
        <div className="from-group">
          <label htmlFor="fromEventitle">title</label>
          <input className="form-control" id="fromEventitle" />
        </div>
        <div>
          <label htmlFor="fromEventBody">body</label>
          <textarea className="form-control" id="fromEventBody" />
        </div>
        <button  className="btn btn-primary">create event</button>
        <button  className="btn btn-danger">delete all events</button>
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
      </table>
    </div>
  )
}

export default App
