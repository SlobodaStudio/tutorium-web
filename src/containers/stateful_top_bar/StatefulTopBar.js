import { connect } from 'react-redux'
import TopBar from 'components/top_bar/TopBar'

const mapStateToProps = (state) => {
  return {
    signedIn: state.signedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const StatefulTopBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)

export default StatefulTopBar
