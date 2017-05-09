import React, { Component } from 'react';

import Camera from '../components/Camera';

export default class PicturePage extends Component {

  constructor (props) {
    super(props);
    this.onTapNext = this.onTapNext.bind(this);
  }

  onTapNext = () => {
    alert('Tapping to go to next page');
  }

  render () {

    return (
      <Camera
        text = 'Take Photo'
        next = 'Take Another'
        nextStepButtonText = 'Next Step'
        nextStepAction = {this.onTapNext}
      />
    )
  }

}