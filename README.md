# Tech-Blog

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Screenshot](#screenshot)
- [Deployed application](#deployed-application)
- [GitHub repository](#github-repository)
- [Questions](#questions)

<!-- - [Demonstration Links](#demonstration-links) -->

## Description

I have been tasked to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I’ll build this site completely from scratch and deploy it to Heroku. My app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation

Start with cloning this repository link on to your local machine:

```
$ git clone https://github.com/riz1ash786/tech-blog
$ cd tech-blog
```

To install the required dependencies and set up the application, run:

```
$ npm i
```

You will also need to place a .env file in the root directory of the project, in order to connect to your MySQL database. Here's a specific example:

file: .env

```
DB_USER=root
DB_PW=
DB_NAME=my_tech_blog_db
```

## Usage

Enter `node server.js` in terminal to start the application. Once a port has been presented in terminal then type `localhost:3001` into browser to display the application locally. Alternatively, if you wish to deploy this application on Heroku then please click here on the [Heroku Link](https://rocky-cliffs-51316.herokuapp.com/ "Heroku Link")

<!-- - To connect to the database run` mysql -u root -p`
- Then source the `schema.sql`
- To seed the file run `npm run seed`
- Finally, to connect to the server run `npm start` -->

## Contributing

There are no contributing guidelines at this moment in time. Please check back in the future.

## Tests

No test specified as of yet.

## License

![License (ISC](https://img.shields.io/badge/License-ISC-brightgreen.svg) <br />
This application utilises the [ISC License](https://opensource.org/licenses/ISC "License Link")

## Screenshot

## Deployed Application

[Tech-Blog Heroku Link](https://rocky-cliffs-51316.herokuapp.com/ "Heroku Link")

## GitHub Repository

<!-- https://github.com/riz1ash786/tech-blog -->

[Tech-Blog Repository](https://github.com/riz1ash786/tech-blog "Repository Link")

## Questions

If you have any additional questions then please feel free to get in touch via my github or email details linked below. Thank you.

Github - https://github.com/riz1ash786 <br />
Email - riz1ash786@gmail.com

<!-- ## Demonstration Links

[Terminal Demo Video](https://drive.google.com/file/d/1D3Bu132hNN_uVuWsKMOw-5BewqF7ZA37/view?usp=sharing "Terminal Demo Link")

[Insomnia Demo Video](https://drive.google.com/file/d/1lVH3U-wq6OS73NdCWPOA1ye3nHL1hOyO/view?usp=sharing "Insomnia Demo Link") -->
