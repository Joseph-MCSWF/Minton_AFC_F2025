// Potential Example of SimpleForm.jsx

import { useForm } from "react-hook-form";

const SimpleForm = () => {
    // MAX for "More Info" and live counter derived from RHF's watch (no local state needed)
    const MAX_INFO = 30;

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            age: "",        // keep as string in the input; convert on submit with setValueAs (below)
            phone: "",      // normalized by user input pattern / constraints here
            moreInfo: ""    // limited to 30 chars; live remaining shown via watch()
        },
        mode: "onBlur"     // validate on blur by default; you can choose "onChange" if preferred
    });

    // watch values for derived UI like the remaining character counter
    const moreInfoValue = watch("moreInfo", "");
    const remaining = MAX_INFO - (moreInfoValue?.length || 0);

    // onSubmit: RHF provides validated data; age is converted to Number|null via setValueAs
    const onSubmit = (data) => {
        const payload = {
            age: data.age,           // number type or null
            phone: data.phone,       // "111-222-3333"
            moreInfo: data.moreInfo  // up to 30 chars
        };

        console.log("Submitted payload:", payload);

        // Optional: reset the form to defaults after successful submit
        // reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* AGE FIELD
      - type="number" with min=21 and max=99 enforces inclusive bounds
      - step=1 to disallow decimals via the UI
      - Keep as string in the input, but convert to Number on submit via setValueAs
      */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="age"><strong>Age (21–99)</strong></label><br />
                <input
                    id="age"
                    type="number"
                    min={21}
                    max={99}
                    step={1}
                    placeholder="Enter your age"
                    {...register("age", {
                        // Convert empty string to null; otherwise Number(value)
                        setValueAs: (v) => (v === "" ? null : Number(v)),
                        // Basic constraints mirrored by HTML attributes; RHF enforces them too
                        required: "Age is required",
                        min: { value: 21, message: "Age must be at least 21" },
                        max: { value: 99, message: "Age must be at most 99" },
                        validate: (v) =>
                            (v === null || Number.isInteger(v)) || "Age must be a whole number"
                    })}
                />
                <div id="ageHelp" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    Must be a whole number between 21 and 99.
                </div>
                {errors.age && (
                    <div style={{ fontSize: "0.9rem", color: "crimson" }}>
                        {errors.age.message}
                    </div>
                )}
            </div>

            {/* PHONE FIELD
      - Required
      - pattern enforces 111-222-3333
      - title provides a helpful reminder on the browser’s validation tooltip
      - inputMode and maxLength help guide user input
      */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="phone"><strong>Phone</strong></label><br />
                <input
                    id="phone"
                    type="text"
                    required
                    placeholder="111-222-3333"
                    maxLength={12} // 12 = 10 digits + 2 dashes
                    pattern="^\d{3}-\d{3}-\d{4}$"
                    title="Use the format 111-222-3333 (digits and dashes only)."
                    inputMode="numeric"
                    {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                            value: /^\d{3}-\d{3}-\d{4}$/,
                            message: "Use the format 111-222-3333"
                        }
                    })}
                />
                <div id="phoneHelp" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    Enter digits only; it will format as 111-222-3333. This field is required.
                </div>
                {errors.phone && (
                    <div style={{ fontSize: "0.9rem", color: "crimson" }}>
                        {errors.phone.message}
                    </div>
                )}
            </div>

            {/* MORE INFO FIELD
      - Textarea with ~4 lines (rows=4)
      - maxLength=30 enforced by HTML
      - Live character counter derived via watch()
      */}
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="moreInfo"><strong>More Info</strong></label><br />
                <textarea
                    id="moreInfo"
                    rows={4}
                    maxLength={MAX_INFO}
                    placeholder="Say something brief (max 30 chars)…"
                    {...register("moreInfo", {
                        maxLength: {
                            value: MAX_INFO,
                            message: `Must be ${MAX_INFO} characters or fewer`
                        }
                    })}
                ></textarea>
                <div id="infoHelp" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    Keep it short and clear. Max 30 characters.
                </div>
                <div id="infoCount" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    Remaining: {remaining}
                </div>
                {errors.moreInfo && (
                    <div style={{ fontSize: "0.9rem", color: "crimson" }}>
                        {errors.moreInfo.message}
                    </div>
                )}
            </div>


            {/* SUBMIT BUTTON */}
            <button type="submit">
                Submit
            </button>

            {/* OPTIONAL RESET BUTTON:
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
      */}
        </form>
    );
};

export default SimpleForm;