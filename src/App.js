 

import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const reviews = [
     
    {
      name: "JECRC INNOV8",
      text: "Successfully completed hackathon with strong technical execution and innovation."
    },
    {
      name: "CROCO-CODE",
      text: "Successfully completed the internship with strong technical execution and innovation. A web developer with a passion for creating engaging user experiences."
    }
  ];

  const projects = [
    {
      name: "Leave Management System",
      link: "https://learndevprojects.vercel.app/"
    },
    {
      name: "Company Page",
      link: "https://polite-gumption-6064f6.netlify.app/"
    },
    {
      name: "Social Wellness Hub",
      link: "https://vermillion-klepon-da02f9.netlify.app/"
    },
    {
      name: "Doctor Appointment Website",
      link: "https://polite-gumption-6064f6.netlify.app/"
    },
    {
      name: "Iida-Webpage",
      link: "https://polite-gumption-6064f6.netlify.app/"
    },
    {
      name: "Vista-Webpage",
      link: "https://69f3b9a009d82cdd9e073b4d--lucent-platypus-71c3a3.netlify.app/"
    }
  ];

  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Umang Jain
        </motion.h1>
        <p>MERN Stack Developer | AI & Data Science Student</p>
        <div className="contact-info">
          <span>📞 +91 6375331059</span>
          <span>📧 umangs1718@gmail.com</span>
          <span>📍 Jaipur, Rajasthan</span>
        </div>
      </section>

      {/* PROFILE SUMMARY */}
      <section className="section">
        <h2>Profile Summary</h2>
        <p>
          Enthusiastic entry-level developer eager to transition into MERN stack development. Skilled in frontend and backend technologies with strong analytical and problem-solving abilities.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="card">HTML, CSS, JavaScript</div>
          <div className="card">React.js</div>
          <div className="card">Node.js, MySQL</div>
          <div className="card">Git & GitHub</div>
          <div className="card">Canva</div>
          <div className="card">Critical Thinking</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE REVIEWS */}
      <section className="reviews-section">
        <h2>Live Reviews</h2>
        <div className="reviews-container">
          <div className="reviews-track">
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="review-card">
                <h3>{review.name}</h3>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <h2>Education</h2>
        <div className="card">
          <p>B.Tech in AI & Data Science (2024-2028)</p>
          <p>JECRC University, Jaipur</p>
          <p>Class 12th </p>
          <p>Class 10th </p>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Umang Jain | Built By Umang Jain
      </footer>
    </div>
  );
}

export default App;

 
