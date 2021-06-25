import { DeleteForever } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import {Dialog} from '@material-ui/core'
import "../App.css";

function TodoList({
  setEdit,
  setText,
  todo,
  deleteTodo,
  deleteAll,
  selected,
  text,
}) {
  const handleEditText = (value, id) => {
    setText(value);
    setEdit(id);
  };
  const [open,setOpen]=useState(false)
  const handleClose=()=>{
    setOpen(false)
  }
  const handleDeleteAll=()=>{
    deleteAll()
    setOpen(false)
  }

  return (
    <div>
      <ul>
        {todo.map((e) => {
          return (
            <li key={e.id}>
              <Todo
                selected={selected}
                id={e.id}
                value={selected === e.id ? text : e.value}
                handleEditText={handleEditText}
                deleteTodo={deleteTodo}
              />
            </li>
          );
        })}
      </ul>
      {todo.length > 0 && (
        <div>
          <Button variant="contained" color="primary" onClick={()=>setOpen(true)}>
            Delete All
          </Button>
        </div>
      )}
    <Dialog open={open} onClose={handleClose}>
      <h2>Are you sure?</h2>
      <Button variant="contained" color="primary" onClick={handleDeleteAll}>YES</Button>
      <Button variant="contained" color="secondary" onClick={handleClose}>NO</Button>
    </Dialog>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    todo: state.todo.todo,
    selected: state.todo.selected,
    text: state.todo.text,
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
    setEdit: (id) => {
      dispatch({
        type: "SET_EDIT",
        selected: id,
      });
    },
    deleteTodo: (id) => {
      dispatch({
        type: "DELETE_TODO",
        id,
      });
    },
    deleteAll: () => {
      dispatch({
        type: "DELETE_ALL",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

function Todo({ id, value, handleEditText, deleteTodo, selected }) {
  return (
    <div className="todo">
      <b
        style={{ cursor: "pointer" }}
        onClick={() => handleEditText(value, id)}
        className={selected === id ? "selected" : ""}
      >
        {value}
      </b>
      {"   "}
      {/* <DeleteForever onClick={()=>deleteTodo(id)} style={{float:'right'}} /> */}
      <button onClick={() => deleteTodo(id)} style={{ float: "right" }}>
        <DeleteForever />
      </button>
    </div>
  );
}
