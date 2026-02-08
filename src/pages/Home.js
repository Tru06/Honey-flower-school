import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Honey Flower School</h1>
          <p className="hero-subtitle">Nurturing Young Minds, Building Bright Futures</p>
          <div className="hero-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="info-cards">
        <div className="container">
          <div className="card important-info">
            <h2>📅 Important Dates</h2>
            <div className="info-list">
              <div className="info-item">
                <strong>Mid-Term Exams:</strong> March 15-22, 2026
              </div>
              <div className="info-item">
                <strong>Spring Break:</strong> April 5-12, 2026
              </div>
              <div className="info-item">
                <strong>Final Exams:</strong> June 1-15, 2026
              </div>
              <div className="info-item">
                <strong>Summer Vacation:</strong> June 20 - August 15, 2026
              </div>
            </div>
            <Link to="/admissions" className="card-link">View Full Calendar →</Link>
          </div>

          <div className="card announcements">
            <h2>📢 Announcements</h2>
            <div className="info-list">
              <div className="info-item">
                <strong>Science Fair 2026:</strong> Registration now open for all grades
              </div>
              <div className="info-item">
                <strong>Parent-Teacher Meeting:</strong> February 20, 2026
              </div>
              <div className="info-item">
                <strong>Sports Day:</strong> March 5, 2026 - All students participate
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Honey Flower School?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎓</div>
              <h3>Excellence in Education</h3>
              <p>Comprehensive curriculum designed to foster critical thinking and creativity</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Expert Faculty</h3>
              <p>Dedicated teachers with years of experience and passion for education</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Holistic Development</h3>
              <p>Focus on academics, sports, arts, and character building</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌐</div>
              <h3>Modern Facilities</h3>
              <p>State-of-the-art classrooms, labs, library, and sports facilities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Happy Students</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Teachers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
