import TodosLogic from 'components/TodosLogic';
import Header from 'components/Header'
import React from 'react';
import Navbar from './Navbar';

const TodoApp = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <TodosLogic />
    </React.Fragment>
  );
};
export default TodoApp;
