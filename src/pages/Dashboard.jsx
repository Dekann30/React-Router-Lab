import stocks from '../data'
import {Link} from 'react-router-dom'

const Dashboard = function (props){
    return (
        <div>
            {stocks.map((stocks, idx) => {
                return(
                <Link key={idx} to={`/stocks/${stocks.symbol}`}>
                    <h2>{stocks.name}</h2>
                </Link> 
             )}
            )}
        </div>
    )
}

export default Dashboard