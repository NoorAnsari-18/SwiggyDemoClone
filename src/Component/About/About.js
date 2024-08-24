import React from "react";
import UserClass from "../UserClass/UserClass";





class About extends React.Component
{
    constructor()
    {
        super();
        console.log("The Parent Constructor is being Called");
    }
// The ComponentDid Mount is being Used inside CompoenentDidMount.
    async componentDidMount()
    {
        
        // const data = await fetch("https://api.github.com/users/Noor-18");
        // const json = await data.json;
    }

    render()
    {
        console.log("the Parent Render is being Called");
        return(
         <div>
            <h1>These is a About Component</h1>
            <UserClass/>
            {/* <UserClass name ={"Second"} location = {"Banglore"}/> */}
            </div>
        )
    }
}


export default About ;