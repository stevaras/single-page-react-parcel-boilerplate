import React from 'react';
import './styles/ToggleButton.scss';

const ToggleButton = ({ value, onClick }) => {
  return (
    <div className="toggle-button">
      <button onClick={onClick} value={value} type="button">
        Toggle Button
      </button>
    </div>
  );
};

export default ToggleButton;
