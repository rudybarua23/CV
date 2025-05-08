import { useState } from "react";
import "./App.css";
import EducationForm from "./components/EducationForm.jsx";
import EmploymentForm from "./components/EmploymentForm.jsx";
import SkillsForm from "./components/SkillsForm.jsx";
import PersonalForm from "./components/PersonalForm.jsx";
import Preview from "./components/Preview.jsx";

export default function MainApp() {
  const [inputs, setInputs] = useState({
    personalInfo: [{ firstname: "John",
    lastname: "Doe",
    email: "john@example.com",
    phone: "555-555-5555",
    address: "123 Main St",
    occupation: "Frontend Developer",
    linkedIn: "linkedin.com/in/johndoe",
    portfolio: "johndoe.dev",
    aboutme: "Creative developer who loves building elegant UIs.",
    profilepic: "", }],
    education: [{ degree: "B.Sc. in Computer Science",
    school: "UC Berkeley",
    city: "Berkeley, CA",
    startDate: "2017",
    endDate: "2021",
    description: "Studied algorithms, data structures, and full-stack web dev.", }],
    employment: [{ job: "Frontend Developer",
    employer: "TechCorp",
    city: "San Francisco",
    startDate: "2021",
    endDate: "Present",
    description: "Developed responsive apps using React, Tailwind, and APIs.", }],
    skills: [{ skill: "React" },
    { skill: "JavaScript" },
    { skill: "HTML/CSS" },
    { skill: "Tailwind CSS" },],
  }); // Centralized state

  const handleChange = (section, index, event) => {
    const { name, value } = event.target; // Extract field name and value from the event
    setInputs((prev) => {
        const updatedSection = [...prev[section]]; // Copy the relevant section (e.g., education array)
        updatedSection[index][name] = value; // Update the specific field of the specific entry
        return { ...prev, [section]: updatedSection }; // Return updated state
    });
  };


  return (
    <div className="app-container">
      {/* Left Side: Form */}
      <div className="form-container">
        <h2 className="top">Resume Builder</h2>
        <div className="form-section"><PersonalForm inputs={inputs} handleChange={handleChange} /></div>
        <div className="form-section"><EmploymentForm inputs={inputs} setInputs={setInputs} handleChange={handleChange} /></div>
        <div className="form-section"><EducationForm inputs={inputs} setInputs={setInputs} handleChange={handleChange} /></div>
        <div className="form-section"><SkillsForm inputs={inputs} setInputs={setInputs} handleChange={handleChange} /></div>
      </div>

      {/* Right Side: CV Preview */}
      <Preview inputs={inputs} />
    </div>
  );
}


