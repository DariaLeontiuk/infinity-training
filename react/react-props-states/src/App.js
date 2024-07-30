//import MouseTracker from './components/MouseTracker';
import TwoWayBindingComponent from './components/TwoWayBinding';
import ParentComponent from './components/InverseDataFlow';
import TodoApp from './components/TODOList';
import StringList from './components/StringList';
import DataTable from './components/DataTable';
import GenericForm from './components/GenericForm';
import InputFocus from './components/InputFocus';

function App() {
  const strings = ['Item 1', 'Item 2', 'Item 3'];
  const data = [
    { name: 'John', age: 28, city: 'New York' },
    { name: 'Anna', age: 22, city: 'London' },
    { name: 'Mike', age: 32, city: 'San Francisco' }
  ];

  return (
    <div className='App'>
      <ParentComponent />
      <TwoWayBindingComponent />
      <TodoApp />

      <h1>String List</h1>
      <StringList items={strings} />

      <h1>Data Table</h1>
      <DataTable data={data} />

      <h1>Generic Form Example</h1>
      <GenericForm>
        <input type="text" placeholder="Enter text" />
        <button type="submit">Submit</button>
      </GenericForm>

      <h1>Input Focus Example</h1>
      <InputFocus />

      {/* <MouseTracker render={({ x, y }) => (
        <h1>The mouse position is ({x}, {y})</h1>
      )} /> */}
    </div>
  );
}

export default App
