function Greeting(props) {
  const UserGreeting = () => {
    return <h1>Hello, Jack!</h1>;
  };
  const GuestGreeting = () => {
    return <h1>Pls login in!</h1>;
  };

  if (props.isLoginIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}
export default Greeting;
