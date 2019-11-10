$('.sub-frame').draggable()


var audioElement = new Audio('media/farmgame-bgm.mp3');
audioElement.addEventListener('loadeddata', () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip 
  console.log('duration: ', duration);
})
audioElement.volume=0.15;
// audioElement.play()

subframeEnable = true;
function subframe(type) {
  if (subframeEnable) {
    $('.sub-frame').addClass('hidden');
  } else {
    $('.sub-frame').removeClass('hidden');
  }
  subframeEnable = !subframeEnable;

  switch(type) {
    case 'seed':
      break;
    case 'water':
      break;
    case 'pest-control':
      break;
    case 'plant-food':
      break;
    case 'weeding':
      break;
  }
}