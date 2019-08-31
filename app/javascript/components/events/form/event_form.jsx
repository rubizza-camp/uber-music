import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";
import Notice from "../../shared/information_header";

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: props.event,
      organizations: props.organizations,
      places: props.places,
      date_time: Date.now(),
      not_available_time: '',
      name: '',
      description: '',
      currentStep: 1,
      organization_id: '',
      place_id: '',
      start_date: '',
      message: '',
      hasError: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { organizations, places, date_time, name, description } = this.state
  }

  _next = () => {
    const that = this
    let currentStep = this.state.currentStep
    if(currentStep == 1){
      if(this.state.organization_id == '')
        this.setState({hasError: true})
      else {
        axios({
          method: 'POST',
          url: '/organizations/check_time',
          headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
          data: {organization: {organization_id: this.state.organization_id}},
        })
        .then(function (response) {
          if(response["data"]){
            currentStep = currentStep >= 4? 5: currentStep + 1
            that.setState({
              currentStep: currentStep
            })
          }
          else{
            that.setState({message: response["data"]})
          }
        })
        .catch(function (error) {
          console.log(error);
        })
      }
    }else if(currentStep == 2){
    currentStep = currentStep >= 5? 6: currentStep + 1
                that.setState({
                  currentStep: currentStep
            })
    }else if(currentStep == 5){
      axios({
          method: 'POST',
          url: '/events',
          headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
          data: {event: {name: this.state.name,
            description: this.state.description,
            start_time: new Date(),
            end_time: new Date(),
            organizations: this.state.organization_id,
            place_id: this.state.place_id
          }},
        })
        .then(function (response) {
          if(response["data"]){
            currentStep = currentStep >= 5? 6: currentStep + 1
            that.setState({
              currentStep: currentStep
            })
          }
          else{
            that.setState({message: response["data"]})
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    else{
      currentStep = currentStep >= 5? 6: currentStep + 1
                that.setState({
                  currentStep: currentStep
            })
    }
    /*if(currentStep == 2){
      if(this.state.place_id == '')
        this.setState({hasError: true})
      else {
        axios({
          method: 'POST',
          url: '/events/select_place',
          headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
          data: {place: {place_id: this.state.place_id}},
        })
        .then(function (response) {
          currentStep = currentStep >= 5? 6: currentStep + 1
            that.setState({
              currentStep: currentStep
              not_available_time: response["data"]
            })
        })
        .catch(function (error) {
          console.log(error);
        })
      }
    }*/
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

  organizationDataSender = (data) => {
    this.setState({
      organization_id: data
    })
  }

  placeDataSender = (data) => {
    this.setState({
      place_id: data
    })
  }

  nameDataSender = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  descriptionDataSender = event => {
    this.setState({
      description: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
      {this.state.message === false &&
                  <Notice message={"Это не ваше время!"} color={"warning"}/>
      }
      <h1>Мероприятие</h1>

      <form onSubmit={this.handleSubmit}>
        <Step1
          currentStep={this.state.currentStep}
          organizations={this.state.organizations}
          event={this.state.event}
          hasError={this.state.hasError}
          dataSender={this.organizationDataSender}
        />
        <Step2
          currentStep={this.state.currentStep}
          places={this.state.places}
          hasError={this.state.hasError}
          dataSender={this.placeDataSender}
        />
        <Step3
          currentStep={this.state.currentStep}
          date_time={this.state.date_time}
        />
        <Step4
          currentStep={this.state.currentStep}
          handleChange={this.nameDataSender}
          name={this.state.name}
        />
        <Step5
          currentStep={this.state.currentStep}
          description={this.state.description}
          handleChange={this.descriptionDataSender}
        />
        <Step6
          currentStep={this.state.currentStep}
        />
        {this.previousButton()}
        {this.nextButton()}
      </form>
      </React.Fragment>
    );
  }
}

export default MasterForm
