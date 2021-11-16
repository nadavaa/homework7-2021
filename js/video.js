var video = document.querySelector(".video").load();

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	document.querySelector('.video').play();
    console.log("Play Video");
    var volumeValue = document.getElementById('slider').value;
    document.getElementById('volume').innerHTML = volumeValue + "%";
    console.log("Update the volume");
});

var video = document.querySelector('.video');

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
    console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    video.addEventListener('ended', function(){
		video.currentTime = 0;
		video.play();
	  });
    console.log("Original loaction " + video.currentTime);
    video.currentTime += 15;
    if (video.currentTime == video.duration){ 
		console.log("Going back to beggining");
		console.log("New location 0");
	} else {
	console.log("New location " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
    const btn = document.getElementById("mute");
	
	if(btn.innerText === "Mute"){
        btn.innerText = "Unmute";
		video.muted = true;
    }else{
        btn.innerText= "Mute";
		video.muted = false;
    }

});


var i = document.querySelector('input'),
	o = document.querySelector('#volume');

i.addEventListener('input', function () {
	o.innerHTML = i.value + "%";
	var vid = document.querySelector('.video');
	var newVolume = i.value / 100;
	vid.volume = newVolume;
}, false);

document.querySelector("#vintage").addEventListener("click", function() {
	video.style.add = querySelector(".oldSchool")

});

document.querySelector("#orig").addEventListener("click", function() {
	video.style.filter = "sepia(0%)"

});