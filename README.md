LearnHub-Dashboard

LearnHub-Dashboard is a full-stack web application dashboard for managing and visualizing data in an online learning platform. It delivers a seamless user experience with client-side navigation, reusable UI components, and efficient data fetching from well-defined backend APIs. Monitor courses, students, and teachers with a responsive, modern interface.
Table of Contents

Overview
Features
Tech Stack
Architecture
Installation
Usage
Contributing
License

Overview
LearnHub-Dashboard streamlines the management of an online learning platform. Built with modern web technologies, it combines a responsive React frontend with an Express.js backend. Shared data schemas ensure consistency, while in-memory storage simplifies development, with plans for PostgreSQL integration in production.
Features

📊 Dynamic Dashboard: Visualize key metrics like teacher and student counts with intuitive cards.
📚 Course Management: Browse and view detailed course information effortlessly.
🚀 Smooth Navigation: Client-side routing for fast, reload-free page transitions.
⚡ Efficient Data Fetching: TanStack Query ensures fast data retrieval and caching.
🎨 Consistent UI: Reusable Shadcn/UI components for a polished, uniform look.
🛠️ Developer-Friendly: Hot Module Replacement and in-memory storage for rapid iteration.
🔧 Scalable Design: Ready for production with shared schemas for database integration.

Tech Stack

Frontend:

React v18
TypeScript v5
Shadcn/UI (customizable components)
TanStack Query (data fetching)
Wouter (client-side routing)
Tailwind CSS (styling)
Framer Motion (animations)


Backend:

Express.js (API server)
Zod (data validation)
Drizzle ORM (schema definitions)


Build Tools:

Vite (fast dev server and builds)
ESBuild (backend bundling)


Data Storage:

In-Memory (MemStorage) for development
PostgreSQL (planned for production)



Architecture
The application follows a modular, scalable design:
graph TD
    A[Shared Data Definitions] --> B[Client-Side Navigation<br>(Wouter)]
    A --> C[Reusable UI Blocks<br>(Shadcn/UI)]
    A --> D[Server State Management<br>(TanStack Query)]
    A --> E[In-Memory Storage<br>(MemStorage)]
    A --> F[Backend API Routes<br>(Express)]
    B --> G[App Shell Layout]
    C --> G
    D --> F
    E --> F
    F --> D
    G --> B
    G --> C


Shared Data Definitions: Zod and Drizzle ORM ensure consistent data structures.
Client-Side Navigation: Wouter for smooth page transitions.
Reusable UI Blocks: Shadcn/UI and custom components for a cohesive UI.
Server State Management: TanStack Query for efficient data handling.
In-Memory Storage: MemStorage for quick development data.
Backend API Routes: Express.js endpoints for data communication.
App Shell Layout: Persistent sidebar and header for consistent UX.

Installation

Clone the Repository:
git clone https://github.com/your-username/LearnHub-Dashboard.git
cd LearnHub-Dashboard


Install Dependencies:
npm install


Run Development Server:
npm run dev

Access at http://localhost:5000 with live reloading via Vite.

Build for Production:
npm run build

Outputs optimized files to the dist folder.

Start Production Server:
npm run start

Serves the app from dist.


Usage

Development:

Run npm run dev for a live-reloading dev server.
Edit files in client/src for instant UI updates.
Test APIs (e.g., /api/metrics, /api/courses) with Postman or curl.


Data Management:

server/storage.ts (MemStorage) seeds sample data for development.
Data validated via shared/schema.ts using Zod.


Production:

Build with npm run build and deploy the dist folder.
Use npm run start for production serving.



Contributing
We welcome contributions! To get started:

Fork the repository.
Create a feature branch:git checkout -b feature/your-feature


Commit changes:git commit -m "Add your feature"


Push to your branch:git push origin feature/your-feature


Open a Pull Request.

Ensure code follows TypeScript standards and includes tests where applicable.
License
© 2025 GitHub, Inc. Licensed under the MIT License.
