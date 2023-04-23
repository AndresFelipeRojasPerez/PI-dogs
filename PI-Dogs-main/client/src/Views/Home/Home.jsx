import style from "./Home.module.css"
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getDogsByName } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {

    
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(getDogs())
    },[]);
    

    return (
        <>
            <h1>Esta es la vista del Home</h1>
            
            <CardsContainer/>
        </>
    )
};

export default Home; 