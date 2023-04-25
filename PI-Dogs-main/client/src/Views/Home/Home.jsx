import style from "./Home.module.css"
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getDogsByName } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Home = () => {

    
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(getDogs())
    },[]);
    

    return (
        <>
        <Link to='/'>
        <div className={style.container_title}>
        <span className={style.blackText}>World</span>
        <span className={style.yellowText}>Dogs</span>
        </div>
        </Link>
            <CardsContainer/>
        </>
    )
};

export default Home; 