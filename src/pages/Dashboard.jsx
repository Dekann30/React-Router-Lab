import stocks from '../data'
import {Link} from 'react-router-dom'

const Dashboard = function (props){
    return (
         <table>
            <tr className='title'>
                <th><h2>Company Name(Symbol)</h2></th>
                <th><h2>Price</h2></th>
                <th><h2>Change</h2></th>
             </tr>
             <tr>
                 <th>{stocks.map((stocks, idx) => {
                return(
                <Link key={idx} to={`/stocks/${stocks.symbol}`}>
                    <h3>{stocks.name}({stocks.symbol})</h3>
                </Link> )})}</th>
                <th>{stocks.map((stocks, idx) => {
                return(
                    <h3>{stocks.lastPrice}</h3>)})}
                </th>
                <th>{stocks.map((stocks, idx) => {
                return(
                    <h3>{stocks.change.toFixed(2)}</h3>)})}</th>
             </tr>
            
        </table>
    )
}

export default Dashboard