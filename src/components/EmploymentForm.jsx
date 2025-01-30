export default function EmploymentForm({inputs, setInputs, handleChange}) {
    function addEmployment() {
        setInputs((prev) => ({
          ...prev,
          employment: [
            ...prev.employment,
            { job: "", employer: "", startDate: "", endDate: "", city: "", description: "" },
          ],
        }));
    }

    function removeEmployment(index) {
        setInputs((prev) => ({
          ...prev,
          employment: prev.employment.filter((_, i) => i !== index), // keep every item except the one that matches the index using filter to return a new array to keep immutability
        }));
    }


    return (
        <div>
            <h2>Employment</h2>
            {inputs.employment.map((emp,index) => {
                return (
                    <div key={index}>
                        <label>
                            Job:
                            <input
                                type="text"
                                name="job"
                                value={emp.job}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </label>
                        <label>
                            Employer:
                            <input
                                type="text"
                                name="employer"
                                value={emp.employer}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </label>
                        <label>
                            Start Date:
                            <input
                                type="text"
                                name="startDate"
                                value={emp.startDate}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </label>
                        <label>
                            End Date:
                            <input
                                type="text"
                                name="endDate"
                                value={emp.endDate}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </label>
                        <label>
                            City:
                            <input
                                type="text"
                                name="city"
                                value={emp.city}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </label>
                        <label>
                            Description:
                            <input
                                type="text"
                                name="description"
                                value={emp.description}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </label>
                        <button type="button" onClick={() => removeEmployment(index)}>
                            Remove
                        </button>
                    </div>
                )
            })}
            <button type="button" onClick={addEmployment}>
                Add Employment
            </button>
        </div>
    );
}