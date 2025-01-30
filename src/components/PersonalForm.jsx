export default function PersonalForm({inputs, handleChange}) {
    return (
        <div>
            <h2>Personal Info</h2>
            {inputs.personalInfo.map((personal,index) => {
            return (
            <div key={index}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstname"
                        value={personal.first}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastname"
                        value={personal.last}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={personal.email}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={personal.phone}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={personal.address}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </label>
                <label>
                Occupation:
                    <input
                        type="text"
                        name="occupation"
                        value={personal.occupation}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </label>
                <label>
                    LinkedIn:
                    <input
                        type="text"
                        name="linkedIn"
                        value={personal.linkedIn}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </label>
                <label>
                    Portfolio:
                    <input
                        type="text"
                        name="portfolio"
                        value={personal.portfolio}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </label>
                <label>
                    About:
                    <input
                        type="text"
                        name="aboutme"
                        value={personal.aboutme}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </label>
                <label>
                    Profile Picture:
                    <input
                        type="text"
                        name="profilepic"
                        value={personal.profilepic}
                        onChange={(e) => handleChange("personalInfo",index, e)}
                    />
                </label>
            </div>
            )
            })}
        </div>
    );
}
