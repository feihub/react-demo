function MailBox(props) {
  return (
    <div>
      <h5>Hello!</h5>
      {props.unreadMessages.length > 0 && (
        <h5>You have {props.unreadMessages.length} unread messages.</h5>
      )}
    </div>
  );
}
export default MailBox;
