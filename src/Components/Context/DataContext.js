import { useReducer } from "react";
import { createContext } from "react";
import DataReducer from './DataReducer'
import { useState} from "react";
 


const DataContext = createContext()

export const Pefi = ({children}) => {
    const [kamal,setKamal] = useState ([]) 
 
    const initialState = {
        users:[]
    }

    const[state,dispatch] = useReducer(DataReducer,initialState)
    const UserClear = () => {
            dispatch({
                type:'SET_CLEAR'
                     })
                            }
            const fetchData = async () => {
            const data = await fetch("https://fakestoreapi.com/products");
            const  datajson  = await data.json();
                 setKamal(datajson)
             
           }
         
       return ( 
            <DataContext.Provider
            value={{
                kamal,
                users:state.users,
                fetchData,
                UserClear
            }}>
                {children}
            </DataContext.Provider>
    )

}
export default DataContext