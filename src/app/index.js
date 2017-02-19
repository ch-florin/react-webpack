var React = require('react');
var ReactDOM = require('react-dom');

require('./css/index.scss');

//routing
// https://www.youtube.com/watch?v=W6m2qUCYLuk&list=PL4cUxeGkcC9i0_2FF-WhtRIfIJ1lXlTZR&index=15  min:3:50
import{Router,Route, browserHistory, Link} from 'react-router';

//Module requires
var TodoItem=require('./todoitem');
var AddItem = require('./additem');
var About =  require('./about');

//create class for routing
var App = React.createClass({
    render: function(){
        return(
           <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
           </Router> 
        );
    }
});


//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    }, //getInitialState

    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);  
            // each component have own key
        }.bind(this));
        return(
            <div id="todo-list">
                <Link to={'/about'}>About</Link>
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/> 
            </div>
        );
        // <AddItem onAdd={this.onAdd}/> pass the function as a prop
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            //filter - goes on each element in array
            return item !== val;
        });
        this.setState({ //change the state of the component
          todos: updatedTodos //update initial array with updated array
        });
    }, 

    onAdd : function(item){
        var updatedTodos =this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    },

    //lifecycle functions
    componentWillMount : function(){ //function called BEFORE de render method
        console.log('componentWillMount');
    },


    componentDidMount : function(){ //function called AFTER de render method
        console.log('componentDidMount');
        //any grabing of external data
    },

    componentWillUpdate : function(){ //function 
        console.log('componentWillUpdate');
    }



});



//put component into html
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));