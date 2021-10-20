FROM ubuntu:bionic

COPY target/x86_64-unknown-linux-musl/release/cat /cat
COPY static /static
EXPOSE 3000

CMD ["/cat"]