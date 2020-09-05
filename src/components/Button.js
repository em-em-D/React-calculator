import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ wide, color, name, handleClick,}) => {
    const classes = `${color} ${ wide ? 'fifty-percent' : 'twenty-five-percent'}`.trim();

    return (
        <button type="button" onClick={()=> handleClick(name)} className={classes}>
            {name}</button>
    );

};

Button.defaultProps = {
    wide: false,
    color: 'yellow',
    name: '',
};

Button.propTypes={
    name: PropTypes.string,
    wide: PropTypes.bool,
    color: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
};

export default Button;