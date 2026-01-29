import React from 'react'

const Button = ({ text, className }) => {
  return (
    <button className={`${className} group relative px-4 py-2 text-black bg-white cursor-pointer w-36 overflow-hidden h-[40px] rounded-[6px] text-sm font-[poppinmed]`}>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
          <div className="relative h-full overflow-hidden">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full text-nowrap">
                {text}
                </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 text-nowrap">
              {text}
            </span>
          </div>
        </button>
  )
}

export default Button