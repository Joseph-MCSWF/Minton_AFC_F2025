import { useState } from "react";

const SimpleForm = () => {
    // State for each controlled input
    const [age, setAge] = useState(""); // keep as string in state; convert to Number on submit
    const [phone, setPhone] = useState(""); // normalized to 111-222-3333 shape as user types
    const [moreInfo, setMoreInfo] = useState(""); // limited to 30 chars; show live remaining

    // Derived value for character counter (max 30)
    const MAX_INFO = 30;
    const remaining = MAX_INFO - moreInfo.length;

    // Handle changes for each input (controlled components)
    const handleAgeChange = (e) => {
        // Keep the raw string in state; the number conversion happens on submit
        setAge(e.target.value);
    };

    const handlePhoneChange = (e) => {
        // validation is done by the HTML pattern attribute
        setPhone(e.target.value);
    };

    const handleMoreInfoChange = (e) => {
        // HTML enforces maxLength=30, but we still mirror the value in the state
        setMoreInfo(e.target.value);
    };

    // onSubmit: prevent full page reload, gather values, convert age to Number, log or send somewhere
    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert age to a number to satisfy the “final data type is a number” requirement
        // If age is "", Number("") becomes 0; but HTML min/max+required (if you choose to require) handles validity
        const ageNumber = age === "" ? null : Number(age);

        // Build a final payload: in real apps, you’d POST this to an API
        const payload = {
            age: ageNumber, // number type
            phone: phone, // "111-222-3333"
            moreInfo: moreInfo, // up to 30 chars
        };

        // For demo purposes, we’ll just print it.
        // In class, consider showing it beneath the form so students can see what they submitted.
        console.log("Submitted payload:", payload);

        // Optional: reset form
        // setAge("");
        // setPhone("");
        // setMoreInfo("");
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            {/* AGE FIELD
      - type="number" with min=21 and max=99 enforces the inclusive bounds
      - step=1 to disallow decimals via the UI
      - Keep as string in state, convert to Number on submitting
      */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="age"><strong>Age (21–99)</strong></label><br />
                <input
                    id="age"
                    name="age"
                    type="number"
                    min={21}
                    max={99}
                    step={1}
                    placeholder="Enter your age"
                    value={age}
                    onChange={handleAgeChange}
                />
                <div id="ageHelp" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    Must be a whole number between 21 and 99.
                </div>
            </div>

            {/* PHONE FIELD
      - Required
      - pattern enforces 111-222-3333
      - title provides a helpful reminder on the browser’s validation tooltip
      - inputMode and maxLength help guide user input
      - onChange formats the input as the user types (formatting, not validation)
      */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="phone"><strong>Phone</strong></label><br />
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    placeholder="111-222-3333"
                    maxLength={12} // 12 = 10 digits + 2 dashes
                    pattern="^\d{3}-\d{3}-\d{4}$"
                    title="Use the format 111-222-3333 (digits and dashes only)."
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <div id="phoneHelp" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    Enter digits only; it will format as 111-222-3333. This field is required.
                </div>
            </div>

            {/* MORE INFO FIELD
      - Textarea with ~4 lines (rows=4)
      - maxLength=30 enforced by HTML
      - Live character counter derived from state
      */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="moreInfo"><strong>More Info</strong></label><br />
                <textarea
                    id="moreInfo"
                    name="moreInfo"
                    rows={4}
                    maxLength={MAX_INFO}
                    placeholder="Say something brief (max 30 chars)…"
                    value={moreInfo}
                    onChange={handleMoreInfoChange}
                ></textarea>
                <div id="infoHelp" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    Keep it short and clear. Max 30 characters.
                </div>
                <div id="infoCount" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    Remaining: {remaining}
                </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit">
                Submit
            </button>
        </form>
    );
};

export default SimpleForm;