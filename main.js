

let gender
const button = document.querySelector('.button');
const text = document.querySelector('.inp');
const serverUrl = 'https://api.genderize.io';

button.addEventListener('click', function(){
    if (text.value){

        const url = `${serverUrl}?name=${text.value}`;
        gender = fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(result) {
             alert(result.gender);
        });
    }
});
