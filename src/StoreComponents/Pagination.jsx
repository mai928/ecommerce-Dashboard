import React from 'react'

const Pagination = ({totalPages , currentPage ,handlePrevious ,handleNext ,setCurrentPage}) => {
  const disabled= currentPage === totalPages
  return (
    <div>
         {
            totalPages > 1 &&
            (
              <div className='flex justify-center items-center gap-5'>

                <button  className={`${currentPage === 1?'bg-gray-200 text-gray-600 ':'bg-e_secondaryColor text-white font-semibold'} px-5 py-1 rounded-md`} disabled={currentPage === 1} onClick={handlePrevious}>Pervious</button>
                <div className='space-x-3'>

                  {
                    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button className={`border-[1px] border-gray-200 px-2 rounded-md hover:bg-yellow-300 hover:text-white ${currentPage === page ?'bg-yellow-300 text-white':'' }`} onClick={() => setCurrentPage(page)}>
                        {page}
                      </button>
                    ))
                  }

                </div>
                <button className={`${disabled?'bg-gray-400 text-white ':'bg-e_secondaryColor text-white '} px-5 py-1 rounded-md  font-semibold`} disabled={disabled} onClick={handleNext}>Next</button>
              </div>
            )
          }
    </div>
  )
}

export default Pagination