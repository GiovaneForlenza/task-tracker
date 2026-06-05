import React, { useEffect } from "react";
import { text } from "../store/taskSlicer";

function Home() {
  useEffect(() => {
    console.log("aaa");

    text("afgawd");
  }, []);

  return (
    <div>
      <h1 className="text-red-500">Hello world</h1>
    </div>
  );
}

export default Home;
