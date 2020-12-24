window.onload = function() {
	window.addEventListener("devicemotion", function(e) {
		var audio = document.getElementById("audio");

		var turningSpeed = Math.round(Math.abs(e.rotationRate.gamma / 3)) / 100;
		var playbackSpeed = 1.2 * turningSpeed + 0.5;

		if (turningSpeed < 0.05) {
			playbackSpeed = 0;
			audio.pause();
		}
		else {
			audio.play();
		}

		if (turningSpeed > 4) {
			playbackSpeed = 4;
		}

 		document.getElementById("turningLabel").innerText = "Dreh: " + turningSpeed;
 		document.getElementById("playbackLabel").innerText = "Abspiel: " + playbackSpeed;
		audio.playbackRate = playbackSpeed;
	});



	document.getElementById("audioFileInput").addEventListener("change", function(e) {
		var audioPlayer = document.getElementById("audio");
		var audioFileInput = document.getElementById("audioFileInput");
		var audioFileLabel = document.getElementById("audioFileLabel");

		audioPlayer.src = URL.createObjectURL(this.files[0]);
		audioFileLabel.innerText = audioFileInput.files[0].name;
	});
};
