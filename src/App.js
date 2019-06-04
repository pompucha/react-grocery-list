import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: [
        { id:1, name: "ramen", complete: true, },
        { id:2, name: "OJ", complete: true, },
        { id:3, name: "chickens", complete: false, },
        { id:4, name: "cow", complete: false, },
        { id:5, name: "tortillas", complete: true, },
      ]
    };

    this.addItem = this.addItem.bind(this);
  }

  getUniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }
 
   addItem(name) {
       const todo = { name, id: this.getUniqueId(), complete: false };
       this.setState({ todos: [todo, ...this.state.todos], });
   };
 
   handleClick = (id) => {
     this.setState({
       todos: this.state.todos.map( todo => {
           if (todo.id === id) {
             return {
               ...todo,
               complete: !todo.complete,
             }
           }
           return todo;
       })
     })
   }
 
   render () {
     return (
       <div>
         <TodoForm addItem={this.addItem} />
         <List name="Todo List" items={this.state.todos} todoClick={this.handleClick} />
       </div>
     )
   }







}
export default App;
