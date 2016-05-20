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
    <h1 className="Content__header">Statement</h1>

    <Summary
      total={bill.total}
      statement={bill.statement}
    />
    <hr className="Content__divider" />
    <Subscriptions
      total={bill.package.total}
      subscriptions={bill.package.subscriptions}
      toggle={toggle.bind(this, 'subscriptions')}
      isOpen={isOpen(panels, 'subscriptions')}
    />
    <hr className="Content__divider" />
    <SkyStore
      total={bill.skyStore.total}
      rentals={bill.skyStore.rentals}
      buyAndKeep={bill.skyStore.buyAndKeep}
      toggle={toggle.bind(this, 'skystore')}
      isOpen={isOpen(panels, 'skystore')}
    />
    <hr className="Content__divider" />
    <CallCharges
      total={bill.callCharges.total}
      calls={bill.callCharges.calls}
      toggle={toggle.bind(this, 'calls')}
      isOpen={isOpen(panels, 'calls')}
    />
    <hr className="Content__divider" />
  </div>
)

Content.propTypes = {
  bill: PropTypes.object.isRequired
}

export default Content
