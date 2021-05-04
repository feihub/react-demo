export default function Messages(props) {
  return (
    <div className="container">
      <h5>Your friend`s ID is {props.match.params.id}.</h5>
      <p>You have {props.match.params.count} messages unread.</p>
    </div>
  );
}
