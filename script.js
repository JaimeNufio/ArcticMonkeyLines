var song = document.getElementById("words");
var from = document.getElementById("from");
var lyricSlot = document.getElementById("lyrics");
var album = document.getElementById("album");
var titleMini= document.getElementById("titleMini");
var albumTitleMini= document.getElementById("albumTitleMini");

var songJS = songs[0]; 

function getKey(val){
	for(var key in songJS) {
    if(songJS[key] === val) {
    	return key;
		}
	}
}

function getRandomSong(){
	var Songs = Object.values(songJS)
	var num = parseInt(Math.random() * Songs.length)
	const randomSong = Songs[num]
	if (randomSong["goodBits"].length >0){
		console.log(randomSong["goodBits"]);
		var lyric = randomSong["goodBits"][parseInt(Math.random()*randomSong["goodBits"].length)];
		if (randomSong["album"] == "" || lyric == ""){
			getRandomSong();
		}
		song.innerHTML = "\""+lyric+"\"";
		console.log(Songs[num]);
		var title = getKey(randomSong);
		from.innerHTML = "From, \""+title+"\"";
		lyricSlot.innerHTML = randomSong["lyrics"];
		album.src=randomSong["image"];
		titleMini.innerHTML = title;	
		albumTitleMini.innerHTML = randomSong['album'];	
	}else{
		getRandomSong();
	}
}

$(document).ready(function(){
    $("#words").click(function(){
        $("#words").fadeOut("fast",getRandomSong);
				$("#words").fadeIn("fast");
    });
});

$("#info").hide();
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
    	$("#info").fadeIn("fast");
			console.log("in");
		}else{
			console.log("out");
    	$("#info").fadeOut("fast");
    }
});

getRandomSong();
