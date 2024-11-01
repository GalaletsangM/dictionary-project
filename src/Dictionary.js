import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function handleResponse(response){
        console.log(response.data);
    }
    function search(event){
        event.preventDefault();
        alert(`Searching ${keyword}`);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeyword(event){
        setKeyword(event.target.value);
    }
    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeyword}></input>
        </form>
    </div>;
}