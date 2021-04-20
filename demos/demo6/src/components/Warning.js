function Warning(props) {
  if (!props.warn) {
    return null;
  } else {
    return <h6>This is warning: {props.warn} .</h6>;
  }
}
export default Warning;
