import React from "react";
import { connect } from "react-redux";
import { edittodo, toggleTodo } from "../reduxstore/actions";
import { deleteTodo } from "../reduxstore/actions";
import IconButton from '@material-ui/core/IconButton';
import { TextField} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
let val="";
const handlesubmit=value=>{
   val=value;
  console.log(value)
}

const Todo = ({ todo, toggleTodo,deleteTodo,edittodo }) => (
  
  <li className="todo-item" >
   
    <span
    >
      <TextField  
      onChange={(e)=>{handlesubmit(e.target.value);todo.value=e.target.value}} defaultValue={todo.value}
                        id="outlined-basic" style={{width:220,fontSize:12}} multiline />
      {/* <input type="text" onChange={(e)=>{handlesubmit(e.target.value);todo.value=e.target.value}} defaultValue={todo.value}/> */}
       {todo && todo.completed ? "  Finish" : " Active"}{" "}      
                                     <IconButton edge="end" aria-label="edit" onClick={() => toggleTodo(todo.id)}>
                                        <AssignmentTurnedInIcon style={{color:"#ffe484"}} />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="edit" onClick={() =>edittodo(todo.id,val)}>
                                        <EditIcon style={{color:"#ffe484"}} />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                                        <DeleteIcon style={{color:"#ffe484"}}/>
                                    </IconButton>
                               
       
     
    </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  {edittodo,deleteTodo,toggleTodo}
)(Todo);
