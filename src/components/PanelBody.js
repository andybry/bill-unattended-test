import React, { PropTypes } from 'react'

const PanelBody = ({ children, isOpen }) => (
  <div className="PanelBody">
    {isOpen ? children : ''}
  </div>
)

PanelBody.propTypes = {
  children: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default PanelBody
