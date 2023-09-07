"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAutoComplete } from "./createReducer";
import { motion } from "framer-motion";

function App() {
  const [info, setInfo] = useState([]);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.post.status);
  const data = useSelector((state) => state.post.data);
  const error = useSelector((state) => state.post.error);

  const [query, setQuery] = useState();

  const handleProcess = () => {
    dispatch(getAutoComplete({ query }));
  };

  useEffect(() => {
    dispatch(getAutoComplete({ query }));

    if (data && data.entities) {
      const infoData = data.entities.map((item) =>
        item.short_description.split(" , ")
      );
      setInfo(infoData);
    }
  }, [data]); // Added [data] as the dependency array

  if (state === "Loading") {
    return <h1>Loading...</h1>;
  }

  if (state === "error") {
    return <h3>Something went wrong: {error}</h3>;
  }
  return (
    <div className="container">
      <div className="inputSection">
        <input
          required
          placeholder="Enter text Here..."
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button type="submit" onClick={handleProcess}>
          Submit
        </button>
      </div>

      <div className="dataSection">
        {info?.map((item, index) => (
          <motion.div
            initial={{ x: index % 3 === 0 ? -20 : index % 3 === 1 ? -15 : -10 }}
            animate={{ x: 0 }}
            exit={{ x: 10 }}
            transition={{ duration: (index % 3) / 0.9 }}
            key={index}
            style={{ margin: "20px", background: "white" }}
          >
            <p>{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
