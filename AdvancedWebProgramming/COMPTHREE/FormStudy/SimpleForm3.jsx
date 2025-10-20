import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SimpleForm = () => {
    // MAX for "More Info" and live counter derived from RHF's watch
    const MAX_INFO = 30;

    // Yup schema centralizes all validation (types, bounds, patterns, messages)
    const schema = yup.object({
        age: yup
            .number()
            .transform((value, originalValue) => {
                if (originalValue === "" || originalValue == null) return null;
                const n = Number(originalValue);
                return Number.isNaN(n) ? NaN : n;
            })
            .nullable()
            .typeError("Age is required")
            .integer("Age must be a whole number")
            .min(21, "Age must be at least 21")
            .max(99, "Age must be at most 99")
            .required("Age is required"),
        phone: yup
            .string()
            .required("Phone is required")
            .matches(/^\d{3}-\d{3}-\d{4}$/, "Use the format 111-222-3333"),
        moreInfo: yup
            .string()
            .max(MAX_INFO, `Must be ${MAX_INFO} characters or fewer`)
            .default(""),
    });

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            age: "",
            phone: "",
            moreInfo: "",
        },
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const moreInfoValue = watch("moreInfo", "");
    const remaining = MAX_INFO - (moreInfoValue?.length || 0);

    const onSubmit = (data) => {
        const payload = {
            age: data.age,
            phone: data.phone,
            moreInfo: data.moreInfo,
        };
        console.log("Submitted payload:", payload);
        // reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="age"><strong>Age (21–99)</strong></label><br />
                <input id="age" type="number" min={21} max={99} step={1} placeholder="Enter your age" {...register("age")} />
                <div id="ageHelp" style={{ fontSize:"0.9rem", opacity:0.8 }}>Must be a whole number between 21 and 99.</div>
                {errors.age && <div style={{ fontSize:"0.9rem", color:"crimson" }}>{errors.age.message}</div>}
            </div>

            <div style={{ marginBottom:"1rem" }}>
                <label htmlFor="phone"><strong>Phone</strong></label><br />
                <input id="phone" type="text" placeholder="111-222-3333" maxLength={12} title="Use the format 111-222-3333" inputMode="numeric" {...register("phone")} />
                <div id="phoneHelp" style={{ fontSize:"0.9rem", opacity:0.8 }}>Enter digits only; it should read 111-222-3333. This field is required.</div>
                {errors.phone && <div style={{ fontSize:"0.9rem", color:"crimson" }}>{errors.phone.message}</div>}
            </div>

            <div style={{ marginBottom:"1rem" }}>
                <label htmlFor="moreInfo"><strong>More Info</strong></label><br />
                <textarea id="moreInfo" rows={4} maxLength={MAX_INFO} placeholder={`Say something brief (max ${MAX_INFO} chars)…`} {...register("moreInfo")}></textarea>
                <div id="infoHelp" style={{ fontSize:"0.9rem", opacity:0.8 }}>Keep it short and clear. Max {MAX_INFO} characters.</div>
                <div id="infoCount" style={{ fontSize:"0.9rem", opacity:0.8 }}>Remaining: {remaining}</div>
                {errors.moreInfo && <div style={{ fontSize:"0.9rem", color:"crimson" }}>{errors.moreInfo.message}</div>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default SimpleForm;