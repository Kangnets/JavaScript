import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Component3 from './rankc_3';

function C_P3() {
  const [candidateprofile1, setCandidateprofile1] = useState("");
  const [dbNumber, setDbNumber] = useState(1);
  const [divId, setDivId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api_elec.ivyforest.kr:4002/result/vote_db_1/${dbNumber}/score3`;
      const response = await fetch(url);
      const data = await response.json();
      const c_profile = data.c_profile; // API에서 받아온 데이터에서 c_name 변수 추출
      setCandidateprofile1(c_profile); // 추출한 c_name 변수를 candidate1 상태 변수에 저장
      setDivId(data.division); // 추출한 division 변수를 divId 상태 변수에 저장
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
    width: "50px",
    height: "70px",
    borderRadius: "10px",
  }

  let imgSrc;

  if (divId === "1위") {
    imgSrc = "hb_img/H.jpg";
  } else if (divId === "2위") {
    imgSrc = "hb_img/s.png";
  }
  
  return (
    <div id={divId}>
      <>
      <img style={styles} src={imgSrc ? imgSrc : candidateprofile1 ? candidateprofile1 : imgSrc } />
      </>
    </div>
  );
}

export default C_P3;
