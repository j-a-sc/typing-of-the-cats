package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("booting!")
	http.Handle("/", http.FileServer(http.Dir("/")))
	http.ListenAndServe(":3000", nil)
}
