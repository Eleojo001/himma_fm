import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importing necessary hooks and components from React Router

function Shows() {
  const url = "https://himmaradiotv.ng/api/Media/GetProgram";
  const navigate = useNavigate();
  // State to store the list of shows
  const [shows, setShows] = useState([]);
  const [visible, setVisible] = useState(4);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return {
        truncated: text.slice(0, maxLength) + "...",
        fullText: text,
      };
    }
    return { truncated: text, fullText: text };
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Fetching shows data from the context when the component mounts
  useEffect(() => {
    // Fetch shows data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        // Filter the news items by category
        // const filteredData = data.filter(
        //   (item) => item.category_id && item.category_id.title === 'Shows'
        // );
        setShows(data.data); // Sets the shows state with the filtered data
      })
      .catch((error) => console.error("Error fetching news data:", error));
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Styling for show images on larger screens
  const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px", // Rounded corners for the images
    objectFit: "cover",
    border: "3px solid green", // Ensures the image covers the element without distortion
  };

  // Styling for show images on mobile devices
  const imageStylemobile = {
    width: "200px",
    height: "200px",
    borderRadius: "10px", // Consistent rounded corners for mobile images
    objectFit: "cover", // Keeps the image aspect ratio and fills the space
    cursor: "pointer",
    border: "5px solid green",
  };
  const imageStyleBtn = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    objectFit: "contain",
  };

  const showMoreItems = () => {
    setVisible((previousValue) => previousValue + 4);
  };

  return (
    <div>
      {/* Shows Section */}
      <div className="showsContainer">
        {/* Header for the Shows Section */}
        <div className="showHeader">
          <h1 className="headersFont">Programmess</h1>
        </div>

        {/* Shows Slider for larger screens */}
        <div className="showsSlider">
          <div className="sliderCards">
            {/* Mapping over the shows data to display each show */}
            {shows?.slice(0, visible).map((item, index) => {
              const { truncated: truncatedTitle, fullText: fullTitle } =
                truncateText(item?.title || "", 15);
              const {
                truncated: truncatedDescription,
                fullText: fullDescription,
              } = truncateText(item?.description || "", 100);

              return (
                <div className="sliderCard" key={item.id}>
                  {/* Image Section for Show */}
                  <div className="sliderCardImg">
                    <img
                      src={`https://himmaradiotv.ng/${item.programImagePath}`}
                      style={imageStyle}
                      alt=""
                      onClick={() => {
                        navigate(`/program/${item.id}`); // Navigates to the show details page on click
                      }}
                    />
                  </div>

                  {/* Text Section for Show */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "10px",
                      marginBottom: "-10px",
                      width: "100%",
                    }}
                  >
                    <h3>Title:</h3>
                    <div>
                    <p style={{marginTop:"20px"}}>

                    {expandedIndex === index ? fullTitle : truncatedTitle}
                    </p>
                    {fullTitle.length > 20 && (
                      <span
                        style={{ color: "blue", cursor: "pointer", marginTop: "-20px" }}
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedIndex === index ? " Show less" : " Show more"}
                      </span>
                    )}
                    </div>
                  </div>

                  <h3 style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
                    <span>Description:</span>{" "}
                    <span style={{fontSize: "18px", fontWeight: "400", textTransform:"lowercase"}}>
                    {expandedIndex === index
                      ? fullDescription
                      : truncatedDescription}
                    {fullDescription.length > 100 && (
                      <span
                        style={{ color: "blue", cursor: "pointer", fontSize: "12px" }}
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedIndex === index ? " Show less" : " Show more"}
                      </span>
                    )}
                      
                    </span>
                  </h3>
                  <div>
                    <span style={{fontWeight:"700", fontSize:"18px"}}>Shedule :</span>
                    {item.schedulesDto.map((schedule) => {
                      return (
                        <div
                          key={schedule.id}
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            display: "block",
                            // gridTemplateColumns: "repeat(2, 1fr)",
                            textTransform: "lowercase",
                            marginLeft: "10px",
                          }}
                        >
                          <div style={{ display: "flex", gap: "20px", justifyContent:"space-between", marginTop:"10px"}}>
                          <span style={{fontWeight:"600"}}>{schedule.day} :</span>
                          <span style={{fontWeight:"500"}}>{schedule.duration}</span>
                          </div>
                        </div>
                      );
                    }
                    )}
                  </div>
                </div>
              );
            })}
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
                  style={imageStyleBtn}
                  className="eye-img"
                />
              </div>
              <span className="v-more-btn" style={{ color: "black" }}>
                View More
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Shows Section for Mobile Devices */}
      <div className="showsContainer-mobile">
        {/* Header for the Mobile Shows Section */}
        <div className="showHeader">
          <h1 className="headersFont">Programs</h1>
        </div>

        {/* Shows Slider for mobile screens */}
        <div className="showsSlider">
          <div className="sliderCards">
            {/* Mapping over the shows data to display each show on mobile */}
            {shows?.map((item) => {
              return (
                <div className="sliderCard" key={item.id}>
                  {/* Image Section for Show on Mobile */}
                  <div className="sliderCardImg">
                    <img
                      src={`https://himmaradiotv.ng/${item.programImagePath}`}
                      style={imageStylemobile}
                      alt=""
                      onClick={() => {
                        navigate(`/full/${item.id}`); // Navigates to the show details page on click
                      }}
                    />
                  </div>

                  {/* Text Section for Show on Mobile */}
                  <li className="textLimit">
                    <h3>
                      {item.title} {/* Show title */}
                    </h3>
                  </li>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shows;
