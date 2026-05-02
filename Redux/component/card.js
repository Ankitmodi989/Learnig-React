import { useState } from "react";
import FoodCart from "./FoodCard";

const fooditem = [
    {id:1,food:"Pizza",Price:"200"},
    {id:2,food:"Dosa",Price:"300"},
    {id:3,food:"Burger",Price:"400"},
    {id:4,food:"Chaowmin",Price:"500"},
    {id:5,food:"Poha",Price:"600"},
    {id:7,food:"Satwitch",Price:"700"},
    {id:6,food:"Lauda",Price:"800"},
    {id:8,food:"lahshun",Price:"900"},
    {id:9,food:"weat",Price:"1000"},
    {id:10,food:"Rice",Price:"300"},
    {id:11,food:"samosa",Price:"3400"},
    {id:12,food:"Daal",Price:"2040"},
    {id:13,food:"makhni",Price:"2300"},
];

export default function Card(){

    
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center", gap:"50px"}}>
            {fooditem.map((value)=>{

                return(
                    <div key={value.id} style={{alignItems:"center"}}>
                        <FoodCart value={value}></FoodCart>
                        </div>
                )
            })}
        </div>
    )
}