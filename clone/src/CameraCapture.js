import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
function CameraCapture() {
  const webcamRef = useRef(null);
  const resultsDiv = document.getElementById('results');
  const processedImage = document.getElementById('processed-image');
  const gptResponse = document.getElementById('gpt-response');

  useEffect(() => {
    // Function to update the results on the page
    function updateResults(data) {
      console.log(data);
      processedImage.src = 'data:image/jpeg;base64,' + data.image_with_boxes;
      gptResponse.textContent = data.alternative_products;
      resultsDiv.style.display = 'block';
    }

    const captureButton = document.getElementById('capture-button');

    // Capture an image when the "Capture" button is clicked
    captureButton.addEventListener('click', () => {
      const imageSrc = webcamRef.current.getScreenshot();

      // Send the image data to the server using the fetch API
      fetch('http://13.126.106.140:5000/process_image', {
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
    <div>
      <h1>Camera Capture</h1>
      <Webcam
        id="camera-feed"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button id="capture-button">Capture</button>
      <div id="results">
        <img id="processed-image" src="" alt="Processed Image" />
        <p id="gpt-response"></p>
      </div>
    </div>
  );
}
export default CameraCapture