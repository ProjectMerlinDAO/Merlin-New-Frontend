import Image from "next/image";
import React from "react";

const Pagination2 = ({ totalPages, page, setPage }) => {
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((currentPage) => currentPage - 1); // Decrement page number by 1
    }
  }; 
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((currentPage) => currentPage - 1); // Decrement page number by 1
    }
  }; 
  return (
    <div className="merlin-pagination">
      <ul className="flex items-center justify-start gap-[10px]">
        
        <li>
          <a
            href="#"
            onClick={handlePreviousPage}
            className="flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]"
          >
            <Image
              src="/assets/images/icons/pagination-arrow-left.svg"
              alt="icon"
              height="12"
              width="7"
            />
          </a>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]"
            >
              {index + 1}
            </a>
          </li>
        ))}

        <li>
          <a
          onClick={handleNextPage}
            href="#"
            className="flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]"
          >
            <Image
              src="/assets/images/icons/pagination-arrow-right.svg"
              alt="icon"
              height="12"
              width="7"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination2;
