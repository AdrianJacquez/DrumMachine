const handleClick = (event, id) => {
  const audio = event.currentTarget.querySelector("audio");
  // Reproduce el audio
  audio.currentTime = 0;
  audio.play();
  document.getElementById("nameAudio").textContent = id;
};

function Botones() {
  return (
    <>
      <div id="drum-machine">
        <div id="display">
          <h1 id="nameAudio"></h1>
          <div id="buttons">
            <button
              id="heater1"
              className="drum-pad"
              onClick={(event) => handleClick(event, "heater1")}
            >
              Q
              <audio
                id="Q"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                className="clip"
              ></audio>
            </button>
            <button
              id="heater2"
              className="drum-pad"
              onClick={(event) => handleClick(event, "heater2")}
            >
              W
              <audio
                id="W"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                className="clip"
              ></audio>
            </button>
            <button
              id="heater3"
              className="drum-pad"
              onClick={(event) => handleClick(event, "heater3")}
            >
              E
              <audio
                id="E"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                className="clip"
              ></audio>
            </button>
            <button
              id="heater4"
              className="drum-pad"
              onClick={(event) => handleClick(event, "heater4")}
            >
              A
              <audio
                id="A"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                className="clip"
              ></audio>
            </button>
            <button
              id="clap"
              className="drum-pad"
              onClick={(event) => handleClick(event, "clap")}
            >
              S
              <audio
                id="S"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                className="clip"
              ></audio>
            </button>
            <button
              id="open-hh"
              className="drum-pad"
              onClick={(event) => handleClick(event, "open-hh")}
            >
              D
              <audio
                id="D"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                className="clip"
              ></audio>
            </button>
            <button
              id="kick-n-hat"
              className="drum-pad"
              onClick={(event) => handleClick(event, "kick-n-hat")}
            >
              Z
              <audio
                id="Z"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                className="clip"
              ></audio>
            </button>
            <button
              id="kick"
              className="drum-pad"
              onClick={(event) => handleClick(event, "kick")}
            >
              X
              <audio
                id="X"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                className="clip"
              ></audio>
            </button>
            <button
              id="closed-hh"
              className="drum-pad"
              onClick={(event) => handleClick(event, "closed-hh")}
            >
              C
              <audio
                id="C"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                className="clip"
              ></audio>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Botones;
