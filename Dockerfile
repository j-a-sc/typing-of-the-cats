FROM scratch

COPY src/ / 
EXPOSE 3000

CMD ["/webserver"]