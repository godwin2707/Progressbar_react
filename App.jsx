import { useState } from "react";
import ProgressBar from "./ProgressBar";

function App() {
  const [progress, setProgress] = useState(10);

  function updateProgress() {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <ProgressBar progress={progress} />

      <button
        onClick={updateProgress}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Increase Progress
      </button>
    </div>
  );
}

export default App;
