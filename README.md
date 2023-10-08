# sleek-ev-frontend Installation Guide

## Prerequisites

- **Node.js**: Make sure you have Node.js version `18.18.0` or higher installed on your machine. If not, download and install it from [Node.js Official Website](https://nodejs.org/).

- **Git**: Ensure Git is installed. If not, download and install it from [Git Official Website](https://git-scm.com/).

## Clone the Repository

There are two methods to clone the repository:

### 1. Using HTTPS:

```bash
git clone https://github.com/vijityannapon/sleek-ev-frontend.git
```

### Using SSH:

If you have set up your SSH keys with GitHub, you can clone using the SSH method:

```bash
git clone git@github.com:vijityannapon/sleek-ev-frontend.git
```

### Setup Environment Variables

Navigate to the project directory:

```bash
cd sleek-ev-frontend
```

Then, In the project directory, you'll find a file named .env.example. Create a copy of this file in the same directory and rename it to .env.

```bash
cp .env.example .env
```

Open the .env file with any text editor of your choice. Update the necessary configurations, especially the API endpoint or other configuration details.

For instance:

```bash
REACT_APP_API_ENDPOINT=https://your-api-url-here.com/
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

To start the local development server, run:

```bash
npm start
```

Once started, the application should be accessible from http://localhost:3000 or a similar URL displayed in your terminal.

### Conclusion

You have successfully set up sleek-ev-frontend for local development. Happy coding!
