import {Grid, Card, Typography, CardContent, TextField, Button} from '@mui/material'
import { margin } from '@mui/system'
import { useState, useEffect } from 'react';

export default function TaskForm() {
    const handleChange = e =>
        setTask({...task, [e.target.name]: e.target.value})
    
    const [task, setTask] = useState({
        title: '',
        description:''
    });
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(task)
    }
    return(
       <div className='bg-image'> 
        <Grid 
        container 
        direction='column' 
        alignItems='center' 
        justifyContent='center' 
        >
            <Grid item xs={3}> 
                <Card 
                        sx={{mt: 5}}
                        style={{
                            backgroundColor: '#1e272e',
                            padding:'1rem'
                        }}                 
                >
                    <Typography 
                    variant='5' 
                    textAlign='center' 
                    color='white'>
                        Create Task
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                            name='title'
                            variant='filled'
                            label='Escribir tarea'
                            sx={{display:'block',
                                margin:'.5rem 0'
                            }}
                            onChange={handleChange}
                            inputProps={{style:{color:'white'}}}
                            InputLabelProps={{style:{color:'white'}}}
                            />
                            <TextField
                            name='description'
                            variant='filled'
                            label='Descripcion tarea'
                            multiline
                            rows={4}
                            sx={{display:'block',
                            margin:'.5rem 0'}}
                            onChange={handleChange}
                            inputProps={{style:{color:'white'}}}
                            
                            InputLabelProps={{style:{color:'white'}}}
                            />    
                            <Button variant='conteined' color='primary' type='submit'>
                                save
                            </Button>
                        </form>
                    </CardContent>
                </Card>



            </Grid>



        </Grid>
        </div>


    )



}