# Learning Angular
## [Angular Course](https://www.youtube.com/watch?v=vJt_K1bFUeA&list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw)
## CRUD App
- ### App To Learning Angular
- ### Running App
    - `cd crud_angular`
    - `npm install`
    - `ng serve`
    - Running at: `http://localhost:4200/`
- ### Running Json Server
    - `npm run server`
## Moments App
- ### App To Share Your Best Moments
- ### Running App
    - ### Back End:
        - `cd moments_api`
        - `npm install`
        - `cp .env.example .env`
        - `node ace generate:key`
        - `copy the key generated to .env file`
            - `APP_KEY = key-generated`
        - `node ace migration:run`
        - `node ace serve`
    - ### Front End:
        - `cd moments`
        - `npm install`
        - `ng serve`
        - Running at: `http://localhost:4200/`