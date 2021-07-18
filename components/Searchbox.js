import React from "react"


function Searchbox({searchfield,searchChange}){
    return(
        <div className="pa2">
           <input  className="pa2 ba b--green bg-lightest-blue" 
           type="search" placeholder="search robots"
            onChange={searchChange}></input>
        </div>
    )
}

export default Searchbox;