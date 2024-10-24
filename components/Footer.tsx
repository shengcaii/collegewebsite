const Footer = () => {

    return (
        <footer className="bg-gray-800 text-white py-8 max-w-3xl mx-auto">
            <div className=" px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold">Nationalities Youth Resource Development Degree Colleges</h3>
                    <p className="text-sm mt-1">Empowering Ethnic Youth through Education</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://facebook.com" className="hover:text-blue-400">Facebook</a>
                        </li>
                        <li>
                            <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
                        </li>
                        <li>
                            <a href="https://instagram.com" className="hover:text-blue-400">Instagram</a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" className="hover:text-blue-400">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Nationalities Youth Resource Development Degree Colleges. All rights reserved.</p>
            </div>
        </footer>);
}
export default Footer;