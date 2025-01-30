import { useState } from "react";
import "./App.css";
import EducationForm from "./components/EducationForm.jsx";
import EmploymentForm from "./components/EmploymentForm.jsx";
import SkillsForm from "./components/SkillsForm.jsx";
import PersonalForm from "./components/PersonalForm.jsx";

export default function MainApp() {
  const [inputs, setInputs] = useState({
    personalInfo: [{ firstname: "", lastname: "", email: "", phone: "", occupation: "", address: "", linkedIn: "", portfolio: "", aboutme: "", profilepic: "" }],
    education: [{ school: "", degree: "", startDate: "", endDate: "", city: "", description: "" }],
    employment: [{ job: "", employer: "", startDate: "", endDate: "", city: "", description: "" }],
    skills: [{skill: ""}],
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
        <h2>Fill Out Your CV</h2>
        <PersonalForm inputs={inputs} handleChange={handleChange} />
        <EmploymentForm inputs={inputs} setInputs={setInputs} handleChange={handleChange} />
        <EducationForm inputs={inputs} setInputs={setInputs} handleChange={handleChange} />
        <SkillsForm inputs={inputs} setInputs={setInputs} handleChange={handleChange} />
      </div>

      {/* Right Side: CV Preview */}
      <div className="cv-container">
        <h2>CV Preview</h2>
        <div className="cv-content">
          <h1>Personal Details</h1>
            <p><strong>First Name:</strong> {inputs.personalInfo.firstname || "First Name"}</p>
            <p><strong>Last Name:</strong> {inputs.personalInfo.lastname || "Last Name"}</p>
            <p><strong>Email:</strong> {inputs.personalInfo.email || "example@email.com"}</p>
            <p><strong>Phone:</strong> {inputs.personalInfo.phone || "(123) 456-7890"}</p>
            <p><strong>Occupation:</strong> {inputs.personalInfo.occupation || "Your Job Title"}</p>
            <p><strong>Address:</strong> {inputs.personalInfo.address || "123 Your Street, Your City, Country"}</p>
            <p><strong>About Me:</strong> {inputs.personalInfo.about || "A short summary about yourself."}</p>
            <p><strong>Profile Picture URL:</strong> {inputs.personalInfo.profile || "Profile picture URL here."}</p>
          <h1>Employment History</h1>
          {inputs.employment.map((emp, index) => (
            <div key={index}>
              <p><strong>Job Role:</strong> {emp.job || "Your Job Role"}</p>
              <p><strong>Employer:</strong> {emp.employer || "Your Employer"}</p>
              <p><strong>Start Date:</strong> {emp.startDate || "Start Date"}</p>
              <p><strong>End Date:</strong> {emp.endDate || "End Date"}</p>
              <p><strong>City:</strong> {emp.city || "City of Work"}</p>
              <p><strong>Description:</strong> {emp.description || "Work description here."}</p>
            </div>
          ))}
          <h1>Education</h1>
          {inputs.education.map((edu, index) => (
            <div key={index}>
              <p><strong>School:</strong> {edu.school || "School Name"}</p>
              <p><strong>Degree:</strong> {edu.degree || "Degree"}</p>
              <p><strong>Start Date:</strong> {edu.start || "Start Date"}</p>
              <p><strong>End Date:</strong> {edu.end || "End Date"}</p>
              <p><strong>City:</strong> {edu.city || "City of Education"}</p>
              <p><strong>Description:</strong> {edu.description || "Description of education."}</p>
            </div>
          ))}
          <h1>Skills</h1>
          <ul>
          {inputs.skills.map((skill, index) => (
            <li key={index}>{skill.skill || "List your skills here."}</li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


