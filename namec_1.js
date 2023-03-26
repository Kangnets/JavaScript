import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function C_N1() {
  const [candidatename1, setCandidatename1] = useState("");
  const [dbNumber, setDbNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api_elec.ivyforest.kr:4002/result/vote_db_0/${dbNumber}/score1`;
      const response = await fetch(url);
      const data = await response.json();
      const c_name = data.c_name; // API에서 받아온 데이터에서 c_name 변수 추출
      setCandidatename1(c_name); // 추출한 c_name 변수를 candidate1 상태 변수에 저장
    };
    fetchData();
  }, [dbNumber]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDbNumber((prevDbNumber) => prevDbNumber + 1);
    }, 600000); // 10분마다 실행
    return () => clearInterval(intervalId);
  }, []);

  const styles = { 
    fontSize: "18px",
    fontWeight: "800px",
    marginTop: "-5px"
  }


  return <h5 id='2' style={styles} >{candidatename1 ? candidatename1 : "Loading..."}</h5>;
}

export default C_N1;