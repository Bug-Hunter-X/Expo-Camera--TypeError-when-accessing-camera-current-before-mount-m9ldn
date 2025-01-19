import React, { useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      // Request camera permissions
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
      }
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log('Photo taken:', photo);
    }
  };

  return (
    <Camera style={{ flex: 1 }} ref={cameraRef}>
      <button onPress={takePicture}>Take Picture</button>
    </Camera>
  );
};

export default CameraScreen;