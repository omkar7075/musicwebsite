
const music = new Audio('C:/xampp/htdocs/php_program/New folder/music-player/songs/arjit_audio/1.mp3');
//music.play();

//create array
const songs = [{
	id:'1',
	songName:'Naina ashq na ho <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/1.jpg"
},
{
	id:'2',
	songName:'Khairiyat <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/2.jpg"
},
{
	id:'3',
	songName:'Desh Mere <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/3.jpg"
},
{
	id:'4',
	songName:'Dhokha <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/4.jpg"
},
{
	id:'5',
	songName:'Tera Yaar Hoon Main <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/5.jpg"
},
{
	id:'6',
	songName:'Chunar <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/6.jpg"
},
{
	id:'7',
	songName:'Galti Se Mistake <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/7.jpg"
},
{
	id:'8',
	songName:'Hamari Adhuri Kahani <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/8.jpg"
},
{
	id:'9',
	songName:'Neki ki Raah <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/9.jpg"
},
{
	id:'10',
	songName:'Humdard <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/10.jpg"
},
{
	id:'11',
	songName:'Mere Yaara <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/11.jpg"
},
{
	id:'12',
	songName:'Befikare <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/12.jpg"
},
{
	id:'13',
	songName:'Ae Watan <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/13.jpg"
},
{
	id:'14',
	songName:'Agar Tum Saath Ho <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/14.jpg"
},
{
	id:'15',
	songName:'Pachtaoge <br> <div class="subtitle">Alan Walker</div> ',
	poster:"./image/15.jpg"
},

]

//araay traversing

Array.from(document.getElementByClassName('songItem')).forEach((element,i)=>{
	element.getElementTagName('img')[0].src = songs[i].poster;
	element.getElementTagName('h5')[0].innerHTML = songs[i].songName;

})

//play and paused with wave form

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementByClassName('wave')[0];


masterPlay.addEventListener('click',()=>{
	if (music.paused || music.currentTime <=0) {
		music.play();
		masterPlay.classList.remove('bi-play-fill');
		masterPlay.classList.add('bi-pause-fill');
		wave.classList.add('active2');
	}
	else{
		music.pause();
		masterPlay.classList.add('bi-play-fill');
		masterPlay.classList.remove('bi-pause-fill');
		wave.classList.remove('active2');
	}
})

const makeAllPlays = () =>{
	Array.from(document.getElementByClassName('playListPlay')).forEach((element)=>{

		element.classList.add('bi-play-circle-fill');
		element.classList.remove('bi-pause-circle-fill');
	})
}
	const makeAllBackgrounds = () =>{
	Array.from(document.getElementByClassName('songItem')).forEach((element)=>{
		element.style.background = rgb(105, 105, 170, 0);
		
	})
}
//image and song changing

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementByClassName('playListPlay')).forEach((element)=>{
	element.addEventListener('click',(e)=>{
		index = e.target.id;
		makeAllPlays();
		e.target.classList.remove(' bi-play-circle-fill');
		e.target.classList.add(' bi-pause-circle-fill');
		music.src = './songs/arjit_audio/${index}.mp3';
		poster_master_play.src = './image/${index}.jpg';
		music.play();
		let song_title = songs.filter((ele)=>{
			return ele.id == index;
		})

		song_title.forEach(ele =>{
			let {songName} = ele;
			title.innerHTML = songName;
		})

		masterPlay.classList.remove('bi-play-fill');
		masterPlay.classList.add('bi-pause-fill');
		wave.classList.add('active2');

		music.addEventListener('ended',()=>{
			masterPlay.classList.add('bi-play-fill');
			masterPlay.classList.remove('bi-pause-fill');
			wave.classList.remove('active2');

		})

		makeAllBackgrounds();
		Array.from(document.getElementByClassName('songItem'))['${index-1}'].style.background = rgb(105, 105, 170, .1);



	})

})

//playing seek bar control

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
	let music_curr = music.currentTime;
	let music_dur = music.duration;

	let min = Math.floor(music_dur/60);
	let sec = Math.floor(music_dur%60);
	if (sec<10) {
		sec = '0${sec}';
	}
	currentEnd.innerText = '${min}:${sec}';

	let min1 = Math.floor(music_dur/60);
	let sec1 = Math.floor(music_dur%60);
	if (sec1<10) {
		sec1 = '0${sec1}';
	}
	currentStart.innerText = '${min1}:${sec1}';

	let progressbar = parseInt((music.currentTime/music.duration)*100);
	seek.value = progressbar;
	let seekbar = seek.value;
	bar2.style.width ='${seekbar}%';
	dot.style.left ='${seekbar}%';
})

seek.addEventListener('change',()=>{
	music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended',()=>{
	masterPlay.classList.add('bi-play-fill');
	masterPlay.classList.remove('bi-pause-fill');
	wave.classList.remove('active2');
})

//volume bar control

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementByClassName('vol_bar')[0];

vol.addEventListener('change',()=>{
	if (vol.value == 0) {
		vol_icon.classList.remove('bi-volume-down-fill');
		vol_icon.classList.add('bi-volume-mute-fill');
		vol_icon.classList.remove('bi-volume-up-fill');
	}

	if (vol.value > 0) {
		vol_icon.classList.add('bi-volume-down-fill');
		vol_icon.classList.remove('bi-volume-mute-fill');
		vol_icon.classList.remove('bi-volume-up-fill');
	}

	if (vol.value > 50) {
		vol_icon.classList.remove('bi-volume-down-fill');
		vol_icon.classList.remove('bi-volume-mute-fill');
		vol_icon.classList.add('bi-volume-up-fill');
	}

	let vol_a = vol.value;
	vol_bar.style.width = '${vol_a}%';
	vol_dot.style.left = '${vol_a}%';
	music.volume = vol_a/100;

})


let back = document.getElementById('back');
let next = document.getElementById('next');

//next song play
back.addEventListener('click',()=>{
	index -= 1;
	if (index < 1) {
		index = Array.from(document.getElementByClassName('songItem')).length;

	}

	music.src = './songs/arjit_audio/${index}.mp3';
		poster_master_play.src = './image/${index}.jpg';
		music.play();
		let song_title = songs.filter((ele)=>{
			return ele.id == index;
		})

		song_title.forEach(ele =>{
			let {songName} = ele;
			title.innerHTML = songName;
		})

		makeAllPlays();

		document.getElementById('${index}').classList.remove('bi-play-fill');
		document.getElementById('${index}').classList.add('bi-pause-fill');
		makeAllBackgrounds();
		Array.from(document.getElementByClassName('songItem'))['${index-1}'].style.background = rgb(105, 105, 170, .1);


})

//next song play
next.addEventListener('click',()=>{
	index -= 0;
	index += 1;
	if (index > Array.from(document.getElementByClassName('songItem')).length) {
		index = 1;
	}

	music.src = './songs/arjit_audio/${index}.mp3';
		poster_master_play.src = './image/${index}.jpg';
		music.play();
		let song_title = songs.filter((ele)=>{
			return ele.id == index;
		})

		song_title.forEach(ele =>{
			let {songName} = ele;
			title.innerHTML = songName;
		})

		makeAllPlays();

		document.getElementById('${index}').classList.remove('bi-play-fill');
		document.getElementById('${index}').classList.add('bi-pause-fill');
		makeAllBackgrounds();
		Array.from(document.getElementByClassName('songItem'))['${index-1}'].style.background = rgb(105, 105, 170, .1);


})

//songs scroll

let left_scroll = document.getElementById('left_scroll'); 
let right_scroll = document.getElementById('right_scroll'); 

let pop_song = document.getElementByClassName('pop_song')[0];

left_scroll.addEventListener('click',()=>{
	pop_song.scrollLeft -= 330;

})

right_scroll.addEventListener('click',()=>{
	pop_song.scrollRight += 330;
	
})


//artists scrolls

let left_scrolls = document.getElementById('left_scrolls'); 
let right_scrolls = document.getElementById('right_scrolls'); 

let item = document.getElementByClassName('item')[0];

left_scrolls.addEventListener('click',()=>{
	item.scrollLeft -= 330;

})

right_scrolls.addEventListener('click',()=>{
	item.scrollRight += 330;
})