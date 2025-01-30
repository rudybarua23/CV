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
                    <div key={index}>
                        <label>
                            School:
                            <input
                                type="text"
                                name="school"
                                value={edu.school}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </label>
                        <label>
                            Degree:
                            <input
                                type="text"
                                name="degree"
                                value={edu.degree}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </label>
                        <label>
                            Start Date:
                            <input
                                type="text"
                                name="startDate"
                                value={edu.startDate}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </label>
                        <label>
                            End Date:
                            <input
                                type="text"
                                name="endDate"
                                value={edu.endDate}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </label>
                        <label>
                            Description:
                            <input
                                type="text"
                                name="description"
                                value={edu.description}
                                onChange={(e) => handleChange("education", index, e)}
                            />
                        </label>
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