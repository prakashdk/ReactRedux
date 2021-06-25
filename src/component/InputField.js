import React from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
function InputField({ changeEdit,text, setText, addTodo,selected }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(selected){
      changeEdit();
    }
    else{
      addTodo();
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (  
    <form onSubmit={handleSubmit}>
      <TextField
        value={text}
        onChange={handleChange}
        type="text"
        color="primary"
        variant="outlined"
        label="Enter"
      />
    </form>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    text: state.todo.text,
    selected:state.todo.selected>=0,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setText: (text) => {
      dispatch({
        type: "SET_TEXT",
        text,
      });
    },
    addTodo: () => {
      dispatch({
        type: "ADD_TODO",
      });
    },
    editTodo: (value) => {
      dispatch({
        type: "EDIT_TODO",
        value,
      });
    },
    changeEdit: () => {
      dispatch({
        type: "CHANGE_EDIT",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputField);
