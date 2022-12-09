import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "./Navbar";
import { profileData } from "./Slice/dataslice1";
import "./OverView.css";
import { allRepoData } from "./Slice/dataslice1";
export const Overview = () => {
  const output = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  const [PopularRepo, setPopularRepo] = useState([]);
  const output1 = useSelector((state) => state.product.Overview);
  let temp = output1.slice(0, 8);
  useEffect(() => {
    // setname(output.login)
    setPopularRepo(temp);
  }, [output1]);
  const RepoClickHandler = () => {
  dispatch(allRepoData(output.login));
  };
  const OverViewClickHandle = () => {
    // setPopularRepo(temp);
    dispatch(profileData(output.login));
  };
  return (
    <>
      <Navbar />
      <section>
        <div className="ProfilePage">
          <div className="img width">
            <img className="profileimg" src={output.avatar_url} alt="" />
            <h2>{output.name}</h2>
            <h3>{output.login}</h3>
          </div>
          <div className="RepositoryDiv">
            <div className="">
              <button className="RepoCatButton" onClick={OverViewClickHandle}>
                OverView
              </button>
              <button className="RepoCatButton" onClick={RepoClickHandler}>
                Repositiories
              </button>
              <button className="RepoCatButton">Projects</button>
            </div>
            <hr />
            <div className="AllRepoDiv">
              {PopularRepo.map((item) => (
                <div className="IndiviaualRepoDiv" key={Math.random()}>
                  <div style={{ display: "flex" }}>
                    <p style={{ width: "90%", color: "#0969da" }}>
                      {item.name}
                    </p>{" "}
                    <p
                      style={{
                        marginLeft: "76px",
                      }}
                    >
                      {item.visibility}
                    </p>{" "}
                  </div>
                  <div >
                   <p>{item.language}</p> 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
