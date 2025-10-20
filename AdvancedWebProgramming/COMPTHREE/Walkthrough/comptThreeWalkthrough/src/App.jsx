import { useForm } from "react-hook-form";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const userSchema = object({
    fname: string()
        .required("Please enter first name.")
        .max(3, "Must be less than 3 characters!"),
    age: number()
        .min(21, "You are not old enough!!!!")
        .max(99, "You are too old!!")
});

const initialState = { fname: "", age: 0 };

export default function App() {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });


    const handleChange = (event) => {
        setValue(event.target.name, event.target.value);
    };


    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name:
                <input type="text"{...register("fname")} name="fname" onChange={handleChange}
                    aria-invalid={errors.fname ? "true" : "false"} aria-describedby="fname-error"/>
            </label>{errors.fname && (<span id="fname-error" style={{ color: "red" }}>{errors.fname.message}</span>)}
            <label>Age:
                <input type="number" min={21}{...register("age")} name="age" onChange={handleChange}
                    aria-invalid={errors.age ? "true" : "false"} aria-describedby="age-error"/>
            </label>{errors.age && (<span id="age-error" style={{ color: "red" }}>{errors.age.message}</span>)}
            <button type="submit">Submit</button>
        </form>
    );
}
