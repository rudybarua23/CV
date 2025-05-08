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
                    <div key={index} className="employmentBox">
                        <div className="employmentRow1">
                        <div className="employmentGroup">
                        <label htmlFor={`job-${index}`}>Job:</label>
                            <input
                                id={`job-${index}`}
                                type="text"
                                name="job"
                                value={emp.job}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </div>
                        <div className="employmentGroup">
                        <label htmlFor={`employer-${index}`}>Employer:</label>
                            <input
                                id={`employer-${index}`}
                                type="text"
                                name="employer"
                                value={emp.employer}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </div>
                        </div>
                        <div className="employmentRow2">
                        <div className="employmentGroup">
                        <label htmlFor={`startDate-${index}`}>Start Date:</label> 
                            <input
                                id={`startDate-${index}`}
                                type="text"
                                name="startDate"
                                value={emp.startDate}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </div>
                        <div className="employmentGroup">
                        <label htmlFor={`endDate-${index}`}>End Date:</label>
                            <input
                                id={`endDate-${index}`}
                                type="text"
                                name="endDate"
                                value={emp.endDate}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </div>
                        <div className="employmentGroup">
                        <label htmlFor={`city-${index}`}>City:</label>
                            <input
                                id={`city-${index}`}
                                type="text"
                                name="city"
                                value={emp.city}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </div>
                        </div>
                        <div className="employmentRow3">
                        <div className="employmentGroup">
                        <label htmlFor={`description-${index}`}>Description:</label>
                            <textarea
                                id={`description-${index}`}
                                type="text"
                                name="description"
                                value={emp.description}
                                onChange={(e) => handleChange("employment", index, e)}
                            />
                        </div>
                        </div>
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