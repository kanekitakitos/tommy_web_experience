import Link from 'next/link';

const Logo = ({ className = "w-28 sm:w-36 object-contain" }) => {
    return (
        <Link href="/" className="cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95 block">
            <img
                src="/assets/images/logo3.png"
                alt="New Gen Services Logo"
                className={`${className} pointer-events-none`}
            />
        </Link>
    );
};

export default Logo;
