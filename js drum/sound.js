  function playSound(event) {
      const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
      console.log(audio);
      if (!audio) return; // stop audio from playing all together.
      audio.currentTime = 0 // will bring back to the start
      audio.play();
      key.classList.add('playing');
  }

  function removeTransition(event) {
      if (event.propertyName !== 'transform') return; // skip if not a transform
      this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);