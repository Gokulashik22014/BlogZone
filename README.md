# BlogZone

BlogZone is a simple project created using the MERN stack. This website allows users to post and read blogs. Currently, it works on localhost, so all the users are essentially you. However, the website can be hosted after some fixes to function like an actual live website.

## Features

- Post blogs
- Read blogs from other users
- User authentication
- Responsive design

## Getting Started

Follow these instructions to set up and run the BlogZone project on your local machine.

### How to Use It

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Gokulashik22014/BlogZone.git
    cd BlogZone
    ```

2. **Setting Up the Client**

    We use React for the frontend along with Tailwind CSS to style the website. Follow these steps to configure them:

    a. Install dependencies:
    
   ```bash
   npm install
   ```

    b. Run the development server:
    
   ```bash
   npm run dev
   ```

        Wait for the server to start.

3. **Setting Up the Server**

    For the backend, we use Express and Node.js, and for the database, we use MongoDB. Follow these steps to set up the server:

    a. Create a MongoDB account, set up a cluster, and create a collection.

    b. Get the URI of your MongoDB cluster and add it to a `.env` file in the server directory with the name `MONGO_URI`. Also, specify your port number in the `.env` file with the name `PORT`.

        Example `.env` file:

   ```plaintext
   MONGO_URI=your_mongodb_uri
   PORT=5000
   ```

    c. Create an `uploads` directory inside the server directory:

   ```bash
   mkdir uploads
   ```

    d. Install dependencies:
    
   ```bash
   npm install
   ```

    e. Start the server:
    
   ```bash
   npm start
   ```

Thanks for taking the time to visit this repo. If you encounter any issues with the setup, please don't hesitate to let me know. I'm always looking to improve my skills as a Full Stack Developer, so if you have any suggestions for code improvements, feel free to share them. Happy Coding!
