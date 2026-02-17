# Real-Time-Task-Collaboration-Board
# Real-Time Task Collaboration Board

## Author

**G Manoj Reddy**
Python Full Stack Developer
Hyderabad, India

---

## Project Overview

This project is a real-time collaborative task management board similar to Trello.
Multiple users can connect to the same board and see updates instantly when tasks are created.

The main objective of this project is to demonstrate real-time synchronization using WebSockets instead of traditional request-response APIs.

---

## Tech Stack

### Frontend

* React (Vite)
* JavaScript
* WebSocket API

### Backend

* Django
* Django REST Framework
* Django Channels

### Database

* SQLite (development)

### Realtime Communication

* WebSockets
* Redis (Pub/Sub message broker)

---

## System Architecture

React Client communicates with Django in two ways:

1. REST API (for CRUD operations)
2. WebSocket (for real-time updates)

Flow:

Client → WebSocket → Django Channels Consumer → Redis Channel Layer → Broadcast to all Clients

Redis is used as a message broker to distribute events to all connected users in the same board.

---

## Key Features

* Multi-user real-time task board
* Instant task synchronization
* Persistent WebSocket connection
* Group broadcasting
* No page refresh required
* Collaborative environment simulation

---

## How Real-Time Update Works

1. User adds a task in the frontend
2. React sends a WebSocket message to the Django backend
3. Django Channels consumer receives the message
4. Message is published to Redis channel layer
5. Redis broadcasts the event to all connected clients
6. All users instantly see the new task

This ensures low latency communication and avoids continuous polling.

---

## Why WebSockets Instead of REST Polling?

REST polling requires the client to repeatedly request the server for updates, which increases:

* Server load
* Network usage
* Latency

WebSockets maintain a persistent connection allowing the server to push updates instantly to clients.

---

## Project Structure

trello_project/
│
├── backend/
│   ├── users/
│   ├── boards/
│   ├── tasks/
│   ├── realtime/
│
├── frontend/
│   ├── src/
│   ├── components/
│
└── README.md

---

## Setup Instructions

### 1. Clone Repository

git clone <your-github-repo-link>

### 2. Backend Setup

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

Run migrations:
python manage.py migrate

Start WebSocket server:
daphne backend.asgi:application

### 3. Redis Setup (WSL)

Start Ubuntu and run:
redis-server

### 4. Frontend Setup

cd frontend
npm install
npm run dev

Open:
http://localhost:5173

---

## Learning Outcomes

* Implemented real-time systems using WebSockets
* Understood pub-sub architecture
* Learned Django Channels consumers and groups
* Used Redis as a channel layer
* Built a collaborative multi-client application

---

## Future Improvements

* User authentication (JWT login)
* Multiple boards
* Task assignment
* Drag & drop lists
* Database persistence for tasks
* Deployment on cloud server

---

## Conclusion

This project demonstrates how real-time collaborative applications work internally.
Instead of a simple CRUD application, this system uses event-driven architecture with WebSockets and Redis to synchronize multiple users simultaneously.
