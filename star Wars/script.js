const container = document.querySelector('.container')
const mySelect = document.getElementById('arts')
const input = document.getElementById('numbers')
const button = document.getElementById('search')
const selectedIndex = mySelect.selectedIndex;
const selectedText = mySelect.options[mySelect.selectedIndex].text;
const selectedValue = mySelect.options[mySelect.selectedIndex].value;
const myResponce = document.getElementById('myResponce')
const errorDiv = document.getElementById('errorDiv')

function getData(){

const selectedValue = mySelect.options[mySelect.selectedIndex].value;
let b = selectedValue;
let n = input.value;
try{
    if (b === 'films' && n > 6){
        console.error('Oшибка: Недопустимое число. Выберите число от 1 до 6;')
        myResponce.textContent = '';
        errorDiv.textContent = 'Произошла ошибка, фильмов всего шесть :)';
        
    } else if(input.value === n && selectedValue === b){
        fetch ('https://swapi.dev/api/' + b + "/" + n)
        .then((response) => response.json())
        .then((data) =>{
            errorDiv.textContent = "";
            const name = data.name || data.title;
            myResponce.textContent = '«' + name + '»';
            console.log(data)
            });
    }  
} catch(error){
    console.log('Oшибка' + error.name + error.message)
    myResponce.textContent = '';
    errorDiv.textContent = error.name;
}
finally{
console.log('finally')
}};

document.querySelector('#search').addEventListener('click', getData);