import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupComponent = () => {
    conste[srverError, setServerError] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setServerError("");

        try {
            const response = await client.post("/user/signup", data);
            localStorage.setItem("token", response.data.jwt);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            navigate("/dashboard");
        } catch (error) {
            setServerError(error.response?.data?.message || "Something went wrong");
        }
    };

    const PostApiRegister = async (data) => {
        try {
            const response = await client.post("/user/signup", {
                email: user.email,
                password: user.password
            })
            localStorage.setItem("token", response.data.jwt);
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            {serverError && <p>{serverError}</p>}
        </div>
    );
};

export default SignupComponent;