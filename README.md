# CROWDSOURCE INVESTMENT WEB APPLICATION

Crowdsource is a full-stack web application that connects innovative entrepreneurs with visionary investors. It provides a platform for users to browse, submit, and interact with groundbreaking ideas across various industries.

## Features
* User authentication (login and registration)
* Browse and search innovative ideas
* Submit new ideas
* Vote and comment on ideas
* Responsive design for various screen sizes

## Technologies Used

### Frontend
* React
* TypeScript
* React Router for navigation
* Tailwind CSS for styling
* React Icons for iconography

### Backend
* Node.js
* Express.js
* Prisma ORM
* PostgreSQL (via Prisma Accelerate)
* JSON Web Tokens (JWT) for authentication

## Project Structure

### Frontend Components
* `App.tsx`: Main routing component
* `Home.tsx`: Landing page
* `Login.tsx`: User login page
* `Register.tsx`: User registration page
* `Ideas.tsx`: Page for browsing and interacting with ideas
* `IdeaPage.tsx`: Page for submitting new ideas
* `About.tsx`: Information about Crowdspace
* `Contact.tsx`: Contact form and information

### Backend Components
* `app.ts`: Main Express application setup
* `authController.ts`: Handles user authentication
* `ideaController.ts`: Manages idea-related operations
* `votingController.ts`: Handles voting functionality
* `commentController.ts`: Manages comment-related operations
* `validators.ts`: Input validation functions
* `authMiddleware.ts`: JWT authentication middleware

## Getting Started

To run this project locally:

1. Clone the repository
```bash
`https://github.com/ocharoh1/CROWDSOURCE-INVESTMENT-APP.git`
```
2. Install dependencies for both frontend and backend using pnpm:
   *Frontend*
    ```bash
cd investment-frontend
```
 ```bash
 pnpm install
 ```
*Backend*
 ```bash
cd server 
```
 ```bash
 pnpm install
 ```

3. Set up environment variables:
   * Create a `.env` file in the backend directory
   * Add the following variables:
```env
DATABASE_URL="your_prisma_database_url"
PULSE_API_KEY="your_prisma_pulse_api_key"
PORT=5000
JWT_SECRET="your_jwt_secret"
```

4. Start the backend server:
```bash
 pnpm run dev
```

5. Start the frontend development server:
```bash
pnpm run dev
```

## API Endpoints
* `/api/users`: User authentication routes
* `/api/ideas`: Idea management routes
* `/api/votes`: Voting routes
* `/api/comments`: Comment routes

## Database Schema

The project uses Prisma ORM with a PostgreSQL database. The main models include:
* User
* Idea
* Vote
* Comment

## Authentication

The application uses JWT for authentication. Tokens are stored in HTTP-only cookies for security.

## Contributing

Contributions to Crowdsource are welcome. Please ensure that you follow the existing code style and structure when submitting pull requests.

## Package Management

This project uses pnpm as the package manager for both frontend and backend. pnpm offers several advantages:
* Faster installation times
* Efficient disk space usage
* Strict dependency management
* Compatible with npm workflows

To install pnpm globally:
```bash
npm install -g pnpm
```

## Deployment
deployment instructions 
