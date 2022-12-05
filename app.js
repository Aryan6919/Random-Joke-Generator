// const options = {
// 	method: 'GET',
// 	headers: {
// 		accept: 'application/json',
// 		'X-RapidAPI-Key': 'dbc26483a2msh92c7c4492f8f22bp14cbddjsn9636008bf7d1',
// 		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
// 	}
// };
let joke=document.getElementById("joke")
let joke1=document.getElementById("joke-1")
let btn=document.getElementById("btn")
const url='https://official-joke-api.appspot.com/random_joke'

let getJoke=()=>{
fetch(url)
.then(
data=>(data.json()))
.then((item)=>{
    joke.innerText=item.setup
	 joke1.innerText=item.punchline

})


}
window.addEventListener("load",getJoke)
btn.addEventListener("click",getJoke)