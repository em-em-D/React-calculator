import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ handleClick}) => (
    <div className="button-panel">
         <div className="group1">
            <Button handleClick={handleClick} color="light-gray" name="AC" />
            <Button handleClick={handleClick} color="light-gray" name="+/-" />
            <Button handleClick={handleClick} color="light-gray" name="%" />
            <Button handleClick={handleClick} name="÷" />
        </div>
        <div className="group2">
            <Button handleClick={handleClick} color="light-gray" name="7" />
            <Button handleClick={handleClick} color="light-gray" name="8" />
            <Button handleClick={handleClick} color="light-gray" name="9" />
            <Button handleClick={handleClick} name="X" />
        </div>
        <div className="group3">
            <Button handleClick={handleClick} color="light-gray" name="4" />
            <Button handleClick={handleClick} color="light-gray" name="5" />
            <Button handleClick={handleClick} color="light-gray" name="6" />
            <Button handleClick={handleClick} name="-" />
         </div>

         <div className="group4">
            <Button handleClick={handleClick} color="light-gray" name="1" />
            <Button handleClick={handleClick} color="light-gray" name="2" />
            <Button handleClick={handleClick} color="light-gray" name="3" />
            <Button handleClick={handleClick} name="+" />
        </div>
        <div className="row">
            <Button handleClick={handleClick} color="light-gray" name="0" />
            <Button handleClick={handleClick} color="light-gray" name="." />
            <Button handleClick={handleClick} color="light-gray" name="=" />
        </div>
    </div>
);
ButtonPanel.propTypes={
    handleClick: PropTypes.func.isRequired,
};
export default ButtonPanel;