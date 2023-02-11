import './Navbar.css'
function Navbar() {
    return (
        <div className='nav-container'>
            <div className='icon-container'>
                <img className="display-pic" alt="pic" src='freelunchlogo.png' />
            </div>
            <div className='font'>
                Welcome to Free Lunch!
            </div>
        </div>
    );
}

export default Navbar;