import React, { PropTypes } from 'react'
import classnames from 'classnames'

const PanelBody = ({ children, isOpen }) => (
  <div className={classnames('PanelBody', { isOpen })}>
    {isOpen ? children : ''}
  </div>
)

PanelBody.propTypes = {
  children: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default PanelBody
