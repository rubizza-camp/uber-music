import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Description from "../shared/description";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Шаг 1', 'Шаг 2', 'Шаг 3', 'Шаг 4', 'Шаг 5'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Зарегистрируйся на нашем сайте';
    case 1:
      return 'Создай организацию';
    case 2:
      return 'Подтверди свои музыкальные навыки (Пройди прослушивание)';
    case 3:
      return 'Создай мероприятие (Выбери время и место выступления)';
    case 4:
      return 'Приходи и играй!';
  }
}

export default function MyStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function totalSteps() {
    return getSteps().length;
  }

  function handleNext() {
    setActiveStep(newActiveStep => activeStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  return (
      <Grid container direction="column" justify="space-evenly" alignItems="center">
        <Grid item >
          <Grid container direction="column" justify="space-evenly" alignItems="center">
            <Stepper alternativeLabel nonLinear activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const buttonProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepButton onClick={handleStep(index)} {...buttonProps}>
                      {label}
                    </StepButton>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
        </Grid>
        <Grid item>
        <Description content={getStepContent(activeStep)}></Description>
        </Grid>
      </Grid>
  );
}
