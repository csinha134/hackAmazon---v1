import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
const containerStyle = {
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  marginTop: '10px',
};

const resultsStyle = {
  marginTop: '20px',
};

const imgStyle = {
  maxWidth: '100%',
  height: 'auto',
};
function CameraCapture() {
  const webcamRef = useRef(null);
  useEffect(() => {
    // Function to update the results on the page
    function updateResults(data) {
      console.log(data);
      const responseElement = document.getElementById('response');
  if (responseElement) {
    responseElement.textContent = data.name; // You can also use innerHTML if you need HTML content
  }
    
  const imageElement = document.getElementById('processed-image');
  if (imageElement) {
    const base64Image = `data:image/jpeg;base64, ${data.image_base64}`;
    imageElement.src = base64Image;
  }
    
    
    }
    

    const captureButton = document.getElementById('capture-button');

    // Capture an image when the "Capture" button is clicked
    captureButton.addEventListener('click', () => {
      const imageSrc = webcamRef.current.getScreenshot();

      // Send the image data to the server using the fetch API
      fetch('http://localhost:5000/process_image', {
        method: 'POST',
        body: imageSrc, // Send the image data as the request body
        headers: {
          'Content-Type': 'image/jpg', // Set the content type
        },
      })
        .then((response) => response.json())
        .then((data) => updateResults(data))
        .catch((error) => console.error(error));
    });
  }, []);

  return (
       <div style={containerStyle}>
      <h1>Camera Capture</h1>
      <Webcam
        id="camera-feed"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button id="capture-button" style={buttonStyle}>
        Capture Image - Detect Recommended From Dataset ( Without ChatGPT )
      </button>
      <div id="results" style={resultsStyle}>
        <img id="processed-image" src="" alt="Processed Image" style={imgStyle} />
        <p id="response">RESULT placeholder</p>
      </div>
    </div>
  );
}
export default CameraCapture