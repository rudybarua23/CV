export default function ResumePreview({ inputs }) {
  const info = inputs.personalInfo[0];

  const handlePrint = () => {
    window.print();
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="resume-container">
      <div className="resume-controls no-print">
        <div className="left-controls">
        <button onClick={handlePrint}>Print PDF</button>
        <p className="print-tip">📌 Tip: Enable "Print background graphics" in your print dialog for best results!</p>
        </div>
        <div className="right-controls">
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
      </div>

      <div className="resume-wrapper">
        <aside className="resume-sidebar">
          <div 
            className="profile-pic"
            style={{
                backgroundImage: info.profilepic ? `url(${info.profilepic})` : "none",
            }}
          />
          <h2>{info.firstname} {info.lastname}</h2>
          <p className="occupation">{info.occupation}</p>
          <div className="contact-info">
            <h3>Contact</h3>
            <p><strong>Address:</strong><br />{info.address}</p>
            <p><strong>Phone:</strong><br />{info.phone}</p>
            <p><strong>Email:</strong><br />{info.email}</p>
            <p><strong>LinkedIn:</strong><br />{info.linkedIn}</p>
            <p><strong>Portfolio:</strong><br />{info.portfolio}</p>
          </div>
        </aside>

        <main className="resume-main">
          <header className="resume-header">
            <h1>{info.firstname} <strong>{info.lastname}</strong></h1>
            <h2>{info.occupation}</h2>
            <p>{info.aboutme}</p>
          </header>

          <section className="resume-section">
            <h3 className="section-title">Employment</h3>
            <hr className="section-line" />
            {inputs.employment.map((job, i) => (
              <div key={i} className="resume-section-block">
                <div className="section-header">
                  <h4>{job.job}</h4>
                  <span className="date-range">{job.startDate} – {job.endDate}</span>
                </div>
                <p className="sub-info">{job.city} — {job.employer}</p>
                <p>{job.description}</p>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h3 className="section-title">Skills</h3>
            <ul className="skills-list">
              {inputs.skills.map((s, i) => <li key={i}>{s.skill}</li>)}
            </ul>
          </section>

          <section className="resume-section">
            <h3 className="section-title">Education</h3>
            <hr className="section-line" />
            {inputs.education.map((edu, i) => (
              <div key={i} className="resume-section-block">
                <div className="section-header">
                  <h4>{edu.degree}</h4>
                  <span className="date-range">{edu.startDate} – {edu.endDate}</span>
                </div>
                <p className="sub-info">{edu.city} — {edu.school}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}