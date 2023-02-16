import React from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import { 
 createBrowserRouter,
 RouterProvider,
 Route,
 createRoutesFromElements} from "react-router-dom";

 const user=null
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<HomeScreen />}></Route>
    </Route>
  )
)
const App = () => {
  return (
   <div className="app">
    {
      (!user)?(<LoginScreen />):
      (<RouterProvider router={router}/>)}
   </div>
  );
};
export default App;
