import style from "./SearchBar.module.css"

const SearchBar = ({onSearch}) => {

const handleChange = (event) => {

    const dogName = event.target.value;
    onSearch(dogName);
}

    return(

    <div>
        <input type="search" placeholder="search a dog" onChange={handleChange} />
    </div>
    )
}

export default SearchBar;