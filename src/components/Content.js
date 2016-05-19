import React, { PropTypes } from 'react'

const Content = ({ bill }) => (
  <pre className="Content">{JSON.stringify(bill, null, 2)}</pre>
)

Content.propTypes = {
  bill: PropTypes.object.isRequired
}

export default Content
