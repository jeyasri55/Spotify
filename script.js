console.log("Welcome");

let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSong = document.getElementById('masterSong');

let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName : "Aval - Santhosh Narayanan" , filePath:"1.mp3", coverPath:"Aval.png"},
    {songName : "Darshana - Abdul Wahab" , filePath:"2.mp3", coverPath:"Darshana.jpg"},
    {songName : "Harleys-in-Hawaii - Katy Perry" , filePath:"3.mp3", coverPath:"Harleys-In-Hawaii.jpg"},
    {songName : "So_Baby - Anirudh Ravichandar" , filePath:"4.mp3", coverPath:"So_Baby.jpeg"},
    {songName : "Vanilla - HipHop Tamizha" , filePath:"5.mp3", coverPath:"Vanilla.png"},
    {songName : "Vilambara_Idaivelai - HipHop" , filePath:"6.mp3", coverPath:"Vilambara_Idaivelai.jfif"}

] 
songItems.forEach((element,i)=>{
     console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
    masterSong.innerText=songs[songIndex].songName;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
// audioElement.play();
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');


})

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

    audioElement.src = `${songIndex + 1}.mp3`;
    masterSong.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex > 6)
    {songIndex = 0;}
    else
    {songIndex += 1;}
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSong.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0)
    {songIndex=0;}
    else
    {songIndex-=1;}
    audioElement.src = `${songIndex+1}.mp3`;
    masterSong.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
