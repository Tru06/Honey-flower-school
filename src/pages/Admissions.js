import React from 'react';
import { Link } from 'react-router-dom';
import './Admissions.css';

function Admissions() {
  return (
    <div className="admissions">
      <div className="page-header">
        <h1>Admissions</h1>
        <p>Join our community of learners and achievers</p>
      </div>

      <div className="container">
        <section className="admission-process">
          <h2 className="section-title">Admission Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Submit Application</h3>
              <p>Fill out the online application form with required documents</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Entrance Test</h3>
              <p>Attend the entrance examination for your grade level</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Interview</h3>
              <p>Parent and student interview with our admission team</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Enrollment</h3>
              <p>Complete enrollment formalities and fee payment</p>
            </div>
          </div>
        </section>

        <section className="requirements">
          <h2 className="section-title">Requirements</h2>
          <div className="requirements-grid">
            <div className="req-card">
              <h3>📄 Documents Required</h3>
              <ul>
                <li>Birth Certificate</li>
                <li>Previous School Records</li>
                <li>Transfer Certificate (if applicable)</li>
                <li>Medical Records & Immunization</li>
                <li>Passport Size Photos (4)</li>
                <li>Proof of Residence</li>
              </ul>
            </div>
            <div className="req-card">
              <h3>📅 Important Dates 2026</h3>
              <ul>
                <li><strong>Application Opens:</strong> January 15</li>
                <li><strong>Application Deadline:</strong> March 31</li>
                <li><strong>Entrance Test:</strong> April 15-20</li>
                <li><strong>Results Announced:</strong> May 1</li>
                <li><strong>Admission Confirmation:</strong> May 15</li>
                <li><strong>Academic Year Begins:</strong> August 20</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="fee-structure">
          <h2 className="section-title">Fee Structure</h2>
          <div className="fee-table">
            <div className="fee-row fee-header">
              <div>Grade Level</div>
              <div>Annual Tuition</div>
              <div>Registration Fee</div>
            </div>
            <div className="fee-row">
              <div>Kindergarten (K1-K2)</div>
              <div>$8,500</div>
              <div>$500</div>
            </div>
            <div className="fee-row">
              <div>Primary (Grades 1-5)</div>
              <div>$10,000</div>
              <div>$500</div>
            </div>
            <div className="fee-row">
              <div>Middle School (Grades 6-8)</div>
              <div>$12,000</div>
              <div>$500</div>
            </div>
            <div className="fee-row">
              <div>High School (Grades 9-12)</div>
              <div>$14,000</div>
              <div>$500</div>
            </div>
          </div>
          <p className="fee-note">* Scholarships and financial aid available for eligible students</p>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <h2>Ready to Apply?</h2>
            <p>Start your journey with Honey Flower School today</p>
            <Link to="/signup" className="btn btn-primary">Apply Now</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Admissions;
