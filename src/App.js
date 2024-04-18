import React , {Component} from 'react';
import Form from './components/form';
import Weather from './components/weather';


//e36ed364400282e43250b6c4c0274d44

const api_key = "e36ed364400282e43250b6c4c0274d44";

//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {

state = {
  tempereature :'',
  city :'',
  country :'',
  humidity :'',
  description: '',
  error : ''
}





   getweather= async (e) => {
    e.preventDefault()
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

  const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
  const data = await api.json();

console.log(city, country)
if( city && country){
  this.setState({
    tempereature :data.main.temp ,
    city : data.name,
    country : data.sys.country,
    humidity : data.main.humidity,
    description: data.weather[0].description,
    error : ''
  })
}else {
  this.setState({
    tempereature :'',
    city :'',
    country :'',
    humidity :'',
    description: '',
    error : 'please enter data'
  })
}

   }




  render () {
  return (
    <div className="weather">
     <div className="form-container">

    <Form getweather = {this.getweather} />
    <Weather 
     tempereature = {this.state.tempereature}
     city ={this.state.city}
     country ={this.state.country}
     humidity = {this.state.humidity}
     description  ={this.state.description}
     error = {this.state.error}
    
    />
    </div>
    </div> 
  );
}
}

export default App;
