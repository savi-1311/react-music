import imgSrc from "./assets/artwork1.png";
import imgSrc2 from "./assets/artwork2.png";
import imgSrc3 from "./assets/artwork3.png";
import cali from "./assets/cali-wataboi.mp3";
import fifty from "./assets/tropical-summer-beach-11171.mp3";
import iwonder from "./assets/calming-in-the-sea-14112.mp3";

// All of these artists are at https://pixabay.com/music/search/mood/laid%20back/
export default [
  {
    title: "Calming in the Sea",
    artist: "Alex MakeMusic",
    audioSrc: iwonder,
    image: imgSrc,
    color: "#5f9fff"
  },
  {
    title: "Cali",
    artist: "Wataboi",
    audioSrc: cali,
    image: imgSrc2,
    color: "#00aeb0"
  },
  {
    title: "Tropical Summer Beach",
    artist: "Alex MakeMusic",
    audioSrc: fifty,
    image: imgSrc3,
    color: "#ffb77a"
  }
];
