import stocks from '../data'
import {useParams} from 'react-router-dom'

const Stock = function (props){

    let params = useParams()

    console.log(params)

    //why does this .map look the way it does?
    const idx = stocks.map(stock => stock.symbol).indexOf(params.symbol)

    console.log(idx)  
    
    return (
        <div>
           <h1>{stocks[idx].name}({stocks[idx].symbol})</h1>
           <h2>Last Price: {stocks[idx].lastPrice.toFixed(2)}</h2>
           <h2>Change: {stocks[idx].change.toFixed(2)}</h2>
           <h2>Open: {stocks[idx].open.toFixed(2)}</h2>
           <h2>High: {stocks[idx].high.toFixed(2)}</h2>
           <h2>Low: {stocks[idx].low.toFixed(2)}</h2>
        </div>
    )
}

export default Stock