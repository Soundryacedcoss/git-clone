import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
export const Overview = () => {
  const [PopularRepo, setPopularRepo] = useState([]);
  const output1 = useSelector((state) => state.product.Overview);
  let temp=output1.slice(1, 4)
  useEffect(() => {
    setPopularRepo(temp);
    
  }, [PopularRepo]);


  return (
    <div>
      {PopularRepo.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};
