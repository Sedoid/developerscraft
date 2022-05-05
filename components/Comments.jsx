import React,{useState,useEffect} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'
import { Box,useColorModeValue } from '@chakra-ui/react'

const Comments = ({slug}) => {

    const [comments,setComments] = useState([])
    
    useEffect(()=>{
        getComments(slug)
            .then(result => setComments(result))
    },[])

    return (
        <>
            {
            comments.length > 0 ?
                <Box
                    bg={useColorModeValue('white', 'gray.900')}
                    color={useColorModeValue('gray.700', 'gray.200')}
                    className=" shadow-lg rounded-lg p-8 pb-12 mb-18" 
                    borderWidth='1px' 
                    borderRadius='md'>
                     <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                         {comments.length}
                         {' '}
                         Comments
                     </h3>
                     {comments.map(comment =>(
                         <div key={comment.createdAt} className="border-b border-gray-100 mb-4 pb-4">
                             <p className="mb-4">
                                 <span className="font-semibold">{comment.name}</span>
                                 {' '}
                                 on
                                 {' '}
                                 {moment(comment.createdAt).format('MMM DD, YYYY')}
                             </p>
                             <p className="whitespace-pre-line text-gray-600 w-full"> {parse(comment.comment)} </p>
                         </div>
                     ))}
                </Box>
                    
                :
                    'No comment to show yet,write, to be the first!'
           } 
        </>
    )
}

export default Comments
