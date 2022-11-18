import './App.css';
import Login from './Components/SignUp/Login/Login';
import { Routes,Route } from "react-router-dom";
import Signup from './Components/SignUp/SignUp/Signup';
import Forgate from './Components/SignUp/Forgate/Forgate'
import Homepage from './Components/HomePage/Homepage';
import FindFriends from './Components/HomePage/FindFriends/FindFriends';
import GroupsMainpage from './Components/HomePage/GroupOfFb/GroupsMainpage'

function App() {
  return (
   <>
   
   <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route exact path='/home' element={<Homepage/>}/>
    <Route exact path='/signup' element={<Signup/>}/>
    <Route exact path='/forgate' element={<Forgate/>}/>
    <Route exact path='/findfriend' element={<FindFriends/>}/>
    <Route exact path='/groups' element={<GroupsMainpage/>}/>

   </Routes>
   

   </>
  );
}

export default App;
