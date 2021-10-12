import { MicroFE } from './MicroFE';

function App() {

  return (
    <div className="App">
      <MicroFE name="Menu" host="http://localhost:3001" />
      <MicroFE name="Orders" host="http://localhost:3002" />
    </div>
  );
}

export default App;
