const button = document.querySelector('input');
const display = document.querySelector('#Quote')
const auth = document.querySelector('#auth')

button.addEventListener('click' , (e)=>{
    e.preventDefault();
    // console.log("Bef fecth");
    
    fetch('https://quotes-api-self.vercel.app/quote').
    then((resp)=>{
        return resp.json(); 
    }).
    then((data)=>{
        let rand = Math.floor(Math.random() *100);
        display.innerHTML = data['quote']
        auth.innerHTML = "Author: " + data['author']
    }).catch((error)=>{
        console.log(error);
        display.innerHTML = "failed to get quote"
    })
})