import React from "react";
import RestaurantCard from "./RestaurantCard";



export const WithPromotedLabel = (RestaurantCard) =>{
     return (props) => {
        return(
          <>
          <div>
            <label className="bg-black m-2 p-2 absolute text-white rounded-lg">Opened</label>
            <RestaurantCard {...props}/>
          </div>
          </>
        );
        
     }; 
}



// const withPromotedLabel = (WrappedComponent) => {
//     return (props) => {
//       return (
//         <div>
//           <p style={{ color: 'red', fontWeight: 'bold' }}>Promoted</p>
//           <WrappedComponent {...props} />
//         </div>
//       );
//     };
//   };

// function componentBeingReturned () 
// {
//     () =>
//      {
//         return(

//         )
//      }
// }

// function withPromotedLabel ()
// {
//     return
    

// }