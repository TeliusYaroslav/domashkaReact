import { useForm } from "react-hook-form";
import "./LoginPage.css"
interface IForm {
	email: string;
	password: string;
}

export function LoginPage() {
	const { register, handleSubmit, formState, clearErrors} = useForm<IForm>({
		mode: 'onSubmit',

	})
	const onSubmit = (data: IForm) => {
		console.log(data)
	}

	return (
		<div className="logindiv">
			<form onSubmit={handleSubmit(onSubmit)} className="loginform">
                <h1 className="titell">Login</h1>
            <div className="infol">
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
							maxLength: {value: 50, message: "Length should be < 50"},
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