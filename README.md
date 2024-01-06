# Job Portal Website

This project is a job portal website that enables recruiters to post and manage job listings while providing job seekers with a user-friendly platform to find and apply for suitable roles.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Screenshots](#screenshots)

## Introduction

The Job Portal Website is built with an MVC (Model View Controller) architecture using ExpressJS. It separates data handling, interface rendering, and routing control to ensure a scalable and maintainable codebase.

## Features

- **MVC Architecture:** Utilizes ExpressJS for a clean separation of concerns.
- **Server-Side Templating:** Implements EJS for dynamic HTML generation based on server data.
- **ES6 Modules:** Maintains code modularity and organization.
- **User Sessions:** Manages user sessions and tracks the last visit using Express sessions.
- **In-Memory Data Structures:** Uses in-memory data structures for user and job management operations.
- **Login and Registration System:** Allows recruiters to create and log into their accounts.
- **Job Listings:** Enables job seekers to view, apply, and provides details of job listings.
- **Recruiter Operations:** Allows recruiters to create, update, delete, and view job postings with field validation.
- **Applicant Tracking:** Enables recruiters to view all applicants, including their submitted resume files.
- **Email System:** Implements an email system to send confirmation emails to applicants after applying.
- **Middleware Usage:** Incorporates middleware for authentication, tracking last visit, file upload processing, and sending confirmation emails.
- **File Upload:** Stores resume files on the server using file upload middleware.
- **Code Quality:** Maintains high-quality, original code with comprehensive documentation.

## Requirements

- Node.js and npm installed
- Express installed and running

## Project Structure

- **src:** Contains the source code.
  - **controllers:** Handles application logic.
  - **middlewares:** Contains middleware functions.
  - **models:** Defines data models.
  - **public:** Stores static assets.
  - **routes:** Defines application routes.
  - **views:** Contains EJS templates.
- **uploads:** Stores uploaded resume files.
- **tests:** Contains test files.

## Technologies Used

- Node.js
- ExpressJS
- EJS

## Contributing

-Feel free to contribute! Fork the repository and submit a pull request.

## Screenshots
