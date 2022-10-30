import { Box, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [res, setRes] = useState(50);
  const nav = useNavigate();

  var stat = JSON.parse(localStorage.getItem("face-loginstat")) || false;

  if (stat == false) {
    nav("/login");
  }

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    setLoading(true);
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=50`)
      .then((res) => setData(res.data.results))
      .then((res) => setLoading(false));
  };

  console.log(data);

  const scrolltoend = () => {
    setTimeout(() => {
      setPage(page + 1);
    }, "1000");
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrolltoend();
    }
  };

  const logOut = () => {
    localStorage.setItem("face-loginstat", JSON.stringify(false));
    window.location.reload();
  };

  return (
    <div>
      <Box style={{ backgroundColor : "teal", width : "90%",margin : "auto",padding : "10px 0px",display: "flex", justifyContent: "space-around", marginBottom : "80px", marginTop : "30px" }}>
        <Heading color="white">Home Page</Heading>
        <Button variant="outline" onClick={logOut}>Log Out</Button>
      </Box>

      {data?.map((e) => (
        <Card {...e} />
      ))}
      <Box padding="60px">
        {loading && (
          <Button
            isLoading
            loadingText="Loading"
            colorScheme="teal.100"
            variant="outline"
            spinnerPlacement="start"
            
          >
            Submit
          </Button>
        )}
      </Box>
    </div>
  );
};

export default Home;
