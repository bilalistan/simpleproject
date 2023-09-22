import './App.css';

const Navbar = () =>{

    return(

        <div className='nav-bottom-line'>
            <nav className='container'>
            <a href='/'> <img src="./brand_logo.png" /></a>
        <ul>
            <li> <a href='/'>Menu</a></li>
            <li><a href='/'>Location</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
        <button>Login</button>
        </nav>
        </div>

    )

};

export default Navbar;