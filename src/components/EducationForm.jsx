export default function EducationForm({inputs, setInputs, handleChange}) {
    function addEducation() {
        setInputs((prev) => ({
          ...prev,
          education: [
            ...prev.education,
            { school: "", degree: "", startDate: "", endDate: "", city: "", description: "" },
          ],
        }));
    }

    function removeEducation(index) {
        setInputs((prev) => ({
          ...prev,
          education: prev.education.filter((_, i) => i !== index), // keep every item except the one that matches the index using filter to return a new array to keep immutability
        }));
    }


    return (
        <div>
            <h2>Education</h2>
            {inputs.education.map((edu,index) => {
                return (
                    <div key={index} className="educationBox">
                        <div className="educationRow1">
                        <div className="educationGroup">
                        <label htmlFor={`school-${index}`}>School:</label>
                            <input
                                id={`school-${index}`}
                                type="text"
                                name="school"
                                value={edu.school}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </div>
                        <div className="educationGroup">
                        <label htmlFor={`degree-${index}`}>Degree:</label>
                            <input
                                id={`degree-${index}`}
                                type="text"
                                name="degree"
                                value={edu.degree}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </div>
                        </div>
                        <div className="educationRow2">
                        <div className="educationGroup">
                        <label htmlFor={`startDate-edu-${index}`}>Start Date:</label>
                            <input
                                id={`startDate-edu-${index}`}
                                type="text"
                                name="startDate"
                                value={edu.startDate}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </div>
                        <div className="educationGroup">
                        <label htmlFor={`endDate-edu-${index}`}>End Date:</label>
                            <input
                                id={`endDate-edu-${index}`}
                                type="text"
                                name="endDate"
                                value={edu.endDate}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </div>
                        <div className="educationGroup">
                        <label htmlFor={`city-edu-${index}`}>City:</label>
                            <input
                                id={`city-edu-${index}`}
                                type="text"
                                name="city"
                                value={edu.city}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </div>
                        </div>
                        <div className="educationRow3">
                        <div className="educationGroup">
                        <label htmlFor={`description-edu-${index}`}>Description:</label>
                            <textarea
                                id={`description-edu-${index}`}
                                type="text"
                                name="description"
                                value={edu.description}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </div>
                        </div>
                        <button type="button" onClick={() => removeEducation(index)}>
                            Remove
                        </button>
                    </div>
                )
            })}
            <button type="button" onClick={addEducation}>
                Add Education
            </button>
        </div>
    );
}