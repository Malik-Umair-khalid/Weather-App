import "./App.css";
import Weather from "./components/Weather";
function App() {
  return (
    <Weather/>
  );
}

export default App;

// navigator.geolocation.getCurrentPosition((location)=>{
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units&units=metric`)
//   .then(response => response.json())
//   .then((info)=>{
//     console.log(info)
//   })
// })
