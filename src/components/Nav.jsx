import React  from 'react';
import {NavLink} from 'react-router-dom';
// import {MealList} from 'mealsList.jsx'
const Navgation =() =>{

    return(
        <div>
       <NavLink to="/login">login as admin</NavLink> <br></br>
       <NavLink to="/meals">show meals</NavLink><br></br>
       <NavLink to="/">home</NavLink>
       </div>


    )


}

export default Navgation;