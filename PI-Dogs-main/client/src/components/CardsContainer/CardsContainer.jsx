import style from "./CardsContainer.module.css"
import axios from "axios";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getDogsByName } from "../../redux/actions";


const CardsContainer = () => {

    
    const dispatch = useDispatch()
    const buttons = [];
    let message = 'Loading...'
    let dogs = useSelector(state => state.dogs);
    
    const [ page, setPage ] = useState(0);
    const [ origin, setOrigin ] = useState("");
    const [alfabet, setAlfabet] = useState("");
    const [ temperaments, setTemperaments] = useState([]);
    const [ temperamentSelected, setTemperamentSelected] = useState("");

    useEffect (() => {
        axios.get("http://localhost:3001/temperaments").then((response) => {
            setTemperaments(response.data.temperaments)
        });
    }, []);
    
    const onSearch = async (name) => {
        await dispatch(getDogsByName (name))
        setPage(0);
    };

    const handlePage = (event) => {
        setPage(event.target.value*8);
    };
    
    const handlePagePrev = () => {
        setPage(page - 8)
    };

    const handlePageNext = () => {
        setPage(page + 8)
    };

    const handleFilterByOrigin = (event) => {
        setOrigin(event.target.value)
    };

    const handleFilterByAlfabet = (event) => {
        setAlfabet(event.target.value)
    };

    const handleFilterByTemperament = (event) => {
        setTemperamentSelected(event.target.value);
    };


    for (let i = 1; i <= Math.ceil(dogs.length/8); i++){
        buttons.push(i)
    }


    if (origin === "ApiDogs") {
        dogs = dogs.filter((dog) => {
            return dog.created === false
        })
    };

    if (origin === "BDD") {
        dogs = dogs.filter((dog) => {
            return dog.created === true
        })
    };

    if (origin === "all") {
        setOrigin("");
        // if(!temperamentSelected.length)setTemperamentSelected('');
    };


    if (alfabet === "A-Z") {
        dogs.sort((x,y) => {
            if(x.name < y.name)return  -1;
            if(x.name > y.name)return   1;
            return 0;
        })
    };

    if (alfabet === "Z-A") {
        dogs.sort((x,y) => {
            if(x.name < y.name)return  1;
            if(x.name > y.name)return -1;
            return 0;
        })
    };

    if (temperamentSelected !== "") {
        dogs = dogs.filter(dg => dg.temperaments?.includes(temperamentSelected))
    };
        
        return (
            <div>
                <div className={style.container_filters}>
                
                    <div className={style.filter_by_origin}>
                        <h4>SELECT ORIGIN OF DATA DOGS</h4>
                        <button value="ApiDogs" onClick={handleFilterByOrigin}>API DOGS</button>
                        <button value="BDD" onClick={handleFilterByOrigin}>CREATE BY USERS</button>
                        <button value="all" onClick={handleFilterByOrigin}>ALL</button>
                    </div>

                    <SearchBar onSearch={onSearch}/>
                
                <div>
                <h4>FILTER BY TEMPERAMENT</h4>
                <select onChange={handleFilterByTemperament}>
                <option key="all" value="" >All</option>
                {temperaments.map((temperament) => (
              <option key={temperament.id} value={temperament.name}>
                {temperament.name}
              </option>
            ))}
                </select>
                </div>
                


                <div className={style.filter_by_alfabet}>
                        <button value="A-Z" onClick={handleFilterByAlfabet}>A-Z</button>
                        <button value="Z-A" onClick={handleFilterByAlfabet}>Z-A</button>
                    </div>

                
                </div>

            <div className='pagination' >
             { page>0 && <button className={style.btnPage} onClick={handlePagePrev}>&lArr; </button>}   
             {buttons.map((button,i) => <button className={style.btnPage} value={i} onClick={handlePage} key={i}>{button}</button>)}
             { page<(dogs.length-15) && <button className={style.btnPage} onClick={handlePageNext}>&rArr;</button>}   
            </div>

            <div className={style.container}>

                { dogs.length ? dogs.slice(page, (page+8)).map((dog) => {
                
                return <Card
                id={dog.id}
                image={dog.image}
                name= {dog.name}
                created={dog.created}
                temperaments={dog.temperaments}
                weight={dog.weight}
                />
            }) : <p>{message}</p>}
        </div>
        
        </div>
    )
};

export default CardsContainer;