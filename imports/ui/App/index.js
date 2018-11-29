import React, { Component, Fragment } from 'react';
import SignupForm from './components/SignupForm';
import { Card, notification, Icon } from 'antd';


class App extends Component {
   
    handleSubmitSuccess = () => {
       notification.open({
           message: 'Signup form submitted successfully',
           icon: <Icon type="smile" style={{ color: '#108ee9' }} />
       })
    }

    render() {
        const {handleSubmitSuccess} = this;
        return (
           <Fragment>
               <h4 className="main__title">React uniform forms</h4>
               <Card
                title="Signup Form"
                className="form__wrapper"
               >
                <SignupForm handleSubmitSuccess={handleSubmitSuccess} />
               </Card>
           </Fragment>
        )
    }
}

export default App;