var socket = new WebSocket("ws://localhost:8080/ws");

const connect = (cb: any) => {
    console.log("Attempting connection");

    socket.onopen = () => {
        console.log("Succesfully Connected");
    }

    socket.onmessage = (msg) => {
        console.log(msg)
        cb(msg)
    }

    socket.onclose = event => {
        console.log("Socket connection closed: ", event);
    }

    socket.onerror = error => {
        console.log("Socket error: ", error)
    }


}

const sendMsg = (msg: string) => {
    console.log("sending msg: ", msg);
    socket.send(msg)
}

export { connect, sendMsg }
