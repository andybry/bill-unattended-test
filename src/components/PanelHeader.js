import React, { PropTypes } from 'react'

const PanelHeader = ({
  title, total, isOpen, toggle
}) => (
  <div className="PanelHeader" onClick={toggle}>
    <span className="Panel__state">[{isOpen ? '-' : '+'}]</span>
    <h2 className="PanelHeader__title">{title}</h2>
    <p className="PanelHeader__total">Total: £{total}</p>
  </div>
)

PanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default PanelHeader
