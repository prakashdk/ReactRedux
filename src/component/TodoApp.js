import React from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";
import { connect } from "react-redux";
function TodoApp() {
  return (
    <div>
      <h1>Todo App</h1>
      <InputField />
      <TodoList />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    todo: state.todo.todo,
    id: state.todo.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    restore: () => {
      dispatch({
        type: "BACK_UP",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
