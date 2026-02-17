import { useEffect, useState } from "react";

let socket;

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    socket = new WebSocket("ws://127.0.0.1:8000/ws/board/1/");

    socket.onopen = () => {
      console.log("Connected");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.task) {
        setTasks(prev => [...prev, data.task]);
      }
    };
  }, []);

  const addTask = () => {
    if (!taskText) return;

    socket.send(JSON.stringify({
      task: taskText
    }));

    setTaskText("");
  };

  return (
    <div style={{fontFamily:"Arial", padding:"30px", background:"#f4f5f7", minHeight:"100vh"}}>
      
      <h1>📋 Project Board</h1>

      <div style={{
        background:"white",
        padding:"20px",
        width:"300px",
        borderRadius:"8px",
        boxShadow:"0 2px 6px rgba(0,0,0,0.2)"
      }}>
        
        <h2>To Do</h2>

        <div style={{marginBottom:"15px"}}>
          <input
            type="text"
            placeholder="Enter new task..."
            value={taskText}
            onChange={(e)=>setTaskText(e.target.value)}
            style={{padding:"8px", width:"100%"}}
          />

          <button
            onClick={addTask}
            style={{
              marginTop:"10px",
              padding:"8px",
              width:"100%",
              background:"#0079bf",
              color:"white",
              border:"none",
              cursor:"pointer"
            }}
          >
            Add Task
          </button>
        </div>

        {tasks.map((t, i)=>(
          <div key={i} style={{
            background:"#e2e4e6",
            padding:"10px",
            borderRadius:"5px",
            marginBottom:"8px"
          }}>
            {t}
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
