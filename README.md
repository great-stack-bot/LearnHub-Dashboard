LearnHub-Dashboard
LearnHub-Dashboard is a full-stack web application dashboard designed for managing and visualizing data in an online learning platform. It provides a seamless user experience with client-side navigation, reusable UI components, and efficient data fetching from well-defined backend APIs. The dashboard displays key metrics and information about courses, students, and teachers, making it easy to monitor platform performance.
Table of Contents

Overview
Features
Tech Stack
Project Architecture
Installation
Usage
Contributing
License

Overview
LearnHub-Dashboard is built to streamline the management of an online learning platform by combining a modern frontend with a robust backend. It leverages TypeScript, React, and Express to deliver a fast, scalable, and maintainable application. Shared data definitions ensure consistency, while in-memory storage simplifies development, with plans for a PostgreSQL database in production.
Features

Dynamic Dashboard: Displays key metrics like total teachers, students, and course enrollment with visual cards.
Course Management: Browse and view detailed course information using responsive, reusable UI components.
Client-Side Navigation: Smooth page transitions without full reloads for a fluid user experience.
Data Fetching: Efficiently retrieves and caches data using TanStack Query for fast performance.
Consistent UI: Reusable components ensure a polished and uniform look across the application.
Development-Friendly: In-memory storage and Hot Module Replacement (HMR) enable rapid iteration.
Scalable Design: Shared data schemas prepare the app for easy integration with a persistent database.

Tech Stack

Frontend:

React: For building interactive user interfaces.
TypeScript: Ensures type safety and reduces errors.
Shadcn/UI: Provides customizable, accessible UI components.
TanStack Query: Manages server-state data fetching and caching.
Wouter: Handles lightweight client-side routing.
Tailwind CSS: Enables utility-first styling for rapid UI development.
Framer Motion: Adds smooth animations to components.


Backend:

Express.js: Powers API endpoints for data communication.
Zod: Validates data for consistency and security.
Drizzle ORM: Defines database schemas for future production use.


Build Tools:

Vite: Provides fast development and optimized production builds.
ESBuild: Bundles backend code efficiently.


Data Storage:

In-Memory Storage (MemStorage): Temporary storage for development and testing.
PostgreSQL: Planned for persistent storage in production.



Project Architecture
The application follows a modular structure to ensure scalability and maintainability:
flowchart TD
    A0["Shared Data Definitions"]
    A1["Client-Side Navigation (Wouter)"]
    A2["Reusable UI Blocks (Shadcn/UI & Custom)"]
    A3["Server State Management (TanStack Query)"]
    A4["In-Memory Data Storage (MemStorage)"]
    A5["Backend API Routes (Express)"]
    A6["Application Shell Layout"]
    A0 -->|"Defines data types"| A2
    A0 -->|"Defines API schema"| A3
    A0 -->|"Structures stored data"| A4
    A0 -->|"Ensures API response types"| A5
    A1 -->|"Renders views within"| A6
    A2 -->|"Displays typed data"| A6
    A3 -->|"Queries API"| A5
    A4 -->|"Provides data to"| A5
    A5 -->|"Serves data to"| A3
    A6 -->|"Composes with"| A2
    A6 -->|"Uses navigation links"| A1


Shared Data Definitions (shared/schema.ts): Uses Zod and Drizzle ORM to define data structures for consistency across frontend and backend.
Client-Side Navigation: Wouter enables smooth, reload-free page transitions.
Reusable UI Blocks: Combines Shadcn/UI and custom components for a consistent UI.
Server State Management: TanStack Query handles data fetching, caching, and error states.
In-Memory Data Storage (server/storage.ts): Temporary storage for development, seeded with sample data.
Backend API Routes (server/routes.ts): Express.js endpoints for frontend-backend communication.
Application Shell Layout (client/src/components/layout/main-layout.tsx): Provides a consistent layout with a persistent sidebar and header.

Installation
To set up LearnHub-Dashboard locally, follow these steps:

Clone the Repository:
git clone https://github.com/your-username/LearnHub-Dashboard.git
cd LearnHub-Dashboard


Install Dependencies:
npm install


Run in Development Mode:
npm run dev

This starts the Vite development server with HMR, accessible at http://localhost:5000.

Build for Production:
npm run build

This generates optimized files in the dist folder.

Start the Production Server:
npm run start

This serves the optimized application from dist.


Usage

Development:

Use npm run dev to start the development server with live reloading.
Edit frontend files in client/src for instant UI updates via HMR.
Test API endpoints (e.g., /api/metrics, /api/courses) using tools like Postman or curl.


Data Management:

The MemStorage class (server/storage.ts) seeds sample data for courses, metrics, and more.
Data is validated using schemas in shared/schema.ts with Zod.


Production:

Run npm run build to create optimized assets.
Deploy the dist folder to a web server and use npm run start to serve the application.



Contributing
Contributions to LearnHub-Dashboard are welcome! To contribute:

Fork the repository.
Create a feature branch:git checkout -b feature/your-feature-name


Commit your changes:git commit -m "Add your feature description"


Push to your branch:git push origin feature/your-feature-name


Open a Pull Request on GitHub.

Please ensure your code follows the project's structure, adheres to TypeScript types, and includes relevant tests.
License
© 2025 GitHub, Inc. Licensed under the MIT License.
