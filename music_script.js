let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let track_image = document.querySelector('#track_image');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;

let index_no = 0;
let Playing_song = false;

let track = document.createElement('audio');


let All_song = [
   {
     name: "Last Day (David August Revision)",
     path: "music/song1.mp3",
     img: "img/img1.jpg",
     singer: "David August"
   },
   {
     name: "Time",
     path: "music/song2.mp3",
     img: "img/img2.jpg",
     singer: "Pachanga Boys"
   },
   {
     name: "Lanarka",
     path: "music/song3.mp3",
     img: "img/img3.jpg",
     singer: "Sebastien Leger"
   },
   {
     name: "Dream Machine",
     path: "music/song4.mp3",
     img: "img/img4.jpg",
     singer: "Dominik Eulberg, Essay"
   },
   {
     name: "Letter for Poly",
     path: "music/song5.mp3",
     img: "img/img5.jpg",
     singer: "Cornucopia"
   },

   {
    name: "Know Your Rights",
    path: "music/song6.mp3",
    img: "img/img6.jpg",
    singer: "The Clash"
  },
  {
    name: "My Silver Lining",
    path: "music/song7.mp3",
    img: "img/img7.jpg",
    singer: "First Aid Kit"
  },
  {
    name: "Yes I'm Changing",
    path: "music/song8.mp3",
    img: "img/img8.jpg",
    singer: "Tame Impala"
  },
  {
    name: "Candyland",
    path: "music/song9.mp3",
    img: "img/img9.jpg",
    singer: "Guy J"
  },
  {
    name: "Lost in a Moment",
    path: "music/song10.mp3",
    img: "img/img10.jpg",
    singer: "Matthew Dekay, Lee Burrdige"
  }
];



function load_track(index_no){
	clearInterval(timer);

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);




 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }




function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}



function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}
