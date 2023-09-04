
const music = new Audio('./songs/justin/1.mp3');
//music.play();

//create array
let songs = [
{
	id:'1',
	songName:'Astronaut   <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/1.jpg",
	//src : './songs/arjit_audio/1.mp3'
},
{
	id:'2',
	songName:'Baby <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/2.jpg"
},
{
	id:'3',
	songName:'Ghost <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/3.jpg"
},
{
	id:'4',
	songName:'Intentions <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/4.jpg"
},
{
	id:'5',
	songName:'Stay x <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/5.jpg"
},
{
	id:'6',
	songName:'Love Yourself <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/6.jpg"
},
{
	id:'7',
	songName:'Mood <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/7.jpg"
},
{
	id:'8',
	songName:'Sorry(Latino Remix) <br><div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/8.jpg"
},
{
	id:'9',
	songName:'Sorry <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/9.jpg"
},
{
	id:'10',
	songName:'Stay <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/10.jpg"
},
{
	id:'11',
	songName:'Stay <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/11.jpg"
},
{
	id:'12',
	songName:'STAY <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/12.jpg"
},
{
	id:'13',
	songName:'What Do You Mean <br> <div class="subtitle">Justin Bieber</div> ',
	poster:"./image/justin/13.jpg"
},
{
	id:'14',
	songName:'Favorite Girl <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/14.jpg"
},
{
	id:'15',
	songName:'Peaches <br> <div class="subtitle">Justin Bieber</div>  ',
	poster:"./image/justin/15.jpg"
},

];

////////////////////////////////////////////////////////////////////////////////////

//array traversing

let songitem = Array.from(document.getElementById('songItem'));
songitem.forEach((element,i)=>{
	element.getElementsByTagName('img')[0].src = songs[i].poster;
	element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});

///////////////////////////////////////////////////////////////////////////////////

//search the songs in search bar

let searchresults = document.getElementById('search_results');

songs.forEach(element => {
	const{id, songName, poster} = element;
	//console.log(id);


let card =document.createElement('a');
card.classList.add('card');
card.href ="#" + id;
card.innerHTML =
` <img src="${poster}" alt="alan" id="img">
              <div class="content">
                ${songName}
              </div>`;

searchresults.appendChild(card);

});


let input = document.getElementById('input');

input.addEventListener('keyup', ()=>{
	let input_value = input.value.toUpperCase();
	//let a = getElementsTagName('a').value;
	let items = searchresults.getElementsByTagName('a');

	for (let index =0; index < items.length; index++) {
		let as = items[index].getElementsByClassName('content')[0];
		let text_value = as.textContent || as.innerHTML;

		if (text_value.toUpperCase().indexOf(input_value) > -1) {
			items[index].style.display = "flex";

		}

		else{
			items[index].style.display = "none";

		}

		if(input_value==0){
			searchresults.style.display = "none";
		}
		else{
			searchresults.style.display = " ";
		}

	}

});



////////////////////////////////////////////////////////////////
//play and paused with wave form

let masterplay = document.getElementById('master_Play');
let wave = document.getElementById('wave')[0];

//button play call
function play(){
	if (music.paused || music.currentTime <=0) {
		music.play();
		document.getElementById('master_Play').classList.remove('bi-play-fill');
		document.getElementById('master_Play').classList.add('bi-pause-fill');
		document.getElementById('wave').classList.add('active2');
	}
}

//masterPlay

document.getElementById('master_Play').addEventListener('click',function play_pause(){
	if (music.paused || music.currentTime <=0) {
		music.play();
		document.getElementById('master_Play').classList.remove('bi-play-fill');
		document.getElementById('master_Play').classList.add('bi-pause-fill');
		document.getElementById('wave').classList.add('active2');
	}
	else{
		music.pause();
	  document.getElementById('master_Play').classList.add('bi-play-fill');
		document.getElementById('master_Play').classList.remove('bi-pause-fill');
		document.getElementById('wave').classList.remove('active2');
	}
});

/////////////////////////////////////////////////////////////////////////////////
let playlist = Array.from(document.getElementsByName('playListPlay'));

const makeAllPlays = () =>{
	
	playlist.forEach((el)=>{
		el.classList.add('bi-play-circle-fill');
		el.classList.remove('bi-pause-circle-fill');
	});

}

	const makeAllBackgrounds = () =>{
	songitem.forEach((eleme)=>{
		eleme.style.background = 'rgb(105, 105, 105, .0)';
		
	});
}


///////////////////////////////////////////////////////////////////////////////////////

//image and song changing

let index =0 ;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');


/*
playlist.forEach((e)=>{
	e.addEventListener('click',(el)=>{
		let index = el.target.id;
		//console.log(index);
	});
});
*/

//Array.from(document.getElementById('playListPlay'))
		playlist.forEach((element)=>{
		element.addEventListener('click',(e)=>{
		index = e.target.id;
		makeAllPlays();
		e.target.classList.remove('bi-play-circle-fill');
		e.target.classList.add('bi-pause-circle-fill');
		music.src = `./songs/justin/${index}.mp3`;
		poster_master_play.src = `./image/justin/${index}.jpg`;
		music.play();
		document.getElementById('master_Play').classList.remove('bi-play-fill');
		document.getElementById('master_Play').classList.add('bi-pause-fill');
	  document.getElementById('wave').classList.add('active2');

		let song_title = songs.filter((ele)=>{
			return ele.id == index;
		});

		song_title.forEach(elem =>{
			let {songName } = elem;
			title.innerHTML = songName;
			//document.getElementById('poster_master_play').src = `./image/arjit_img/${index}.jpg`;

		});

		makeAllBackgrounds();
		songitem[index-1].style.background = 'rgb(105, 105, 170, .1)';
    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    document.getElementById('wave').classList.add('active2');



	});

});



///////////////////////////////////////////////////////////////////////

//playing seek bar control

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');

music.addEventListener('timeupdate',()=>{
	
	let music_curr = music.currentTime;
	let music_dur = music.duration;

	let min1 = Math.floor(music_dur / 60);
	let sec1 = Math.floor(music_dur % 60);

	if (sec1<10) 
	{
		sec1 = `0${sec1}`;
	}
  currentEnd.innerText = `${min1}:${sec1}`;

	let min = Math.floor(music_curr / 60);
	let sec = Math.floor(music_curr % 60);

	if (sec < 10)
	 {
		sec =`0${sec}`;
	}
	currentStart.innerText = `${min}:${sec}`;

	let progressbar = parseInt((music_curr/music_dur)*100);
	seek.value = progressbar;
	let seekbar = seek.value;
	bar2.style.width =`${seekbar}%`;
	dot.style.left =`${seekbar}%`;
});


seek.addEventListener('change',()=>{
	music.currentTime = seek.value * music.duration/100;
});

music.addEventListener('ended',()=>{
	document.getElementById('master_Play').classList.add('bi-play-fill');
  document.getElementById('master_Play').classList.remove('bi-pause-fill');
  document.getElementById('wave').classList.remove('active2');
});



/////////////////////////////////////////////////////////////////

//volume bar control

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementById('vol_bar');

vol.addEventListener('change',()=>{
	if (vol.value == 0) {

		vol_icon.classList.remove('bi-volume-up-fill');
		vol_icon.classList.remove('bi-volume-down-fill');
		vol_icon.classList.add('bi-volume-mute-fill');
		
	}

	 if (vol.value > 0) {

		vol_icon.classList.remove('bi-volume-up-fill');
		vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
		
	}

 if(vol.value > 50) {

		vol_icon.classList.add('bi-volume-up-fill');
		vol_icon.classList.remove('bi-volume-down-fill');
		vol_icon.classList.remove('bi-volume-mute-fill');
		
	}

	let vol_a =  vol.value;
	vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
	music.volume = vol_a / 100;

});






////////////////////////////////////////////////////////////////

let back = document.getElementById('back');
let next = document.getElementById('next');

//back song play

back.addEventListener('click',()=>{
	//var index=1; 
	index-= 1;
	if (index <= 1) {
		index = songs.length;
		//index=0;
	}
	else{
		index-=1;
	}

	music.src = `songs/justin/${index}.mp3`;
		poster_master_play.src = `image/justin/${index}.jpg`;
		music.play();
		let song_title = songs.filter((ele)=>{
			return ele.id == index;
		});

		song_title.forEach(elem =>{
			let {songName} = elem;
			title.innerHTML = songName;
		});

		makeAllBackgrounds();
		songitem.style.background = 'rgb(105, 105, 170, .1)';
    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    document.getElementById('wave').classList.add('active2');

});

///////////////////////////////////////////////////////////////////////////


//next song play

next.addEventListener('click',()=>{
  index -= 0;
	index += 1;
	if (index > songs.length) {
		index = 1;
	}

		music.src = `songs/justin/${index}.mp3`;
		poster_master_play.src = `image/justin/${index}.jpg`;
		music.play();
		let song_title = songs.filter((ele)=>{
			return ele.id == index;
		});

		song_title.forEach(elem =>{
			let {songName} = elem;
			title.innerHTML = songName;
		});



    makeAllBackgrounds();
		songitem.style.background = 'rgb(105, 105, 170, .1)';
    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    document.getElementById('wave').classList.add('active2');

});






////////////////////////////////////////////////////////////////

//songs scroll

//let left_scroll = document.getElementById('left_scroll'); 
//et right_scroll = document.getElementById('right_scroll'); 
//let pop_song = document.getElementById('pop_song');

  document.getElementById('left_scroll').addEventListener('click',function scrollleft(){
	document.getElementById('pop_song').scrollLeft -= 330; 
	
});


  document.getElementById('right_scroll').addEventListener('click',function scrollright() {
	document.getElementById('pop_song').scrollLeft += 330;

});

  


//artists scrolls

//let left_scrolls = document.getElementById('left_scrolls'); 
//let right_scrolls = document.getElementById('right_scrolls'); 
//let item = document.getElementById('item')[0];

document.getElementById('left_scrolls').addEventListener('click',function leftscroll(){
document.getElementById('item').scrollLeft -= 330;

});

document.getElementById('right_scrolls').addEventListener('click',function rightscroll(){
	document.getElementById('item').scrollLeft += 330;
	});


/////////////////////////////////////////////////////////////

let follow = document.getElementById('follow');
follow.addEventListener('click',()=>{
window.alert('You Successfully Subscribe!');
});



///////////////////////////////////////////////////////////////


/*

let menu_list_active_button = document.getElementById('menu_list_active_button');
let menu_side = document.getElementById('menu_side')[0];

menu_list_active_button.addEventListener('mouseclick',()=>{
  menu_side.style.transform = "unset";
  menu_list_active_button.style.opacity = 0;
});

let song_side = document.getElementById('song_side')[0];

document.getElementById('song_side').addEventListener('mouseclick',()=>{
  song_side.style.transform = "translateX(-100%)";
  menu_list_active_button.style.opacity = 1;
});
*/