import { useContext } from 'react';
import { FormContext } from './FormContext';
import '../App.css'
import {Box,Stepper,StepLabel,Step} from '@material-ui/core'
export default function Header(){
    var [form, setForm] = useContext(FormContext)
    const steps = [
        'Basics',
        'Education',
        'Job',
        'Summary',
        'Skills',
        'Extra',
        'Done',
      ];
    return(
        <div>
            <Box sx={{ height:'100%',width: '100%' }}>
                <Stepper style={{borderBottom:'2px solid black',display:'flex',flexDirection:'column',alignItems:'stretch',justifyContent:'stretch'}} activeStep={form.step} orientation="vertical">
                    {steps.map((label) => (
                        <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    )
}