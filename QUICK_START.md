# Quick Start Guide - Deployment Order

## ⚠️ IMPORTANT: Configuration Order

**Configure Judge0 FIRST, then run docker-compose. You do NOT need to run Judge0 separately!**

## Step 1: Configure Judge0 (Required)

Edit the Judge0 configuration file BEFORE running docker-compose:

```bash
# Edit the Judge0 configuration
nano judge0-v1.13.1/judge0.conf
# or
notepad judge0-v1.13.1/judge0.conf  # Windows
```

**Key settings to update:**

1. **REDIS_PASSWORD** (line ~199): Change from `1122334455` to a strong password
2. **POSTGRES_PASSWORD** (line ~223): Change from `1122334455` to a strong password

**Example:**
```conf
REDIS_PASSWORD=your-strong-redis-password-here
POSTGRES_PASSWORD=your-strong-db-password-here
```

**Why first?** Docker Compose mounts this file into Judge0 containers at startup, so it must be configured correctly before running `docker-compose up`.

## Step 2: Configure Application Environment

```bash
# Copy environment template
cp env.example .env

# Edit .env file
nano .env
```

Update at minimum:
- `JWT_SECRET` - Use a strong random string
- `DB_PASSWORD` - Use a strong password
- `CORS_ORIGINS` - Set your domain(s)

## Step 3: Run Docker Compose

Everything is ready! Run one command:

```bash
docker-compose up -d
```

This will:
✅ Start Judge0 (server, workers, database, Redis)
✅ Start your application database
✅ Start your backend API
✅ Start your frontend

**All services start together - no need to run Judge0 separately!**

## Step 4: Verify

Check if everything is running:

```bash
docker-compose ps
```

You should see all services running:
- judge0-server
- judge0-workers
- judge0-db
- judge0-redis
- app-db
- leetlab-backend
- leetlab-frontend

Access your application:
- Frontend: http://localhost
- Backend: http://localhost:8080
- Judge0: http://localhost:2358

## Troubleshooting

### "Judge0 not responding"

If Judge0 isn't working, check the configuration file:

```bash
# Verify Judge0 config
cat judge0-v1.13.1/judge0.conf | grep -E "REDIS_PASSWORD|POSTGRES_PASSWORD"
```

Make sure passwords are set (not empty).

### "Port already in use"

If you see port conflicts, either:
1. Stop the conflicting service
2. Change ports in `.env` file

### Can't connect to Judge0

Check Judge0 logs:
```bash
docker-compose logs judge0-server
```

## Summary

**Order of operations:**
1. ✅ Configure `judge0-v1.13.1/judge0.conf` (change passwords)
2. ✅ Configure `.env` file
3. ✅ Run `docker-compose up -d`
4. ✅ Done! Everything runs together

**You do NOT need to:**
- ❌ Run Judge0 separately from `judge0-v1.13.1/docker-compose.yml`
- ❌ Start Judge0 before running docker-compose
- ❌ Manually start services in a specific order

Everything is automated in the main `docker-compose.yml`!

