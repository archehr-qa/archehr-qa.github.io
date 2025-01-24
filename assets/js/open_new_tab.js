document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByTagName('a');
    var currentDomain = window.location.hostname;
    for (var i = 0; i < links.length; i++) {
      if (links[i].hostname !== currentDomain) {
        links[i].target = '_blank';
        links[i].rel = 'noopener noreferrer';
      }
    }
  });