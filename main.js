import { getAudioData, linearPath, polarPath } from "./waveform-path.min.js";

async function AudioPath(file) {
  const audioData = await getAudioData(file);

  const pathLogo = linearPath(audioData, {
    samples: 120,
    type: "mirror",
    top: 40,
    paths: [{ d: "V", sy: 0, x: 50, ey: 100 }],
  });
  document.querySelector("#path_whole").setAttribute("d", pathLogo);
  document.querySelector("#path_mask").setAttribute("d", pathLogo);
}
AudioPath("0VjIjW4GlUZAMYd2vXMi3b.opus");
