import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/DummyHookComponent.scss';

const DummyHookComponent = ({ value }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    console.log('component did mount');

    return function cleanup() {
      console.log('component unmount');
    };
  }, []);

  const onChangeValue = event => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="dummy-hook-component">
      <input value={inputValue} onChange={onChangeValue} />
    </div>
  );
};

DummyHookComponent.defaultProps = {
  value: ''
};

DummyHookComponent.propTypes = {
  value: PropTypes.string
};

export default DummyHookComponent;
