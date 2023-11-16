const cityName= document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');

const temp=document.getElementById('temp');

const temp_status=document.getElementById('temp_status');


const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    // alert('hii button is working');
 

   if(cityVal===""){
    city_name.innerText='please write the city name before search';

   }
   else{

    try{
        
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0b199c26ceaae2a5911528bd4f478369`;

    const response= await fetch(url);
    const data= await response.json();
    // console.log(data);
    const arrData=[data];
    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}` ;
    temp.innerText = arrData[0].main.temp;
    temp_status.innerText= arrData[0].weather[0].main;


    }
    catch{
        city_name.innerText='please enter the city name properly';
    }



   }

}

submitBtn.addEventListener('click', getInfo);