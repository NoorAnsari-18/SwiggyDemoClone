import React from "react";


class UserClass extends React.Component
{
    constructor(props)
    {
      
        super(props);   // Usage of super(props ) 
        this.state = {     //here state is a Object wherein we can declare multiple State variable.
            // count : 0,
            userInfoData:{
                name:"Dummy",
                location :"Dummy_Location",
            }
        }
        //   console.log(this.props.name +"The Child Constructor is being Called")
    }

    async componentDidMount()
    {
        // {console.log(this.props.name + " The Child ComponentDidMount is being Called")};
        const data = await fetch("https://api.github.com/users/Noor-18");
        const jsonData =await data.json();   // here .json() is a method make sure to undertstnad and remember these.
        console.log(jsonData);
        this.setState({userInfoData :jsonData});
       
    }
        // The ComponentDidUpdate is being called when the stateChanges and the state Varibles changes then only the ComponentDidupdate is being Called.
    componentDidUpdate()
    {
        console.log("Component Did Update is being Called")
    }
    render(){
        const {login ,type,avatar_url} = this.state.userInfoData ; //usage of this Keyword 
        // {console.log(this.props.name + " The Child render  is being Called")}
        
       
       
    return(
        <>
        <div>
            <img className = "h-64" src = {avatar_url}/>      {/*Here be sure to make use of the curly Braces wheen you are making of the variable or any JS Code */}
            <h1>Name: {login}</h1>
            <h3>UserType : {type}</h3>
        </div>
        </>
        )
        }
    
}

export default UserClass;


/**
 * React LifeCycle Method 
 * 
 * 
 * -----------MOUNTING ------------
 * Constructor  (dummy)
 *      <HTML Dummy>
 * Component DidMount 
 *   <API CALL>
 *      <this .setState  >  --> State Varibal is updated 
 * 
 * 
 *  ---- UPDATE -------
 * 
 * render (API Data)
 * <HTML (new API data )
 *  componentDid Update
 * 
 * 
 * the Component Unmount wull be Called when we move from Current page to a Newer Page.
 * 
 * 
 * 
 * Mounting   >>> Updating   >>> UnMouting
 * 
 */