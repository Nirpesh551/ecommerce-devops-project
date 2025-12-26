# E-Commerce DevOps Project

A 3-tier e-commerce application built to demonstrate DevOps skills for entry-level roles.

## Tech Stack
- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express + JWT authentication
- **Database**: MongoDB
- **DevOps Tools**: Docker (multi-stage builds), Docker Compose, Nginx for production serving

## Project Structure
- `/backend`: Node/Express API with user auth and product routes
- `/frontend`: React single-page app with routing and product display
- `docker-compose.yml`: Orchestrates mongo, backend, and frontend (Nginx) services
- Dockerfiles: Multi-stage for efficient production images
- Nginx config: Handles SPA routing (no 404 on direct/refresh links)

## Key DevOps Features Demonstrated
- Full containerization of frontend (built to static + served by Nginx) and backend
- Multi-container orchestration with Docker Compose
- Persistent MongoDB volume
- Production-ready React serving with client-side routing support
- Real deployment experience on Ubuntu server via SSH

## How to Run (Anyone Can Test It Locally)
```bash
git clone https://github.com/Nirpesh551/ecommerce-devops-project.git
cd ecommerce-devops-project
docker compose up --build -d

# Seed sample products
curl -X POST http://localhost:5000/api/products/seed
