import React from 'react'

const Pagination = ({totalPages , currentPage ,handlePrevious ,handleNext ,setCurrentPage}) => {
  return (
    <div>
         {
            totalPages > 1 &&
            (
              <div className='flex justify-center items-center gap-5'>

                <button disabled={currentPage === 1} onClick={handlePrevious}>Pervious</button>
                <div className='space-x-3'>

                  {
                    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button onClick={() => setCurrentPage(page)}>
                        {page}
                      </button>
                    ))
                  }

                </div>
                <button disabled={currentPage === totalPages} onClick={handleNext}>Next</button>
              </div>
            )
          }
    </div>
  )
}

export default Pagination