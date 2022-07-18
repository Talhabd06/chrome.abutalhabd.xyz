const btn = document.getElementById('convert')

btn.addEventListener('click', () =>{
 const download = document.getElementById('file')
 const stutus = document.querySelector('.stutus')

 stutus.style.display="flex"
  

 setTimeout( () =>{
    stutus.style.display="none"
    download.classList.add('display');
}, 6000);

});
