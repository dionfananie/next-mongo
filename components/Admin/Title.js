import React from 'react';
import { string } from 'prop-types';

const Title = ({ text }) => {
    return <p className="text-3xl text-bold mb-4">{text}</p>;
};

Title.propTypes = {
    text: string
};
Title.defaultProps = {
    text: ''
};
export default Title;
