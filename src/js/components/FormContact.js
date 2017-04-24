import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classNames from "classnames"
import { Input, Select, RadioGroup, Form } from 'formsy-react-components'


const contactMethodOptions = [
  {
      label: "Email",
      value: "email"
  },

  {
      label: "SMS",
      value: "sms"
  },
  {
      label: "Phone call",
      value: "phone"
  },
]

const stateOptions = [
  {value: '-1', label: 'Please select...', disabled: true},
  {
      label: "Alabama",
      value: "AL"
  },
  {
      label: "Alaska",
      value: "AK"
  },
  {
      label: "American Samoa",
      value: "AS"
  },
  {
      label: "Arizona",
      value: "AZ"
  },
  {
      label: "Arkansas",
      value: "AR"
  },
  {
      label: "California",
      value: "CA"
  },
  {
      label: "Colorado",
      value: "CO"
  },
  {
      label: "Connecticut",
      value: "CT"
  },
  {
      label: "Delaware",
      value: "DE"
  },
  {
      label: "District Of Columbia",
      value: "DC"
  },
  {
      label: "Federated States Of Micronesia",
      value: "FM"
  },
  {
      label: "Florida",
      value: "FL"
  },
  {
      label: "Georgia",
      value: "GA"
  },
  {
      label: "Guam",
      value: "GU"
  },
  {
      label: "Hawaii",
      value: "HI"
  },
  {
      label: "Idaho",
      value: "ID"
  },
  {
      label: "Illinois",
      value: "IL"
  },
  {
      label: "Indiana",
      value: "IN"
  },
  {
      label: "Iowa",
      value: "IA"
  },
  {
      label: "Kansas",
      value: "KS"
  },
  {
      label: "Kentucky",
      value: "KY"
  },
  {
      label: "Louisiana",
      value: "LA"
  },
  {
      label: "Maine",
      value: "ME"
  },
  {
      label: "Marshall Islands",
      value: "MH"
  },
  {
      label: "Maryland",
      value: "MD"
  },
  {
      label: "Massachusetts",
      value: "MA"
  },
  {
      label: "Michigan",
      value: "MI"
  },
  {
      label: "Minnesota",
      value: "MN"
  },
  {
      label: "Mississippi",
      value: "MS"
  },
  {
      label: "Missouri",
      value: "MO"
  },
  {
      label: "Montana",
      value: "MT"
  },
  {
      label: "Nebraska",
      value: "NE"
  },
  {
      label: "Nevada",
      value: "NV"
  },
  {
      label: "New Hampshire",
      value: "NH"
  },
  {
      label: "New Jersey",
      value: "NJ"
  },
  {
      label: "New Mexico",
      value: "NM"
  },
  {
      label: "New York",
      value: "NY"
  },
  {
      label: "North Carolina",
      value: "NC"
  },
  {
      label: "North Dakota",
      value: "ND"
  },
  {
      label: "Northern Mariana Islands",
      value: "MP"
  },
  {
      label: "Ohio",
      value: "OH"
  },
  {
      label: "Oklahoma",
      value: "OK"
  },
  {
      label: "Oregon",
      value: "OR"
  },
  {
      label: "Palau",
      value: "PW"
  },
  {
      label: "Pennsylvania",
      value: "PA"
  },
  {
      label: "Puerto Rico",
      value: "PR"
  },
  {
      label: "Rhode Island",
      value: "RI"
  },
  {
      label: "South Carolina",
      value: "SC"
  },
  {
      label: "South Dakota",
      value: "SD"
  },
  {
      label: "Tennessee",
      value: "TN"
  },
  {
      label: "Texas",
      value: "TX"
  },
  {
      label: "Utah",
      value: "UT"
  },
  {
      label: "Vermont",
      value: "VT"
  },
  {
      label: "Virgin Islands",
      value: "VI"
  },
  {
      label: "Virginia",
      value: "VA"
  },
  {
      label: "Washington",
      value: "WA"
  },
  {
      label: "West Virginia",
      value: "WV"
  },
  {
      label: "Wisconsin",
      value: "WI"
  },
  {
      label: "Wyoming",
      value: "WY"
  }
]

export default function FormContact(props) {
	const { fields, currentSubStep } = props;
	
	switch (currentSubStep) {

		case 0: {
			return (
				<div className="form-block">
					<div className="form-block__label">
						Please provide some contact details
					</div>
					<div className="form-row form-row__thirds">
						<Input
							name="cellPhone"
							label="Cell number"
							value={fields["cellPhone"].value}
							required
						/>
            <Input
              name="homePhone"
              label="Home phone number"
              value={fields["homePhone"].value}
            />
						<Input
							name="email"
							type="email"
							label="Email address"
							value={fields["email"].value}
							required
						/>
					</div>
          <div className="form-row">
            <RadioGroup
              name="contactMethod"
              label="How would you prefer us to get in touch with you?"
              value={fields["contactMethod"].value}
              options={contactMethodOptions}
              required
            />

          </div>

				</div>
			)
		}

		case 1: {
			return (
				<div className="form-block">
					<div className="form-block__label">
						Where are you currently living?
					</div>
					<div className="form-row form-row__half">
						<Input
							name="address1"
							label="Address line 1"
							value={fields["address1"].value}
							required
						/>
					</div>
					<div className="form-row form-row__half">
						<Input
							name="address2"
							label="Address line 2"
							value={fields["address2"].value}
						/>
					</div>
					<div className="form-row form-row__thirds">
						<Input
							name="city"
							label="Suburb / City"
							value={fields["city"].value}
							required
						/>

						<Select
							name="state"
              label="State"
              placeholder="Select..."
              value={fields["state"].value}
              options={stateOptions}
              required
						/>

						<Input
							name="postcode"
							label="Postcode"
							value={fields["postcode"].value}
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


