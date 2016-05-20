import React, { PropTypes } from 'react'
import PanelHeader from './PanelHeader'
import PanelBody from './PanelBody'

const SkyStore = ({ total, rentals, buyAndKeep, toggle, isOpen }) => (
  <div className="SkyStore">
    <PanelHeader
      title="Sky Store"
      total={total}
      toggle={toggle}
      isOpen={isOpen}
    />
    <PanelBody isOpen={isOpen}>
      <h3 className="SkyStore__header">Rental</h3>
      <ul>
        {rentals.map(
          rental => <li className="SkyStore__rental" key={rental.title}>
            <span className="SkyStore__title">{rental.title}</span>
            <span className="SkyStore__cost">£{rental.cost}</span>
          </li>
        )}
      </ul>
      <h3>Buy and Keep</h3>
      <ul>
        {buyAndKeep.map(
          item => <li className="SkyStore__buyAndKeep" key={item.title}>
            <span className="SkyStore__title">{item.title}</span>
            <span className="SkyStore__cost">£{item.cost}</span>
          </li>
        )}
      </ul>
    </PanelBody>
  </div>
)

SkyStore.propTypes = {
  total: PropTypes.number.isRequired,
  rentals: PropTypes.array.isRequired,
  buyAndKeep: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default SkyStore
