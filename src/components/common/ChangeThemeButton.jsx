import PropTypes from 'prop-types';
import { useState } from 'react';

const ChangeThemeButton = (props) => {
  const { theme, changeTheme } = props;
  const [isChecked, setIsChecked] = useState(theme === 'dark');

  const toggleTheme = () => {
    setIsChecked(!isChecked);
    changeTheme();
  };

  const sliderStyle = {
    width: '40px',
    height: '20px',
    backgroundColor: isChecked ? '#343A40' : '#F0F0F0',
    borderRadius: '20px',
    position: 'relative',
    cursor: 'pointer',
    transition: '0.3s',
  };

  const circleStyle = {
    width: '16px',
    height: '16px',
    backgroundColor: '#FFF',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    transform: `translate(${isChecked ? '20px' : '0'}, -50%)`,
    transition: '0.3s',
  };

  return (
    <label className="dropdown-item" style={{ cursor: 'pointer' }}>
      <div style={sliderStyle} onClick={toggleTheme}>
        <div style={circleStyle}></div>
      </div>
    </label>
  );
};

ChangeThemeButton.propTypes = {
  changeTheme: PropTypes.func,
  theme: PropTypes.string,
};

export default ChangeThemeButton;
