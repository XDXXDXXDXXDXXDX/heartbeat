let resourcesLoaded = false
const audio = {}; // 音效列表

const audioList = [
  {
    name: "iGirl",
    url: "./assets/i_girl.mp3",
  },
  {
    name: "iBoy",
    url: "./assets/i_boy.mp3",
  },
  {
    name: "iLikeYouGirl",
    url: "./assets/i_like_you_girl.mp3",
  },
  {
    name: "iLikeYouBoy",
    url: "./assets/i_like_you_boy.mp3",
  },
  {
    name: "heartbeat",
    url: "./assets/heartbeat.mp3",
  },
  {
    name: "heartbeatHard",
    url: "./assets/heartbeat_hard.mp3",
  },
  {
    name: "heartbeatFast",
    url: "./assets/heartbeat_fast.mp3",
  },
];

let audioLoadedCount = 0;
audioList.forEach((source) => {
  const { name, url } = source;
  const ori = new Audio(url);
  audio[name] = ori;
  ori.addEventListener(
    "canplaythrough",
    () => ++audioLoadedCount && checkAssetsLoad()
  );
});

function checkAssetsLoad() {
  let audioLoaded = false;
  if (audioLoadedCount === audioList.length) {
    audioLoaded = true;
  }

  if (audioLoaded) {
    const tips = document.querySelectorAll(".load-tip");
    tips[0].style.display = "none";
    tips[1].style.display = "block";
    document.getElementById('start').style.display = 'flex'
  }
}


