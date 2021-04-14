// # create image component with class
import React from "react";
export default class ImageD extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    const { src, alt, width, height } = this.props.imgInfo;
    this.alt = alt;
  }

  render() {
    return (
      <div>
        <img
          src={this.props.imgInfo.src}
          alt={this.alt}
          style={{
            width: this.props.imgInfo.width + "vw",
            height: this.props.imgInfo.height + "vh"
          }}
        ></img>
      </div>
    );
  }
}
