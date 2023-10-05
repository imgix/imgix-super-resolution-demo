import { useState, useEffect } from "react";

export default function LeftColumn(props) {
  const [textInput, set_textInput] = useState(props.image);
  const [errorState, set_errorState] = useState(false);
  const [errorMessage, set_errorMessage] = useState('Invalid URL')
  const [disableImageToRenderRadioButtons, set_disableImageToRenderRadioButtons] = useState(false)

  const showError = (errorState) => {
    if (!!errorState) {
      return <div className="error">{errorMessage}</div>
    } else {
      return null;
    }
  }

  const _handleExampleImageChange = (e) => {
    props.set_image(e.target.value);
    set_textInput(e.target.value);
    set_errorState(false);
    props.set_promptLoad('promptLoadOff');
  }

  const _handleRadioButtonChange = (e) => {
    props.set_showImage(e.target.value);
    props.set_promptLoad('promptLoadOff');
    set_textInput(props.image);
  }

  useEffect(() => {
  }, [props.image]);

  return (
    <div id="container-LeftColumn" className="grid grid-x large-6 medium-6 small-12">
      {/* handles image URL */}
      <div id="container-header" className="large-12 medium-12 small-12">
        <img className="logo" src="https://assets.imgix.net/presskit/imgix-presskit.pdf?page=4&fm=png&w=120&dpr=2" />
        <div class="logo__item logo__image lightBlue logoPlaceholder">SUPER RESOLUTION DEMO</div>
        <p>This tool compares normal upscaling with our <a href="https://docs.imgix.com/apis/rendering/">Rendering API</a> to imgix's super resolution parameter. To use this tool, enter an image that does not exeed 1MP. This demo is best used with image sizes less than .5MP.</p>
        <p>See our <a href="https://docs.imgix.com/apis/rendering/super-resolution/upscale#limits"> documentation </a>for more information.</p>
      </div>
      <div id="container-InputForm">
        <label>Enter an image URL with super resolution enabled:
          <input className="input large-12 medium-12 small-12"
            type="text"
            value={textInput}
            onChange={(e) => {
              set_textInput(e.target.value);
              set_disableImageToRenderRadioButtons(true)
              props.set_promptLoad('promptLoadOn')
            }}
          />
        </label>
        <div className="large-12 medium-12 small-12">
          <div className="grid-x grid-margin-x large-12 medium-12 small-12">
            <fieldset className="large-12 medium-12 small-12 cell">
              <label>Or pick from example images:</label>
              <input type="radio" id="watch" name="example" value="https://assets.imgix.net/examples/super-resolution/watch-900px.png" onChange={_handleExampleImageChange}
                checked={props.image === 'https://assets.imgix.net/examples/super-resolution/watch-900px.png'} />
              <label htmlFor="watch">Watch</label>

              <input type="radio" id="watch2" name="example" value="https://assets.imgix.net/examples/super-resolution/watch-851px.png"
                onChange={_handleExampleImageChange}
                checked={props.image === 'https://assets.imgix.net/examples/super-resolution/watch-851px.png'} />
              <label htmlFor="watch2">Watch two</label>

              <input type="radio" id="purse" name="example" value="https://assets.imgix.net/examples/super-resolution/purse-150px.png"
                onChange={_handleExampleImageChange}
                checked={props.image === 'https://assets.imgix.net/examples/super-resolution/purse-150px.png'} />
              <label htmlFor="purse">Purse</label>

              <input type="radio" id="two-friends" name="example" value="https://assets.imgix.net/examples/super-resolution/two-friends-150px.png"
                onChange={_handleExampleImageChange}
                checked={props.image === 'https://assets.imgix.net/examples/super-resolution/two-friends-150px.png'} />
              <label htmlFor="two-friends">Two friends</label>

              <input type="radio" id="text" name="example" value="https://assets.imgix.net/examples/super-resolution/text-250px.jpg"
                onChange={_handleExampleImageChange}
                checked={props.image === 'https://assets.imgix.net/examples/super-resolution/text-250px.jpg'} />
              <label htmlFor="text">Illegible text</label>

            </fieldset>
          </div>
        </div>
        <div className="grid-x grid-margin-x large-12 medium-12 small-12">
          <fieldset disabled={errorState} className="large-12 medium-12 small-12 cell">
            <label>Image to render:</label>
            <input type="radio" id="original" name="image" value="original"
              onChange={_handleRadioButtonChange}
              disabled={disableImageToRenderRadioButtons}
              checked={props.showImage === 'original'} />
            <label htmlFor="original">Original</label>

            <input type="radio" id="upscale" name="image" value="upscale"
              onChange={_handleRadioButtonChange}
              disabled={disableImageToRenderRadioButtons}
              checked={props.showImage === 'upscale'} />
            <label htmlFor="upscale">Normal upscale</label>

            <input type="radio" id="superres" name="image" value="superres"
              onChange={_handleRadioButtonChange}
              disabled={disableImageToRenderRadioButtons}
              checked={props.showImage === 'superres'} />
            <label htmlFor="superres">Super resolution</label>

          </fieldset>
          <fieldset className="large-7 medium-7 small-7 cell">



          </fieldset>
        </div>
        {/* submit button */}
        <div className="large-12 medium-12 small-12">
          {showError(errorState)}
          <button className={`button submit ${props.promptLoad}`} onClick={(e) => {
            e.preventDefault();
            try {
              let url = new URL(textInput);
              // You can access parts of the valid URL like this:
              if (url.origin.includes('https') === false) {
                let error = 'Invalid URL. Please enter a valid URL that begins with "https://" and try again.';
                set_errorMessage(error)
                throw new Error(error);
              }
              props.set_image(url.origin + url.pathname);
              set_errorState(false);
            } catch (error) {
                set_errorMessage('Invalid URL. Please enter a valid URL that begins with "https://" and try again.')
              set_errorState(true);
              // Handle the error here, such as displaying an error message to the user or taking other appropriate actions.
            }
          }}>Load image</button>
        </div>
      </div>

    </div>
  );
}
