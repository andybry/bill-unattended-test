import React, { PropTypes } from 'react'
import * as format from '../utilities/format'

const PanelHeader = ({
  title, total, isOpen, toggle
}) => (
  <div
    aria-role="button"
    aria-pressed={isOpen}
    tabIndex="0"
    className="PanelHeader"
    onClick={toggle}
    onKeyDown={(e) => (e.which === 13 || e.which === 32 ? toggle() : '')}
  >
    <div className="PanelHeader__left">
      <span className="PanelHeader__state">[{isOpen ? '-' : '+'}]</span>
      <h2 className="PanelHeader__title">{title}</h2>
    </div>
    <div className="PanelHeader__right">
      <p className="PanelHeader__total">£{format.price(total)}</p>
    </div>
  </div>
)

PanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default PanelHeader
