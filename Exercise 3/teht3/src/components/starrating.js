import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/fa";
import SearchResult from "./SearchResult";

const createArray = length => [...Array(length)];
const Star = ({ selected = false }) => (
  <FaStar color={selected ? "orange" : "white"} />
);
export default function Tähdet(props, { totalStars = 5 }){
  const [selectedStars] = useState(props.arvo);

return (
<>
{createArray(totalStars).map((n, i) => (
  
  <Star key={i} selected={selectedStars > i} />
  
))}
</>


);
}