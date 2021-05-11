import { CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Card } from '@material-ui/core'
import React,{forwardRef} from 'react'
import './Messages.css'


const Messages = forwardRef(({message, username},ref) => {
    const isUser = username === message.username
    return (
        <div ref={ref} className={`messages ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
            <CardContent>
                <Typography 
                color="white" variant="h5" component="h2"
                >
                {!isUser && `${message.username || 'Unknwon User'} `} : {message.message}
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
})

export default Messages
