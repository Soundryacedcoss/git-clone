import React, { useState } from "react";
import "./LandingPage.css";
import { useSelector ,useDispatch } from "react-redux";
import { fetchdata } from "./Slice/dataslice1";
import { profileData } from "./Slice/dataslice1";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  const dispatch=useDispatch()
  const output=useSelector((state)=>state.product.data);
  const output1=useSelector((state)=>state.product.Overview)
  console.log(output1);
  const[input,setInput]=useState('')
  console.log(input);
  const SearchbarHandler=(e)=>{
    setInput(e.target.value)
  }
  const SearchClickHandler=()=>{
    console.log("button clicked");
    dispatch(fetchdata(input));
  }
  // Profile button function
  const ProfileClickHandler=()=>{
  dispatch(profileData(input))
  }
  return (
    <div>
      <h2>Git clone</h2>
      <div className="inputDiv">
      <input className="SearchBar" type="text" onChange={SearchbarHandler}/>
      </div>
      <button onClick={SearchClickHandler}>search</button>
      <div className="UserCard">
        <div className="UserImgdiv"><img className="UserImg" src={output.avatar_url} alt="" /></div>
        <div className="UserdetailDiv">
        <h2>{output.login}</h2>
        <p>{output.bio}</p>
        <p>Followers:{output.followers} {" "} {" "} </p>
        <p>Following:{output.following}</p>
        <Link to="/Overview"><button onClick={ProfileClickHandler}>View Profile</button></Link>
        </div>
      </div>
    </div>
  );
};
