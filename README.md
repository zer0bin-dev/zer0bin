<div align="center">
    <img src="assets/zero.png" height="110px"/>
	<br>
    <img src="assets/zer0bin.svg" height="100"/>
	<br>
    Just a place to paste
    <br>
	<br>
    <p align="center">
	<a href="https://github.com/domterion/zer0bin/stargazers">
		<img alt="Stargazers" src="https://custom-icon-badges.herokuapp.com/github/stars/domterion/zer0bin?style=for-the-badge&logo=star&color=f6c177&logoColor=31748f&labelColor=12101F"></a>
<!-- 	<a href="https://github.com/domterion/zer0bin/releases/latest">
		<img alt="Releases" src="https://img.shields.io/github/release/domterion/zer0bin?style=for-the-badge&logo=github&color=31748f&logoColor=ebbcba&labelColor=12101F"/></a> -->
	<a href="https://github.com/domterion/zer0bin/issues">
		<img alt="Issues" src="https://custom-icon-badges.herokuapp.com/github/issues/domterion/zer0bin?style=for-the-badge&logo=issue-opened&color=9ccfd8&logoColor=eb6f92&labelColor=12101F"></a>
	<a href="https://github.com/Domterion/zer0bin/blob/main/LICENSE">
		<img alt="License" src="https://custom-icon-badges.herokuapp.com/github/license/domterion/zer0bin?style=for-the-badge&logo=law&color=c4a7e7&logoColor=ebbcba&labelColor=12101F"></a>
</p>
    <br>
</div>

# API

**GET** `/api/p/:id` - Get a paste by ID

**GET** `/api/p/r/:id` - Get raw content of paste by ID 

**POST** `/api/p/n` - Post a new paste

**GET** `/api/s` - Get stats about the instance

# Public instances

Submit your public instance [here](https://github.com/Domterion/zer0bin/issues/new?assignees=&labels=&template=03_public_instance.md&title=%F0%9F%9A%80+)!

| Website                                        | Expiration | Max paste size | Version | Country |
| ---------------------------------------------- | ---------- | ---------------| --------| ------- |
| zer0b.in (not up yet)                          | 7 days     | 40,000 chars   | vx.x.x  | ?       |
| [stepbro.voring.me](https://stepbro.voring.me) | 365 days   | 69,000 chars   | v0.3.0  | 🇺🇸 US   |

# Technologies used

Frontend: <a href="https://pugjs.org/"><img src="https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" height=25/></a> <a href="https://parceljs.org/"><img src="https://cdn.discordapp.com/attachments/810799100940255260/952772963189526578/ezgif.com-gif-maker17.png" height=25/></a> <a href="https://rosepinetheme.com/"><img src="https://raw.githubusercontent.com/rose-pine/rose-pine-theme/27ee1976cc42a85edff37fe22c16de180c4874dc/assets/icon.svg" height=25/></a> <a href="https://jquery.com/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodix.com%2Flogo%2F941120.png" height=25/></a> <a href="https://highlightjs.org/"><img src="https://avatars.githubusercontent.com/u/9039821?s=200&v=4" height=25/></a> <a href="https://github.com/ant-design/ant-design-icons"><img src="https://avatars.githubusercontent.com/u/12101536?s=200&v=4" height=25/></a> <a href="https://npmjs.org"><img src="https://authy.com/wp-content/uploads/npm-logo.png" height=25/></a>

Backend: <a href="https://actix.rs/"><img src="https://pool.jortage.com/voringme/misskey/4b9341f0-131f-4c7c-8a99-73b9ae6fa64c.png" height=25/></a> <a href="https://github.com/serde-rs/serde"><img src="https://cdn.discordapp.com/attachments/810799100940255260/949485779242070076/unknown.png" height=25/></a> <a href="https://github.com/launchbadge/sqlx"><img src="https://pool.jortage.com/voringme/misskey/addbd8d2-4eba-462d-b7f4-0d5f81b991ac.png" height=25/></a> <a href="https://github.com/chronotope/chrono"><img src="https://avatars.githubusercontent.com/u/20810954?s=200&v=4" height=25/></a> <a href="https://www.postgresql.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png" height=25/></a> <a href="https://github.com/ai/nanoid"><img src="https://camo.githubusercontent.com/c306d97014be1caa9a2a511a0ff4722d54a77b0b6c81a18c81113d6051408325/68747470733a2f2f61692e6769746875622e696f2f6e616e6f69642f6c6f676f2e737667" height=25/></a>

# Self-host instructions

### Requirements

- 🦀 Rust ≥ 1.58.0
	- 🚢 Cargo ≥ 1.58.0
- 🐢 NodeJS ≥ 16.0 
	- 🚀 NPM ≥ 8.0.0
- 🐘 Postgresql ≥ 12.0
- 🦝 Nginx ≥ 1.18.0
- 🌄 Domain with [SSL](https://letsencrypt.org/)
- 🐧 \*nix OS

### Steps
<!--
1. `git clone https://github.com/Domterion/zer0bin && cd zer0bin`
2. Edit `example.nginx` as appropriate, then `mv example.nginx yourdomain.tld && for i in /etc/nginx/sites-available/ /etc/nginx/sites-enabled/; do cp ./yourdomain.tld $i; done && systemctl nginx restart`
3. `psql -f schema.sql -U postgres zer0bin`
4. `cd frontend`
5. `cp config.example.json config.json` and edit as appropriate
6. `npm i && npm run build`
7. `cd ../backend`
8. `cp config.example.json config.json` and edit as appropriate
9. `cargo build --release`
10. `./target/release/backend` (preferably in a tmux session or as a service)
-->

```bash
# export EDITOR=nano
git clone https://github.com/Domterion/zer0bin && cd zer0bin
$EDITOR example.nginx # Edit as appropriate
mv example.nginx yourdomain.tld
sudo cp ./yourdomain.tld /etc/nginx/sites-available
sudo cp ./yourdomain.tld /etc/nginx/sites-enabled
systemctl nginx restart # Or whichever process manager you use
cd frontend
cp config.example.json config.json
$EDITOR config.json # Edit as appropriate
npm i && npm run build
cd ../backend
psql -f schema.sql -U postgres zer0bin
cp config.example.json config.json
$EDITOR config.json # Edit as appropriate
cargo build --release
./target/release/zer0bin-bin # Preferably in a tmux session or as a service
```

### Configuration

| Key                                        | Values                   | Description                                                                    |
| ------------------------------------------ | ------------------------ | ------------------------------------------------------------------------------ |
| server.backend_host                        | 127.0.0.1 or 0.0.0.0     | The host to run the backend on                                                 |
| server.backend_port                        | Any open port            | The port to run the backend on                                                 |
| pastes.character_limit                     | Number up to 2^64 - 1    | The amount of characters allowed in a single paste                             |
| pastes.days_til_expiration                 | Number up to 2^63 or -1  | The days till a paste is to expire. If set to -1 then pastes will never expire |
| pastes.id_length                           | Number up to 2^64 - 1    | The length of the ID for each paste                                            |
| databases.postgres_uri                     | PostreSQL Connection URI | The URI to use when connecting to a PostgreSQL database                        |
| ratelimits.seconds_in_between_pastes       | Number up to 2^64 - 1    | The seconds between paste uploads                                              |
| ratelimits.allowed_pastes_before_ratelimit | Number up to 2^32 - 1    | Amount of requests that can be made before they are blocked and have to wait   |

# Benchmarks
> This is on a paste with 200 lines!

### Lighthouse
![Lighthouse](https://user-images.githubusercontent.com/44733677/158105961-7e186b86-54a8-44ac-ad81-65d6cd4b8eb2.png)

### Firefox network
![Firefox Network](https://user-images.githubusercontent.com/44733677/158106344-71c4bb71-450b-4c9a-8473-05e304da41f3.png)
