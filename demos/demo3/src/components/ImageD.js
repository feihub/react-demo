// # create image component with class
import React from "react";
export default class ImageD extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          src={this.props.imgInfo.src}
          alt={this.props.imgInfo.alt}
          style={{
            width: this.props.imgInfo.width + "vw",
            height: this.props.imgInfo.height + "vh"
          }}
        ></img>
        <p>{this.props.imgInfo.alt}</p>
      </div>
    );
  }
}
