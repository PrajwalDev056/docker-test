# Docker Test Project

This project consists of a backend built with NestJS and a frontend built with Next.js. You can run the entire project using Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

### Running the Project with Docker Compose

1. Clone the repository:

```bash
git clone <repository-url>
cd docker-test
```

2. Build and start the containers:

```bash
docker-compose up --build
```

3. Open your browser and navigate to:

- Backend: [http://localhost:8000](http://localhost:8000)
- Frontend: [http://localhost:3001](http://localhost:3001)

### Running the Backend with Docker

1. Navigate to the backend directory:

```bash
cd backend
```

2. Build the Docker image:

```bash
docker build -t backend-app .
```

3. Run the Docker container:

```bash
docker run -p 8000:8000 backend-app
```

4. Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

### Running the Frontend with Docker

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Build the Docker image:

```bash
docker build -t frontend-app .
```

3. Run the Docker container:

```bash
docker run -p 3001:80 frontend-app
```

4. Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Additional Information

- The backend is built using NestJS and is located in the `backend` directory.
- The frontend is built using Next.js and is located in the `frontend` directory.
- The `docker-compose.yml` file is used to orchestrate the multi-container Docker application.

## License

This project is licensed under the MIT License.
