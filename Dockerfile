FROM ubuntu:bionic

COPY src/ / 
EXPOSE 3000

CMD ["/webserver"]