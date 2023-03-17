import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Avatar from '@mui/material/Avatar';

const steps = [
    {
        avatar: 'img.jpg',
        label: 'Customer 1',
        description: `here is a beautiful message from the user For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        avatar: 'img.jpg',
        label: 'Customer 2',
        description:
            'here is a beautiful message from the user An ad group to enhance your ads using features like ad extensions If you run into any problems with your ads, find out how to tell if theyre running and how to resolve approval issues contains one or more ads which target a shared set of keywords.',
    },
    {
        avatar: 'img.jpg',
        label: 'Customer 3',
        description: `here is a beautiful message from the user Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];

export default function TextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <Typography
                variant='h4'
                align='center'
                color='text.secondary'
                style={{padding: 20}}
            >
                What our Customers Say about Us!
            </Typography>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'lightblue'

            }}>


                <Box sx={{ maxWidth: '95%', flexGrow: 1 }}>
                    <Paper
                    style={{
                        margin: 20,
                        padding: 20
                    }}
                        square
                        elevation={1}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 50,
                            pl: 2,
                            backgroundColor: 'lightblue',
                        }}
                    >
                        <Avatar style={{
                        marginRight: 20
                    }} alt="Remy Sharp" src={steps[activeStep].avatar} />
                        <Typography>{steps[activeStep].label}</Typography>
                    </Paper>
                    <Box sx={{ height: 150, maxWidth: 800, width: '90%', p: 2 }}>
                        {steps[activeStep].description}
                    </Box>
                    <MobileStepper
                        style={{ marginBottom: 15 }}
                        variant="text"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </Box>
            </div>
        </>
    );
}
