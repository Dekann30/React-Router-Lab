import {Link} from 'react-router-dom'

const Header = function (){
    return(
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/stocks'>Stocks</Link>
            <Link to ='/about'>About</Link>
        </div>
    )
}

export default Header