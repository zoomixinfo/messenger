
import { Button, FormControl, Input, InputLabel, } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Messages from './Messages';
import firebase from 'firebase'
import flipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username,setUsername]=useState('')
  useEffect(()=>{
    db.collection("messages")
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
    })
  },[])
  useEffect(()=>{
    setUsername(prompt("Enter a username"))
  },[])
  const sendMessage = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png" alt="" className="app__img"/>
      <h1>Hello ZOOMIXinfo</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
      <FormControl className="app__formControler">
          <InputLabel>Enter a message</InputLabel>
          <Input className="app__input" placeholder="Enter a message" value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}> <SendIcon className="form__iconButton"/></Button>
        </FormControl>
      </form>
      <flipMove>
      {
        messages.map(({id,message}) =>(
          <Messages key={id} username={username} message={message}/>
        ))
      }
      </flipMove>
    </div>
  );
}

export default App;
