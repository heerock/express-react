import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name': '차주훈',
  'birthday': '930517',
  'gender': '남자',
  'job': '백수'
}

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />


    )
  }
}

export default App;
