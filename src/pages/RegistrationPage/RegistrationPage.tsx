import { useForm } from "react-hook-form";
import "./RegistrationPage.css"
interface IFormRegister {
    username:string;
    email: string;
    password: string;
}

export function RegistrationPage() {
    const { register, handleSubmit, formState, clearErrors} = useForm<IFormRegister>({
        mode: 'onSubmit',

    })
    const onSubmit = (data: IFormRegister) => {
        console.log(data)
    }

    return (
        <div className="registrationdiv">
            <form onSubmit={handleSubmit(onSubmit)} className="registrationform">
                <h1 className="titelr">Registration</h1>
            <div className="info">
                <label>
                    Username:
                    <input
                        type="text"
                        {...register("username", {
                            required: {value: true, message: "Field is required"},
                            minLength: {value: 2, message: "Length should be > 2"},
                            maxLength: {value: 15, message: "Length should be < 15"},
                        })}
                        onFocus={() => {clearErrors("username")}}
                    />
                    
                <p>{formState.errors.username?.message}</p>
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        {...register("email", {
                            required: {value: true, message: "Field is required"},
                            minLength: {value: 7, message: "Length should be > 7"},
                            maxLength: {value: 50, message: "Length should be < 50"},
                        })}
                        onFocus={() => {clearErrors("email")}}
                    />
                <p>{formState.errors.email?.message}</p>
                </label>
                <label>
                    Password:<input
                        type="password"
                        {...register("password", {
                            required: {value: true, message: "Field is required"},
                            minLength: {value: 7, message: "Length should be > 7"},
                            maxLength: {value: 20, message: "Length should be < 20"},
                        })}
                    />
                    <p>{formState.errors.password?.message}</p>
                </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}