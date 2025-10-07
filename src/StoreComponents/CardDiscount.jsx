import React from 'react'
import { E_NewArrival } from '../../data'

const CardDiscount = () => {
  return (
    <section className="container mx-auto py-14  px-3 lg:px-20">
         <div className=' flex items-center gap-2'>
                <div className='h-7 bg-e_secondaryColor w-[10px] rounded-sm' />
                <p className='text-e_primaryColor text-sm font-semibold'>Featured</p>
            </div>

            <h2 className='text-3xl font-semibold  mt-2  mb-4'>New Arrival</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Large item for PlayStation 5 */}
        <div
          className="relative flex items-end p-8 rounded-sm overflow-hidden md:col-span-1 lg:col-span-1 min-h-[600px]"
          style={{ backgroundColor: E_NewArrival[0].bgColor, color: E_NewArrival[0].textColor }}
        >
          <img
            src={E_NewArrival[0].image}
            alt={E_NewArrival[0].title}
            className=" z-0 m-auto object-cover "
          />
          <div className="absolute z-10  rounded-sm">
            <h3 className="text-xl md:text-2xl font-bold ">{E_NewArrival[0].title}</h3>
            <p className="text-sm mb-4">{E_NewArrival[0].description}</p>
            <button className="  text-gray-200 border-b-[1px] border-b-gray-100  text-sm  transition-colors">
              {E_NewArrival[0].buttonText}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {/* Top right item for Women’s Collections */}
          <div
            className="relative w-full h-[285px]   rounded-sm  bg-black text-white"
          >
            <img
              src={E_NewArrival[1].image}
              alt={E_NewArrival[1].title}

              className=" absolute end-0 z-0 w-[432px] object-cover "
            />
            <div className=" absolute start-5 top-20 z-10   rounded-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{E_NewArrival[1].title}</h3>
              <p className="text-sm  mb-4 w-[65%]">{E_NewArrival[1].description}</p>
              <button className="  text-gray-200 border-b-[1px] border-b-gray-100  text-sm  transition-colors">
                {E_NewArrival[1].buttonText}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Bottom left item for Speakers */}
            <div
              className="relative flex items-end  rounded-sm overflow-hidden min-h-[330px]"
              style={{ backgroundColor: E_NewArrival[2].bgColor, color: E_NewArrival[2].textColor }}
            >
              <img
                src={E_NewArrival[2].image}
                alt={E_NewArrival[2].title}

                className="m-auto object-cover w-[210px] "
              />
              <div className="absolute start-4 bottom-5 z-10 rounded-sm">
                <h3 className="text-xl md:text-2xl text-gray-200 font-bold">{E_NewArrival[2].title}</h3>
                <p className="text-sm  text-gray-300 mb-2">{E_NewArrival[2].description}</p>
                <button className="  text-gray-200 border-b-[1px] border-b-gray-100  text-sm  transition-colors">
                  {E_NewArrival[2].buttonText}
                </button>
              </div>
            </div>

            {/* Bottom right item for Perfume */}
            <div
              className="relative flex items-end p-8 rounded-lg overflow-hidden min-h-[200px]"
              style={{ backgroundColor: E_NewArrival[3].bgColor, color: E_NewArrival[3].textColor }}
            >
              <img
                src={E_NewArrival[3].image}
                alt={E_NewArrival[3].title}
                className="m-auto object-cover w-[210px] "
              />
              <div className="absolute z-10 start-4 bottom-5 rounded-sm">
                <h3 className="text-xl md:text-2xl font-bold text-gray-200 ">{E_NewArrival[3].title}</h3>
                <p className="text-[13px] mb-2 text-gray-300">{E_NewArrival[3].description}</p>
                <button className="  text-gray-200 border-b-[1px] border-b-gray-100  text-sm  transition-colors">
                  {E_NewArrival[3].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default CardDiscount