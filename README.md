# mern stack e-commerce
Inspiration by Apple.com

**Demo**
https://mernstack-ecommerce-03q21.netlify.app/

**Current Status**: Enhancement UI

**Stack (MERN & Redux)
This project uses the following technologies**

MongoDB for database (hosted on Render) & Mongoose
Express.js as Node web framework
React.js for client, React Router for routing & Redux for state management
Node.js for server
Lightweight CSS preprocessor/frameworks: Material UI
Payment method: Stripe

**Progress**
General
  UI - Completed
  Authentication - Have not started
  Admin Dashboard - Have not started


**Features**
The e-commerce project has the following features:
Add products to cart
Update cart quantity or remove products from cart
Checkout and place an order
View order history


**Containerization & Deployment**
 Deployment 
  Backend: Render
  Frontend: Netlify
  
**Quick Start**

Clone the repository to your local machine.

Install the necessary dependencies by running npm install in both the client and server directories.
Ready to have MongoDB, Stripe accounts

Create a .env file in the server directory and add the following variables:

ECOM_DB_URI=<your MongoDB URI>
ECOM_NS=<your MongoDB collection>
STRIPE_SECRET_KEY=<Stripe secret key>

Replace <your MongoDB URI> with the URI of your MongoDB database and <your JWT secret> with a secret string of your choice.

Run the server by running npm start in the server directory.

Run the client by running npm start in the client directory.

The client should automatically open in your browser at http://localhost:5000/. If it does not, open your browser and navigate to http://localhost:5000/.

**Contribute:**
Fork the repository.
Create a new branch for your changes.
Make your changes and commit them.
Push your changes to your forked repository.
Create a pull request to merge your changes into the main repository.
