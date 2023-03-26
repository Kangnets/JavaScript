import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, cloneElement } from "react";

function C_R2() {
  const [candidaterank1, setCandidaterank1] = useState("");
  const [dbNumber, setDbNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api_elec.ivyforest.kr:4002/result/vote_db_0/${dbNumber}/score2`;
      const response = await fetch(url);
      const data = await response.json();
      const c_number = data.c_number; // API에서 받아온 데이터에서 c_name 변수 추출
      setCandidaterank1(c_number); // 추출한 c_name 변수를 candidate1 상태 변수에 저장
    };
    fetchData();
  }, [dbNumber]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDbNumber((prevDbNumber) => prevDbNumber + 1);
    }, 600000); // 10초마다 실행
    return () => clearInterval(intervalId);
  }, []);

  const styles = { 
    width: "40px",
    height:"20px",
    textAlign: "center",
    lineHeight: "20px",
    fontWeight: "800",
    borderRadius: "35px",
    backgroundcolor: "#181D62",
    color: "white",
    fontSize: "15px"
  }


  return <span className="imtext2">{candidaterank1 ? candidaterank1 : "Loading..."}위</span>;
}

export default C_R2;
