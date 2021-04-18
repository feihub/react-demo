function ActionLink() {
  function handleClick(e) { // SyntheticEvent
    e.preventDefault();
    alert("The link was clicked.");
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
// nativeEvent
export default ActionLink;
