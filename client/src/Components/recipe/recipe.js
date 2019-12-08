import React from "react";

export default class Recipe extends React.Component{
    state={
        id:""
    }
    id = this.props.match.id

    renderingRecioe(){

    }

    render(){
        
        return(
            <>
            <p>Recipe</p>
            </>
        )
    }
}