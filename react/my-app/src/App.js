import React, { useEffect, useState } from 'react';
import ItemList from './components/listItems';
import ToggleText from './components/toogle';

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodoItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ItemList items={todoItems} />
      <ToggleText/>
    </div>
  );
};

export default App;

