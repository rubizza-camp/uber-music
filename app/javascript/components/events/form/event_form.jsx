import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Notice from "../../shared/information_header";

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: props.event,
      organizations: props.organizations,
      places: props.places,
      date_time: Date.now(),
      name: '',
      description: '',
      currentStep: 1,
      data: [],
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { organizations, places, date_time, name, description } = this.state
  }

  _next = () => {
    if(this.state.data){

      let currentStep = this.state.currentStep
      currentStep = currentStep >= 4? 5: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
    else {
      <Notice message={"Это не ваше время!"} color={"warning"}/>
    }
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
        Назад
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep == 1){
      axios({
        method: 'POST',
        url: '/organizations/check_time',
        headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
        data: {organization: {organization_id: this.state.data}},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })}
    }
    if(currentStep <5){
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
        Вперед
        </button>
      )
    }
    return null;
  }

  dataSender = (data) => {
    console.log(data)
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <React.Fragment>
      <h1>Мероприятие</h1>

      <form onSubmit={this.handleSubmit}>
        <Step1
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          organizations={this.state.organizations}
          event={this.state.event}
          data={this.dataSender}
        />
        <Step2
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          places={this.state.places}
        />
        <Step3
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          date_time={this.state.date_time}
        />
        <Step4
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          name={this.state.name}
        />
        <Step5
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          description={this.state.description}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

export default MasterForm
