import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from "../actiontype";

const initialstate = {
  alltodos: [],
  todosbyID: []
};

export default function Todo(state = initialstate, action) {
  console.log(state, action.type);
  switch (action.type) {
    case ADD_TODO: {
      const { id, value } = action.payload;
      return {
        ...state,
        alltodos: [...state.alltodos, id],
        todosbyID: {
          ...state.todosbyID,
          [id]: {
            value,
            completed: false
          }
        }
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todosbyID: {
          ...state.todosbyID,
          [id]: {
            ...state.todosbyID[id],
            completed: !state.todosbyID[id].completed
          }
        }
      };
    }
    case EDIT_TODO: {
      const { id, value } = action.payload;
      return {
        ...state,
        todosbyID: {
          ...state.todosbyID,
          [id]: {
            ...state.todosbyID[id],
            completed: false,
            value: value
          }
        }
      };
    }
    case DELETE_TODO: {
      console.log("delete", action.payload);
      var id = action.payload.id;
      const index = state.alltodos.indexOf(id);
      console.log("delete11", id);

      // var arr=state.alltodos.slice();
      // var arr1=[22,77];
      // console.log("i",index);
      // console.log("arri",arr.indexOf(2));
      // console.log("arri",arr1.indexOf(2));

      console.log("st", state);

      return {
        ...state,

        todosbyID: {
          ...state.todosbyID,
          alltodos: state.alltodos.splice(index, 1)
          // [id]:{
          //     ...state.todosbyID[id],
          //   todosbyID:delete state.todosbyID.id,

          // }
        }
      };
    }

    default:
      console.log("aas" + state);
      return state;
  }
}
