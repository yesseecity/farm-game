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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhdWRpb0VsZW1lbnQgPSBuZXcgQXVkaW8oJ21lZGlhL2Zhcm1nYW1lLWJnbS5tcDMnKTtcbmF1ZGlvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgKCkgPT4ge1xuICBsZXQgZHVyYXRpb24gPSBhdWRpb0VsZW1lbnQuZHVyYXRpb247XG4gIC8vIFRoZSBkdXJhdGlvbiB2YXJpYWJsZSBub3cgaG9sZHMgdGhlIGR1cmF0aW9uIChpbiBzZWNvbmRzKSBvZiB0aGUgYXVkaW8gY2xpcCBcbiAgY29uc29sZS5sb2coJ2R1cmF0aW9uOiAnLCBkdXJhdGlvbik7XG59KVxuYXVkaW9FbGVtZW50LnZvbHVtZT0wLjE1O1xuLy8gYXVkaW9FbGVtZW50LnBsYXkoKVxuXG5zdWJmcmFtZUVuYWJsZSA9IHRydWU7XG5mdW5jdGlvbiBzdWJmcmFtZSh0eXBlKSB7XG4gIGlmIChzdWJmcmFtZUVuYWJsZSkge1xuICAgICQoJy5zdWItZnJhbWUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gIH0gZWxzZSB7XG4gICAgJCgnLnN1Yi1mcmFtZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxuICBzdWJmcmFtZUVuYWJsZSA9ICFzdWJmcmFtZUVuYWJsZTtcblxuICBzd2l0Y2godHlwZSkge1xuICAgIGNhc2UgJ3NlZWQnOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd2F0ZXInOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGVzdC1jb250cm9sJzpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BsYW50LWZvb2QnOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd2VlZGluZyc6XG4gICAgICBicmVhaztcbiAgfVxufSJdfQ==
