import React from "react";
import "./App.css";
import Addtodo from "./component/Addtodo";
import ListTodos from "./component/ListTodos";
import VisibilityFilters from "./component/VisibilityFilters";
import CardHeader from "@material-ui/core/CardHeader";
import { Grid, Paper } from "@material-ui/core";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <CardHeader
        title="Todo App"
        style={{ background: "#ffe484", fontWeight: 900 }}
      ></CardHeader>
      <Grid container justify="center" style={{ marginTop: "5rem" }}>
        <Grid item xs={12} md={9} lg={5}>
          <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <Addtodo />
            <ListTodos />
            <VisibilityFilters />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
