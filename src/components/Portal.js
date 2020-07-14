import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function Portal(props) {
    const { children, target } = props;
    debugger
    const el = document.getElementById(target);
    return el ? ReactDOM.createPortal(children, el) : null;
}

Portal.propTypes = {
    target: PropTypes.string.isRequired,
}

export default Portal;