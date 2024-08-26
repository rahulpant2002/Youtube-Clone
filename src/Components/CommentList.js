import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
  return comments?.map((cmnt, index)=>(
        <div>
            <Comment key={index} data={cmnt}/>
            <div className='pl-5 ml-5 border border-r-0 border-y-0 border-l-black'>
                <CommentList comments={cmnt.replies}/>
            </div>
        </div>
    ))
}

export default CommentList
