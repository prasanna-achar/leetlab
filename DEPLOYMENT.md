# LeetLab Deployment Guide with Judge0

This guide will help you deploy LeetLab application with Judge0 code execution service.

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)
- At least 4GB of RAM available
- Ports 80, 8080, 2358, and 5432 available (or configure different ports)

## Quick Start

**Important**: You do NOT need to run Judge0 separately! Everything is configured to run together via Docker Compose. However, you MUST configure the settings BEFORE running docker-compose.

### Step-by-Step Deployment

### 1. Clone and Setup

```bash
git clone <your-repo-url>
cd Leetlab
```

### 2. Configure Judge0 (REQUIRED BEFORE docker-compose)

**⚠️ DO THIS FIRST** - Edit `judge0-v1.13.1/judge0.conf` file:

The Judge0 configuration file needs to be set up before running docker-compose. Key settings to check/update:

- **REDIS_PASSWORD**: Set a strong password (currently: `1122334455` - **change this!**)
- **POSTGRES_PASSWORD**: Set a strong password (currently: `1122334455` - **change this!**)
- **POSTGRES_USER**: Default is `judge0` (you can keep or change)
- **POSTGRES_DB**: Default is `judge0` (you can keep or change)
- **REDIS_HOST**: Already set to `redis` (for Docker networking)
- **POSTGRES_HOST**: Already set to `db` (for Docker networking)

**Why configure first?** The docker-compose.yml mounts this config file into Judge0 containers, so it must be correct before starting services.

### 3. Configure Environment Variables

Copy the example environment file and customize it:

```bash
cp env.example .env
```

Edit `.env` file with your preferred settings:
- **JWT_SECRET**: Set a strong secret key
- **DB_PASSWORD**: Set your application database password
- **CORS_ORIGINS**: Set allowed origins (comma-separated)

### 4. Deploy with Docker Compose

**Now you're ready!** Run docker-compose - it will start Judge0 AND your application together:

```bash
docker-compose up -d
```

This single command will start ALL services:
- Judge0 server (port 2358)
- Judge0 workers
- Judge0 PostgreSQL database
- Judge0 Redis
- LeetLab application database (port 5432)
- Backend API (port 8080)
- Frontend (port 80)

**Note**: You don't need to run Judge0 separately from `judge0-v1.13.1/docker-compose.yml` - everything is integrated!

### 5. Run Database Migrations

The backend will automatically run Prisma migrations on startup. If you need to run them manually:

```bash
docker-compose exec backend npx prisma migrate deploy
```

### 6. Verify Deployment

- Frontend: http://localhost
- Backend API: http://localhost:8080
- Judge0 API: http://localhost:2358

Check logs:

```bash
docker-compose logs -f
```

Check specific service:

```bash
docker-compose logs -f backend
docker-compose logs -f judge0-server
```

## Service Details

### Judge0 Services

- **judge0-server**: Main Judge0 API server
- **judge0-workers**: Background workers for processing submissions
- **judge0-db**: PostgreSQL database for Judge0
- **judge0-redis**: Redis cache for Judge0

### Application Services

- **app-db**: PostgreSQL database for LeetLab application
- **backend**: Node.js Express API server
- **frontend**: React frontend served by Nginx

## Configuration

### Changing Ports

Edit `.env` file:
```
BACKEND_PORT=3000
FRONTEND_PORT=8080
```

### Updating Judge0 Configuration

Edit `judge0-v1.13.1/judge0.conf` and restart Judge0 services:

```bash
docker-compose restart judge0-server judge0-workers
```

### Database Management

Access the application database:

```bash
docker-compose exec app-db psql -U postgres -d leetlab
```

Access Judge0 database:

```bash
docker-compose exec judge0-db psql -U judge0 -d judge0
```

## Production Deployment

### 1. Security Checklist

- [ ] Change all default passwords in `judge0.conf`
- [ ] Set a strong `JWT_SECRET` in `.env`
- [ ] Use strong database passwords
- [ ] Configure proper CORS origins in backend
- [ ] Set up SSL/TLS certificates (use a reverse proxy like Nginx)
- [ ] Enable firewall rules
- [ ] Set up backup strategies for databases

### 2. Environment Variables for Production

Create a `.env` file with production values:

```env
BACKEND_PORT=8080
FRONTEND_PORT=80

DB_USER=leetlab_user
DB_PASSWORD=<strong-password>
DB_NAME=leetlab_prod

JWT_SECRET=<very-strong-random-secret>

# Optional: Use external Judge0 instance
# JUDGE0_API=https://your-judge0-instance.com
```

### 3. Using External Judge0 Instance

If you prefer to use Judge0 cloud or a separate instance:

1. Update `backend/src/libs/Judge0.js` if needed
2. Set `JUDGE0_API` environment variable in backend service
3. Remove Judge0 services from `docker-compose.yml` (optional)

### 4. Reverse Proxy Setup (Recommended)

Use Nginx as a reverse proxy for SSL/TLS:

```nginx
server {
    listen 443 ssl;
    server_name yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /api {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Troubleshooting

### Judge0 Not Responding

1. Check if Judge0 server is running:
   ```bash
   docker-compose ps judge0-server
   ```

2. Check Judge0 logs:
   ```bash
   docker-compose logs judge0-server
   ```

3. Verify connectivity:
   ```bash
   docker-compose exec backend curl http://judge0-server:2358/about
   ```

### Database Connection Issues

1. Check database health:
   ```bash
   docker-compose ps app-db
   ```

2. Verify connection string in backend logs:
   ```bash
   docker-compose logs backend | grep DATABASE_URL
   ```

### Frontend Not Loading

1. Check if frontend container is running:
   ```bash
   docker-compose ps frontend
   ```

2. Check Nginx logs:
   ```bash
   docker-compose logs frontend
   ```

### Port Already in Use

If ports are already in use, either:
1. Stop conflicting services
2. Change ports in `.env` file

## Updating the Application

```bash
# Pull latest changes
git pull

# Rebuild and restart services
docker-compose up -d --build

# Run migrations if needed
docker-compose exec backend npx prisma migrate deploy
```

## Backup and Restore

### Backup Databases

```bash
# Application database
docker-compose exec app-db pg_dump -U postgres leetlab > backup-leetlab-$(date +%Y%m%d).sql

# Judge0 database
docker-compose exec judge0-db pg_dump -U judge0 judge0 > backup-judge0-$(date +%Y%m%d).sql
```

### Restore Databases

```bash
# Application database
docker-compose exec -T app-db psql -U postgres leetlab < backup-leetlab-YYYYMMDD.sql

# Judge0 database
docker-compose exec -T judge0-db psql -U judge0 judge0 < backup-judge0-YYYYMMDD.sql
```

## Monitoring

Monitor resource usage:

```bash
docker stats
```

View all logs:

```bash
docker-compose logs -f
```

## Stopping Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (⚠️ deletes data)
docker-compose down -v
```

## Support

For issues with:
- **LeetLab**: Check backend/frontend logs
- **Judge0**: Check Judge0 documentation at https://github.com/judge0/judge0
- **Docker**: Check Docker Compose documentation

