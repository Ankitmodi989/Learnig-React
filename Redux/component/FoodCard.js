import { useState } from "react"
import { useDispatch } from "react-redux";
import { addItem, removeItems } from "./slicer2";


export default function FoodCart({value}){
    const [incard,setInCart]=useState(false);
    const dispatch=useDispatch();

    function handClick(){
        if(incard){
            setInCart(false);
            dispatch(removeItems());
            

        }else{
            setInCart(true);
            dispatch(addItem());
        }

    }
    return(
        <>
        <h1>{value.food}</h1>
        <h2>{value.Price}</h2>
        <button onClick={()=>handClick()}>{incard?"Remove":"Add"}</button>
        </>
    )
}