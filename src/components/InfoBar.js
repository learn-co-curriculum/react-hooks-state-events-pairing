import React, { useState } from 'react';

function InfoBar({title, views, createdAt,upvotes,downvotes}){
    return(
        <>
        <h1>{title}</h1>
        <p>{views} views | uploaded {createdAt}</p>
        <button onClick={()=>console.log("clicks")}>{upvotes}👍</button><button onClick={()=>console.log("clicks2")}>{downvotes}👎</button>
        <br/>
        <button>Hide Comments</button>
        </>
    )
}

export default InfoBar