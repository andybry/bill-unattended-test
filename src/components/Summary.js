import React, { PropTypes } from 'react'
import moment from 'moment'

const date = input => (
  <time className="Summary__date" dateTime={input}>
    {moment(input).format('MMMM Do YYYY')}
  </time>
)

const Summary = ({ total, statement }) => (
  <div className="Summary">
    <p>Generated: {date(statement.generated)}</p>
    <p>Due date: {date(statement.due)}</p>
    <p>
      For the period from {date(statement.period.from)}
      <span> to </span>{date(statement.period.to)}
    </p>
    <p className="Summary__total">
      Summary Total: <span className="Summary__cost">£{total}</span>
    </p>
  </div>
)

Summary.propTypes = {
  total: PropTypes.number.isRequired,
  statement: PropTypes.object.isRequired
}

export default Summary
