import LoginForm from "./LoginForm"
import { Login ,Loginholder} from "../style"


const LoginPage = (props) => {
    return (
        <Loginholder>
            <LoginForm />
            <Login>
                Don't have an account? <a href="/register">Register</a>.
            </Login>
        </Loginholder>
    )
}

export default LoginPage;