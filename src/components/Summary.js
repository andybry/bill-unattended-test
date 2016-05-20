import React, { PropTypes } from 'react'
import moment from 'moment'

const date = input => moment(input).format('MMMM Do YYYY')

const Summary = ({ total, statement }) => (
  <div className="Summary">
    <p>Generated {date(statement.generated)}</p>
    <p>Due date {date(statement.due)}</p>
    <p>
      For the period from {date(statement.period.from)}
      <span> to </span>{date(statement.period.to)}
    </p>
    <p>Summary Total: £{total}</p>
  </div>
)

Summary.propTypes = {
  total: PropTypes.number.isRequired,
  statement: PropTypes.object.isRequired
}

export default Summary
