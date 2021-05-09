import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Theme2Context = React.createContext('info');
Theme2Context.displayName = 'Theme2Context';

const Toolbar = () => {
    return <div>
        <ThemedButton />
    </div>;
}

const ThemedButton = () => {
    const context = React.useContext(Theme2Context);
    return <Button variant={context.theme2} onClick={()=>{context.theme2=='dark'?context.setTheme2('info'):context.setTheme2('dark')}}> ContextHookComponent </Button>;
}

const ContextHookComponent = () => {
    const [theme2, setTheme2] = useState('info');
    return <Theme2Context.Provider value={{theme2, setTheme2}}>
                <Toolbar />
            </Theme2Context.Provider>;
}

export default ContextHookComponent;