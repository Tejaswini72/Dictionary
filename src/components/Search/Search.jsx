import React, { useState } from "react";
import "./Search.css";
import {ReactComponent as MagnifyingGlass} from "../../assets/magnifyingGlass.svg"
import { handleDictLookup } from "./Search.js";

function Search ({dictResponse,setdictResponse}){
    const [searchTerm,setsearchTerm] = useState("")
    return (
        <div className="searchWrapper">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleDictLookup(e,searchTerm,setdictResponse)
            }}>
                <input type = "text" className="searchBar" placeholder = {dictResponse.word} onChange={(e) => {
                    setsearchTerm(e.target.value)
                }}></input>
                <button className="searchIconButton">
                    <MagnifyingGlass className="searchIcon" />
                </button>
            </form>
        </div>
    );
}

export default Search;