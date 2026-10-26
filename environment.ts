// // dotenv

// import dotenv from "dotenv"

// const environment = "QA";

// dotenv.config(
//     {path: `.env${environment}`}
// );
// console.log("Environment:", environment);
// console.log("BASE URL:", process.env.baseUrl);
// console.log("USERNAME:", process.env.username);

// export const env = {
//         baseURL : process.env.baseUrl!,
//         username : process.env.username!,
//         password : process.env.password!
//     }

import dotenv from "dotenv";

const environment = "QA";

dotenv.config({
    path: process.cwd()+ `/.env.${environment}`
});

console.log("Environment:", process.env.ENV);
console.log("BASE URL:", process.env.APP_BASE_URL);
console.log("USERNAME:", process.env.APP_USERNAME);

export const env = {
    environment: process.env.ENV!,
    baseURL: process.env.APP_BASE_URL!,
    username: process.env.APP_USERNAME!,
    password: process.env.APP_PASSWORD!
};