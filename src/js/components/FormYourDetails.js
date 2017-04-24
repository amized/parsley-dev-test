import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classNames from "classnames"
import { Input, Select, Form } from 'formsy-react-components'

const genderOptions = [
	{value: '-1', label: 'Please select...', disabled: true},
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'}
];

const raceOptions = [
	{value: '-1', label: 'Please select...', disabled: true},
  {value: 'asian', label: 'Asian'},
  {value: 'black', label: 'Black or African American'},
  {value: 'native', label: 'Native American'},
  {value: 'white', label: 'White / Caucasian'},
  {value: 'other', label: 'Other'}
];

const maritalOptions = [
	{value: '-1', label: 'Please select...', disabled: true},
  {value: 'married', label: 'Married'},
  {value: 'single', label: 'Single'}
];



export default function FormYourDetails(props) {
	const { fields, currentSubStep } = props;
	
	switch (currentSubStep) {
		case 0: {
			return (
				<div className="form-block">
					<div className="form-block__label">
						Let's start with some basic information
					</div>
					<div className="form-row form-row__thirds">
						<Input
							name="firstName"
							label="First name"
							value={fields["firstName"].value}
              required />
						<Input
							name="lastName"
							label="Last name"
							value={fields["lastName"].value}
							required />
						<Input
							name="middleName"
							label="Middle name"
							value={fields["middleName"].value}
						 />
					</div>
					<div className="form-row form-row__half">
						<Select
							name="sex"
              label="Sex"
              placeholder="Select..."
              value={fields["sex"].value}
              options={genderOptions}
              required
						/>
						<Input
							name="dob"
							label="Date of Birth"
							type="date"
							value={fields["dob"].value}
							required />
					</div>

				</div>
			)
		}

		case 1: {
			return (
				<div className="form-block">
					<div className="form-block__label">
						Please enter the following personal information
					</div>
					<div className="form-row form-row__half">
						<Input
							name="occupation"
							label="Occupation"
							value={fields["occupation"].value}
							required
						/>
					<Select
						name="race"
            label="Race"
            placeholder="Select..."
            value={fields["race"].value}
            options={raceOptions}
            required
					/>

					</div>
					<div className="form-row form-row__half">
						<Input
							name="numChildren"
							label="Number of children"
							value={fields["numChildren"].value}
							type="number"
							required
						/>

						<Select
							name="marital"
              label="Marital status"
              placeholder="Select..."
              value={fields["marital"].value}
              options={maritalOptions}
              required
						/>
					</div>
				</div>
			)
		}
		default:
			return null;
	}
	
}


