import React, { Component } from 'react';

class TodoList extends Component {
    state = {
        value:'',
        text:'this is state',
        post:[]
    }
    changeHandle=(e)=>{
        this.setState({
            value:e.target.value
         })
    }
    submitHandle=(e)=>{
        e.preventDefault()
        if(this.state.value !== ""){
            var item =[...this.state.post,this.state.value]
            this.setState({
                post:item,
                text:'This is state',
                value:''
             })
        }else{
            alert('Please Enter valid value')
        }
    }
    removeHandle=(i)=>{
        this.setState({
            post:[...this.state.post.slice(0,i),...this.state.post.slice(i +1)]
        })
    }
    editHandle=(i)=>{
        var prompt = window.prompt('UpDATE VALUE...')
        var item = this.state.post;
        item[i] = prompt;
        this.setState({
            post:item
        })
    }
    render() {
        
        var ulStyle={
            listStyle:'none',
            fontSize:24,
            padding:10,
            backgroundColor:'#fff', 
        }
        var set=()=>{
            this.setState({
                text:'this is updated state'
            })
        };
        return(
            <div>
                <h1 onClick={set}>{this.state.text}</h1>
                <h1 className="text-center" style={{fontSize:45,padding:15,color:'#fff'}}>TODO List</h1>
                <form onSubmit={this.submitHandle}>
                    <div className="form-group col-md-12"> 
                        <div className="container" style={{fontSize:25,marginTop:20}}>
                            <div className="col-md-8 col-md-offset-2">
                                <label htmlFor="" style={{color:'#fff'}}>Add Task:</label>
                                <input 
                                type="text" 
                                style={{height:40}} 
                                placeholder="Enter Your Task..." 
                                className="form-control col-md-8" 
                                onChange={this.changeHandle}
                                value={this.state.value}
                                />
                                <button 
                                style={{height:40,fontSize:20,marginTop:30}} 
                                className="btn col-md-12">Save Task</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="col-md-12"> 
                    {
                        this.state.post.map((v,i)=>{
                        return (
                            <div className="container" key={i}>
                                <ul style={ulStyle} className="col-md-8  col-md-offset-2">
                                    <li>
                                        {v}
                                        <button type="button"
                                        onClick={()=>this.editHandle(i)}
                                        style={{marginLeft:20}}  
                                        className="btn-danger pull-right btn-primary btn">Edit</button>
                                        
                                        <button type="button"
                                        onClick={()=>this.removeHandle(i)}
                                        className="pull-right btn-primary btn">Remove</button>
                                    </li>
                                </ul>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default TodoList;