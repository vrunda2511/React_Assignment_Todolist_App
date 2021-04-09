import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import { addTodo } from '../reduxstore/actions';
import "../styles.css"

class Addtodo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { input: "" };
    }
   
    updateInput = input => {
        this.setState({ input });
      };
      handleAddTodo = () => {
        if(this.state.input===""){
          alert("please enter task")
        }else{
          this.props.addTodo(this.state.input);
        this.setState({ input: "" });
        }
      };
      render(){
        return(
            <div  style={{paddingTop:20}} >
                 <Container >
                <Grid container justify="center" alignItems="center" >
                    <Grid item md={9}>
                        <TextField value={this.state.input} onChange={(e)=>this.setState({input:e.target.value})} 
                        id="outlined-basic" fullWidth label="Enter Task" multiline variant="outlined" />
                        
                    </Grid>
                    
                        <Button className="baton" variant="contained"  onClick={this.handleAddTodo}>
                           Add
                        </Button>

                </Grid>
            </Container>
            
            </div>
        )
      }
   
}

export default connect(null,{addTodo})(Addtodo);