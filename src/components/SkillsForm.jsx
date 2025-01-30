export default function SkillsForm({inputs, setInputs, handleChange}) {
    function addSkills() {
        setInputs((prev) => ({
            ...prev,
            skills: [
                ...prev.skills,
                { skill: "" },
            ],
        }));
    }

    function removeSkills(index) {
        setInputs((prev) => ({
          ...prev,
          skills: prev.skills.filter((_, i) => i !== index), // keep every item except the one that matches the index using filter to return a new array to keep immutability
        }));
    }


    return (
        <div>
            <h2>Skills</h2>
            {inputs.skills.map((skills,index) => {
                return (
                    <div key={index}>
                        <label>
                            Skill:
                            <input
                                type="text"
                                name="skill"
                                value={skills.skill}
                                onChange={(e) => handleChange("skills", index, e)}
                            />
                        </label>
                        <button type="button" onClick={() => removeSkills(index)}>
                            Remove
                        </button>
                    </div>
                )
            })}
            <button type="button" onClick={addSkills}>
                Add Skill
            </button>
        </div>
    );
}