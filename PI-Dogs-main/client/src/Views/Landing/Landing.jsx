import style from "./Landing.module.css"
import { useNavigate } from "react-router-dom";


const Landing = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home");
    }

    return (
        <div className={style.main_container}>

            <span className={style.top_container}>
            </span>
    
            <div className={style.mid_container}>
                <div className={style.left_container}>
                </div>
                <button className={style.btn} onClick={handleLogin}>
                 <span className={style.blackText}>World</span>
                  <span className={style.yellowText}>Dogs</span>
                </button>
            </div>

            <span className={style.botton_container}>
            </span>

        </div>
    )
};

export default Landing;