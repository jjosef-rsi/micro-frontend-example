import React from 'react';
import { Component } from 'react';

class MicroFE extends Component {
  state = {
    containerName: '',
  };
  constructor(props) {
    super(props);
    this.state.containerName = `${props.name}-container`;
  }

  componentDidMount() {
    const { containerName } = this.state;
    const { name, host } = this.props;
    const scriptId = `mf-script-${name}`;

    const renderMicroFrontend = () => {
      window[`render${name}`](containerName);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.body.appendChild(script);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentWillUnmount() {
    const { containerName } = this.state;
    const { name } = this.props;
    if (typeof window[`unmount${name}`] === 'function') {
      window[`unmount${name}`](containerName);
    }
  }

  render() {
    const { containerName } = this.state;

    return <div id={containerName} />;
  }
}

export { MicroFE };