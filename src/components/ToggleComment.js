import React from 'react'

export default function ToggleComment({setToggleComment,toggleComment}) {
    return (
        <div>
             <button
        onClick={() => setToggleComment((toggleComment) => !toggleComment)}
      >
        {toggleComment ? "Hide Comment" : "Show Comment"}
      </button>
        </div>
    )
}
