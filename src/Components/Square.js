import React from "react";

export default function Square({value, onClick}) {
  return <button className="btn" onClick={onClick}>{value}</button>;
}
