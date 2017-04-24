import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import classNames from "classnames";

export default class StepNav extends Component {

	constructor(props) {
		super(props);
		this.els = [];
	}

	static propTypes = {
		steps: PropTypes.array,
		onSelect: PropTypes.func,
		currentStep: PropTypes.number
	}

	componentDidMount() {
		this.positionArrow();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.currentStep !== this.props.currentStep) {
			this.positionArrow();
		}
	}

	positionArrow() {
		if (this.els[this.props.currentStep] === undefined) {
			this.arrowEl.style.display = "none";
		}
		else {
			let left = this.els[this.props.currentStep].offsetLeft;
			this.arrowEl.style.left = left + "px";
			this.arrowEl.style.display = "block";
		}

	}

	render() {
		const { steps, currentStep } = this.props;
		return (
			<div className="step-nav" ref={(el) => { this.containerEl = el }}>
				<div className="step-nav__list">
					{	
						steps.map((step,index) => {
							let classnames = classNames({
								'step-nav__item': true,
								'step-nav__item--current': step.id === currentStep,
								'step-nav__item--complete': step.isComplete
							})
							return (
								<div 
									className={classnames}
									key={index} 
									onClick={this.props.onSelect.bind(this, index)}
									ref={(el) => { this.els[index] = el }}
								>
									<div className="step-nav__item-num">{index + 1}</div>
									<div className="step-nav__item-title">{ step.title }</div>
									<div className="step-nav__item-tick">
										<i className="fa fa-check"></i>
									</div>
								</div>
							)
						})
					}
				</div>
				<div className="step-nav__arrow" ref={(el) => { this.arrowEl = el }}></div>
			</div>
		)
	}
}



