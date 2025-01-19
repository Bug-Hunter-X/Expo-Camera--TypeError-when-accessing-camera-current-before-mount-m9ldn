# Expo Camera: accessing camera.current before mount

This repository demonstrates a common error when using the Expo Camera API: attempting to access `camera.current` before the component has fully mounted.  This results in a `TypeError: Cannot read properties of undefined (reading 'current')`.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a solution using `useEffect` and `useRef` to ensure the camera object is ready before accessing it.

## Solution
The solution involves using the `useEffect` hook to access the camera object only after the component has mounted and the camera reference is available.