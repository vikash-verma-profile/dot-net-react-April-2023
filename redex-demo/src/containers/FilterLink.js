import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions/Index";
import { Link } from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.VisibilityFilter,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onclick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
