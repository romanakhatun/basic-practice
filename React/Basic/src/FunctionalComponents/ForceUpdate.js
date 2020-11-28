import React, { useState } from 'react';

const useForceUpdate = () => useState()[1];

const App = () => {
    const forceUpdate = useForceUpdate();

    console.log('rendering');
    return <button onClick={forceUpdate}>Click To Render</button>;
};

export default App;