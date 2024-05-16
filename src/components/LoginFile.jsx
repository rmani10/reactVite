import PropTypes from "prop-types";

function LoginFile(props) {
  const welcomeMsg = <h2 className="welcome-msg"> welcome {props.username}</h2>;
  const errorMsg = <h2 className="error-msg">Please log in</h2>;
  return props.isloggedIn ? welcomeMsg : errorMsg;
}

LoginFile.propTypes = {
  isloggedIn: PropTypes.bool,
  username: PropTypes.string,
};

LoginFile.defaultProps = {
  isloggedIn: false,
  username: "Guest",
};

export default LoginFile;
