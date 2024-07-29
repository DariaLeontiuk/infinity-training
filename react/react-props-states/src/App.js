import MouseTracker from './components/MouseTracker';
import TwoWayBindingComponent from './components/TwoWayBinding';
import ParentComponent from './components/InverseDataFlow';

function App() {
  return (
    <div className='App'>
      <ParentComponent />
      <TwoWayBindingComponent />
      <MouseTracker render={({ x, y }) => (
        <h1>The mouse position is ({x}, {y})</h1>
      )} />
    </div>
  );
}

export default App
