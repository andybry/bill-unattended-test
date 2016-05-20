import { connect } from 'react-redux'
import Content from '../components/Content'
import { togglePanel } from '../actions'

const mapStateToProps = state => ({
  bill: state.bill,
  panels: state.panels
})

const mapDispatchToProps = dispatch => ({
  toggle(panel) {
    dispatch(togglePanel(panel))
  }
})

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer
