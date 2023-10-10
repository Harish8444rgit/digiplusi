import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Select() {
  return (
    <Form>
      <Form.Group className="container my-3'" controlId="formBasicEmail">
        <h3><Form.Label>Seclect Node</Form.Label></h3>
        <Form.Control type="text" placeholder="Node Name" />
       <pre><Button variant="primary" type="submit">Update</Button>
        <pre><Button variant="primary" type='submit'>Delete</Button></pre> </pre> 
       
      </Form.Group>
     
    </Form>
  );
}

export default Select;