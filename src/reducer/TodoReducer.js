const initialState = {
  text: "",
  todo: [],
  id: 0,
  selected: -1,
};
function TodoReducer(state = initialState, action) {
  switch (action.type) {
    
    case "persist/REHYDRATE":

      return {
        ...action.payload.todo,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, { id: state.id, value: state.text }],
        text: "",
        id: state.id + 1,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((e) => e.id !== action.id),
      };
    case "DELETE_ALL":
      return {
        ...initialState,
      };

    case "SET_EDIT":
      return {
        ...state,
        text: action.selected === state.selected ? "" : state.text,
        selected: action.selected === state.selected ? -1 : action.selected,
      };
    case "CHANGE_EDIT":
      return {
        ...state,
        todo: state.todo.map((e) =>
          e.id === state.selected ? { id: e.id, value: state.text } : e
        ),
        text: "",
        selected: -1,
      };

    default:
      return {
        ...state,
      };
  }
}

export default TodoReducer;
