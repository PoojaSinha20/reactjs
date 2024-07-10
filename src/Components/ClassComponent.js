import React from "react";

class FirstClassComponent extends React.Component{

    constructor(){
        super();
        this.state={name:"besant",flag:true}
    }

    componentDidMount(){
        console.log("mounted");
    }

    componentDidUpdate(){
        console.log("updated");
    }

    render(){
        var a="hello";
        let child;
        if(this.state.flag){
            child=<SecondClassComponent name={this.state.name}/>
        }
        return(
            <div>
                <h1>{a} this is my first class component {this.state.name}</h1>
                <input value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></input>
                <button onClick={()=>{this.setState({flag:false})}}>update flag</button>
                {child}
            </div>
        )
    }
}

class SecondClassComponent extends React.Component{

    componentWillUnmount(){
        alert("component is getting deleted")
        console.log("component is deleted");
    }

    render(){
        return(
            <div>
                <h1>this is my second class component {this.props.name}</h1>
            </div>
        )
    }
}



export default FirstClassComponent;