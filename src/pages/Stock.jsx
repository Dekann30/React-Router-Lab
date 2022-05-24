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
           <h1>{stocks[idx].name}</h1>
           <h2>{stocks[idx].lastPrice}</h2>
        </div>
    )
}

export default Stock