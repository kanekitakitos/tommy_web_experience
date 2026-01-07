import Link from 'next/link';

/**
 * Logo Component
 * 
 * Displays the sites main logo wrapped in a Next.js Link to home.
 * 
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Sizing and object-fit classes.
 */
const Logo = ({ className = "w-28 sm:w-36 object-contain" }) => {
    return (
        <div onClick={() => window.location.href = "/"} className="cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95 block">
            <img
                src="/assets/images/logo3.png"
                alt="New Gen Services Logo"
                className={`${className} pointer-events-none`}
            />
        </div>
    );
};

export default Logo;
