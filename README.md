# Expense Tracker App

Welcome to the Expense Tracker App, a comprehensive solution for managing and analyzing your personal finances. The application is divided into two main components: the frontend built with React and TypeScript, and the backend powered by Java Spring.

## Screenshots

Here are some screenshots of the Expense Tracker App to give you a glimpse of its user interface and features:

### Dashboard

![Dashboard](![image](https://github.com/DKowalski111/ExpenseTracker/assets/91938265/ee64b66d-0ffd-4c69-a1ef-273e919822ae))

Describe the dashboard and any key features visible in the screenshot.

### Expenses

![Expenses](![image](https://github.com/DKowalski111/ExpenseTracker/assets/91938265/a33731c4-36c8-46d1-bfa0-346249442819))

### Analytics

![Analytics](![image](https://github.com/DKowalski111/ExpenseTracker/assets/91938265/048f478b-8b6a-4c22-bbb3-e10a3929aaa8))

## Frontend

### Introduction

The frontend of the Expense Tracker App is developed using React and TypeScript. It provides a user-friendly interface for users to interact with their expenses and gain insights into their financial habits.

#### Key Features

- **Responsive Design**: Access your financial data seamlessly across devices.
- **Intuitive User Interface**: An easy-to-use interface for managing expenses.
- **Interactive Charts**: Visualize your spending patterns with insightful charts.

### Getting Started

Follow the instructions in the [Frontend Getting Started](FrontEnd/README.md) guide to set up and run the frontend application on your local machine.

## Backend

### Introduction

The backend of the Expense Tracker App is powered by Java Spring, providing a robust and scalable server-side architecture to handle data processing and storage. The application uses MySQL as the relational database to efficiently manage expense data.

#### Key Features

- **RESTful API**: Access and manage expense data through a RESTful API.
- **Database Integration**: Store and retrieve data efficiently using MySQL.

### Getting Started

Follow the instructions in the [Backend Getting Started](BackEnd/README.md) guide to set up and run the backend server on your local machine. Ensure that you have MySQL installed and configured.

### Technologies Used

- **Java Spring**: A powerful and versatile Java-based framework.
- **MySQL**: A relational database management system.

### Database Configuration

The backend application requires a MySQL database. Configure your database connection in the `application.properties` file located in the `src/main/resources` directory. Modify the following properties with your MySQL database information:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
