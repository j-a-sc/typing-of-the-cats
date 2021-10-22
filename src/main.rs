use std::io::prelude::*;
use std::net::TcpListener;
use std::net::TcpStream;
use std::fs;
use std::str;
use format_bytes::format_bytes;

fn main() {
    let listener = TcpListener::bind("0.0.0.0:3000").unwrap();
    println!("Serving on: 0.0.0.0:3000");

    for stream in listener.incoming() {
        let stream = stream.unwrap();
        handle_connection(stream);
    }
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 8192];
    stream.read(&mut buffer).unwrap();

    let buffer: Vec<&str> = str::from_utf8(&buffer).unwrap().split(" ").collect();
    let partial_file_path = if buffer[1] == "/" { "/index.html" } else { buffer[1] };

    let full_file_path = format!("static{}", partial_file_path);
    let mut status_code = "HTTP/1.1 200 OK";

    let contents = match fs::read(&full_file_path) {
        Ok(contents) => contents,
        Err(e) => {
            println!("{} not found!\n {}", &full_file_path, e);
            status_code = "HTTP/1.1 404 NOT FOUND";
            fs::read("static/404.html").unwrap()
        }
    };

    let response = format_bytes!(
        b"{}\r\nContent-Length: {}\r\n\r\n{}",
        status_code.as_bytes(),
        contents.len(),
        contents
    );
    match stream.write(&response) { 
        Ok(_) => println!("Handled Request!"),
        Err(e) => println!("Failed to write: {}", e)
    };

    stream.flush().unwrap();
}
