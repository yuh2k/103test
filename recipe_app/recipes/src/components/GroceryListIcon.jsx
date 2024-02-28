import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Groceries from './Groceries';

function GroceryListIcon() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        ☰
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Grocery List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Groceries></Groceries>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default GroceryListIcon;
