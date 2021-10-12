import { MicroFE } from './MicroFE';

function App() {

  return (
    <div className="App">
      <h1>Container</h1>
      <div>
        <MicroFE name="Menu" host="http://localhost:3001" />
        <MicroFE name="Orders" host="http://localhost:3002" />
      </div>
    </div>
  );
}

export default App;
