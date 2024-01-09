import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';
class ErrorBoundary extends Component{
constructor(props){
    super(props);
    this.state={hasError:false}
}
static getDerivedStateFromError(error)
{
    return{hasError:true}
}
render()
{
   if(this.state.hasError===true)
   {
    return<h1>Swr</h1>;
   }
   return this.props.children;
}
}
ErrorBoundary.propTypes={children:PropTypes.node.isRequired}
export default ErrorBoundary;