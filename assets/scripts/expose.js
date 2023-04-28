// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  // Access images, audio, various values, etc.
  const hornSelect = document.querySelector('#horn-select');
  const image = document.querySelector('img');
  const volume = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audio = document.querySelector(".hidden");
  const button = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  volume.addEventListener('input', function(){
    //set volume output and icon

    audio.volume = volume.value / 100;

    if (volume.value==0){
      volumeIcon.src= 'assets/icons/volume-level-0.svg';
    } else if (volume.value < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume.value < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else{
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

  });


  hornSelect.addEventListener('change', function() {

    const selectedHorn = hornSelect.value;
    
    // update the image and audio src
    if (selectedHorn === 'air-horn') {
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  button.addEventListener('click', function() {
    // Play the audio and confetti if it's party horn
    audio.play();
    if (hornSelect.value === 'party-horn'){
      jsConfetti.addConfetti({
        confettiRadius: 10,
        confettiNumber: 500,
      });
    }
  });

}