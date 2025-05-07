import logo from '../imgs/AAN logo.png';
const Navbar = () => {
    return (
        <nav className="navbar">

            <a href="/" className="flex items-center space-x-2">
            <img src={logo} className="flex-none w-10" />
            </a>
        </nav>

    )
}

export default Navbar;