import React, { useEffect, useState } from 'react';
import { ToggleButton } from '../components';
import './styles/ToggleButtonContainer.scss';

const ToggleButtonContainer = () => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setFlag(true);

    return function cleanup() {
      console.log('unmount');
    };
  }, []);

  const toggleFlag = event => {
    setFlag(!flag);
  };

  return (
    <div className="toggle-button-container">
      <ToggleButton onClick={toggleFlag} value={flag} />
      {flag ? <p>On</p> : <p>Off</p>}
    </div>
  );
};

export default ToggleButtonContainer;
