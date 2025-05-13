import React, { useState, useEffect, } from "react";
import { Link, useParams } from "react-router-dom"; // Importing necessary hooks and components from React Router

function PresenterDetails() {
  // Using useParams to access the dynamic segment in the URL, which provides the presenter ID
  const { id } = useParams();

  const url = "https://himmaradiotv.ng/api/Media/GetPresenter";
  const [usersName, setUsersName] = useState("");

  // State to store the list of presenters
  const [presenter, setPresenter] = useState([]);
  const [podcast, setPodcast] = useState([]);
  const [visible, setVisible] = useState(6);

  const imageStyleBtn = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    objectFit: "contain",
    cursor: "pointer",
  };

  // Styling for presenter images on mobile devices
  const imageStylemobile = {
    width: "200px",
    height: "200px",
    borderRadius: "50%", // Circular image style
    objectFit: "cover", // Ensures the image fits well within the boundaries
    // cursor: "pointer",
    border: "5px solid green",
  };

  const showMoreItems = () => {
    setVisible((previousValue) => previousValue + 3);
  };

  // Fetches the presenters data from the API when the component mounts
  useEffect(() => {
    console.log("presenter id", id);
    // Fetch news data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Filter the presenters items by category
        // console.log(data.data)
        const filteredData = data.data.filter((item) => item.id === Number(id));
        setUsersName(filteredData[0]?.firstName + " " + filteredData[0]?.lastName);
        console.log("presenter", filteredData);
        setPresenter(filteredData); // Sets the presenters state with the filtered data
      })
      .catch((error) => console.error("Error fetching presenters data:", error));

    fetch(`https://himmaradiotv.ng/api/Media/GetByProgramId/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("response for presenter by id",data);
        console.log("podcast", data.data);
        setPodcast(data.responseData);
        
      });
  }, [id]); 
  console.log(usersName)// Empty dependency array means this effect runs only once after the initial render
  return (
    <div>
      <h1 style={{marginLeft:"20px"}}>Presenters Details</h1>
      <div className="detailsHeader" style={{ padding: "30px, auto" }}>
        {/* Iterates over the presenters to find the one matching the ID from the URL */}
        {presenter?.map((item) => {
          
            // Checks if the current presenter's ID matches the URL parameter
            return (
              <div
                key={item._id}
                style={{ display: "flex", padding: "20px", gap: "20px", marginBottom: "30px" }}
              >
                <div
                  style={{
                    width: "40%",
                    height: "500px",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={`https://himmaradiotv.ng/${item.profileImagePath}`}
                    alt="nothing"
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover", objectPosition:"80% 20%"}}
                  />
                  {/* <div>
                  </div> */}
                  {/* This div is for holding the banner or additional content */}
                </div>
                <div>
                  {/* Displays the presenter's name and date */}
                  <div style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}>
                  <h2>
                    Name : 
                  </h2>
                  <p style={{ fontSize: "22px" }}>{item.firstName} {item.lastName}</p>
                  
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <h3>Stage Name :</h3>{" "}
                    <p style={{ fontSize: "22px" }}>{item.stageName}</p>
                  </div>
                  {/* <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <h3>Phone Nunmber :</h3>{" "}
                    <p style={{ fontSize: "22px" }}>{item.phoneNumber}</p>
                  </div> */}
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <h3>Email :</h3>{" "}
                    <p style={{ fontSize: "22px" }}>{item.email}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <h3>Social Media Handle :</h3>{" "}
                    <p style={{ fontSize: "22px" }}>{item.socialMediaHandle}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <h3>Bio :</h3>{" "}
                    <p style={{ fontSize: "22px" }}>{item.bio}</p>
                  </div>
                </div>
              </div>
            );
      
        })}

        <div className="presenterProfileContainer">
            <h2 style={{margin:"30px"}}>Programmes hosted by {usersName?.toLocaleUpperCase()}</h2>
         
          <div className="presenterProfile">
            {/* Mapping over the presenter data to display each presenter */}
            {/* {presenter.slice(0, visible).map((item) => { */}
            {podcast?.slice(0, visible).map((item) => {
              return (
                // <div className='presenterCard' key={item._id}>
                <div className="presenterCard" key={item.id}>
                 
                  {/* Image Section for Presenter's Profile */}
                  <div className="sliderCardImg">
                    {/* <img src={item.avatar} style={imageStylemobile} alt='' /> */}
                    <img
                      src={`https://himmaradiotv.ng/${item.programImagePath}`}
                      style={imageStylemobile}
                      alt=""
                    />
                  </div>

                  {/* Text Section for Presenter's Profile */}
                  <div className="" style={{display:"flex", flexDirection:"column", padding:"50px"}}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"center",
                        gap: "10px",
                        marginBottom: "-20px",
                      }}
                    >
                     
                      <h3>Title :</h3>
                      <p>{item?.title}</p> {/* Displaying Presenter's Name */}
                      <p>{item?.lastName}</p>{" "}
                      {/* Displaying Presenter's Name */}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        justifyContent:"center",
                        paddingLeft:"40px",
                        gap: "10px",
                        marginBottom: "-20px",
                      }}
                    >
                      <h3>Description:</h3>
                      <p>{item?.description}</p>{" "}
                      {/* Displaying Presenter's Name */}
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
                style={imageStyleBtn}
                className="eye-img"
              />
            </div>
            <span className="v-more-btn" style={{ color: "black" }}>
              View More
            </span>
          </button>
        </div>
        {/* Link to navigate back to the previous page */}
        <Link to={-1}>
          <button className="btn">Go back</button>
        </Link>
      </div>
    </div>
  );
}

export default PresenterDetails;
