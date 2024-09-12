// HomePage.tsx
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className='home-page'>
      <header className='header'>
        <h1>Welcome to Our Website</h1>
        <nav className='nav'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#services'>Services</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>
      <main className='main-content'>
        <section className='hero'>
          <h2>Your Journey Begins Here</h2>
          <p>Discover amazing experiences and opportunities with us.</p>
          <button className='cta-button'>Get Started</button>
        </section>
        <section className='features'>
          <div className='feature'>
            <h3>Feature 1</h3>
            <p>Detailed description of feature 1.</p>
          </div>
          <div className='feature'>
            <h3>Feature 2</h3>
            <p>Detailed description of feature 2.</p>
          </div>
          <div className='feature'>
            <h3>Feature 3</h3>
            <p>Detailed description of feature 3.</p>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <p>&copy; 2024 Our Website. All rights reserved.</p>
      </footer>
      <style>{`
        .home-page {
          font-family: Arial, sans-serif;
          color: #333;
          text-align: center;
        }
        .header {
          background: #f4f4f4;
          padding: 20px;
        }
        .nav a {
          margin: 0 15px;
          text-decoration: none;
          color: #0070f3;
        }
        .nav a:hover {
          text-decoration: underline;
        }
        .main-content {
          padding: 20px;
        }
        .hero {
          background: #e0e0e0;
          padding: 40px 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .cta-button {
          background: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
        .cta-button:hover {
          background: #005bb5;
        }
        .features {
          display: flex;
          justify-content: space-around;
          margin: 20px 0;
        }
        .feature {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          width: 30%;
        }
        .footer {
          background: #f4f4f4;
          padding: 10px;
          position: fixed;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default HomePage
