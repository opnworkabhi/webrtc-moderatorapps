import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HTTP_POST_REQUEST } from "../helpers/network";

const Home = (props) => {
  const mLocation = useLocation();
  useEffect(() => {
    const formDataFromPreviousPage = mLocation.state;
    HTTP_POST_REQUEST("/something", formDataFromPreviousPage)
      .then((response) => {
        console.log("[test] server response : ", response);
      })
      .catch((err) => console.error("[test] server error : ", err));
  }, []);

  return <div>This is home page</div>;
};

export default Home;
