import React from 'react';
import connectField from 'uniforms/connectField';
import TextField from 'uniforms-antd/TextField';
import filterDOMProps from 'uniforms/filterDOMProps';

const CustomTextField = ({name, ...props}) => {
    const nonUniformProps = filterDOMProps(props);
    return <TextField name={name} {...nonUniformProps} />
};

export default connectField(CustomTextField, {
    includeInChain: false
});