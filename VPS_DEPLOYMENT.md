# Deploying LeetLab on Hostinger VPS

## Overview

When deploying on Hostinger VPS (or any VPS), you **do NOT need to configure Judge0 separately**. The docker-compose.yml handles everything. However, there are some VPS-specific considerations.

## Step-by-Step Deployment on Hostinger VPS

### 1. Connect to Your VPS

```bash
ssh root@your-vps-ip
# or
ssh your-username@your-vps-ip
```

### 2. Install Docker & Docker Compose (if not already installed)

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose-plugin -y

# Verify installation
docker --version
docker compose version
```

### 3. Upload Your Project

**Option A: Using Git (Recommended)**
```bash
# Install Git
sudo apt install git -y

# Clone your repository
git clone <your-repo-url>
cd Leetlab
```

**Option B: Using SCP/SFTP**
```bash
# From your local machine
scp -r Leetlab root@your-vps-ip:/root/
```

### 4. Configure Judge0 (MUST DO BEFORE docker-compose)

```bash
# Edit Judge0 configuration
nano judge0-v1.13.1/judge0.conf
```

**Important settings:**
- Change `REDIS_PASSWORD` (line ~199) - use a strong password
- Change `POSTGRES_PASSWORD` (line ~223) - use a strong password
- Keep `REDIS_HOST=redis` and `POSTGRES_HOST=db` (for Docker networking)

### 5. Configure Application Environment

```bash
# Copy environment template
cp env.example .env

# Edit environment file
nano .env
```

**Update these values:**
```env
BACKEND_PORT=8080
FRONTEND_PORT=80

DB_USER=postgres
DB_PASSWORD=your-strong-password-here
DB_NAME=leetlab

JWT_SECRET=your-very-strong-jwt-secret-here

# If you have a domain, use it here
CORS_ORIGINS=http://your-domain.com,https://your-domain.com

# If using IP address only
CORS_ORIGINS=http://your-vps-ip,http://localhost
```

### 6. Configure Firewall (Important!)

Hostinger VPS may have firewall rules. Configure UFW:

```bash
# Allow SSH (very important!)
sudo ufw allow 22/tcp

# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow backend port (if you want to expose it directly)
sudo ufw allow 8080/tcp

# Allow Judge0 API port (optional, usually not exposed externally)
# sudo ufw allow 2358/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

### 7. Deploy Everything

```bash
# Build and start all services
docker compose up -d

# Check if everything is running
docker compose ps

# View logs
docker compose logs -f
```

### 8. Verify Deployment

- **Frontend**: `http://your-vps-ip` or `http://your-domain.com`
- **Backend**: `http://your-vps-ip:8080` (if exposed) or via frontend proxy
- **Judge0**: Only accessible internally (not exposed externally)

### 9. Set Up Domain (Optional but Recommended)

If you have a domain pointing to your VPS IP:

1. **Update CORS in `.env`:**
   ```env
   CORS_ORIGINS=https://yourdomain.com,http://yourdomain.com
   ```

2. **Restart backend:**
   ```bash
   docker compose restart backend
   ```

3. **Set up SSL with Let's Encrypt (Recommended):**
   ```bash
   # Install Certbot
   sudo apt install certbot python3-certbot-nginx -y
   
   # Get certificate (if using Nginx reverse proxy)
   sudo certbot --nginx -d yourdomain.com
   ```

## VPS-Specific Considerations

### Resource Requirements

Judge0 is resource-intensive. Minimum recommended:
- **RAM**: 4GB minimum, 8GB recommended
- **CPU**: 2 cores minimum, 4 cores recommended
- **Storage**: 20GB+ free space

Check resources:
```bash
free -h
df -h
nproc
```

### Memory Management

If your VPS has limited RAM:
1. Reduce Judge0 workers (edit `judge0.conf`)
2. Limit concurrent submissions
3. Consider upgrading VPS plan

### Security Best Practices

1. **Change all default passwords** in `judge0.conf` and `.env`
2. **Use strong JWT_SECRET**
3. **Don't expose Judge0 port (2358) externally** - it's only for internal use
4. **Set up fail2ban** to protect against brute force:
   ```bash
   sudo apt install fail2ban -y
   sudo systemctl enable fail2ban
   sudo systemctl start fail2ban
   ```

5. **Keep system updated:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

### Monitoring

Set up basic monitoring:
```bash
# Check container status
docker compose ps

# Check resource usage
docker stats

# View logs
docker compose logs -f backend
docker compose logs -f judge0-server
```

### Auto-restart on Reboot

Docker Compose services should auto-restart by default (we set `restart: always`). To ensure system auto-starts Docker on reboot:

```bash
sudo systemctl enable docker
```

## Troubleshooting

### Cannot Access Frontend

1. Check if port 80 is open:
   ```bash
   sudo ufw status
   netstat -tlnp | grep :80
   ```

2. Check frontend container:
   ```bash
   docker compose logs frontend
   ```

### Judge0 Not Working

1. Check Judge0 server:
   ```bash
   docker compose logs judge0-server
   ```

2. Test internal connectivity:
   ```bash
   docker compose exec backend curl http://judge0-server:2358/about
   ```

3. Verify Judge0 config:
   ```bash
   cat judge0-v1.13.1/judge0.conf | grep -E "REDIS_PASSWORD|POSTGRES_PASSWORD"
   ```

### Out of Memory Errors

If you see OOM (Out of Memory) errors:
- Upgrade VPS plan
- Reduce Judge0 worker count
- Add swap space (temporary solution):
  ```bash
  sudo fallocate -l 2G /swapfile
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
  sudo swapon /swapfile
  ```

## Quick Reference

**Deploy commands:**
```bash
# 1. Configure Judge0
nano judge0-v1.13.1/judge0.conf

# 2. Configure app
cp env.example .env
nano .env

# 3. Start everything
docker compose up -d

# 4. Check status
docker compose ps
docker compose logs -f
```

**Key Points:**
- ✅ Judge0 is included in docker-compose - no separate setup needed
- ✅ Configure `judge0.conf` BEFORE running docker-compose
- ✅ Only expose ports 80/443 externally (not Judge0 port 2358)
- ✅ Use strong passwords for production
- ✅ Set up firewall rules
- ✅ Monitor resource usage

## Need Help?

If you encounter issues:
1. Check logs: `docker compose logs`
2. Verify configuration files
3. Check firewall rules
4. Ensure sufficient resources (RAM/CPU)

