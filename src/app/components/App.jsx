import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./action";
import { motion } from "framer-motion";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const { data, error, status } = useSelector((state) => state.post);

  const handleTatoo = () => {
    dispatch(getData({ text }));
  };

  console.log(data?.final_result);
  console.log(text);
  console.log("error" + error);
  return (
    <>
      <h1>Get Tattoo Image FREE</h1>
      <div className="iinputWrapper">
        <input
          type="text"
          placeholder="Enter Search"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleTatoo}>Get Tatoo</button>
      </div>

      {status === "loading" && (
        <div className="status">
          <h1>Loading</h1>
        </div>
      )}

      {status === "error" && (
        <div className="status">
          <h1>Error</h1>
        </div>
      )}

      <div className="cardContainer">
        {data?.final_result?.map((item, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ x: index * 100 + 300, opacity: 0, filter: "blur(20px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0)" }}
          >
            <img src={item.origin} alt="" />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default App;
