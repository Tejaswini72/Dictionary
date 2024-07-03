import axios from "axios";

export function handleDictLookup (e,searchTerm,setdictResponse){
    e.preventDefault();
    axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then((response) => {
            if(response.data[0].meanings){
                setdictResponse(response.data[0]);
            }
            else if(response.data[0].title){
                setdictResponse({});
            }
            console.log(response);
        })
        .catch( () => {
                setdictResponse({});
            }
        )
}