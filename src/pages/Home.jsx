import React, { useEffect } from "react";
import { text } from "../store/taskSlicer";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(text("test"));
  }, []);

  return (
    <div>
      <h1 className="text-red-500">Hello world</h1>
    </div>
  );
}

export default Home;
