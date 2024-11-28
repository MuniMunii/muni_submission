import React, { useState } from "react";
function TableContent({setValueIterate,valueIterate}){
    function deleteNote(id){
        const findIndexNote=valueIterate.findIndex(book=>book.id===id)
        if(findIndexNote!==-1){
            valueIterate.splice(findIndexNote,1)
        }
        else{
            alert('Data tidak ditemukan')
        }
        setValueIterate([...valueIterate])
    }
    function arsip(id){
        const findIndexNote=valueIterate.findIndex(book=>book.id===id)
        if(findIndexNote!==-1){
            valueIterate[findIndexNote].archived=!valueIterate[findIndexNote].archived
            console.log(valueIterate)
        }
        setValueIterate([...valueIterate])
    }
    const valueTable=valueIterate.filter(book=>!book.archived).map((book)=>{
        return(
        <div key={book.id} className="container">
            <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
            <p style={{fontWeight:'bold'}}>{book.title}</p>
            <p style={{opacity:'0.3'}}>{book.createdAt}</p>
            <p>{book.body}</p>
            </div>
            <div style={{display:"flex", margin:'4px 0'}}>
                <button onClick={()=>deleteNote(book.id)}>Delete</button>
                <button onClick={()=>{arsip(book.id)}}>Arsipkan</button>
            </div>
        </div>
    )
    })
    const filterArsip=valueIterate.filter(book=>book.archived).map((book)=>{
        return(
        <div key={book.id} className="container">
            <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
            <p style={{fontWeight:'bold'}}>{book.title}</p>
            <p>{book.createdAt}</p>
            <p>{book.body}</p>
            </div>
            <div style={{display:"flex",margin:'4px 0'}}>
                <button onClick={()=>deleteNote(book.id)}>Delete</button>
                <button onClick={()=>{arsip(book.id)}}>Arsipkan</button>
            </div>
        </div>
    )
    })
    return (<>
        <p style={{textAlign:'center',fontSize:'56px',color:'#DE4444'}}>{valueIterate.length<1?"Tidak Ada Catatan":''}</p>
        <div className="wrapper">
            <h1 style={{color:'#33CCBA'}}>Tidak Arsip</h1>
            <div style={{display:"flex", justifyContent:'center',flexWrap:'wrap'}}>{valueTable}</div>
            <h1 style={{color:'#FF679A'}}>Arsip</h1>
            <div style={{display:"flex", justifyContent:'center',flexWrap:'wrap'}}>{filterArsip}</div>
        </div>
        </>
    )
}
export default TableContent