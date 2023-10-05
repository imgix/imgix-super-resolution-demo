import { useState, useEffect } from "react";


export default function RenderImageComparison(props) {
  return (
    <div id="container-RenderImageComparison" className="container grid grid-x large-6 medium-6 small-12 cell">
      {props.showImage === 'superres' && (
        <img className="large-12 medium-12 small-12" src={props.image + "?auto=compress,format&upscale=true&w=1200"} alt="Image to render" />
      )}
      {props.showImage === 'upscale' && (
        <img className="large-12 medium-12 small-12" src={props.image + "?auto=compress,format&w=1200"} alt="Image to render" />
      )}
      {props.showImage === 'original' && (
        <img className="large-12 medium-12 small-12" src={props.image + "?auto=compress,format&w=1200&fit=max"} alt="Image to render" />
      )}

    </div>
  );
}
