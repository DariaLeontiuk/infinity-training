import DataDisplayWithLoader from "./components/DataLoader";
import Circle from "./components/Circle";
import useLocalStorage from "./components/useLocalStorage";


const App = () => {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <Circle radius={50} color={'black'}/>
      <h1>My App</h1>
      <DataDisplayWithLoader />
    </div>
  );
};

export default App;