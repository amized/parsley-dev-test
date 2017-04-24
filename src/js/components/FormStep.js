import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classNames from "classnames"
import { Form } from 'formsy-react-components'

export default class FormStep extends Component {
  
  static propTypes = {
    isCurrent: PropTypes.bool,
    step: PropTypes.object,
    fields: PropTypes.object,
    updateFields: PropTypes.func,
    submitAndNextStep: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      currentSubStep: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isCurrent && !this.props.isCurrent) {
      this.setState({
        currentSubStep: 0
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Auto focuses the first input element
    if (prevState.currentSubStep !== this.state.currentSubStep ||
        prevProps.isCurrent !== this.props.isCurrent) {
      this.wrapperEl.querySelector("input, textarea").focus();
    }
  }

  next = () => {

    const curr = this.state.currentSubStep;
    if (curr === this.props.step.numSubSteps) {
      return
    }
    else {
      this.setState({
        currentSubStep: curr + 1
      })
    }
  }

  back = () => {
    const curr = this.state.currentSubStep;
    if (curr === 0) {
      return
    }
    else {
      this.setState({
        currentSubStep: curr - 1
      })
    }
  }

  onValidSubmit = (values) => {
    const { currentSubStep } = this.state;
    const { step } = this.props;
    if (currentSubStep === step.numSubSteps - 1) {
      this.props.submitAndNextStep(values);
    }
    else {
      this.props.updateFields(values);
      this.next();      
    }

  }

  render() {

    const { isCurrent, step, fields } = this.props;
    const { currentSubStep } = this.state;
    const StepComponent = step.component;

    const classnames = classNames({
      'form-step': true,
      'form-step--current': isCurrent,
      'form-step--first-sub-step': currentSubStep === 0,
      'form-step--last-sub-step': currentSubStep === step.numSubSteps - 1
    })

    return (
      <div className={classnames} ref={(el)=>{ this.wrapperEl = el }}>
        <Form 
          key={currentSubStep}
          onValidSubmit={this.onValidSubmit}
          validateOnSubmit={true}
          layout="vertical" 
        >
          <div className="form-sub-step">
            <StepComponent fields={fields} currentSubStep={currentSubStep}  {...this.props} />
          </div>
          <div className="form-step__buttons">
            <a className="btn btn-primary" onClick={this.back}>&lt; Back</a>
            {
              currentSubStep === step.numSubSteps - 1 ? (
                <button className="btn btn-primary" formNoValidate={true} type="submit">Save & Continue &gt;</button>
              )
              : (
                <button className="btn btn-primary" formNoValidate={true} type="submit">Next &gt;</button>
              )
            }
          </div>
        </Form>
      </div>
    )
  }
}



