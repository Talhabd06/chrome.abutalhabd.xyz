const btn = document.getElementById('convert')

btn.addEventListener('click', () =>{
 const download = document.getElementById('file')
 const stutus = document.querySelector('.stutus')

 stutus.style.display="flex"
  

 setTimeout( () =>{
    stutus.style.display="none"
    download.classList.add('display');
}, 6000);

download.addEventListener('click', () =>{
    const count = document.querySelector('.count')
    const TxT = document.querySelector('.please-wiat-text')

    TxT.style.display="block"
   
    var timeleft = 15;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    count.innerHTML = "Finished";
setTimeout( () => {
    count.innerHTML = "Convert Next"
    count.style.cursor="pointer"
    count.style.color="#DC143C"
},5000 )
    count.addEventListener('click', () => {
        location.reload();
    })
  } else {
    count.innerHTML = "Please Wait " + timeleft + "s." ;
  }
  timeleft -= 1;
}, 1000);
})


});

