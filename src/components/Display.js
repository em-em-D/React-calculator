import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }){

    return(
        <div className="result">
            <p>{result || 0}</p>
        </div>
    );
}
Display.propTypes = {
    result: PropTypes.string.isRequired,
};
Display.defaultProps={
    result: "0"
};

export default Display;