export const PostApiRegister = () => {
    const register = async (data) => {
        try {
            const response = await client.post("/user/signup", data ,{
                email: user.email,
                password: user.password
            })
            localStorage.setItem("token", response.data.jwt);
        } catch (error) {
            console.log(error);

        }
    }

}