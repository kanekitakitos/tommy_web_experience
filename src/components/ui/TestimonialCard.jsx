import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { name, role, img, text, flag, date } = testimonial;

    return (
        <div className="bg-white text-black border border-black/5 rounded-2xl p-5 shadow-lg relative flex flex-col w-full min-h-[160px] sm:min-h-[210px] hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-500 cursor-default group overflow-hidden">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex gap-3 mb-3 shrink-0 relative z-10">
                <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100 shadow-sm" />
                <div className="overflow-hidden">
                    <h3 className="font-bold text-sm text-gray-900 truncate">{name}</h3>
                    <p className="text-[10px] text-gray-500 font-medium truncate">{role}</p>
                </div>
            </div>

            <p className="text-[12px] text-gray-700 leading-relaxed italic mb-4 overflow-y-auto flex-grow custom-scrollbar relative z-10">
                {text}
            </p>

            <p className="text-[10px] text-gray-400 font-medium flex items-center gap-1 mt-auto shrink-0 relative z-10">
                {flag} User, {date}
            </p>
        </div>
    );
};

export default TestimonialCard;
