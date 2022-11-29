import React from 'react'
import {Form } from 'react-bootstrap';

const DatePicker =({handelChange})=>{



        return(
         
            <div >
                <div className="row">
                    <div >
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control onChange={handelChange}  type="date" name="DOB" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            </div>
      
        )
    
    
}

export default DatePicker;