# Learning Management System (LMS) - Replit Guide

## Overview

This is a modern Learning Management System (LMS) built as a full-stack web application featuring a React frontend with TypeScript, Express.js backend, and PostgreSQL database. The system focuses on course management with integrated YouTube playlist functionality for video-based learning.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and build process

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Data Layer**: In-memory storage with interface for database integration

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured but not actively used yet)
- **Migrations**: Drizzle Kit for schema management
- **Current State**: Uses in-memory storage, ready for PostgreSQL integration

## Key Components

### Database Schema
The application defines several core entities:
- **Users**: Authentication and user management
- **Courses**: Course metadata with YouTube playlist integration
- **Students**: Student profiles and enrollment tracking
- **Teachers**: Instructor profiles and course assignments
- **Activities**: Student activity tracking
- **Metrics**: Dashboard analytics and statistics

### UI Component System
- Built on Radix UI primitives with custom styling
- Comprehensive component library including cards, forms, navigation, and data display
- Responsive design patterns for mobile, tablet, and desktop
- Dark mode support with CSS custom properties

### Course Management
- YouTube playlist integration for video content
- Course categorization and filtering
- Student enrollment tracking
- Progress monitoring and analytics

### Dashboard Features
- Real-time metrics display (teachers, students, sales)
- Popular courses visualization
- Recent student activity tracking
- Reports and analytics widgets

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express.js routes handle HTTP requests
3. **Storage Layer**: Currently uses in-memory storage with plans for PostgreSQL
4. **Response Handling**: JSON responses with proper error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component set
- **Styling**: Tailwind CSS with custom design tokens
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icon library
- **Utilities**: Date-fns for date handling, class-variance-authority for component variants

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Validation**: Zod schema validation
- **Sessions**: Express sessions with PostgreSQL store

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type safety across the stack
- **Linting**: ESLint and TypeScript compiler checks

## Deployment Strategy

### Development Mode
- Vite dev server for frontend with HMR
- TSX for running TypeScript backend in development
- Concurrent development with proxy setup

### Production Build
- Frontend: Vite build creating optimized static assets
- Backend: ESBuild bundling server code for Node.js deployment
- Static file serving through Express.js

### Database Setup
- Drizzle migrations for schema deployment
- Environment-based configuration for database connections
- Ready for PostgreSQL deployment (currently using in-memory storage)

### Key Architectural Decisions

1. **Monorepo Structure**: Client, server, and shared code in a single repository for easier development
2. **TypeScript Everywhere**: Full-stack type safety with shared types between frontend and backend
3. **Modern React Patterns**: Hooks-based components with proper separation of concerns
4. **Database-Ready**: Configured for PostgreSQL but using in-memory storage for development simplicity
5. **Component-First UI**: Reusable component library based on design system principles
6. **YouTube Integration**: Direct playlist embedding for seamless video learning experience

The application is designed to be easily extensible, with clear separation between data, business logic, and presentation layers. The in-memory storage can be easily replaced with PostgreSQL by implementing the existing storage interface.