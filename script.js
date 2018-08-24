var song= document.getElementById("words");
var from= document.getElementById("from");

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
	}else{
		getRandomSong();
	}
}

$(document).ready(function(){
    $("#words").click(function(){
        $("#words").fadeOut(500,getRandomSong);
				$("#words").fadeIn(500);
    });
});

function update(){
//	getRandomSong();
//	song.innerHTML=songJS[0]['505']['goodBits'][0];
}

//document.getElementById("btn").onclick=update;


