import React, { PropTypes } from 'react'
import PanelHeader from './PanelHeader'
import PanelBody from './PanelBody'

const Subscriptions = ({ total, subscriptions, toggle, isOpen }) => (
  <div className="Subscriptions">
    <PanelHeader
      title="Package"
      total={total}
      toggle={toggle}
      isOpen={isOpen}
    />
    <PanelBody isOpen={isOpen}>
      <h3 className="Subscriptions__header">Subscriptions</h3>
      <ul>
        {subscriptions.map(
          subscription => <li className="Subscriptions__subscription" key={subscription.name}>
            <div className="Subscriptions__left">
              <span className="Subscriptions__name">{subscription.name}</span>
              {' '}
              <span className="Subscriptions__type">({subscription.type})</span>
            </div>
            <span className="Subscriptions__cost">£{subscription.cost}</span>
          </li>
        )}
      </ul>
    </PanelBody>
  </div>
)

Subscriptions.propTypes = {
  total: PropTypes.number.isRequired,
  subscriptions: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Subscriptions
