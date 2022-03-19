FROM rustlang/rust:nightly-alpine3.15 AS builder

RUN apk update && apk add --no-cache build-base openssl-dev gcompat libc6-compat bash
WORKDIR /build/zer0bin

COPY Cargo.toml .
RUN echo "fn main() {}" >> dummy.rs
RUN sed -i 's#src/main.rs#dummy.rs#' Cargo.toml
ENV RUSTFLAGS=-Ctarget-feature=-crt-static
RUN if [[ $(uname -m) =~ ^arm ]]; then CARGO_INCREMENTAL=1 cargo build --release --target aarch64-unknown-linux-musl; else CARGO_INCREMENTAL=1 cargo build --release; fi
RUN rm dummy.rs && sed -i 's#dummy.rs#src/main.rs#' Cargo.toml
COPY . .
RUN CARGO_INCREMENTAL=1 cargo build --release

FROM alpine:3.15

WORKDIR /backend
RUN apk update && apk add --no-cache build-base openssl
COPY --from=builder /build/zer0bin/target/release/zer0bin-bin .

CMD ["/backend/zer0bin-bin"]