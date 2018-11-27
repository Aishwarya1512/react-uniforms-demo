import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import './DateRangePicker.css';

const { RangePicker } = DatePicker;


const transformDates = (dates, value, onChange) => {
    let { start, stop } = value;
    /**
     * Transform moment to date objects before storing in model
     */
    start = dates[0].toDate();
    stop = dates[1].toDate();

    onChange({start, stop})
    return dates;
}

const DateRangePicker = ({onChange, value, label, ...props}) => {

    const nonUniformProps = filterDOMProps(props);

    return (
        <Row span={24}>
            <Col span={24}>
            {label}:
            </Col>
            <Col span={24}>
            <RangePicker
                className='range-picker'
                onChange={dates => transformDates(dates, value, onChange)}
                {...nonUniformProps}
            />
            </Col>
        </Row>
       )
}

DateRangePicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.shape({
        start: PropTypes.instanceOf(Date),
        stop: PropTypes.instanceOf(Date)
    }).isRequired
}

export default connectField(DateRangePicker, {
    includeInChain: false
});