import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

function Display({ result }) {
  return (
    <div className="result">
      <p>{result || 0 }</p>
    </div>
  );
}
Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
