import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import connectField from 'uniforms/connectField';
import { List } from 'antd';

import TaskListItem from '../TaskListItem';
import TaskAddSection from '../TaskAddSection';
import './TaskList.css';

class TaskList extends Component {

    updateTaskListModel = (task, checked) => {
        const { value, onChange } = this.props;

        let taskList = [...value];
        /**
         * Add checked item to list
         */
        if (checked === true && taskList.includes(task) === false) {
            taskList.push(task)
        }
        /**
         * Remove unchecked item from list
         */
        if (checked === false && taskList.includes(task) === true) {
            taskList.splice(taskList.indexOf(task), 1);
        }
        /**
         * Update taskList model
         */
        onChange(taskList);
    }

    render() {
        const { list, updateTaskList, label } = this.props;
        const { updateTaskListModel } = this;
        return (
            <Fragment>
                <List
                    className="task__list_wrapper"
                    name="taskList"
                    dataSource={list}
                    itemLayout="vertical"
                    bordered={true}
                    header={<span>{label}</span>}
                    renderItem={
                        (item, index) => {
                            return (
                                <List.Item>
                                    <TaskListItem
                                        task={item}
                                        value={item}
                                        name={`taskList.${index}`}
                                        handleItemSelect={updateTaskListModel}
                                    />
                                </List.Item>
                            )
                        }}
                />
                <TaskAddSection
                    name={`taskList.${list.length + 1}`}
                    updateTaskList={updateTaskList}
                />
            </Fragment>
        )
    }
}

TaskList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTaskList: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default connectField(TaskList, {
    includeInChain: false,
});