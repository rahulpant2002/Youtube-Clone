import React from 'react'
import CommentList from './CommentList'

const CommentContainer = () => {
    const data = [
        {
            name : 'Rahul',
            text : 'Genius mind live in Happy Soul...',
            replies : [
                {
                    name : 'Rohan',
                    text : 'Genius mind live in Happy Soul...',
                    replies : [
                        {
                            name : 'Rahul',
                            text : 'Genius mind live in Happy Soul...',
                            replies : []
                        }
                    ]
                },
                {
                    name : 'Shivam',
                    text : 'Genius mind live in Happy Soul...',
                    replies : [
                        
                    ]
                }
                
            ]
        },
        {
            name : 'Rahul',
            text : 'Genius mind live in Happy Soul...',
            replies : [
                {
                    name : 'Rohan',
                    text : 'Genius mind live in Happy Soul...',
                    replies : [
                        {
                            name : 'Rahul',
                            text : 'Genius mind live in Happy Soul...',
                            replies : []
                        }
                    ]
                },
                {
                    name : 'Shivam',
                    text : 'Genius mind live in Happy Soul...',
                }
                
            ]
        }
    ]
  return (
    <div className='pl-10'>
      <p className='text-xl font-bold mt-6 '>Comments :</p>
      <CommentList comments={data}/>
    </div>
  )
}

export default CommentContainer
