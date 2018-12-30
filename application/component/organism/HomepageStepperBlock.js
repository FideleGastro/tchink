import React, { Component } from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Block = styled.div`
    width: 100%;
    height: 50vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:50px 0;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding:50px;
`;

const Title = styled.h2`
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.23;
    letter-spacing: normal;
    text-align: center;
    color: #707070;
    background: rose;
`;

const styles = theme => ({

    button: {
        marginRight: theme.spacing.unit,
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['TROUVE UN BAR', 'FAIRE PIPI DANS UN BAR', 'FAIRE CACA DANS UN BAR'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Parmi une sélection des meilleures adresses de Toulouse';
        case 1:
            return 'Pisser au comptoir';
        case 2:
            return 'Chier sur les tables';
        default:
            return 'Unknown step';
    }
}

class HomepageStepperBlock extends React.Component {
    state = {
        activeStep: 1,
        completed: {},
    };

    totalSteps = () => {
        return getSteps().length;
    };

    handleNext = () => {
        let activeStep;

        if (this.isLastStep() && !this.allStepsCompleted()) {
            // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            const steps = getSteps();
            activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
        } else {
            activeStep = this.state.activeStep + 1;
        }
        this.setState({
            activeStep,
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };

    handleComplete = () => {
        const { completed } = this.state;
        completed[this.state.activeStep] = true;
        this.setState({
            completed,
        });
        this.handleNext();
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
            completed: {},
        });
    };

    completedSteps() {
        return Object.keys(this.state.completed).length;
    }

    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps();
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <Block>
                <Content>
                    <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => {
                            return (
                                <Step key={label}>
                                    <StepButton
                                        onClick={this.handleStep(index)}
                                        completed={this.state.completed[index]}
                                    >
                                        {label}
                                    </StepButton>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <Title>
                        {getStepContent(activeStep)}
                    </Title>
                </Content>
            </Block>
        );
    }
}

export default withStyles(styles)(HomepageStepperBlock);