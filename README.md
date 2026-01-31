---

# 🚀 Frontend CI/CD Pipeline with React, Docker & GitHub Actions

## 📌 Project Overview

This project demonstrates a **complete CI pipeline** for a **simple React frontend application**, following **real-world DevOps best practices**.

The pipeline covers:

* Application build & test
* Static code analysis
* Security scanning
* Docker image creation
* Container security scanning
* Job dependency control using GitHub Actions `needs`

This repository is designed for **learning, interviews, and real CI/CD understanding**.

---

## 🛠️ Tech Stack

* **Frontend**: React (Create React App)
* **CI/CD**: GitHub Actions
* **Containerization**: Docker (multi-stage build)
* **Security Scanning**: Trivy
* **Version Control**: Git & GitHub

---

## 📁 Project Structure

```text
frontend-ci-cd/
├── frontend-app/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   └── App.test.js
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── package-lock.json
└── .github/
    └── workflows/
        └── ci.yml
```

---

## 🎯 Application Details

The React application is intentionally kept **very simple** to focus on **CI/CD concepts**, not frontend complexity.

**UI Output:**

```
Hello DevOps 🚀
Very simple React application
```

---

## 🚀 Running the Application Locally

### 1️⃣ Install Dependencies

```bash
cd frontend-app
npm install
```

### 2️⃣ Run React App

```bash
npm start
```

Open:

```
http://localhost:3000
```

---

## 🧪 Running Unit Tests

```bash
CI=true npm test
```

Tests validate that the application UI renders correctly.

---

## 🐳 Docker Setup (Multi-Stage Build)

### Dockerfile Highlights

* **Build Stage**: Uses Node.js to build React
* **Runtime Stage**: Uses Nginx to serve static files
* Produces a **lightweight production image**

### Build Docker Image

```bash
docker build -t simple-react-app .
```

### Run Docker Container

```bash
docker run -p 8080:80 simple-react-app
```

Open:

```
http://localhost:8080
```

---

## 🔄 CI Pipeline Overview (GitHub Actions)

The CI pipeline is implemented using **GitHub Actions**, with **job dependencies (`needs`)** to enforce execution order.

### 🧱 CI Stages

| Stage        | Description                   |
| ------------ | ----------------------------- |
| Checkout     | Fetch source code             |
| Install      | Install npm dependencies      |
| Lint         | Static code analysis          |
| Security     | Security scanning             |
| Test         | Unit tests                    |
| Trivy FS     | Filesystem vulnerability scan |
| Docker Build | Build container image         |
| Trivy Image  | Scan Docker image             |

---

## 📜 GitHub Actions Workflow Flow

```text
checkout
   ↓
install
   ↓
lint
   ↓
security
   ↓
test
   ↓
trivy-fs
   ↓
docker-build-scan
```

Each job runs **only if the previous job succeeds**, ensuring:

* Early failure detection
* Secure and reliable builds
* Clean pipeline structure

---

## 🔐 Security Scanning

### Trivy Filesystem Scan

* Scans source code before Docker build
* Detects secrets and vulnerable dependencies

### Trivy Image Scan

* Scans the final Docker image
* Detects OS and package vulnerabilities

> Docker build and image scan are intentionally kept in the **same job** due to GitHub Actions job isolation.

---

## 🧠 Key DevOps Concepts Demonstrated

* Multi-stage Docker builds
* GitHub Actions job isolation
* Job dependencies using `needs`
* Fail-fast CI design
* Secure container pipelines
* CI pipelines aligned with real production behavior

---

## 🎯 Summary

> *“I built a simple React application and implemented a complete CI pipeline using GitHub Actions. The pipeline uses job dependencies to enforce execution order and includes linting, security scans, unit testing, Docker image creation, and Trivy container security scanning.”*

---

## 🔜 Possible Enhancements

* Push Docker image to Docker Hub / Artifact Registry
* Add CD deployment (Cloud Run / VM / Kubernetes)
* Add caching for faster CI runs
* Integrate Snyk or SonarQube
* Add approval gates for production deployment

---


DevOps | Cloud | CI/CD | Docker | GitHub Actions

