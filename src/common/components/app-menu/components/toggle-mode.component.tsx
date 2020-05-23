import React from 'react';
import { cx } from 'emotion';
import './toggle-mode.css';

interface ToggleModeProps {
  className: string;
  isDark: boolean;
  onChange: () => void;
}

export const ToggleMode: React.FC<ToggleModeProps> = ({ isDark, onChange, className }) => {
  const [toggle, setToggle] = React.useState(isDark);

  const handleOnChange = () => {
    setToggle(prev => !prev);
    onChange();
  };

  return (
    <div className={cx('toggleWrapper', className)}>
      <input type="checkbox" className="dn" id="dn" checked={toggle} onChange={handleOnChange} />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
};
