import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchdata } from "./Slice/dataslice1";
import { profileData } from "./Slice/dataslice1";
import { Link } from "react-router-dom";
import "./LandingPage.css";
export const LandingPage = () => {
  const dispatch = useDispatch();
  const output = useSelector((state) => state.product.data);
  // Using useState top take vakue from input box
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState();
  useEffect(() => {
    setDisplay("none");
    document.getElementById("search").focus();
  }, []);
  // Taking input from user
  const SearchbarHandler = (e) => {
    setInput(e.target.value);
  };
  // searching user profile
  const SearchClickHandler = () => {
    if (input === "") {
      document.getElementById("search").focus();
      alert("Please Write UserName");
    } else {
      setDisplay("block");
      dispatch(fetchdata(input));
    }
  };
  // search via keyboard
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      SearchClickHandler();
    }
  };
  // Profile button function
  const ProfileClickHandler = () => {
    dispatch(profileData(input));
  };
  return (
    <div>
      <h2>Git clone</h2>
      <div className="inputDiv">
        <input
          onKeyDown={keyHandler}
          className="SearchBar"
          id="search"
          type="text"
          onChange={SearchbarHandler}
        />
      </div>
      <button className="LandingPageButton" onClick={SearchClickHandler}>
        search
      </button>
      <div style={{ display }}>
      <div className="UserCard" >
        <div className="UserImgdiv">
          <img className="UserImg" src={output.avatar_url} alt="" />
        </div>
        <div className="UserdetailDiv">
          <h2>{output.login}</h2>
          <p>{output.bio}</p>
          <p>Followers:{output.followers} </p>
          <p>Following:{output.following}</p>
          <Link to="/Overview">
            <button className="LandingPageButton" onClick={ProfileClickHandler}>
              View Profile
            </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};
