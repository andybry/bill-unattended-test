import { connect } from 'react-redux'
import Bill from '../components/Bill'

const mapStateToProps = state => ({
  isLoading: state.isLoading
})

const BillContainer = connect(mapStateToProps)(Bill)

export default BillContainer
