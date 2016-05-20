import React, { PropTypes } from 'react'
import PanelHeader from './PanelHeader'
import PanelBody from './PanelBody'

const CallCharges = ({ total, calls, toggle, isOpen }) => (
  <div className="CallCharges">
    <PanelHeader
      title="Call Charges"
      total={total}
      toggle={toggle}
      isOpen={isOpen}
    />
    <PanelBody isOpen={isOpen}>
      <h3 className="CallCharges__header">Calls</h3>
      <ul>
        {calls.map(
          (item, index) => <li className="CallCharges__call" key={index}>
            <div className="CallCharges__left">
              <span className="CallCharges__called">{item.called}</span>
              <span className="CallCharges__duration">{item.duration}</span>
            </div>
            <span className="CallCharges__cost">£{item.cost}</span>
          </li>
        )}
      </ul>
    </PanelBody>
  </div>
)

CallCharges.propTypes = {
  total: PropTypes.number.isRequired,
  calls: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default CallCharges
