import PropTypes from "prop-types";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import InputBox from "../Input/Input";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <>
      <InputBox
        className="cursor-pointer"
        placeholder="What are you looking for?"
        onChange={(e) => setSearchValue(e.target.value)}
        onPressEnter={handleSearch}
        allowClear
        suffix={
          <>
            <SearchOutlined />
          </>
        }
      />
      {/* liked products */}
      <svg
        className="w-32 cursor-pointer"
        // onClick=
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* cart icon */}
      <svg
        className="cursor-pointer"
        // onClick={}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 5H7L10 22H26"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16.6665H25.59C25.7056 16.6666 25.8177 16.6266 25.9072 16.5533C25.9966 16.48 26.0579 16.378 26.0806 16.2646L27.8806 7.26463C27.8951 7.19206 27.8934 7.11717 27.8755 7.04536C27.8575 6.97355 27.8239 6.90662 27.7769 6.8494C27.73 6.79218 27.6709 6.74609 27.604 6.71446C27.5371 6.68283 27.464 6.66645 27.39 6.6665H8"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="w-20 h-8 justify-center items-center gap-4 inline-flex">
        <div className="w-8 h-8 relative" />
        <div className="w-8 h-8 justify-center items-center flex">
          <div className="w-8 h-8 relative flex-col justify-start items-start flex" />
        </div>
      </div>
    </>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.node,
  onClear: PropTypes.node,
  placeholder: PropTypes.string,
  showClearButton: PropTypes.bool,
  onFilterChange: PropTypes.node,
};
export default SearchBar;
