import { useState, useEffect } from "react";

export default function InputFields(props) {
  const [textInput, set_textInput] = useState(props.image);
  const [errorState, set_errorState] = useState(false);

  const showError = (errorState) => {
    if (!!errorState) {
      return <div>Invalid URL</div>
    } else {
      return null;
    }
  }

  useEffect(() => {
  }, [props.image]);

  return (
    <div id="container-InputForm" className="grid grid-x large-6 medium-6 small-12 cell">
      <h1>imgix Super Resolution Demo</h1>
      <p>Webpage for comparing normal upscaling to imgix's super resolution parameter. To use this tool, enter an image that does not exeed 1MP. This demo is best used with image sizes less than .5MP. See our <a href="https://docs.imgix.com/apis/rendering/super-resolution/upscale#limits"> documentation for more information.</a></p>

      {/* handles image URL */}
      <input className="input large-12 medium-12 small-12"
        type="text"
        value={textInput}
        onChange={(e) => {
          set_textInput(e.target.value);
        }}
      />
      <div className="large-12 medium-12 small-12">
        <legend>Example images</legend>
        <div className="grid-x grid-margin-x large-12 medium-12 small-12">
          <button className="button actions large-2 medium-2 small-2 cell" onClick={(e) => {
            e.preventDefault();
            let exampleImage = "https://assets.imgix.net/examples/super-resolution/watch-900px.png";
            set_textInput(exampleImage);
            props.set_image(exampleImage);
          }}>Watch</button>
          <button className="button actions large-2 medium-2 small-2 cell" onClick={(e) => {
            e.preventDefault();
            let exampleImage = "https://assets.imgix.net/examples/super-resolution/watch-851px.png";
            set_textInput(exampleImage);
            props.set_image(exampleImage);
          }}>Watch two</button>
          <button className="button actions large-2 medium-2 small-2 cell" onClick={(e) => {
            e.preventDefault();
            let exampleImage = "https://assets.imgix.net/examples/super-resolution/purse-150px.png";
            set_textInput(exampleImage);
            props.set_image(exampleImage);
          }}>Purse</button>
          <button className="button actions large-2 medium-2 small-2 cell" onClick={(e) => {
            e.preventDefault();
            let exampleImage = "https://assets.imgix.net/examples/super-resolution/two-friends-150px.png";
            set_textInput(exampleImage);
            props.set_image(exampleImage);
          }}>Two friends</button>
          <button className="button actions large-2 medium-2 small-2 cell" onClick={(e) => {
            e.preventDefault();
            let exampleImage = "https://assets.imgix.net/examples/super-resolution/text-250px.jpg";
            set_textInput(exampleImage);
            props.set_image(exampleImage);
          }}>Illegible text</button>
        </div>
      </div>
      <div className="grid-x grid-margin-x large-12 medium-12 small-12">
        <fieldset className="large-12 medium-12 small-12 cell">
          <legend>Image to render</legend>
          <input type="radio" id="original" name="image" value="original" onChange={(e) => {
            props.set_showImage(e.target.value);
          }}
            checked={props.showImage === 'original'} />
          <label htmlFor="original">Original</label>

          <input type="radio" id="upscale" name="image" value="upscale" onChange={(e) => {
            props.set_showImage(e.target.value);
          }
          }
            checked={props.showImage === 'upscale'} />
          <label htmlFor="upscale">Normal upscale</label>

          <input type="radio" id="superres" name="image" value="superres" onChange={(e) => {
            props.set_showImage(e.target.value);
          }
          }
            checked={props.showImage === 'superres'} />
          <label htmlFor="superres">Super resolution</label>

        </fieldset>
        <fieldset className="large-7 medium-7 small-7 cell">



        </fieldset>
      </div>
      {/* submit button */}
      <div className="large-12 medium-12 small-12">
        {showError(errorState)}
        <button className="button submit" onClick={(e) => {
          e.preventDefault();
          try {
            let url = new URL(textInput);
            // You can access parts of the valid URL like this:
            props.set_image(url.origin + url.pathname);
            set_errorState(false);
          } catch (error) {
            set_errorState(true);
            // Handle the error here, such as displaying an error message to the user or taking other appropriate actions.
          }
        }}>Load image</button>
      </div>

    </div>
  );
}
