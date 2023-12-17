import React,{useRef} from 'react'

const Search = () => {

   const searchRef = useRef();

   const searchHandler =(event)=>{
      console.log("Search");
      event.preventDefault();

      const searchValue = searchRef.current.value;
      console.log(searchValue);

      searchRef.current.value = "";
   }

   return (
      <form class="form-inline d-flex">
         <input class="form-control mr-sm-2" type="search" ref={searchRef} placeholder="Search" aria-label="Search" />
         <button onClick={searchHandler} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
   )
}

export default Search
