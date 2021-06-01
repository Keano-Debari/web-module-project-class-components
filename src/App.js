import React from 'react';
import Form from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  toggleItem = (id) => {
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });

    this.setState({
      list: newList,
    });
  };

  addItem = (itemname) => {
    this.setState({
      list: [
        ...this.state.list,
        {
          task: itemname,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  clearCompleted = (e) => {
    this.setState({
      list: this.state.list.filter((item) => !item.completed),
    });
  };
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h3>To Do List</h3>
          <Form addItem={this.addItem} />
        </div>
        <TodoList
          clearCompleted={this.clearCompleted}
          toggleItem={this.toggleItem}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
