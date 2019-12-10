import { connect } from 'react-redux';
import Discover from '../components/Places/Discover';

const mapStateToProps = ({ restaurants }) => ({
  restaurants,
});

export default connect(mapStateToProps)(Discover);
