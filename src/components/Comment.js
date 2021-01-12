import React, { useState }  from 'react'

function Comment({user, comment}) {

    const [voteUp, setVoteUp] = useState(0)
    const [voteDown, setVoteDown] = useState(0)

    function handleVote(e) {
        if (e.target.name === '+') {
            setVoteUp(voteUp + 1)
        } else {
            setVoteDown(voteDown + 1)
        }
    }
  
    return (
        <>
        <p><b>{user}</b></p>
        <p>{comment}  <button onClick={handleVote} name='+'>{voteUp} 👍</button> <button onClick={handleVote} name='-'>{voteDown} 👎</button></p>
        </>
    )
}

export default Comment