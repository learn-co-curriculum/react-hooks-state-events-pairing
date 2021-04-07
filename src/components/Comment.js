function Comment({user, comment}){
    return (
        <li>
            <h2>{user}</h2>
            <p>{comment}</p>
        </li>
    )
}

export default Comment