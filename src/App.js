import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <h1 className="mainHeading">SuperOverLeague</h1>
        <div className="teamsContainer">
          <div className="teamImgCon">
            <img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" alt="rcbImg" style={{height : "100%", width: "100%"}}/>
          </div>

          <div className="teamImgCon">
            <img src="https://assets.ccbp.in/frontend/react-js/csk-img.png" alt="cskImg" style={{height : "100%", width: "100%"}} />
          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
