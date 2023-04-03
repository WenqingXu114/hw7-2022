// player object
const video = document.querySelector("#player1");
const volume = document.querySelector("#volume");
const muteButton = document.getElementById('mute');
const slider = document.getElementById("slider");

// nitialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

// Play the video and update the volume information. 
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	volume.textContent = `${Math.round(video.volume * 100)}%`;
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
})

// Slow down by 10% each time
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log(`New speed is ${video.playbackRate}`);
})

// Speed up by 10% each time
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log(`New speed is ${video.playbackRate}`);
})

// Skip ahead 10 seconds
document.querySelector("#skip").addEventListener("click", function () {
	console.log(`Original location ${video.currentTime}`);
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log(`New location ${video.currentTime}`)
})

// Mute the video and update the text in the button
muteButton.addEventListener("click", function () {
	if (video.muted) {
		video.muted = false; // unmute the video
		document.querySelector("#mute").textContent = "Mute"; // update the button text
	} else {
		video.muted = true; // mute the video
		document.querySelector("#mute").textContent = "Unmute"; // update the button text
	}
})

// Volume Slider
slider.addEventListener("input", function () {
	video.volume = this.value / 100;
	volume.textContent = `${Math.round(video.volume * 100)}%`;
	console.log(video.volume);
})

document.querySelector("#vintage").addEventListener('click', () => {
	video.classList.add('oldSchool')

})

document.querySelector("#orig").addEventListener('click', () => {
	video.classList.remove('oldSchool')
})
