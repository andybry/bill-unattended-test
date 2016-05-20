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
      <h3>Rental</h3>
      <ul>
        {rentals.map(
          rental => <li className="SkyStore__rental" key={rental.title}>
            {rental.title}
            {' '}
            £{rental.cost}
          </li>
        )}
      </ul>
      <h3>Buy and Keep</h3>
      <ul>
        {buyAndKeep.map(
          item => <li className="SkyStore__buyAndKeep" key={item.title}>
            {item.title}
            {' '}
            £{item.cost}
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
