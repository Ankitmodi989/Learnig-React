import { useSelector,useDispatch } from "react-redux";
import { Increment,Decrement,Reset } from "./slicer1";

export default function Counting(){

    const count = useSelector((state)=>state.slice1.count);
    const dispatch = useDispatch();

    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        <button  onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}