import { useState, useEffect } from "react";
import "./App.css";

// copmponents
import RenderImageComparison from "./components/RenderImageComparison";
import InputFields from "./components/InputFields";

export default function App() {
  const [image, set_image] = useState(
    "https://assets.imgix.net/examples/super-resolution/watch-900px.png"
  );
  const [showImage, set_showImage] = useState('original');

  return (
    <div className="App grid-x grid-margin-x" id="container">
      <InputFields
        set_image={set_image}
        image={image}

        showImage={showImage}
        set_showImage={set_showImage}
      />

      <RenderImageComparison
        image={image}

        // decides which resolution image to show
        showImage={showImage}
      />
    </div>
  );
}
