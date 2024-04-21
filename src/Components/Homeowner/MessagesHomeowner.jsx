import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faHouse,
    faArrowLeft,
    faTimes,
    faUser,
    faStar,
    faHistory,
    faCodePullRequest,
    faCog,
    faInfoCircle,
    faAddressCard,
    faUserGroup,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { messagesList } from "./MessageList";
const profileImage = require("../../Assets/DAB03919-10470989.webp");

const MessagesHomeowner = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [inputHeight, setInputHeight] = useState('auto');
    const [newMessageList, setNewMessageList] = useState(props.messagesList)

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        const lines = e.target.value.split('\n').length;
        setInputHeight(lines > 4 ? '120px' : '50px');
    };
    const handleClose = () => {
        props.onClose();
        // Perform any necessary actions when OK button is clicked
    };
    //var newMessageList=[...props.messagesList];
    const handleSend = () => {
        if (inputValue) {
            setNewMessageList(prevMessages => [
                ...prevMessages,
                {
                    id: prevMessages.length + 1,
                    senderId: 1,
                    receiverId: 2,
                    content: inputValue
                }
            ]);
            setInputValue('');
            setInputHeight('auto');
        }

    };
    return (
        <div className='w-full sm:w-screen md:w-screen lg:w-full h-full sm:h-full md:h-full lg:h-screen  overflow-y-auto mt-[50px] sm:mt-[50px] md:mt-[50px] lg:-mt-[8px] flex flex-col'>
            <div className='w-full h-[8%] bg-customGray mt-2 flex flex-row items-center justify-start px-4 sticky overflow-y-auto mb-4'>
                <button>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className=""
                        onClick={() => handleClose()}
                    />
                </button>
                <img
                    src={profileImage}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full mx-6"
                />
                <p className=""> Ahmed Dhibi</p>
            </div>
            <div className="w-full  h-full  bg-white overflow-y-auto py-[200px] flex flex-col">
                {newMessageList.map((message) => {
                    if (message.senderId === props.senderId) {
                        return (
                            <div
                                key={message.id}
                                className="w-fit max-w-[70%] h-auto bg-[#40aabd] rounded-3xl mt-10 p-5 text-white ml-auto mr-5 sm:mr-5 md:mr-5 lg:mr-5"
                                style={{
                                    height: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    //float: 'right',
                                    overflowWrap: 'break-word', // Allow long words to break and wrap onto the next line
                                    maxHeight: 'none', // Allow the height to adjust dynamically
                                }}
                            >
                                <p className="" style={{ width: '100%', margin: '0 auto', wordWrap: 'break-word' }}>
                                    {message.content}
                                </p>
                            </div>
                        );
                    } else {
                        return (
                            <div key={message.id} className="w-fit max-w-[70%] h-auto bg-customGray rounded-3xl mt-10 p-5" style={{ height: 'auto', display: 'flex', alignItems: 'center' }}>
                                <p className="" style={{ width: 'fit-content', margin: '0 auto' }}>
                                    {message.content}
                                </p>
                            </div>
                        );
                    }
                })}
            </div>

            <div className='w-full h-[10%] bg-customGray mt-2 flex flex-row items-center justify-start px-4  fixed bottom-0'>
                <input
                    className="w-[80%] sm:w-[80%] md:w-[80%] lg:w-[250px] h-[30px] bg-white px-2 outline-green-500 outline-1 rounded-full border-2 border-green-500"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e)}
                />
                <button
                    className="ml-10 text-submiButton"
                    onClick={() => handleSend()}>
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        className=""

                    />
                </button>
            </div>
        </div>
    )
}

export default MessagesHomeowner
