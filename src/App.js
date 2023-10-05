import { useState, useEffect } from "react";
import "./App.css";

// copmponents
import RenderImageComparison from "./components/RenderImageComparison";
import LeftColumn from "./components/LeftColumn";

export default function App() {
  const [image, set_image] = useState(
    "https://assets.imgix.net/examples/super-resolution/watch-900px.png"
  );
  const [showImage, set_showImage] = useState('original');
  const [promptLoad, set_promptLoad] = useState('promptLoadOff');

  return (
    <div className="App grid-x" id="container">
      <LeftColumn
        set_image={set_image}
        image={image}

        promptLoad={promptLoad}
        set_promptLoad={set_promptLoad}

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
