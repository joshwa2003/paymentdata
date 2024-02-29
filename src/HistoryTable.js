import React from 'react'
const HistoryTable = ({details}) => {
  return (
    <div className="details">
        <table class="table table-striped">
          <thead class="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody className="table-striped">
            {
              details.sort((a,b) => a.date < b.date ? 1 : -1).map((details,index) => (
                <tr>
                
                  <td>{index + 1}</td>
                  <td>{details.name}</td>
                  <td>{details.amount}</td>
                  <td>{details.date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
  )
}

export default HistoryTable
