import {Grid, Card, Typography, CardContent, TextField, Button, CircularProgress} from '@mui/material'
import { margin } from '@mui/system'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TaskForm() {
    const navigate = useNavigate()
    const handleChange = e =>
        setTask({...task, [e.target.name]: e.target.value})
    
    const [loading, setloading] = useState(false);

    const [task, setTask] = useState({
        title: '',
        description:''
    });
    const handleSubmit = async e =>{
        e.preventDefault();
        setloading(true)
       const res = await fetch('http://localhost:4000/tasks', {
            method:'POST',
            body: JSON.stringify(task),
            headers: {"Content-Type": "application/json"}
        })
         const data = await res.json()
        console.log(data)
        setloading(false)
        navigate('/')
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
                            <Button variant='conteined' color='primary' type='submit' disabled ={!task.title || !task.description}>
                                {loading ? <CircularProgress
                                    color='secondary'
                                    size={24}
                                />:'Create'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>



            </Grid>



        </Grid>
        </div>


    )



}