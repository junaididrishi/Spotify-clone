// intitialize the var
let songIndex ="0";
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let masterSongPlay=document.getElementById('masterSongName');
let songs=[
    {songName:"Faded",filePath:"song/1.mp3",coverPath:"poster/faded.jpg"},
    {songName:"7 Years",filePath:"song/2.mp3",coverPath:"poster/years poster.jpg"},
    {songName:"Alone",filePath:"song/3.mp3",coverPath:"poster/faded.jpg"},
    {songName:"On My Way",filePath:"song/4.mp3",coverPath:"poster/faded.jpg"},
    {songName:"Bye Bye Bye",filePath:"song/5.mp3",coverPath:"poster/bye bye deadpool.jpg"},
    {songName:"Let me love you",filePath:"song/6.mp3",coverPath:"poster/let me love you.jpg"},
    {songName:"Perfect",filePath:"song/7.mp3",coverPath:"poster/perfect poster.jpg"},
    {songName:"Snowman",filePath:"song/8.mp3",coverPath:"poster/snowman poster.jpg"},
    {songName:"Willow",filePath:"song/9.mp3",coverPath:"poster/willow poster.jpg"},
    {songName:"Night Changes",filePath:"song/10.mp3",coverPath:"poster/night changes poster.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//hnadle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity= 0;
    }
})
// listen to event 
audioElement.addEventListener('timeupdate',()=>{
//update seeker
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})
const makeAllPlay =()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        masterSongPlay.innerText=songs[songIndex-1].songName;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`song/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity= 1;

       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
    })
})
document.getElementById('next').addEventListener(('click'),()=>{
    if(songIndex>9){
        songIndex=0;
        masterSongPlay.innerText=songs[songIndex-1].songName;
    }else{
        songIndex +=1;
        audioElement.src=`song/${songIndex}.mp3`;
        masterSongPlay.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity= 1;

       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
    }
} )
document.getElementById('previous').addEventListener(('click'),()=>{
    if(songIndex<=0){
        songIndex=10;
        masterSongPlay.innerText=songs[songIndex-1].songName;
    }else{
        songIndex -=1;
        audioElement.src=`song/${songIndex}.mp3`;
        masterSongPlay.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity= 1;

       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
    }
})