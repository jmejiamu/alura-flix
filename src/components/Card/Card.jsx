import { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import "./Card.css";

const Card = (props) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleToggleVideo = () => {
    setShowVideo(true); // Show the video when the image is clicked
  };
  const { dispatch, handleEdit } = useDataContext();

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  return (
    <article
      className="card"
      style={{
        borderWidth: 2,
        borderColor: props?.item?.color,
        borderStyle: "solid",
      }}
    >
      {/* Card Content */}
      {/* <div className="card-content">
        <div className="card-image-wrapper">
          <img
            src={props?.item?.image}
            alt={props?.item?.alt}
            className="card-image"
          />
          <h2 className="card-title">{props?.item?.title}</h2>
        </div>
      </div> */}
      <div className="card-content">
        <div className="card-media-wrapper">
          {showVideo ? (
            <video
              className="card-video"
              src={props?.item?.video}
              controls
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={props?.item?.image}
              alt={props?.item?.alt}
              className="card-image"
              onClick={handleToggleVideo} // Show the video when clicked
            />
          )}
          <h2 className="card-title">{props?.item?.title}</h2>
        </div>
      </div>

      {/* Card Actions */}
      <footer className="card-footer">
        <button
          onClick={() => handleDelete(props.item.id)}
          className="card-button delete"
        >
          <span className="icon">🗑️</span> DELETE
        </button>
        <button
          onClick={() => handleEdit(props.item)}
          className="card-button edit"
        >
          <span className="icon">✏️</span> EDIT
        </button>
      </footer>
    </article>
  );
};

export default Card;
