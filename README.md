# Segmentation Module

This is a simple module to perform operations on a Postgres database using NodeJS and Express. It has the following features:

1. Basic CRUD operations on a single table
2. Execute arbitrary SQL queries

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need the following installed on your machine:

- NodeJS
- npm

### Installing

1. Clone the repository
2. Run `npm install`
3. Update the config file with your database credentials

## Usage

The API is very simple. It has the following endpoints:

### Leads

| HTTP Method | Endpoint   | Description            |
| ----------- | ---------- | ---------------------- |
| GET         | /leads     | Get all leads          |
| POST        | /leads     | Create a new lead      |
| GET         | /leads/:id | Get a specific lead    |
| PUT         | /leads/:id | Update a specific lead |
| DELETE      | /leads/:id | Delete a specific lead |

### Segments

| HTTP Method | Endpoint  | Description                     |
| ----------- | --------- | ------------------------------- |
| POST        | /segments | Execute a query on the database |

## Built With

- [NodeJS](https://nodejs.org/en/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework

## Authors

- **Vipin Kumar** - _Initial work_ - [vipinkumar2312](https://github.com/vipinkumar2312)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
