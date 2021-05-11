import React, { useState, useDebugValue } from "react";

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(true);
  
    // ...
  
    // 在开发者工具中的这个 Hook 旁边显示标签
    // e.g. "FriendStatus: Online"
    //useDebugValue(isOnline ? 'Online' : 'Offline');
    let date = new Date();
    useDebugValue(date, date => date.toDateString());
  
    return isOnline;
  }

const Example6 = () => {
  let isOnline = useFriendStatus('123');
  return <div>This is Example6 : { isOnline }</div>;
}

export default Example6;
