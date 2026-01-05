import React from 'react'

const Button = React.forwardRef(({ text, className, isBookMeeting = false, onClick }, ref) => {
  const handleClick = (e) => {
    if (isBookMeeting) {
      window.open('https://calendly.com/tomeponte00/30min', '_blank');
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={`group relative px-6 sm:px-8 py-2 text-black bg-white cursor-pointer overflow-hidden min-h-[44px] sm:min-h-[52px] h-auto rounded-xl text-[13px] font-semibold tracking-wide min-w-fit flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-[1.03] active:scale-95 shadow-lg border border-transparent hover:border-purple-300/50 ${className}`}
    >
      {/* Liquid sweep shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-0"></span>

      <div className="relative h-full w-full overflow-hidden flex items-center justify-center z-10 px-1">
        {/* Transparent text to define the button's width/height */}
        <span className="opacity-0 pointer-events-none whitespace-normal text-center leading-tight">
          {text}
        </span>

        {/* The Animation Tray (Twice the height of the button) */}
        <div className="absolute inset-0 h-[200%] flex flex-col transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) group-hover:-translate-y-1/2">
          {/* First line - visible state */}
          <div className="h-1/2 flex items-center justify-center whitespace-normal text-center leading-tight px-1">
            {text}
          </div>
          {/* Second line - hover state (Exactly the same style as first line) */}
          <div className="h-1/2 flex items-center justify-center whitespace-normal text-center leading-tight px-1">
            {text}
          </div>
        </div>
      </div>
    </button>
  )
})

export default Button