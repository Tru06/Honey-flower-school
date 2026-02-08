import React from 'react';
import './Departments.css';

function Departments() {
  const departments = [
    {
      icon: '📚',
      name: 'English & Literature',
      description: 'Developing language skills, creative writing, and literary analysis',
      head: 'Dr. Sarah Johnson',
      courses: ['English Language', 'Literature', 'Creative Writing', 'Public Speaking']
    },
    {
      icon: '🔬',
      name: 'Science',
      description: 'Hands-on learning in Physics, Chemistry, and Biology',
      head: 'Prof. Michael Chen',
      courses: ['Physics', 'Chemistry', 'Biology', 'Environmental Science']
    },
    {
      icon: '🔢',
      name: 'Mathematics',
      description: 'Building strong analytical and problem-solving skills',
      head: 'Dr. Emily Rodriguez',
      courses: ['Algebra', 'Geometry', 'Calculus', 'Statistics']
    },
    {
      icon: '🌍',
      name: 'Social Studies',
      description: 'Understanding history, geography, and social sciences',
      head: 'Mr. David Williams',
      courses: ['History', 'Geography', 'Civics', 'Economics']
    },
    {
      icon: '💻',
      name: 'Computer Science',
      description: 'Modern technology and programming skills for the digital age',
      head: 'Ms. Lisa Anderson',
      courses: ['Programming', 'Web Development', 'Robotics', 'Digital Literacy']
    },
    {
      icon: '🎨',
      name: 'Arts & Music',
      description: 'Nurturing creativity through visual arts and music',
      head: 'Mrs. Jennifer Martinez',
      courses: ['Drawing & Painting', 'Music Theory', 'Choir', 'Drama']
    },
    {
      icon: '⚽',
      name: 'Physical Education',
      description: 'Promoting fitness, teamwork, and sportsmanship',
      head: 'Coach Robert Taylor',
      courses: ['Athletics', 'Team Sports', 'Yoga', 'Swimming']
    },
    {
      icon: '🌐',
      name: 'Foreign Languages',
      description: 'Learning global languages and cultural awareness',
      head: 'Ms. Maria Garcia',
      courses: ['Spanish', 'French', 'Mandarin', 'German']
    }
  ];

  return (
    <div className="departments">
      <div className="page-header">
        <h1>Our Departments</h1>
        <p>Comprehensive education across diverse disciplines</p>
      </div>

      <div className="container">
        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div key={index} className="department-card">
              <div className="dept-icon">{dept.icon}</div>
              <h2>{dept.name}</h2>
              <p className="dept-description">{dept.description}</p>
              <div className="dept-head">
                <strong>Department Head:</strong> {dept.head}
              </div>
              <div className="courses">
                <strong>Courses Offered:</strong>
                <ul>
                  {dept.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;
