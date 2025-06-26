import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div className="container">

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', color: '#1F2937' }}>AI Image Enhancer</h1>
        <p style={{ fontSize: '1.125rem', color: '#4B5563' }}>
          Upload your image and watch AI enhance its quality — instantly and effortlessly.
        </p>
      </div>

      <Home />

      <div style={{ fontSize: '1rem', color: '#6B7280', marginTop: '2rem', textAlign: 'center' }}>
        © 2025 Image Enhancer • Powered by AI
      </div>

    </div>
  );
}

export default App;
