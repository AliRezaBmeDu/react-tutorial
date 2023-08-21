import TodosLogic from 'components/TodosLogic';
import Header from 'components/Header'
import React from 'react';

const TodoApp = () => {
  return (
    <React.Fragment>
      <Header />
      <TodosLogic />
    </React.Fragment>
  );
};
export default TodoApp;
