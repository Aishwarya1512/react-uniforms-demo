import React from 'react';
import PropTypes from 'prop-types';
import { TimePicker } from 'antd';
import { Row, Col } from 'antd';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import './TimeRangePicker.css'


const transformMoments = (time, value, onChange, selector) => {
    let { start, stop } = value;
    /**
     * Transform moment to date objects before storing in model
     */
    if (selector === 'start') {
        start = time.toDate()
    }

    if (selector === 'stop') {
        stop = time.toDate()
    }

    onChange({ start, stop })
    return time;
}

const generateDisableHours = (hours, selector) => {
    let threshold = 0;
    let disableHours = [];
    if (selector === 'start') {
        threshold = (23 - hours) + 1; // increment by 1 to include the stop hour as well in the array
        disableHours = Array(threshold).fill().map((value, index) => hours + index);
    }
    if (selector === 'stop') {
        threshold = hours + 1; // increment by 1 to include the start hour as well in the array
        disableHours = Array(threshold).fill().map((value, index) => hours - index);
    }
    return disableHours;
}

const disabledHours = (value, selector) => {
    let disableHours = [];
    const { start, stop } = value;
    if (selector === 'start' && stop) {
        disableHours = generateDisableHours(stop.getHours(), selector);
    }

    if (selector === 'stop' && start) {
        disableHours = generateDisableHours(start.getHours(), selector);
    }
    return disableHours;
}

const TimeRangePicker = ({ onChange, value, label, ...props }) => {
    const nonUniformProps = filterDOMProps(props);

    return (
        <Row span={24}>
            <Col span={24} className="time-picker-label">
                {`${label}: (Task 2)`}
            </Col>
            <Col span={24}>
                <Col span={8}>
                    <TimePicker
                        disabledHours={() => disabledHours(value, 'start')}
                        onChange={startTime => transformMoments(startTime, value, onChange, 'start')}
                        {...nonUniformProps}
                    />
                </Col>
                <Col span={2}>
                    ~
                </Col>
                <Col span={10}>
                    <TimePicker
                        disabledHours={() => disabledHours(value, 'stop')}
                        onChange={stopTime => transformMoments(stopTime, value, onChange, 'stop')}
                        {...nonUniformProps}
                    />
                </Col>
            </Col>
        </Row>
    )
}

TimeRangePicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.shape({
        start: PropTypes.instanceOf(Date),
        stop: PropTypes.instanceOf(Date)
    }).isRequired,
    label: PropTypes.string.isRequired,
}

export default connectField(TimeRangePicker, {
    includeInChain: false
});