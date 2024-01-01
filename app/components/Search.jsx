import { Form } from "@remix-run/react";

const Search = () => {
  return (
    <div>
      <Form id="q" role="search" className="relative">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-6 h-6 bottom-2 left-2"
        >
          <path
            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
            stroke="#121212"
            stroke-opacity="0.6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.9304 20.6888C19.4604 22.2888 20.6704 22.4488 21.6004 21.0488C22.4504 19.7688 21.8904 18.7188 20.3504 18.7188C19.2104 18.7088 18.5704 19.5988 18.9304 20.6888Z"
            stroke="#121212"
            stroke-opacity="0.6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <input
          aria-label="search contacts"
          id="q"
          placeholder="What are you looking for?"
          type="search"
          name="q"
          class="bg-search bg-no-repeat w-full mx-auto placeholder:text-slate-400 block bg-white py-3 pl-10 pr-3 shadow-sm focus:outline-none focus:border-pink focus:ring-pink focus:ring-1 sm:text-sm"
        />
      </Form>
    </div>
  );
};

export default Search;
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
