import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filterDOMProps from 'uniforms/filterDOMProps';
import TextField from 'uniforms-antd/TextField';
import { Button, Row, Col, notification } from 'antd';

import TaskAddButton from '../TaskAddButton';
import './TaskAddSection.css';

class TaskAddSection extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        updateTaskList: PropTypes.func.isRequired
    }

    state = {
        taskLabel: '',
        showAddTaskField: false,
    }

    handleTaskLabelChange = (value) => {
        this.setState({ taskLabel: value });
    }

    toggleAddTaskState = () => {
        const { showAddTaskField } = this.state;
        showAddTaskField === false ?
            this.setState({ showAddTaskField: true }) : this.addTaskToList();
    }

    addTaskToList = () => {
        const { updateTaskList } = this.props;
        const task = this.state.taskLabel

        /**
         * Check for open state of the text field
         */
        if (this.state.showAddTaskField === false) {
            return;
        } 
        /**
         * Show error message if the field is empty
         */
        if (!task || task.length === 0) {
            this.showErrorMessage();
        }


        if (task && task.length > 0) {
            updateTaskList(task);
            this.resetLabel();
        }

    }

    showErrorMessage = () => {
        notification['error']({
            message: 'Task label cannot be empty!',
            description: 'Enter a valid non empty task label'
        })
    }

    resetLabel = () => {
        this.setState({ taskLabel: '' });
    }

    hideTextField = () => {
        this.setState({ showAddTaskField: false, taskLabel: '' });
    }

    render() {
        const { taskLabel, showAddTaskField } = this.state;
        const { handleTaskLabelChange, toggleAddTaskState, addTaskToList, hideTextField } = this;
        const { name, updateTaskList, ...props } = this.props;

        const nonUniformProps = filterDOMProps(props);
        return (
            <Row>
                {showAddTaskField &&
                    <Col span={24}>
                        <Col span={22}>
                            <TextField
                                placeholder="Enter Task Label"
                                label={false}
                                name={name}
                                value={taskLabel} onChange={handleTaskLabelChange}
                                {...nonUniformProps}
                            />
                        </Col>
                        <Col span={2} className="hide__text__field">
                            <Button 
                                type="danger" 
                                icon="delete" 
                                onClick={hideTextField} 
                                {...nonUniformProps}
                            />
                        </Col>
                    </Col>
                }
                <TaskAddButton addTask={toggleAddTaskState} {...nonUniformProps} />
            </Row>
        )
    }
}

export default TaskAddSection;