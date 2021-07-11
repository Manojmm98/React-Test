//Q7) Study the following piece of code and suggest changes such that only the Profile component is
//Rendered when the path is '/dashboard/profile'.
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const App = () => {
 return (<div>App</div>)
}
const Dashboard = () => {
 return (<div>Dashboard</div>)
}
const Profile = () => {
 return (<div>Profile</div>)
}
const Router = () => {
 return (<BrowserRouter>
 <Route path='/' component={App}></Route>
 <Route path='/dashboard/profile' component={Profile}></Route>
 <Route path='/dashboard' component={Dashboard}></Route>
 </BrowserRouter>
 )
}


// here there will be two way we will 
//use switch statements at first then we pass exact on the 1st path
// othewise we will write exact in the path where we do not want render that paticular path


// here we want to render '/dashboard/profile' so we have to give excat on '/' path and '/dashboard' path so that we will render only '/dashboard/profile'