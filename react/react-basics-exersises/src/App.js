import MyComponent from "./components/mounting-lifecycle-ex";
import Counter from "./components/Counter";
import MyClass from "./components/react-basics-ex";
import ColorChanger from "./components/ColorChanger";
import DisplayWithExtraProp from "./components/HOC";
import HOCRef from "./components/HOCRef";
import HelloWithLogging from "./components/SimpleHOC";
import MyComponentLifecycle from "./components/Lifecycle";

function App() {
  return (
    <div>
      <MyComponent />
      <Counter />
      <MyClass />
      <ColorChanger />
      <DisplayWithExtraProp />
      <HOCRef />
      <HelloWithLogging name="Sara" />
      <MyComponentLifecycle />
    </div>
  );
}

export default App;
