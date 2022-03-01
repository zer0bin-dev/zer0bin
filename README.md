<div align="center">
    <h1>zer0bin</h1>
    <a href="https://stepbro.voring.me">zer0b.in</a>, just a place to paste
    <br>
    <img src="./frontend/zero.png" />
    <br>
    <br>
</div>

# API

[**GET**] `/p/:id` - Get a paste

[**POST**] `/p/n` - Post a new paste

# License

MIT

# Public instances

| Website | Country | Ratelimits | Expiration |
|-|-|-|-|
| zer0b.in (not up yet) | ? | N/A | 7 days |
| [stepbro.voring.me](https://stepbro.voring.me) | 🇺🇸 | N/A | ∞ days |

# Instructions
### Requirements

- Rust >= 1.58.0
- Postgresql >= 12.0
- Nginx >= 1.18.0

1. `git clone https://github.com/Domterion/zer0bin && cd zer0bin`
2. `cp config.example.json config.json` and edit as appropriate
3. `cp example.nginx /etc/nginx/sites-avaliable/yoursite.tld`, edit as appropriate, `sudo cp /etc/nginx/sites-avaliable/yoursite.tld /etc/nginx/sites-enabled/yoursite.tld && systemctl nginx restart`
4. `psql -d postgres`
5. `CREATE DATABSE zer0bin;` and `\c zer0bin`
6. Paste contents of `schema.sql`
7. `\q`
8. `cd backend`
9. `cargo build --release`
10. `./target/release/backend`, preferably in a `tmux` session or with `& disown`
