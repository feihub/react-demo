function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
  
    // ...
  
    // 在开发者工具中的这个 Hook 旁边显示标签
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline');
  
    return isOnline;
  }

const ExampleCount6n = () => {
    return <useFriendStatus/>;
}

export default ExampleCount6n;
