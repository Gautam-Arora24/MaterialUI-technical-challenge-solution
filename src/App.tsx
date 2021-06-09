import * as React from 'react';
import Switch from './Switch/Switch';

// You can render multiple Switch elements here
// to showcase different props combinations
function App() {
  return (
    <>
      <Switch name="Switch1" checked={false} description="A switch with initial OFF state" />
      <Switch name="Switch2" checked={true} description="A switch with initial ON state" />
      <Switch name="Switch3" isDisabled={true} description="A disabled switch" />
    </>
  );
}

export default App;
