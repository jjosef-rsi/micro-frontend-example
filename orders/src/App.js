import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './services/message-bus';

function App() {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    function handleOrder(item) {
      const newOrderItems = [...orderItems, item];
      setOrderItems(newOrderItems);
    };

    const sub = subscribe('orders', handleOrder);
    return () => {
      unsubscribe('orders', sub);
    }
  });

  return (
    <div className="orders">
      <h1>Orders</h1>
      { orderItems.length ? 
        <p>You've ordered {orderItems.length} {orderItems[0]}</p>
        :
        <p>You haven't ordered anything!</p>
      }
    </div>
  );
}

export default App;
