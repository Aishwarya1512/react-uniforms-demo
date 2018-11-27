import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
 
import App from '../imports/ui/App';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
