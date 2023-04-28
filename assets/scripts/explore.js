// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("select");
  const textToSpeak = document.querySelector('#text-to-speak');
  const img = document.querySelector("img");
  const button = document.querySelector("button");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  button.addEventListener('click', function(){
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute(
      'data-name'
    );
    const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
    utterThis.voice = voices.find(v => v.name === selectedVoice);
    synth.speak(utterThis);
    utterThis.addEventListener('start', function(){
      img.src = 'assets/images/smiling-open.png';
    });
    utterThis.addEventListener('end', function(){
      img.src = 'assets/images/smiling.png';
    })
  })

  

}