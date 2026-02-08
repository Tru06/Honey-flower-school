import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Building excellence in education since 2001</p>
      </div>

      <div className="container">
        <section className="mission">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At Honey Flower School, we are committed to providing a nurturing and stimulating 
                environment where every student can discover their potential and develop into 
                confident, compassionate, and capable individuals.
              </p>
            </div>
            <div className="mission-image">🌻</div>
          </div>
        </section>

        <section className="values">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>Striving for the highest standards in everything we do</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>Building character through honesty and ethical behavior</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Encouraging creativity and forward-thinking approaches</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>Fostering empathy and respect for all individuals</p>
            </div>
          </div>
        </section>

        <section className="contact-info">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <p>123 Education Lane<br/>Springfield, ST 12345</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>Main: (555) 123-4567<br/>Admissions: (555) 123-4568</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>info@honeyflowerschool.edu<br/>admissions@honeyflowerschool.edu</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🕐</div>
              <h3>Office Hours</h3>
              <p>Mon-Fri: 8:00 AM - 4:00 PM<br/>Sat: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
