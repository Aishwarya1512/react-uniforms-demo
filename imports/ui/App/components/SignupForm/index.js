import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import AutoForm from 'uniforms/AutoForm';
import SubmitField from 'uniforms-antd/SubmitField';
import ErrorsField from 'uniforms-antd/ErrorsField';

import SignupSchema from '../../../../schemas/signup';
import CustomTextField from '../CustomTextField';
import DateRangePicker from '../DateRangePicker';
import TimeRangePicker from '../TimeRangePicker';

const SignupForm = ({ handleSubmitSuccess }) => {
    return (
        <Row gutter={16}>
            <Col span={24}>
                <AutoForm
                    schema={SignupSchema}
                    onSubmitSuccess={handleSubmitSuccess}
                >
                    <Col span={12}>
                        <CustomTextField name="firstname" />
                    </Col>
                    <Col span={12}>
                        <CustomTextField name="lastname" />
                    </Col>
                    <Col span={12}>
                        <DateRangePicker name="dateRange" />
                    </Col>
                    <Col span={12}>
                        <TimeRangePicker name="timeRange" />
                    </Col>
                    <Col span={24}>
                        <ErrorsField />
                    </Col>
                    <Col span={24} className="submit__field__wrapper">
                        <SubmitField />
                    </Col>
                </AutoForm>
            </Col>
        </Row>
    )
}

SignupForm.propTypes = {
    handleSubmitSuccess: PropTypes.func.isRequired
}

export default SignupForm;