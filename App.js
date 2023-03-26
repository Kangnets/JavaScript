import logo from './logo.svg';
import './App.css';
import C_N1 from './namec_1';
import C_N2 from './namec_2';
import C_N3 from './namec_3';
import C_N4 from './namec_4';
import C_P1 from './profilec_1';
import C_P2 from './profilec_2';
import C_P3 from './profilec_3';
import C_P4 from './profilec_4';
import C_R1 from './rankc_1';
import C_R2 from './rankc_2';
import C_R3 from './rankc_3';
import C_R4 from './rankc_4';
import C_V1 from './votec_1';
import C_V2 from './votec_2';
import C_V3 from './votec_3';
import C_V4 from './votec_4';
import DoughnutChart from './bar';
import SyncroCard from './bar2';

function App() {
  return (
    <div><div className="main">
      <div className="main_content">
        <div className="header"
          style={{
            background: "linear-gradient(180deg, #181D62 0%, rgba(24, 29, 98, 0.7) 100%)",
            minHeight: 220,
            minWidth: "100%"
          }}
        >
          <br />
          <br />
          <div className="stepper-wrapper">
            <div className="stepper-item completed">
              <div className="step-counter">1</div>
              <div className="step-name">후보등록</div>
            </div>
            <div className="stepper-item completed">
              <div className="step-counter">2</div>
              <div className="step-name">선거시작</div>
            </div>
            <div className="stepper-item active">
              <div className="step-counter">3</div>
              <div className="step-name">개표</div>
            </div>
            <div className="stepper-item">
              <div className="step-counter">4</div>
              <div className="step-name">당선</div>
            </div>
          </div>
          <br />
          <div className="n1"
            style={{
              marginTop: 15,
              display: "flex",
              textAlign: "center",
              justifyContent: "center"
            }}
          >
            <div id="logo">
              <img src="hb_img/knu_logo4.png" width={110} height={65} />
            </div>
            <div
              id="title"
              style={{
                letterSpacing: "-0.08em",
                textAlign: "left",
                marginLeft: 15
              }}
            >
              2023
              <br />
              <b style={{ fontWeight: 800 }}>
                학생회
                <br />
                정·부회장
              </b>
              <br />
              선거
            </div>
            <div
              id="sta"
              style={{
                letterSpacing: "-0.08em",
                textAlign: "left",
                marginLeft: 30
              }}
            >
              투표율 <b id="bold"> 83.7%</b>
              <br />
              투표자수 <b id="bold"> 1327명</b> <br />
              선거인수 <b id="bold"> 2457명</b>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 25,
            justifyContent: "space-between"
          }}
        >
          <div style={{ lineHeight: 0, textAlign: "left", marginLeft: "5%" }}>
            <h3 style={{ fontSize: 18, fontWeight: 500 }}>개표율</h3>
            <h3 style={{ fontSize: 36, marginTop: 30, color: "#181D62" }}>93%</h3>
            <h5
              style={{
                fontSize: 15,
                marginTop: "-5px",
                fontWeight: 500,
                color: "rgba(24, 29, 98, 0.5)",
                letterSpacing: "-0.05em"
              }}
            >
              11:40 기준
            </h5>
          </div>
          <div
            style={{
              textAlign: "right",
              marginRight: "5%",
              alignItems: "right",
              alignContent: "right"
            }}
          >
            <DoughnutChart />
          </div>
        </div>
        <div
          style={{
            marginTop: "-20px",
            justifyContent: "space-between"
          }}
        >
          <div style={{ textAlign: "left", marginLeft: "0%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                textAlign: 'left'
              }}
            >
              <div style={{ textAlign: "left", marginLeft: "5%" }}>
                <div
                  style={{
                    display: "flex",
                    marginTop: 25,
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ position: "relative", marginLeft: "5%" }} id="1위">
                    <C_P1 />{/*<img src="hb_img/H.jpg" style="width: 100px; height: 120px;  border-radius: 10px;"> c_profile 컴포넌트로 대체*/}
                    <C_R1 />{/*<span class="imtext">1위</span></div> c_number 컴포넌트로 대체*/}
                  </div>
                  <div style={{ lineHeight: 0, marginLeft: 10, marginTop: 15 }}>
                    <h5 style={{fontSize:"15px", fontWeight: "500"}}>기호1</h5>
                    <C_N1 />{/*<h5 id='2' style="font-size: 18px; font-weight: 800; margin-top: -5px;">강해린</h5> c_name 컴포넌트로 대체*/}
                  </div>
                  
                </div>
              </div>
              <div className="v-line" style={{ marginTop: 30 }} />
              <div style={{ textAlign: "right", marginRight: "5%" }}>
                <div
                  style={{
                    display: "flex",
                    marginTop: 25,
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ lineHeight: 0, marginRight: 10, marginTop: 15 }}>
                    <h5 style={{fontSize:"15px", fontWeight: "500"}}>기호1</h5>
                    <C_N2 />{/*<span class="imtext2">2위</span></div>c_type 컴포넌트로 대체*/}
                  </div> 
                  <div style={{ position: "relative" }}>
                      <C_P2 />
                      <C_R2 />{/*<h5 id='1' style="font-size: 15px; font-weight: 500;">기호3</h5> c_number 컴포넌트로 대체*/}
                  </div>
                  
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "-5px",
                justifyContent: "space-between"
              }}
            >
              <div style={{ textAlign: "left", marginLeft: "5%" }}>
                <h5
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    marginTop: 20,
                    color: "#181D62"
                  }}
                >
                  82.98%
                </h5>
                <C_V1 />{/*<h5 style="font-size: 18px; font-weight: 500; margin-top: -40px; color: rgba(24, 29, 98, 0.7);"><p2 style="color: #181D62;">1063</p2>표</h5> c_vote 컴포넌트로 대체*/}
              </div>
              <div>
                <h5
                  style={{
                    marginTop: 30,
                    fontSize: 15,
                    fontWeight: 500,
                    color: "rgba(24, 29, 98, 0.5)"
                  }}
                >
                  표차
                </h5>
                <br />
                <h5 style={{ marginTop: -42, fontSize: 15, fontWeight: 500, color: "#181D62" }}>849</h5>
            </div>
            <div style={{ textAlign: "right", marginRight: "5%" }}>
              <h5
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  marginTop: 20,
                  color: "#181D62"
                }}
              >
                14.18%
              </h5>
              <C_V2 />{/*<h5 style="font-size: 18px; font-weight: 500; margin-top: -40px; color: rgba(24, 29, 98, 0.7);"><p2 style="color: #181D62;">293</p2>표</h5>*/}
            </div>
          </div>
          <div style={{ marginTop: "-25px" }}>
            <div
              style={{
                maxWidth: 360,
                width: "auto",
                marginLeft: "5%",
                marginRight: "5%",
                textAlign: "center",
                maxHeight: "10px",
                height: "10px",
                justifyContent: "space-between",
                margin: "0 auto"
              }}
              data-stepped-bar='{ "catagories": [ {   "value": 82, "color": "#181D62" }, { "value": 14, "color": "rgba(24, 29, 98, 0.7)" } ]} ' /> <SyncroCard />

          </div>
          <div
            style={{
              display: "flex",
              marginTop: 5,
              justifyContent: "space-between"
            }}
          >
            <div style={{ textAlign: "left", marginLeft: "5%" }}>
              <div
                style={{
                  display: "flex",
                  marginTop: 25,
                  justifyContent: "space-between"
                }}
              >
                <div id="3위" style={{ position: "relative" }}>
                  <C_P3 />{/*<img src="hb_img/J.png" style="width: 50px; height: 70px;  border-radius: 10px;">c_profile 컴포넌트로 대체*/}
                </div>
                <div style={{ lineHeight: 0, marginLeft: 10, marginTop: 0 }}>
                  <C_R3 />{/*<div class="imtext34">3위</div>c_type 컴포넌트로 대체*/}
                  <C_N3 /> {/*<h5 style={{ fontSize: 15, fontWeight: 500, marginTop: 15 }}>
      기호2
    <b style={{ fontSize: 18 }}>유지민</b>
    </h5>*/}
                  <div style={{ marginTop: 5 }}>
                    <div
                      style={{
                        maxWidth: 380,
                        width: "auto",
                        marginLeft: "5%",
                        marginRight: "5%",
                        textAlign: "center",
                        maxHeight: 10,
                        height: 10,
                        justifyContent: "space-between",
                        margin: "0 auto"
                      }}
                      data-stepped-bar='{ "catagories": [ {  "value": 5, "color": "#181D62" }, { "value": 95, "color": "rgba(24, 29, 98, 0.3)" }  ]}' />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ textAlign: "right", marginRight: "5%", marginTop: 20 }}
            >
              <h5
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  marginTop: 20,
                  color: "#181D62"
                }}
              >
                1.58%
              </h5>
              <C_V3 />{/*<h5
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  marginTop: "-40px",
                  color: "rgba(24, 29, 98, 0.7)"
                }}
              >
                <p2 style={{ color: "#181D62" }}>74</p2>표
              </h5>*/}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "-30px",
              justifyContent: "space-between"
            }}
          >
            <div style={{ textAlign: "left", marginLeft: "5%" }}>
              <div
                style={{
                  display: "flex",
                  marginTop: 25,
                  justifyContent: "space-between"
                }}
              >
                <div id="4위" style={{ position: "relative" }}>
                  <C_P4 />
                </div>
                <div style={{ lineHeight: 0, marginLeft: 10, marginTop: 0 }}>
                  <div className="imtext34">4위</div>
                  <C_N4 />{/*<h5 style={{ fontSize: 15, fontWeight: 500, marginTop: 15 }}>
      기호4 <b style={{ fontSize: 18 }}>윤세은</b>
    </h5>*/}
                  <div style={{ marginTop: 5 }}>
                    <div
                      style={{
                        maxWidth: 380,
                        width: "auto",
                        marginLeft: "5%",
                        marginRight: "5%",
                        textAlign: "center",
                        maxHeight: 10,
                        height: 10,
                        justifyContent: "space-between",
                        margin: "0 auto"
                      }}
                      data-stepped-bar='{ "catagories": [ {  "value": 5, "color": "#181D62" }, { "value": 95, "color": "rgba(24, 29, 98, 0.3)" } ]}' />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ textAlign: "right", marginRight: "5%", marginTop: 20 }}
            >
              <h5
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  marginTop: 20,
                  color: "#181D62"
                }}
              >
                0.13%
              </h5>
              <C_V4 />{/*<h5
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  marginTop: "-40px",
                  color: "rgba(24, 29, 98, 0.7)"
                }}
              >
                <p2 style={{ color: "#181D62" }}>9</p2>표
              </h5>*/}
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              marginTop: "-50px",
              justifyContent: "space-between",
              textAlign: "center"
            }}
          >
            <img
              src="hb_img/logo_ivyforest.png"
              width={69}
              height={21}
              style={{ margin: "0 auto", textAlign: "center" }} />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="bottom_menu">
            <div>
              {" "}
              <a href="hb_index">
                <img src="hb_img/0_icon_at.svg" />
              </a>
            </div>
            <div>
              <a href="hb_1">
                <img src="hb_img/1_icon.svg" />
              </a>
            </div>
            <div>
              <a href="hb_2">
                <img src="hb_img/2_icon.svg" />
              </a>
            </div>
            <div>
              <a href="hb_3">
                <img src="hb_img/3_icon.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <style
        dangerouslySetInnerHTML={{
          __html: "\n\n\n* {\nfont-family: 'GmarketSans';\n}\n\n@font-face {\n    font-family: 'GmarketSans';\n    font-weight: 300;\n    font-style: normal;\n    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.eot');\n    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.eot?#iefix') format('embedded-opentype'),\n         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.woff2') format('woff2'),\n         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.woff') format('woff'),\n         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.ttf') format(\"truetype\");\n    font-display: swap;\n} \n@font-face {\n    font-family: 'GmarketSans';\n    font-weight: 500;\n    font-style: normal;\n    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot');\n    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot?#iefix') format('embedded-opentype'),\n         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff2') format('woff2'),\n         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff') format('woff'),\n         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.ttf') format(\"truetype\");\n    font-display: swap;\n} \n@font-face {\n    font-family: 'GmarketSans';\n    font-weight: 700;\n    font-style: normal;\n    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot');\n    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot?#iefix') format('embedded-opentype'),\n         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff2') format('woff2'),\n         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff') format('woff'),\n         url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.ttf') format(\"truetype\");\n    font-display: swap;\n} \n\n#sta{\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 140%;\n    letter-spacing: -0.08em;\n    background: linear-gradient(180deg,#ffffff 0%,rgba(255,255,255, 0.3)100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n\n  }\n\n  #bold{\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 140%;\n    letter-spacing: -0.08em;\n    background: linear-gradient(180deg,#ffffff 0%,rgba(255,255,255, 0.3)100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n\n  }\n  \n#title{\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 120%;\n    letter-spacing: -0.08em;\n    background: linear-gradient(180deg,#ffffff 0%,rgba(255,255,255, 0.3)100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n\n  }\n\n  .imtext {\n    position: absolute;\n    top: 90px;\n    left: 10px;\n    z-index: 1;\n    width: 40px;\n    height: 20px;\n    text-align: center;\n    font-weight: 800;\n    border-radius: 35px;\n    background-color: #181D62;\n    color: white;\n    font-size: 15px;\n  }\n  .imtext2 {\n    position: absolute;\n    top: 90px;\n    right: 10px;\n    z-index: 1;\n    width: 40px;\n    height: 20px;\n    text-align: center;\n    font-weight: 800;\n    border-radius: 35px;\n    background-color: #181D62;\n    color: white;\n    font-size: 15px;\n  }\n\n  .imtext34 {\n    width: 40px;\n    height: 20px;\n    text-align: center;\n    line-height: 20px;\n    font-weight: 800;\n    border-radius: 35px;\n    background-color: #181D62;\n    color: white;\n    font-size: 15px;\n  }\n\n  .v-line {\n  border-left : 2px solid rgba(24, 29, 98, 0.3);\n  height : 120px;\n}\n\n\n.bottom_menu { position: fixed; bottom: 0px; left: 0px; width: 100%; height: 70px; z-index:100;  background-color: #323775; color: #ffffff;}\n    .bottom_menu > div {       float: left;\n      width: 22%;\n      height: 100%;\n      text-align: center;\n      padding-top: 10px;\n    margin-left: 10px;}\n         \n  \n/*단계별 상태바 */\n/*단계별 상태바 */\n/*단계별 상태바 */\n/*단계별 상태바 */\n  \n  .stepper-wrapper {\n  display: flex;\n  text-align: center;\n  align-items: center;\n  \n\n  justify-content: space-between;\n}\n.stepper-item {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  letter-spacing: -0.08em;\n  background: linear-gradient(180deg,#ffffff 0%,rgba(255,255,255, 0.3)100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-fill-color: transparent;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n}\n\n.stepper-item::before {\n  position: absolute;\n  content: \"\";\n  border-bottom: 2px solid #ccc;\n  width: 100%;\n  top: 5px;\n  left: -50%;\n  z-index: 2;\n}\n\n.stepper-item::after {\n  position: absolute;\n  content: \"\";\n  border-bottom: 2px solid #ccc;\n  width: 100%;\n  top: 5px;\n  left: 50%;\n  z-index: 2;\n}\n\n.stepper-item .step-counter {\n  position: relative;\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background: linear-gradient(180deg,#ffffff 0%,rgba(250,250,250, 0.9)100%);\n  margin-bottom: 6px;\n}\n\n.stepper-item.active {\n  font-weight: bold;\n  background: (255, 255, 255, 1);\n  animation: myAnim 4s ease 0s infinite alternate-reverse both;\n\n\n}\n\n@keyframes myAnim {\n\t0%,\n\t50%,\n\t100% {\n\t\topacity: 1;\n\t}\n\n\t25%,\n\t75% {\n\t\topacity: 0;\n\t}\n}\n\n.stepper-item.completed .step-counter {\n  background: (250, 250, 250, 0.8);\n}\n\n.stepper-item.completed::after {\n  position: absolute;\n  content: \"\";\n  border-bottom: 2px\t(250, 250, 250, 0.8);/*까만색(0,0,0) 20% 불투명도*/\n\n  width: 100%;\n  top: 5px;\n  left: 50%;\n  z-index: 3;\n}\n\n.stepper-item:first-child::before {\n  content: none;\n}\n.stepper-item:last-child::after {\n  content: none;\n}\n"
        }} />
        </div>


  
  );
}

export default App;
