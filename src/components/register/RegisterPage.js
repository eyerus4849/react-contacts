import RegisterForm from './RegisterForm';
import { Login ,Loginholder} from "../style"
const RegisterPage = (props) => {
    return (
        <Loginholder>
            <RegisterForm />
            <Login>
                Already have an account? <a href="/login">Login</a>.
            </Login>
        </Loginholder>
    )
}

export default RegisterPage;