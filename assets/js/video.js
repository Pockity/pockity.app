const controls = [...document.querySelectorAll(".video-controls")];
console.debug(controls);
controls.forEach((e) => { mapVideoControls(e); });

function checkIsDarkSchemePreferred() {
  return window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false
}

function mapVideoControls(videoControls) {
  const videoID = videoControls.dataset.videoid;
  if (!videoID) {
    return;
  }
  console.debug(videoID);

  const video = document.getElementById(videoID);
  if (!video) {
    return;
  }

  mapVideoSources(video);
  
  const playButton = videoControls.querySelector(".play");
  const pauseButton = videoControls.querySelector(".pause");
  const replayButton = videoControls.querySelector(".replay");

  console.debug({ playButton, pauseButton, replayButton });

  playButton.addEventListener("click", (evt) => {
    video.play().then(console.log).catch(console.error);
  });

  replayButton.addEventListener("click", (evt) => {
    video.play().then(console.log).catch(console.error);
  });

  pauseButton.addEventListener("click", (evt) => {
    video.pause().then(console.log).catch(console.error);
  })

  video.addEventListener("play", (evt) => {
    playButton.setAttribute("aria-hidden", "true");
    pauseButton.setAttribute("aria-hidden", "false");
    replayButton.setAttribute("aria-hidden", "true");
  });

  video.addEventListener("pause", (evt) => {
    playButton.setAttribute("aria-hidden", "false");
    pauseButton.setAttribute("aria-hidden", "true");
    replayButton.setAttribute("aria-hidden", "true");
  });

  video.addEventListener("ended", (evt) => {
    playButton.setAttribute("aria-hidden", "true");
    pauseButton.setAttribute("aria-hidden", "true");
    replayButton.setAttribute("aria-hidden", "false");
  })
}

function mapVideoSources(video)  {
  const isDarkSchemePreferred = checkIsDarkSchemePreferred();
  let dpx = window.devicePixelRatio;

  console.debug({ isDarkSchemePreferred, dpx });

  let poster = video.getAttribute("poster");
  if (!!poster) {
    console.debug("Have poster", poster);
    let comps = poster.split(".");
    // Adjust for higher pixel ratio scales first
    if (dpx >= 2 && dpx <= 3) {
      if (isDarkSchemePreferred) {
        comps[0] = comps[0] + "-dark@2x"
      }
      else {
        comps[0] = comps[0] + "@2x"
      }
    }
    else if (dpx >= 3) {
      if (isDarkSchemePreferred) {
        comps[0] = comps[0] + "-dark@3x"
      }
      else {
        comps[0] = comps[0] + "@3x"
      }
    }

    poster = comps.join(".");

    console.debug("Updated poster", poster);
    video.setAttribute("poster", poster);
  }
  /*
  // Now update the sources if needed
  if (!isDarkSchemePreferred) {
    return;
  }

  console.debug("Updating video sources to dark mode");
  [...video.querySelectorAll("source")].forEach(source => {
    let src = source.getAttribute("src");
    if (!!src) {
      console.debug("Updating src", src);
      let comps = src.split(".");
      if (comps.length < 2) {
        return;
      }

      comps[0] = comps[0] + "-dark";

      src = comps.join(".");
      console.debug("Updated src", src);
      source.setAttribute("src", src);
    }
  });
  */
}