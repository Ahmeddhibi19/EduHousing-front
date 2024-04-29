import React, { useEffect, useState } from 'react'
import MessagesHomeowner from './MessagesHomeowner';
import { messagesList } from "./MessageList";
import axios from 'axios';
const profileImage = require("../../Assets/DAB03919-10470989.webp");

const UsersHomeowner = () => {
    const [messages, setMessages] = useState(false);
    const [users,setUsers]=useState([])
    const [recipientId,setRecipientId]= useState();

    const togglemessages = () => {
        setMessages((prev) => !prev);
        console.log(messages)
    }
    const accessToken = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId');
    const mongouserId=localStorage.getItem('mongoId');
    useEffect(() => {
        axios.get(`http://localhost:8081/users`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        )
            .then(resppnse => {
                setUsers(resppnse.data)

               
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])

    return (
        <div className='w-full sm:w-screen md:w-screen lg:w-full h-full sm:h-full md:h-full lg:h-screen  overflow-y-auto'>
            {messages ?
                <div className='w-full h-full  '>
                    <MessagesHomeowner onClose={() => setMessages(false)}  senderId={mongouserId} receiverId={recipientId} />
                </div> :
                users.map((user, i) => (
                    <div key={i} className='w-full h-[40px] px-4 flex flex-row cursor-pointer'
                        onClick={() => {
                            setRecipientId(user.id);
                            togglemessages()
                        }}
                    >
                        <img
                            src={profileImage}
                            alt=""
                            className="w-[30px] h-[30px] rounded-full mr-3 "
                        />
                        <p className=""> {user.fullName}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default UsersHomeowner
