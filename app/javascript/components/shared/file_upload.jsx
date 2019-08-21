import React from 'react';
import ImageUploader from 'react-images-upload';

class ImageUpload extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {pictures: []};
    this.onDrop = this.onDrop.bind(this);
  }
  
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }
  
  render() {
    return (
      <ImageUploader
        withIcon={this.props.withIcon}
        buttonText={this.props.buttonText}
        onChange={this.onDrop}
        imgExtension={this.props.imgExtension}
        maxFileSize={this.props.maxFileSize}
      />
    );
  }
}

export default ImageUpload;
