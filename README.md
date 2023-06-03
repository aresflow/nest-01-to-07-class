<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in development

1. Clonate repository
2. Execute
```
yarn install
```
3. Have nest CLI installed
```
npm i -g @nestjs/cli
```

4. Turn on database
```
docker-compose up -d
```
5. Rebuild database with seed
```
http://localhost:4000/api/v2/seed
```

## Stack used
* MongoDB
* Nest
