import { Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react"




export default function Auth() {

  const [tasks, setTasks] = useState([]);


  const loadTasks = async() =>{
    const res = await fetch('http://localhost:4000/tasks')
    const data = await res.json()
    setTasks(data)
  }
  const handleDelete = async (id) =>{
    try {
      await fetch(`http://localhost:4000/tasks/${id}`,{
     method: "DELETE",

    })
    setTasks(
    tasks.filter(tasks => tasks.id !== id));
    } catch (error) {
      console.log(error)
    }
     
  }
  useEffect(()=>{
    loadTasks()
  },[])


  return (
    <>
      <h1>TASK LIST</h1>
      {
        tasks.map(tasks => (
          <Card style={{
            marginBottom:".7rem",
            backgroundColor: '#1e272e'
          }}
          key={tasks.id}>
            <CardContent style={
              {
                display: "flex",
                justifyContent: "space-between"
              }
            }>
              <div style={{color:'white'}}>
            <Typography>{tasks.title}</Typography>
            <Typography>{tasks.description}</Typography>
            </div>
            <div>
            <Button variant="contained" color="inherit" onClick={() => console.log('edit')}>
              Edit
            </Button >
            <Button variant="contained" color="warning" onClick={() => handleDelete(tasks.id)} style={{marginLeft: ".5rem"}}>
              Eliminar
            </Button>
            </div>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}