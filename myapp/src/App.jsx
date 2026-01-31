import {useState} from 'react'
import './App.css'

function App() {
  const[name,setName]=useState(""); 
  const[submitData,setSubmitData]=useState(null)
  const handleSubmit =(e)=>{
    e.preventDefault();
    const data={name};
    setSubmitData(data);
    setName("");
  }
  
  
  return(
    <>
    <form onSubmit={handleSubmit}>
      <label >Name :</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button type='submit'>submit</button>
    </form>
    
    {submitData&&<div>
      <h2>submitted data</h2>
      <p>
      Name ;{submitData.name}
      </p>
    </div>}
    </>
  )
  
  
  
}

export default App
