import { publish } from './services/message-bus';

function App() {
  function orderItem(item) {
    console.log('pizza');
    publish('orders', item);
  }

  return (
    <div className="menu">
      <h1>Menu</h1>
      <p><button onClick={() => orderItem('pizza')}>Pizza</button></p>
    </div>
  );
}

export default App;
