import React, { Component } from 'react';
import { DummyComponent, DummyHookComponent } from '../components';
import '../styles/containers/DummyContainer.scss';

class DummyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  }

  render() {
    return (
      <div className="toggle-button-container">
        <DummyComponent />
        <DummyHookComponent value="Change me" />
      </div>
    );
  }
}

export default DummyContainer;
