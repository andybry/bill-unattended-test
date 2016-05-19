import React, { PropTypes } from 'react'
import Loading from './Loading'
import Content from '../containers/Content'

const Bill = ({ isLoading }) => (
  isLoading ? <Loading /> : <Content />
)

Bill.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Bill
