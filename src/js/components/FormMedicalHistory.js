import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classNames from "classnames"
import { Input, Select, Form, Textarea, CheckboxGroup } from 'formsy-react-components'



const conditionOptions = [
    {value: 'ADD', label: 'ADD/ADHD'},
    {value: 'Anemia', label: 'Anemia'},
    {value: 'Asthma', label: 'Asthma'},
    {value: 'Arthritis', label: 'Arthritis'},
    {value: 'Cholesterol', label: 'Cholesterol'},
    {value: 'Diabetes', label: 'Diabetes'},
    {value: 'Heart Attack', label: 'Heart Attack'},
    {value: 'Kidney Disease', label: 'Kidney Disease'},
    {value: 'Liver Disease', label: 'Liver Disease'},
    {value: 'Neurological Disease', label: 'Neurological Disease'},
    {value: 'Osteopenia/Osteoporosis', label: 'Osteopenia/Osteoporosis'},
    {value: 'Respiratory Disease', label: 'Respiratory Disease'},
    {value: 'Skin Disease', label: 'Skin Disease'},
    {value: 'Stomach/Colon Disease', label: 'Stomach/Colon Disease'},
    {value: 'Stroke', label: 'Stroke'},
    {value: 'Seizure Disorder', label: 'Seizure Disorder'},
    {value: 'Thyroid Disorder', label: 'Thyroid Disorder'},
    {value: 'Sexually Transmitted Disease', label: 'Sexually Transmitted Disease'},
    
]


export default function FormMedicalHistory(props) {
  const { fields, currentSubStep } = props;
  
  switch (currentSubStep) {
    case 0: {
      return (
        <div className="form-block">
          <div className="form-block__label">
            Do you have any MEDICATIONS you are currently taking, prescribed or over the counter?
          </div>
          <div className="form-row">
            <Textarea
              name="medications"
              label="List the medication names and dosages"
              value={fields["medications"].value}
            />
          </div>
        </div>
      )
    }

    case 1: {
      return (
        <div className="form-block">
          <div className="form-block__label">
            Do you have any allergies to Medication or Food? 
          </div>
          <div className="form-row">
            <Textarea
              name="allergies"
              label="List the medications and your reactions"
              value={fields["allergies"].value}
            />
          </div>

        </div>
      )
    }

    case 2: {
      return (
        <div className="form-block">
          <div className="form-block__label">
            Please let us know about recent medical exams/treatments if applicable
          </div>
          <div className="form-row form-row__half">
            <Input
              type="date"
              name="physcialExam"
              label="Date of last complete physical exam"
              value={fields["physcialExam"].value}
            />
            <Input
              type="date"
              name="bloodWork"
              label="Date of last blood work"
              value={fields["bloodWork"].value}
            />
          </div>
          <div className="form-row form-row__half">
            <Input
              type="date"
              name="colonoscopy"
              label="Date of last colonoscopy"
              value={fields["colonoscopy"].value}
            />
            <Input
              type="date"
              name="tetanus"
              label="Date of last Tetanus shot"
              value={fields["tetanus"].value}
            />
          </div>
        </div>
      )
    }


    case 3: {
      return (
        <div className="form-block">
          <div className="form-block__label">
            Have YOU or a FAMILY MEMBER had any of the following conditions?
          </div>
          <div className="form-row form-row__checkboxes">
            <CheckboxGroup
                name="conditions"
                value={fields["conditions"].value}
                label="Please tick"
                options={conditionOptions}
            />
          </div>
          <div className="form-row">
             <Input
              name="otherConditions"
              label="Other(s):"
              value={fields["otherConditions"].value}
            />
          </div>

        </div>
      )
    }


    case 4: {
      return (
        <div className="form-block">
          <div className="form-block__label">
            Have you had any surgeries?
          </div>
          <div className="form-row">
            <Textarea
              name="surgeries"
              label="List the surgeries"
              value={fields["surgeries"].value}
            />
          </div>

        </div>
      )
    }

    default:
      return null;
  }
  
}


