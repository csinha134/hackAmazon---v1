import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div>
      <style jsx>{`
      /* Center the form */
      .form-container {
        margin: 0 auto;
        width: 50%;
      }

      /* Beautify the form */
      .form-container {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        background-color: #fff;
      }

      .form-container input,
      .form-container textarea {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        font-size: 16px;
      }

      .form-container button {
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
      }

      .form-container h2 {
        text-align: center;
      }
    `}</style>

      <div className="form-container">
        <h2>Contact Us</h2>
        <form>
          <MDBRow className='mb-4'>
            <MDBCol>
              <MDBInput id='firstName' label='First name' />
            </MDBCol>
            <MDBCol>
              <MDBInput id='lastName' label='Last name' />
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' id='companyName' label='Company name' />
          <MDBInput wrapperClass='mb-4' id='address' label='Address' />
          <MDBInput wrapperClass='mb-4' type='email' id='email' label='Email' />
          <MDBInput wrapperClass='mb-4' type='tel' id='phone' label='Phone' />

          <MDBInput wrapperClass='mb-4' textarea id='additionalInformation' rows={4} label='Additional information' />

          <MDBCheckbox
            wrapperClass='d-flex justify-content-center mb-4'
            id='createAccount'
            label='Create an account?'
            defaultChecked
          />

          <MDBBtn className='mb-4' type='submit' block>
            Submit
          </MDBBtn>
        </form>
      </div>
    </div>
  );
}