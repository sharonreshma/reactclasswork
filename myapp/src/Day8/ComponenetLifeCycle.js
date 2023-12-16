import { Component } from "react";

export default class ComponentLifeCycle extends Component{
constructor(props)
{
    super(props);
    this.state={favColor:"yellow"}
}
componentDidMount()
{
    setTimeout(()=>{this.setState({favColor:"blue"})},5000)
}
shouldComponentUpdate()
{
return true
}
getSnapshotBeforeUpdate(prevProps,prevState)
{
    document.getElementById("id1").innerHTML="Previous value "+prevState.favColor;
}
componentDidUpdate()
{
    document.getElementById("id2").innerHTML="Current value "+this.state.favColor;
}
render()
{
    return(
        <div>
            <h1>
                My favourite color is {this.state.favColor}</h1>
                <p id="id1"></p>
                <p id="id2"></p>
            
        </div>
    )
}
}