import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function Component4() {
  const [candidatevote1, setCandidatevote1] = useState("");
  const [dbNumber, setDbNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api_elec.ivyforest.kr:4002/result/vote_db_0/${dbNumber}/score1`;
      const response = await fetch(url);
      const data = await response.json();
      const vote = data.vote; // API에서 받아온 데이터에서 c_name 변수 추출
      setCandidatevote1(vote); // 추출한 c_name 변수를 candidate1 상태 변수에 저장
    };
    setTimeout(fetchData, 1000); // 1초 후에 fetchData() 실행
  }, [dbNumber]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDbNumber((prevDbNumber) => prevDbNumber + 1);
    }, 600000); // 10초마다 실행
    return () => clearInterval(intervalId);
  }, []);

  return <h5>{candidatevote1 ? candidatevote1 : "Loading..."}</h5>;
}

export default Component4;
