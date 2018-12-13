import React, { Component, Fragment } from 'react';
import SignupForm from './components/SignupForm';
import { Card, notification, Icon } from 'antd';


class App extends Component {

    state = {
        list: ['Task one', 'Task two', 'Task three', 'Task four'],
    }
   
    handleSubmitSuccess = () => {
       notification.open({
           message: 'Signup form submitted successfully',
           icon: <Icon type="smile" style={{ color: '#108ee9' }} />
       })
    }

    updateTaskList = (item) => {

        const {list } = this.state;
        let updatedList = [...list];

        updatedList.push(item);

        this.setState({ list: updatedList });
    }

    render() {
        const {handleSubmitSuccess, updateTaskList} = this;
        const {list} = this.state;
        return (
           <Fragment>
               <h4 className="main__title">React uniform forms</h4>
               <Card
                title="Signup Form"
                className="form__wrapper"
               >
                <SignupForm 
                    handleSubmitSuccess={handleSubmitSuccess} 
                    list={list} 
                    updateTaskList={updateTaskList}
                />
               </Card>
           </Fragment>
        )
    }
}

export default App;