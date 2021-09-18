import { useState, useEffect } from "react";
import clouds from "../assets/images/clouds.jfif"
import "./css/index.css";
import defaultGif from "../assets/images/default.jpg";
import Hace from "../assets/images/Hace.gif"
import clear from "../assets/images/clear.gif"
import rain from "../assets/images/rain.gif"
import sun from "../assets/images/sunny.gif"
function Weather() {
  const [userInput, setValue] = useState();
  const [weather, setweather] = useState(defaultGif);
  const [temp , settemp] = useState("40")
  const [feels , setFeel] = useState("41")
  const[city , setCity] = useState()
  useEffect(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units=metric`
      )
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          settemp(json.main.temp)
          setFeel(json.main.feels_like)
          let currentWeather = json.weather[0].main;
          console.log(currentWeather);
          if (currentWeather === "Smoke") {
            setweather(Hace);
          }
          else if (currentWeather === "Clouds") {
            setweather(clouds);
          }
          else if (currentWeather === "Clear") {
            setweather(clear);
          } 
          else if (currentWeather === "Rain") {
            setweather(rain);
          } 
          else if (currentWeather === "Sunny") {
            setweather(rain);
          } 
        })
        .catch((err) => {
          // console.log(err);
        });
  }, [userInput]);
   useEffect(() => {
    navigator.geolocation.getCurrentPosition((location)=>{
      console.log(location)
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units=metric`)
      .then((response) => response.json())
      .then((position) =>{
        console.log(position)
        settemp(position.main.temp)
        setFeel(position.main.feels_like)
        setCity(position.main.name)
        let currentWeather = position.weather[0].main;
        console.log(currentWeather);
        if (currentWeather === "Smoke") {
          setweather(Hace);
        }
        else if (currentWeather === "Clouds") {
          setweather(clouds);
        }
        else if (currentWeather === "Clear") {
          setweather(clear);
        } 
        else if (currentWeather === "Rain") {
          setweather(rain);
        } 
        else if (currentWeather === "Sunny") {
          setweather(sun);
        } 
      })
      .catch((err) => {
        // console.log(err);
      })
      })
  });
  return (
    <>
    <div className = "container">
      <div className="row">
        <div className = "col-lg-8 col-md-12 col-sm-12 m-auto">
    <div className = "border p-5">
      <h1 className = "main-heading">Weather App</h1>
      <div>
      <input id="input" className = "form-control" placeholder = "Search Weather" type="text" />
      <button
        className = "d-block m-auto mt-3 btn btn-info"
        onClick={() => {
          let value = document.getElementById("input").value;
          setValue(value) 
        }}
      >
        Search
        </button>
      </div>
      <div className= "mt-3">
      <img src={weather} width="100%" alt="" />
      </div>
      <div>
        <h1 className = "main-heading mt-3">More Details</h1>
        <h3>Location : {city}</h3>
        <h3>Current Temperature : {temp}</h3>
        <h3>feels Like : {feels}</h3>
      </div>
        </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default Weather;
// function Weather(){
// const[inp , setInp] = useState()
// let setVal = () =>{
//   let val = document.getElementById("inp")
//   setInp(val.value)
// }
// useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units=metric`
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         let currentWeather = json.weather[0].main;
//         console.log(currentWeather);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
// }, [inp]);
//   return(
//     <>
//     <input id = "inp" type="text"/>
//     <button onClick = {() => setVal()}>Click</button>
//     <h1>{inp}</h1>

//     </> 
//   )
// }
// export default Weather;