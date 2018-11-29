import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const TaskAddButton = ({ addTask, ...props }) => {
    return (
        <Button type="default" icon="plus" onClick={addTask} {...props}>
            Add task
        </Button>
    )
}

TaskAddButton.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default TaskAddButton;