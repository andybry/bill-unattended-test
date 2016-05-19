import { connect } from 'react-redux'
import Content from '../components/Content'

const mapStateToProps = state => ({
  bill: state.bill
})

const ContentContainer = connect(mapStateToProps)(Content)

export default ContentContainer
