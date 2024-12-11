import React,{useContext} from 'react'
import { Mycontext } from '../../utils/contextapi/Contextapi.jsx'

function Chatmsg({ sender, content, avatar="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" }) {

    const { user } = useContext(Mycontext);

    const sameuser = (sender == user);

    return <>
        <div>

                <div className={`chat ${sameuser? 'chat-end' : 'chat-start'} z-0`} >
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src={avatar}
                                // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <div className="chat-bubble bg-blue-300">{content}</div>
                </div>

        </div>
    </>
}

export default Chatmsg