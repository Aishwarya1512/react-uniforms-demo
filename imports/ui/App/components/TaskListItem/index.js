import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoolField from 'uniforms-antd/BoolField';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import { Checkbox } from 'antd';

class TaskListItem extends Component {
    constructor(props, context) {
        super(...arguments);
    }

    handleOnChange = (event, value) => {
        const { handleItemSelect } = this.props;
        handleItemSelect(value, event.target.checked);
    }

    render() {
        const { task, value, ...props } = this.props

        const nonUniformProps = filterDOMProps(props);
        return (
            <Checkbox
                defaultChecked={value && value.length > 0}
                onChange={(event) => this.handleOnChange(event, task)}
                {...nonUniformProps}
            >
                {task}
            </Checkbox>
        )
    }
}

TaskListItem.propTypes = {
    task: PropTypes.string.isRequired,
    value: PropTypes.string
}

export default connectField(TaskListItem, {
    includeInChain: false,
});