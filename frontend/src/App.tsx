import { useEffect, useState } from 'react';
import { connect, sendMsg } from './api/index';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import Header from './components/Header';

function App() {

    const [chatHistory, setChatHistory] = useState<Array<any>>([]);

    useEffect(() => {
        connect((msg: any) => {
            console.log("New Message");
            setChatHistory((prev) => [...prev, msg])
            console.log(chatHistory);
        })
    }, []);



    return (
        <>
            <div className='App'>
                <Header />
                <ChatHistory chatHistory={chatHistory} />
                <ChatInput />
            </div>
        </>
    );
}

export default App;
