import stocks from '../data'
import {Link} from 'react-router-dom'

const Dashboard = function (props){
    return (
         <table>
            <tr className='title'>
                <th>Company Name(Symbol)</th>
                <th>Price</th>
                <th>Change</th>
             </tr>
             <tr>
                 <th>{stocks.map((stocks, idx) => {
                return(
                <Link key={idx} to={`/stocks/${stocks.symbol}`}>
                    <h5>{stocks.name}({stocks.symbol})</h5>
                </Link> )})}</th>
                <th>{stocks.map((stocks, idx) => {
                return(
                    <h5>{stocks.lastPrice}</h5>)})}
                </th>
                <th>{stocks.map((stocks, idx) => {
                return(
                    <h5>{stocks.change.toFixed(2)}</h5>)})}</th>
             </tr>
            
        </table>
    )
}

export default Dashboard