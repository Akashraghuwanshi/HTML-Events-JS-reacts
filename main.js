setInterval(setColor,2000);
function setColor(){
    const x = document.body;
    x.style.backgroundColor =  x.style.backgroundColor == 'yellow'? 'pink':x.style.backgroundColor == 'pink' ? 'red' : x.style.backgroundColor == 'grey' ? 'yellow' :'grey' ;

}

function change(id){
    id.innerHTML = '🧡JAI RAM JI KI MITRO🧡 🙏🖐👋 ';
    console.log(id);

}

function displayDate(){
    document.getElementById("demo").innerHTML = new Date();

}
function digitalDate(){
     setInterval(frame,1000);
    function frame(){
        const date = new Date();
        document.getElementById("date").innerHTML = date.toLocaleDateString();
    }
}   
 
const myTimer = setInterval(frame,1000);
    function frame(){
        const time = new Date();
        document.getElementById("digitalWatch").innerHTML = time.toLocaleTimeString();
    }
    function stop(){
    clearInterval(myTimer);
}

document.getElementById("myBtn").onclick = displaytoDate;
function displaytoDate(){
    const  showDate = new Date();
    document.getElementById("show").innerHTML = showDate.toLocaleDateString();
}

