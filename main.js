
let gender
const button = document.querySelector('.button');
const text = document.querySelector('.inp');

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';


button.addEventListener('click', function(){
    if (text.value){
        const cityName = text.value;
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
        gender = fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(result) {
             alert(result.gender);
        });
    }
});