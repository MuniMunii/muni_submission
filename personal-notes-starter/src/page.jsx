import React, { useState } from "react";
import InputComp from "./components/input";
import { getInitialData } from "./utils";
import TableContent from "./components/tableContent";
function PageNote(){
    const [initArray,setInitArray]=useState(getInitialData())
    return (
        <>
            <InputComp dataStorage={initArray} setDataStorage={setInitArray}/>
            <TableContent valueIterate={initArray} setValueIterate={setInitArray}/>
        </>
    )
}
export default PageNote