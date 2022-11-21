<div align="center">
<h1>NGCash</h1>
<p>
<img src="https://cdn-icons-png.flaticon.com/512/44/44995.png?w=360" alt="Bank Logo" width=200px/>
</p>
<br>
<p> <b>The NGCash project is a online wallet API<b> </p>
 
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NODE.JS](https://camo.githubusercontent.com/2e5a624f533563052290ad30aed4ecc1092945a458c80cd753d108807e0293b5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f6465206a732532302d2532333230323332612e7376673f267374796c653d666f722d7468652d626164676526636f6c6f723d333339393333266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d666666666666)    ![EXPRESS](https://camo.githubusercontent.com/56960eb8a4e655c887ee533f3d6b29ad57255c69a3e07b0455f29af3ad4947fd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732532302d2532333230323332612e7376673f267374796c653d666f722d7468652d626164676526636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d666666666666)
 

 </div>
 
 ## INSTALLATION
 
 ```
# Clone this repository
$ git clone https://github.com/Rodolpho-Oliveira/projeto-ngcash.git

# Go into the repository
$ cd projeto-ngcash

# Install dependencies
$ npm install

 ```
 
 ## DOCKER
 
  ```
  # Download Docker Desktop (Windows)

  # Install dependencies and database
  $ npm run dev:docker:up

  ```
 
 ## USAGE
 
 POST ```/signup```<br>
 
 Need to receive through the body a parameter ```name``` and a ```password```<br>
 
 ```
 {
    name: "test", (3 characters)
    password: "Test123456" (8 characters, 1 number and 1 capital letter)
 }
 ```
 
 POST ```/signin```<br>
 
 Need to receive through the body a parameter ```name``` and a ```password``` <br>
 
 ```
 {
    email: "test",
    password: "Test123456"
 }
 ```
 
 GET ```/home/:id```<br>
 
 Need to receive through the URL a parameter ```id```
 and through the header a parameter ```'Authorization'```
 
 POST ```/transaction/:id```<br>
 
 Need to receive through the URL a parameter ```id``` , through the body a parameter ```value``` and ```name```
 and through the header a parameter ```'Authorization'```
 ```
   {
      value: 1,
      name: "test"
   }
 ```
 
 GET ```/transaction/:id```<br>
 
 Need to receive through the URL a parameter ```id``` and through the header a parameter ```'Authorization'```
 Optional: receive through the query a parameter ```order``` and/or ```trnsactionType```
