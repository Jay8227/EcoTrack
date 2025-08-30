function App() {
  return (
    <div style={{ 
      fontFamily: "Arial, sans-serif", 
      lineHeight: "1.6", 
      color: "#1b4332", 
      backgroundColor: "#f4f9f4", 
      margin: 0, 
      padding: 0 
    }}>
      
      {/* Header */}
      <header style={{ 
        padding: "20px", 
        backgroundColor: "#2d6a4f", 
        color: "white", 
        textAlign: "center" 
      }}>
        <h1 style={{ fontSize: "2.5rem", margin: "0" }}>🌍 GreenData Insight</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
          Harnessing AI & Climate Data for a Sustainable Future
        </p>
      </header>

      {/* Main Section */}
      <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
        
        {/* About Section */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#2d6a4f" }}>About GreenData Insight</h2>
          <p>
            GreenData Insight is a platform designed to empower individuals, 
            organizations, and governments with actionable insights from climate 
            and environmental data. By leveraging <strong>Artificial Intelligence</strong>, 
            <strong> Machine Learning</strong>, and <strong>Geospatial Analytics</strong>, 
            we aim to make sustainability decisions smarter, faster, and more impactful.
          </p>
        </section>

        {/* Features Section */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#2d6a4f" }}>Key Features</h2>
          <ul>
            <li>📊 Real-time monitoring of environmental metrics</li>
            <li>🌍 Interactive geospatial maps for climate analysis</li>
            <li>🤖 AI-driven forecasts and recommendations</li>
            <li>⚡ Easy-to-understand dashboards for decision-making</li>
          </ul>
        </section>

        {/* Mission Section */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#2d6a4f" }}>Our Mission</h2>
          <p>
            Our mission is simple: <em>make sustainability actionable</em>. 
            We believe that by transforming raw data into meaningful insights, 
            we can enable communities, industries, and policymakers to act 
            responsibly and effectively in the fight against climate change.
          </p>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <a 
            href="#demo" 
            style={{ 
              padding: "12px 24px", 
              backgroundColor: "#2d6a4f", 
              color: "white", 
              borderRadius: "8px", 
              textDecoration: "none", 
              fontWeight: "bold" 
            }}
          >
            🚀 Explore Demo
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ 
        textAlign: "center", 
        padding: "20px", 
        backgroundColor: "#2d6a4f", 
        color: "white", 
        marginTop: "40px" 
      }}>
        <p>© {new Date().getFullYear()} GreenData Insight — Built for a Greener Future</p>
      </footer>
    </div>
  );
}

export default App;
