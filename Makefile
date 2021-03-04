all:
	GOOS=linux GOARCH=amd64 go build -o src/webserver
	docker build -t cat:latest .