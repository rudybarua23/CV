export default function PersonalForm({inputs, handleChange}) {
    return (
        <div>
            <h2>Personal Info</h2>
            {inputs.personalInfo.map((personal,index) => {
            return (
            <div key={index} className="personalBox">
                <div className="personalGrid">
                <div className="personalGroup">
                <label htmlFor="firstname">First Name:</label>
                    <input 
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={personal.firstname}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </div>
                <div className="personalGroup">
                <label htmlFor="lastname">Last Name:</label>
                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={personal.lastname}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </div>
                <div className="personalGroup">
                <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        value={personal.email}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </div>
                <div className="personalGroup">
                <label htmlFor="phone">Phone Number:</label>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={personal.phone}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </div>
                <div className="personalGroup">
                <label htmlFor="address">Address:</label>
                    <input
                        id="address"
                        type="text"
                        name="address"
                        value={personal.address}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </div>
                <div className="personalGroup">
                <label htmlFor="occupation">Occupation:</label>
                    <input
                        id="occupation"
                        type="text"
                        name="occupation"
                        value={personal.occupation}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </div>
                <div className="personalGroup">
                <label htmlFor="linkedIn">LinkedIn:</label>
                    <input
                        id="linkedIn"
                        type="text"
                        name="linkedIn"
                        value={personal.linkedIn}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </div>
                <div className="personalGroup">
                <label htmlFor="portfolio">Portfolio:</label>
                    <input
                        id="portfolio"
                        type="text"
                        name="portfolio"
                        value={personal.portfolio}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </div>
                </div>
                <div className="personalGroup">
                <label htmlFor="aboutme">About Me:</label>
                    <input
                        id="aboutme"
                        type="text"
                        name="aboutme"
                        value={personal.aboutme}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </div>
                <div className="personalGroup">
                <label htmlFor="profilepic">Profile Picture:</label>
                    <input
                        id="profilepic"
                        type="file"
                        style={{ display: "none" }}
                        accept="image/+"         // Only accept image file types (jpg, png, etc.)
                        onChange={(e) => {          // Trigger this when user selects a file
                            const file = e.target.files[0];  // Get the first file from the file input
                            if (file) {               // Check that a file was actually selected
                              const reader = new FileReader();  // Create a new FileReader instance
                              reader.onload = (event) => {      // When file has finished loading:
                                // Call the shared `handleChange` function to update state
                                handleChange("personalInfo", index, {
                                  target: {
                                    name: "profilepic",              // Name of the field in state
                                    value: event.target.result,      // Base64 image string from FileReader
                                  },
                                });
                              };
                              reader.readAsDataURL(file);  // Start reading the file and convert it to base64
                            }
                        }}
                    />
                    <button
                    type="button"
                    className="upload-btn"
                    onClick={() => document.getElementById(`profilepic`).click()}
                    >
                    Upload Photo
                    </button>
                </div>
            </div>
            )
            })}
        </div>
    );
}
