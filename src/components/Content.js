/* eslint-disable react/jsx-no-bind */
// TODO: remove binding from props to increase performance and
//       re-enable the above rule for this file
import React, { PropTypes } from 'react'
import Summary from './Summary'
import Subscriptions from './Subscriptions'
import SkyStore from './SkyStore'
import CallCharges from './CallCharges'

const isOpen = (panels, panel) => (
  panels[panel] ? panels[panel].isOpen : false
)

const Content = ({ bill, toggle, panels }) => (
  <div className="Content">
    <h1>Statement</h1>

    <Summary
      total={bill.total}
      statement={bill.statement}
    />
    <Subscriptions
      total={bill.package.total}
      subscriptions={bill.package.subscriptions}
      toggle={toggle.bind(this, 'subscriptions')}
      isOpen={isOpen(panels, 'subscriptions')}
    />
    <hr />
    <SkyStore
      total={bill.skyStore.total}
      rentals={bill.skyStore.rentals}
      buyAndKeep={bill.skyStore.buyAndKeep}
      toggle={toggle.bind(this, 'skystore')}
      isOpen={isOpen(panels, 'skystore')}
    />
    <hr />
    <CallCharges
      total={bill.callCharges.total}
      calls={bill.callCharges.calls}
      toggle={toggle.bind(this, 'calls')}
      isOpen={isOpen(panels, 'calls')}
    />
  </div>
)

Content.propTypes = {
  bill: PropTypes.object.isRequired
}

export default Content
