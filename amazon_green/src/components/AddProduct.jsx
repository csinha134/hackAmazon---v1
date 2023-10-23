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
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='productTitle' label='Product Title' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='productPrice' label='Product Price' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='brandName' label='Product brand' />
      <MDBInput wrapperClass='mb-4' id='size' label='Size' />
      <MDBInput wrapperClass='mb-4' id='color' label='Color' />
      <MDBInput wrapperClass='mb-4' textarea id='about' rows={4} label='About' />
      <MDBInput wrapperClass='mb-4' textarea id='moreInfo' rows={4} label='More information' />
      <MDBInput wrapperClass='mb-4' type='file' id='photos' multiple label='Photos' />
      <MDBInput wrapperClass='mb-4' id='materialUsed' label='Material used' />
      <MDBInput wrapperClass='mb-4' id='carbonEmission' label='Carbon emission' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form6Example8'
        label='Create an account?'
        defaultChecked
      />

      <MDBBtn className='mb-4' type='submit' block>
        Place order
      </MDBBtn>
    </form>
  );
}