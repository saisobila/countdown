const inputBtn=document.querySelector('.input');
const searchBtn=document.querySelector('.button');
searchBtn.addEventListener('click',function(){
    var reqDate;
    
    reqDate=inputBtn.value;
    console.log(reqDate);
    inputBtn.value='';
    const daysbtn=document.querySelector('.days');
    const hoursbtn=document.querySelector('.hours');
    const minsbtn=document.querySelector('.mins');
    const secsbtn=document.querySelector('.secs');
    if (reqDate){
    function countdown(){
    const currentDate=new Date();
    const requiredDate=new Date(reqDate);
    const time=(requiredDate-currentDate)/1000;
    const days=Math.floor(time/3600/24);
    const hours=Math.floor(time/3600)%24;
    const mins=Math.floor(time/60)%60;
    const secs=Math.floor(time)%60;
    console.log(days,hours,mins,secs);
    daysbtn.innerHTML=days;
    hoursbtn.innerHTML=hours;
    minsbtn.innerHTML=mins;
    secsbtn.innerHTML=secs;

}

countdown();
setInterval(countdown,1000);
}
});



// document.addEventListener("keypress",function(event){
//     console.log(event.key);
//     if(event.key==='Enter'){
//     }
// })
const resp=document.querySelector('.theme');
function theme(){
    if(resp.innerHTML==='dark' || resp.innerHTML==='Dark'){
        resp.innerHTML="Light";
        resp.classList.remove("theme");
    }
    else{
        resp.innerHTML="dark";
        resp.classList.add("theme");
    }
}