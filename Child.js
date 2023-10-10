import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function child(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [arr,setarr]=useState("");
  
    const submit=(e)=>{
        e.preventDefault();
        if(!arr){
            alert("pleas fill the Node filed");
        } 
        else{
        props.arr(arr);
        setarr("");
    
        }
    }
  return (
    
    <div className='container my-3' >
        <h3 className='text -left'>Node Type</h3>
        <Form.Select aria-label="Default select example">
     
    <option>Open this select menu</option>
     <option value="1">Parent Node</option>
       <option value="2">Child Node</option>
       <option value="3">Single Node</option>
     </Form.Select>
    <Form  onSubmit={submit}>
      <Form.Group className="mb-3">
      <h3 className='text -left'>Add Node</h3>
        <Form.Control type="text" value={arr} onChange={(e)=>setarr(e.target.value)}  placeholder="Add Node" />
      </Form.Group>

     
    
      <Button variant="primary" type='submit'>Add Node</Button>
    
    </Form>
    </div>
  );
}

export default child;