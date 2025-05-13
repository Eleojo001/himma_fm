import React, { useEffect, useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

function Podcast() {
  const audioRef = useRef(null); // useRef to hold the audio instance
  const [shows, setShows] = useState([]);
  const [visible, setVisible] = useState(10);
  const [currentSong, setCurrentSong] = useState(null);
  const [pause, setPause] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const showMoreItems = () => {
    setVisible((previousValue) => previousValue + 3);
  };

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const handlePlay = (voice, index) => {
    if (audioRef.current && currentSong === index) {
      if (pause) {
        // Resume playback
        audioRef.current.play().catch((error) => {
          console.error("Error resuming audio playback:", error);
        });
        setPause(false);
      } else {
        // Pause playback
        audioRef.current.pause();
        setPause(true);
      }
    } else {
      if (audioRef.current) {
        // Pause the currently playing audio
        audioRef.current.pause();
      }
      // Create a new audio instance and play it
      audioRef.current = new Audio(voice);
      audioRef.current.play().catch((error) => {
        console.error("Error starting audio playback:", error);
      });
      setCurrentSong(index);
      setPause(false);

      // Handle when the audio ends
      audioRef.current.onended = () => {
        setPause(true);
        setCurrentSong(null);
      };
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10; // Forward by 10 seconds
    }
  };

  const handleBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10; // Backward by 10 seconds
    }
  };

  useEffect(() => {
    // Fetch shows data from the API
    fetch(`https://himmaradiotv.ng/api/Media/GetPodcast`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShows(data.data);
      });

    return () => {
      // Cleanup the audio instance when the component unmounts
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <h2></h2>
      <div className="presenterProfileContainer">
        <div style={{ padding: "10px 10px 30px" }}>
          <h2>Listen to your podcast</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            padding: "0 20px",
          }}
        >
          {shows.slice(0, visible).map((item, index) => {
            return (
              <div className="presenterCard" key={item.id}>
                <div className="">
                  <SkipBack size={"50px"} onClick={handleBackward} />
                  {currentSong === index && !pause ? (
                    <Pause
                      size={"60px"}
                      onClick={() =>
                        handlePlay(
                          "https://himmaradiotv.ng/" + item.fileUrl,
                          index,
                        )
                      }
                    />
                  ) : (
                    <Play
                      size={"60px"}
                      onClick={() =>
                        handlePlay(
                          "https://himmaradiotv.ng/" + item.fileUrl,
                          index,
                        )
                      }
                    />
                  )}
                  <SkipForward size={"50px"} onClick={handleForward} />
                </div>

                <div className="">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "-20px",
                    }}
                  >
                    <h3>Title :</h3>
                    <p style={{ textTransform: "uppercase" }}>
                      {item?.title}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "20px",
                    paddingRight: "30px",
                      marginBottom: "-20px",
                    }}
                  >
                    <h3>Description:</h3>
                    <p className="podcast-desc">
                      {expandedDescriptions[index]
                        ? item?.description
                        : truncateText(item?.description, 100)}
                      {item?.description.length > 110 && (
                        <span
                          style={{ color: "blue", cursor: "pointer" }}
                          onClick={() => toggleDescription(index)}
                        >
                          {expandedDescriptions[index]
                            ? " Show less"
                            : " Show more"}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="moreBtn">
        <button
          className="viewmore btn"
          style={{ display: "flex", flexDirection: "column" }}
          onClick={showMoreItems}
        >
          <div style={{ width: "30px", height: "30px" }}>
            <img
              src="/viewMore_icon.png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "contain",
                cursor: "pointer",
              }}
              className="eye-img"
            />
          </div>
          <span className="v-more-btn" style={{ color: "black" }}>
            View More
          </span>
        </button>
      </div>
    </div>
  );
}

export default Podcast;
