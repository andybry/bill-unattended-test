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
      <h3>Subscriptions</h3>
      <ul>
        {subscriptions.map(
          subscription => <li className="Subscriptions__subscription" key={subscription.name}>
            {subscription.type} -
            {' '}
            {subscription.name}
            {' '}
            £{subscription.cost}
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
