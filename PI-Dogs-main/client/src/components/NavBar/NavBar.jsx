import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
        return(
            <div className={style.container}>
                <Link to="/home">
                <div className={style.home}>
                    <p className={style.link}>HOME</p>
                    <img src="https://www.shininghouse.com/images/casita%20negro.png" height="30px"/>
                    </div>
                </Link>
                <Link to="/create"><p className={style.link}>CREATE A DOG</p></Link>
                <Link to="/">
                    <div className={style.exit}>
                    <p className={style.link}>EXIT</p>
                    <img src="https://th.bing.com/th/id/R.9f60094deb4bf9094b4305e26aced7b1?rik=zz7YVmlurdkElQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fexit-png-exit-icon-1600.png&ehk=gtfis9uvMgKSD8sbkW5f55mS3imF4VvTN%2fVrQr3bl%2bs%3d&risl=&pid=ImgRaw&r=0" height="40px"/>
                    </div>
                </Link>
            </div>
        )

};

export default NavBar;