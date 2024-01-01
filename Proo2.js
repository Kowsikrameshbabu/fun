import "./App.css";
import React, { useState } from "react";

export default function Proo2() {
  const image1 = "https://car-images.bauersecure.com/wp-images/160400/077_lamborghini_invencible.jpg";
  const image2 = "https://car-images.bauersecure.com/wp-images/160400/1752x1168/075_lamborghini_invencible.jpg?mode=max&quality=90&scale=down";

  const [image, setImage] = useState(image1);

  function handleclick() {
    try {
      setImage(image === image1 ? image2 : image1);
    } catch (error) {
      console.error("Error changing image:", error);
    }
  }

  return (
    <div>
      <h1>REACT PROJECT 2 (click the button)</h1>
      <img src={image} alt="imagedisp" />
      <br></br>
      <button onClick={handleclick}>CHANGE IMAGE</button>
    </div>
  );
}
