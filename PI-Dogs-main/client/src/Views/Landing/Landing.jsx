import style from "./Landing.module.css"
import { useNavigate } from "react-router-dom";


const Landing = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home");
    }

    return (
        <div>
        <button onClick={handleLogin}>Henry Dogs</button>
        </div>
    )
};

export default Landing;