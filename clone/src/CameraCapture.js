import React, { useEffect } from 'react';

function CameraCapture() {
  useEffect(() => {
    const resultsDiv = document.getElementById("results");
    const processedImage = document.getElementById("processed-image");
    const gptResponse = document.getElementById("gpt-response");

    // Function to update the results on the page
    function updateResults(data) {
      console.log(data); // Add this to see the data received
      processedImage.src = "data:image/jpeg;base64," + data.image_with_boxes;
      gptResponse.textContent = data.alternative_products;
      resultsDiv.style.display = "block";
    }

    const video = document.getElementById('camera-feed');
    const captureButton = document.getElementById('capture-button');

    // Get user's camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });

    // Capture an image when the "Capture" button is clicked
    captureButton.addEventListener('click', () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the captured image to a data URL (JPG format)
      const dataURL = canvas.toDataURL('image/jpeg');

      // Send the image data to the server using the fetch API
      fetch('http://localhost:5000/process_image', {
        method: 'POST',
        body: dataURL, // Send the image data as the request body
        headers: {
          'Content-Type': 'image/jpg' // Set the content type
        }
      })
      .then(response => response.json())
      .then(data => updateResults(data))
      .catch(error => console.error(error));
    });
  }, []);

  return (
    <div>
      <h1>Camera Capture</h1>
      <video id="camera-feed" autoPlay></video>
      <button id="capture-button">Capture</button>
      <div id="results">
        <img id="processed-image" src="" alt="Processed Image" />
        <p id="gpt-response"></p>
      </div>
    </div>
  );
}

export default CameraCapture;
