
// document.addEventListener("DOMContentLoaded",function(){
//     const music = document.getElementById("tick");
    
    
//     // const playMusic = document.getElementById("play-btn");
//     const pauseMusic =document.getElementById("pause-btn");

//     pauseMUSIC.addEventListener('click',function)
// e.target.classList.toggle("play-btn");
//         music.play();

//     });
//     pauseMusic.addEventListener('click',function(e){
//         music.pause();

// document.addEventListener("DOMContentLoaded",function(){
//     const music = document.getElementsByClassName(".tick")
//   let playMusic = document.getElementsByClassName(".play-btn");
//     let pauseMusic =document.getElementsByClassName(".pause-btn");
//     pauseMusic.addEventListener('click',function(){
//         music.pause();
//         pauseMusic.style.display='none';
//         playMusic.style.display='block';
        

// })
// playMusic.addEventListener('click',function(){
//     music.play();
//     playMusic.style.display='none';
//     pauseMusic.style.display='block';
    

// })


// })

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

 
 
//  console.log(music.paused)
//  if(music.paused){
//      music.play();
//      playbtn.classList.add('playing');
//  }else{
//      music.pause();
//      playbtn.classList.remove('playing');
//  }
// }