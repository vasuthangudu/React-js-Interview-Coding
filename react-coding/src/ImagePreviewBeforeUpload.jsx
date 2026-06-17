import React, { useState } from "react";

function App() {
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={handleImage} />

      {image && (
        <img src={image} width="200" alt="preview" />
      )}
    </div>
  );
}

export default App;