import { Form } from "@remix-run/react"

import Input from "./Input"

const Search = () => {
  return (
    <div>
         <Form id="search-form p" role="search">
         <div className="relative box-border w-full pl-8 bg-search bg-no-repeat bg-leftx-topy bg-auto">
            <input
                id= "q"
                aria-label="search contacts"
                placeholder="search"
                type="search"
                name="q"
                />
        </div>
         <div className="w-4 h-4 absolute left-2.5 top-3 bg-spinner" aria-hidden hidden={true} />
        </Form>
    </div>
  )
}

export default Search
// #sidebar > div form input[type="search"] {
//     box-sizing: border-box;
//     width: 100%;
//     padding-left: 2rem;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
//     background-repeat: no-repeat;
//     background-position: 0.625rem 0.75rem;
//     background-size: 1rem;
//     position: relative;
//   }

// #search-spinner {
//     width: 1rem;
//     height: 1rem;
//     background-image: 
//     animation: spin 1s infinite linear;
//     position: absolute;
//     left: 0.625rem;
//     top: 0.75rem;
//   }
  
//   @keyframes spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }