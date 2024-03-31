

    const playbtn = document.querySelector(".play-btn");
    const music = document.querySelector(".tick");
    let button = document.querySelector(".play-btn")
    function toggleMusic(){
        console.log(music.paused)
        if(music.muted)
        {
            music.muted=false
        }else{
            music.muted=true
        }
    }
 playbtn.addEventListener('click', toggleMusic);
 
 playbtn.addEventListener('click',function(){
    button.classList.toggle("clicked");
 })

 
 
