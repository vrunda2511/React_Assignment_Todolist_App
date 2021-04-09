import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../reduxstore/selectors";
import { Container, Grid } from "@material-ui/core";

const ListTodo = ({ todos }) => (
  <div>
    <Container>
  
      <Grid container justify="center">
        <Grid item md={9}>
          <ul
            className="todo-list"
            style={{ listStyleType: "none", textAlign: "center" }}
          >
            {todos && todos.length
              ? todos.map((todo, index) => {
                  return <Todo key={`todo-${todo.id}`} todo={todo} />;
                })
              : "No todos!"}
          </ul>
         
        </Grid>
      
      </Grid>
      <ul style={{ listStyleType: "none", textAlign: "left" }}>
             {todos.length} Tasks
          </ul>
    </Container>
    
  </div>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(ListTodo);
