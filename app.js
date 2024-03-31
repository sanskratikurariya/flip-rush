

const playbtn = document.querySelector(".play-btn");
const music = document.querySelector(".tick");
let button = document.querySelector(".play-btn")
function toggleMusic() {
    console.log(music.paused)
    if (music.muted) {
        music.muted = false
    } else {
        music.muted = true
    }
}
playbtn.addEventListener('click', toggleMusic);

playbtn.addEventListener('click', function () {
    button.classList.toggle("clicked");
})

const cards = document.querySelectorAll(".card");
console.log(cards);

let newArray = Array.from(cards);
const images = ["https://tse3.mm.bing.net/th?id=OIP.5VbtOHYjGBh-F4Z-Qaa86AHaHa&pid=Api&P=0&h=180", "https://tse2.mm.bing.net/th?id=OIP.Qs60VKF_OBLs_x1fQLIzLAHaHa&pid=Api&P=0&h=180", "https://tse1.mm.bing.net/th?id=OIP.iXHSrDu--7IjT6uupL-0GAHaFu&pid=Api&P=0&h=180", "https://tse1.mm.bing.net/th?id=OIP.TnZBZFTi8G9M9FBQ8UrOwAAAAA&pid=Api&P=0&h=180", "https://tse1.mm.bing.net/th?id=OIP.mJF3fIAUxEAmfmNKNLRCEwHaIe&pid=Api&P=0&h=180", "https://tse4.mm.bing.net/th?id=OIP.lWVKjIpEVqT8hKn4v_bWDgAAAA&pid=Api&P=0&h=180", "https://tse4.mm.bing.net/th?id=OIP.YbucSso21HOtwvW1AQCZswHaEK&pid=Api&P=0&h=180", "https://tse4.mm.bing.net/th?id=OIP.phnHnwdPYfcnTg4b44Za7AHaHa&pid=Api&P=0&h=180", "https://tse3.mm.bing.net/th?id=OIP.RY4b7jlwJkyeAeh1aTBGbwHaHa&pid=Api&P=0&h=180", "https://tse1.mm.bing.net/th?id=OIP.4Uh4AAkNDCP-chIRD78YQgHaHa&pid=Api&P=0&h=180", "https://tse2.mm.bing.net/th?id=OIP.Z8TU2aVAfjPK2kTbtsabcgHaHa&pid=Api&P=0&h=180", "https://tse1.mm.bing.net/th?id=OIP.rx1CsAz1CYx8Tic-x__58wHaHa&pid=Api&P=0&h=180"]
const array = [...images, ...images];

const sort = array.sort(() => Math.random() - 0.5

);
for (let i = 0; i < sort.length; i++) {
    console.log(sort[i])
    cards[i].style.backgroundImage = `url(${sort[i]})`
}

const time = setTimeout(() => {
    for (let i = 0; i < sort.length; i++) {
        console.log(sort[i])
        cards[i].style.backgroundImage = 'url("https://tse1.mm.bing.net/th?id=OIP.fineHEuo5epJg2AcA1YXDgHaHa&pid=Api&P=0&h=180")'
    }
    var timerEle = document.getElementById('timer');
    var popupLost = document.getElementById('lost');
    var secondsLeft = 120;

    // updateTimer fucntion update the time every second decreat the time -1 from the given time
    function updateTimer() {
        if (secondsLeft > 0) {
            secondsLeft--;
            timerEle.innerText = secondsLeft;
            if (newArray.length === 0) {
                    var popUp = document.querySelector("#win");
                    popUp.classList.remove('hidden');
                    clearInterval(timerInterval);
                 }
        } else {
            clearInterval(timerInterval);
            popupLost.classList.remove('hidden');
            for (let i = 0; i < newArray.length; i++) {
                newArray[i].style.pointerEvents = "none";
                newArray[i].style.opacity = 0.3;
            }
        }
    }
    let timerInterval = setInterval(updateTimer,1000 );


}, 2000)

console.log(time);

let match = [];
for (let i = 0; i < cards.length; i++) {


    console.log(cards[i]);

    const showTask = (e) => {
        match.push(e.target);
        e.target.style.pointerEvents = "none";
        console.log(match);
        //e.target se hme elemnt milta hai jo event ko target kar rha hai .jis bhi card ko click karige vo e.target baan jaiga
        e.target.style.backgroundImage = `url('${sort[i]}')`
        if (match.length === 2) {
            if (match[0].style.backgroundImage === match[1].style.backgroundImage) {
                setTimeout(() => {
                    for (let i = 0; i < match.length; i++) {
                        console.log(match[i], "hellooo");
                        match[i].style.pointerEvents = "none";
                        match[i].style.opacity = 0.3;

                        let index = newArray.indexOf(match[i]);
                        console.log(newArray.length);
                        newArray.splice(index, 1);
                        console.log(newArray.length);
                    }
                    match = []
                    console.log(match)


                    // if (newArray.length === 0) {
                    //     var popUp = document.querySelector("#win");
                    //     popUp.classList.remove('hidden');
                    // }
                }, 700)

            } else {
                //element hai vo current index hai
                //set time out higher order function hai kyuki uske parametr me hum function dal skte hai
                //jo parameter kee andar function dalte hai vo callback function hote hai
                setTimeout(() => {
                    match.forEach(element => {
                        element.style.pointerEvents = "auto";
                        element.style.backgroundImage = `url('https://tse1.mm.bing.net/th?id=OIP.fineHEuo5epJg2AcA1YXDgHaHa&pid=Api&P=0&h=180')`
                    })
                    match = []
                    console.log(match)

                }, 700)


            }

        }


    }



    cards[i].addEventListener('click', showTask)
};

