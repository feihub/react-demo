function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
  
    // ...
  
    // 在开发者工具中的这个 Hook 旁边显示标签
    // e.g. "FriendStatus: Online"
    //useDebugValue(isOnline ? 'Online' : 'Offline');
    useDebugValue(date, date => date.toDateString());
  
    return isOnline;
  }

const Example6 = () => {
    return <useFriendStatus/>;
}

export default Example6;
