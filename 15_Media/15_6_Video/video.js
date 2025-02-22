// dom elements
const meadow = document.getElementById('meadow');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');

// start video, enable stop and pause
// disable play
function startPlayback() {
  meadow.play();
  pause.disabled = false;
  stop.disabled = false;
  start.disabled = true;
}

// pause video, enable start, disable stop
// disable pause
function pausePlayback() {
  meadow.pause();
  pause.disabled = true;
  start.disabled = false;
  stop.disabled = false;
}

// stop video, return to zero time
// enable play, disable pause and stop
function stopPlayback() {
  meadow.pause();
  meadow.currentTime = 0;
  start.disabled = false;
  pause.disabled = true;
  stop.disabled = true;
}

// for every time divisible by 5, output feedback
function reportProgress() {
  const time = Math.round(this.currentTime);
  const div = document.getElementById('feedback');
  div.innerHTML = `${time} seconds`;
}


// toggle play/pause using space key
function togglePlayback(event) {
    if (event.code === 'Space') {
      event.preventDefault(); // prevent scrolling
      if (meadow.paused || meadow.ended) {
        startPlayback();
      } else {
        pausePlayback();
      }
    }
  }


// event listeners
document.getElementById('start').addEventListener('click', startPlayback);
document.getElementById('stop').addEventListener('click', stopPlayback);
document.getElementById('pause').addEventListener('click', pausePlayback);
meadow.addEventListener('timeupdate', reportProgress);


document.addEventListener('keydown', togglePlayback);