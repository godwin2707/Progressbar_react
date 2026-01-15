function ProgressBar(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Progress Bar</h1>

      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            width: `${props.progress}%`,
            backgroundColor: "#007bff",
            height: "24px",
            borderRadius: "4px",
            transition: "width 0.3s",
          }}
        ></div>
      </div>

      <p>{props.progress}% Complete</p>
    </div>
  );
}

export default ProgressBar;
