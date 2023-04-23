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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfZRnoetA9qveB4gKR-HXoxNzqPb8RwWDuw&usqp=CAU"/>
                </div>
             <button onClick={handleLogin}>Henry Dogs</button>
            </div>

            <span className={style.botton_container}>
            </span>

        </div>
    )
};

export default Landing;