import Spinner from "../spinner/spinner.component";

import "./face-recognition.styles.scss";

const FaceRecognition = ({ box, imageRef, imageUrl, isLoading }) => {
  const { leftCol, topRow, rightCol, bottomRow } = box;
  return (
    <div className="face-recognition-container">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="image-container">
          <img ref={imageRef} alt="" src={imageUrl} />
          <div
            className="bounding-box"
            style={{
              top: topRow,
              left: leftCol,
              right: rightCol,
              bottom: bottomRow,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;
