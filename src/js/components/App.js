import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classNames from "classnames"
//import { Form, Text } from 'react-form'
import { Form } from 'formsy-react'
import { Input } from 'formsy-react-components'
import StepNav from './StepNav'
import FormStep from './FormStep'
import FormYourDetails from './FormYourDetails'
import FormMedicalHistory from './FormMedicalHistory'
import FormReview from './FormReview'
import FormContact from './FormContact'
import fields from '../fields'

const steps = [
  {
    id: 0,
    title: "Your details",
    component: FormYourDetails,
    numSubSteps: 2,
    isComplete: false
  },
  {
    id: 1,
    title: "Medical history",
    component: FormMedicalHistory,
    numSubSteps: 5,
    isComplete: false
  },
  {
    id: 2,
    title: "Contact information",
    component: FormContact,
    numSubSteps: 2,
    isComplete: false
  },

  {
    id: 3,
    title: "Sign off",
    component: FormReview,
    numSubSteps: 1,
    isComplete: false
  }
]


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      fields: fields,
      steps: steps,
      isSubmitting: false,
      isSuccess: false
    }
  }

  start = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      currentStep: 0
    })
  }

  reedit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      currentStep: 0
    })
  }

  submit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const data = {};
    Object.keys(this.state.fields).forEach((name) => {
      data[name] = this.state.fields[name].value;
    })

    console.log("==== SUBMITTING PAYLOAD TO SERVER ====");
    console.log(data);

    this.setState({
      isSubmitting: true
    })

    setTimeout(() => {
      this.setState({
        isSubmitting: false,
        isSuccess: true,
        currentStep: null
      })
    }, 4000);

  }

  onChangeStep = (index) => {
    if (this.state.steps[index].isComplete === true) {
      this.setState({
        currentStep: index
      })      
    }
  }

  updateFields = (data) => {
    const { currentStep, fields, steps } = this.state;

    Object.keys(data).forEach((key, index) => {
      fields[key].value = data[key];
    })

    this.setState({
      fields: fields
    })
  }

  submitAndNextStep = (data) => {

    const { currentStep, fields, steps } = this.state;

    Object.keys(data).forEach((key, index) => {
      fields[key].value = data[key];
    })
    steps[currentStep].isComplete = true;

    this.setState({
      fields: fields,
      currentStep: currentStep + 1,
      steps: steps
    })
  }

  render() {

    const { currentStep, fields, steps, isSubmitting, isSuccess } = this.state;

    const classnames = classNames({
      'app-container' : true,
      'app--submitting': isSubmitting,
      'app--success': isSuccess
    })
    return (
      <div className={classnames}>
        <main>
          <StepNav steps={steps} onSelect={this.onChangeStep} currentStep={currentStep} />
          <div className="form-wrapper">
            <div className="steps-container">
              {
                currentStep === null ? (
                  isSuccess ? (
                    <div className="intro">
                      <h2>Registration complete!</h2>
                      <p>Congratulations { fields["firstName"].value }, you have successfully registered. One of our consultants will be in touch
                      with you within 2 days.</p>
                      <a className="btn btn-success">Login</a>

                    </div>
                  )
                  : (
                    <div className="intro">
                      <h2>Patient Sign Up</h2>
                      <p>To register we just need to grab some information from you. This shouldn't take
                      longer than 10 minutes!
                      </p>
                      <a className="btn btn-success" onClick={this.start}>Get started</a>

                    </div>
                  )
                )
                :
                  null
              }
              {
                steps.map((step, index) => (
                  <FormStep 
                    fields={fields} 
                    key={index} 
                    step={step} 
                    isCurrent={step.id===currentStep} 
                    updateFields={this.updateFields}
                    submitAndNextStep={this.submitAndNextStep}
                  />
                ))
              }
              {
                currentStep === steps.length ?
                  <div className="review">
                    <div className="review-loader">
                      <div className="loader"></div>
                    </div>
                    <div className="review-main">
                      <div className="review-title">
                        Please review your entered details. If all appears to be
                        correct click submit below.
                      </div>
                      <div className="review-content">
                        <div className="review-list">
                          {
                            Object.keys(fields).map((name, index) => {
                              const field = fields[name];
                              if (name==="terms") {
                                return null;
                              }

                              let value = field.value.length > 0 ? field.value : "N/A";

                              if (name === "conditions" && value !== "N/A") {
                                value = value.join(", "); 
                              }
              

                              return (
                                <div className="review-field" key={index}>
                                  <div className="review-field__label">
                                    {field.label}
                                  </div>
                                  <div className="review-field__value">
                                    { value }
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                        <div className="review-options">
                          <a className="btn btn-primary" onClick={this.reedit}><i className="fa fa-pencil"></i>Edit</a>
                          <a className="btn btn-success" onClick={this.submit}>Submit application</a>
                        </div>
                      </div>
                    </div>
                  </div>
                :
                  null
              }
            </div>
          </div>
        </main>
      </div>
    )
  }
}



