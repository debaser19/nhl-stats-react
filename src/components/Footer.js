const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='bg-slate-900 text-center lg:text-left absolute bottom-0 min-w-full'>
            <div className="text-slate-100 text-center p-4">
                &copy; {year} Steve Stoveld
            </div>
        </footer>
    );
};

export default Footer;
