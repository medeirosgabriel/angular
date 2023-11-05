# Learning Angular
## CRUD App
- ### App To Learning Angular
- ### Running App
    - `cd crud_angular`
    - `npm install`
    - `ng serve`
    - Running at: `http://localhost:4200/`
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
