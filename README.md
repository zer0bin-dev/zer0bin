<div align="center">
    <img src="./frontend/zero.png" />
	<h1>
    	<img src="zer0bin.svg" height="100"/>
	</h1>
    just a place to paste
    <br>
	<br>
    <p align="center">
	<a href="https://github.com/domterion/zer0bin/stargazers">
		<img alt="Stargazers" src="https://img.shields.io/github/stars/domterion/zer0bin?style=for-the-badge&logo=starship&color=c4a7e7&logoColor=f6c177&labelColor=12101F"></a>
<!-- 	<a href="https://github.com/domterion/zer0bin/releases/latest">
		<img alt="Releases" src="https://img.shields.io/github/release/domterion/zer0bin?style=for-the-badge&logo=github&color=31748f&logoColor=ebbcba&labelColor=12101F"/></a> -->
	<a href="https://github.com/domterion/zer0bin/issues">
		<img alt="Issues" src="https://img.shields.io/github/issues/domterion/zer0bin?style=for-the-badge&logo=gitbook&color=9ccfd8&logoColor=eb6f92&labelColor=12101F"></a>
</p>
    <br>
</div>

# API

[**GET**] `/p/:id` - Get a paste

[**POST**] `/p/n` - Post a new paste

# License

MIT

# Public instances
Submit your public instance [here](https://github.com/Domterion/zer0bin/issues/new?assignees=&labels=&template=03_public_instance.md&title=%F0%9F%9A%80+)!

| Website | Country | Ratelimits | Expiration | Version |
|-|-|-|-|-|
| zer0b.in (not up yet) | ? | N/A | 7 days | non-existant |
| [stepbro.voring.me](https://stepbro.voring.me) | 🇺🇸 | N/A | ∞ days | v0.0.1 |

# Instructions
### Requirements

- Rust >= 1.58.0
- Postgresql >= 12.0
- Nginx >= 1.18.0
- \*nix OS

### Steps

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
