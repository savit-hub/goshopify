import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect } from "react";

const Livescore = () => {
  useEffect(() => {
    axios
      .get("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent", {
        headers: {
          "X-RapidAPI-Key":
            "1d7a678e04msh93e3f3227784dc9p1e412fjsn7416992a9724",
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <Layout></Layout>;
};

export default Livescore;
