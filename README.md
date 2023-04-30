# Welcome to MERN Login System

Hello everyone, In this project, we are going to create **MERN Stack App with Login System**. 
We will take a look at how to create login, registration, profile, reset password routes and learn
how to send Mail from the Node.js backend application.

## Working with the Project

Download this project from above link. Create two configaration files into the project.
First in the client and second in the server.

In the Client Folder create .env file and put this code inside it.

.env
```
REACT_APP_BASE_URL='<server_domain>' # example 'http://localhost:8080'
```


After that create .env file in the Server Folder and put the below code inside it.

.env
```
PORT="8080"
ACCESS_TOKEN_SECRET="<Token secret>"
EMAIL="test@gmail.com"  # testing email & password
PASSWORD="qztwxvrbwgedhfkw"
MONGODB_ATLAS_URL="<MONGODB_ATLAS_URI>"
```

> **Note:** The **MONGODB_ATLAS_URI** is important to work this project.

Now, create all these variables in the project and make sure you set MONGODB_ATLAS_URI variable.
Otherwise, the project will not work.
