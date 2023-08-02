package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/kinmod-ui/socketGo/pkg/websocket"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("Websocket Endpoint Hit")

	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		log.Println(err)
	}

	client := &websocket.Client{Conn: conn, Pool: pool}

	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)
	})

}

func main() {
	setupRoutes()

	fmt.Println("Server started on port 8080")
	http.ListenAndServe(":8080", nil)
}
