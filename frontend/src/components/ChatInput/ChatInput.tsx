import { sendMsg } from '../../api'
import './ChatInput.scss'

const ChatInput = () => {

    const buttonPress = (e: any) => {
        if (e.keyCode === 13) {
            sendMsg(e.target.value)
            e.target.value = ""
        }
    }
    return (
        <div className='ChatInput'>
            <input onKeyDown={e => (buttonPress(e))} />
        </div>
    )
}

export default ChatInput
