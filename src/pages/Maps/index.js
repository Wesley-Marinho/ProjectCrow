import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

export default function App() {
  return (
    <LinearGradient colors={['#373737', '#000',]}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}>
      
    </LinearGradient>
  );
}