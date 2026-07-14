# 🚀 Kubernetes StatefulSet 3-Tier Application

![Kubernetes](https://img.shields.io/badge/Kubernetes-v1.30-blue?logo=kubernetes)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![MongoDB](https://img.shields.io/badge/MongoDB-Replica%20Set-green?logo=mongodb)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazonaws)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 📖 Project Overview

This project demonstrates the deployment of a **production-style 3-Tier Web Application** on **Kubernetes** using:

- React.js Frontend
- Node.js Backend
- MongoDB Replica Set
- Kubernetes StatefulSet
- Persistent Volumes (PV)
- Persistent Volume Claims (PVC)
- Headless Service
- Docker
- AWS EC2

Unlike traditional Deployment-based applications, the MongoDB database is deployed using a **StatefulSet**, allowing every database pod to maintain:

- Stable Network Identity
- Persistent Storage
- Ordered Startup
- Ordered Shutdown
- Replica Set Configuration

The backend communicates with the MongoDB Replica Set instead of a single MongoDB instance, making the application highly reliable and fault tolerant.

---

# 🎯 Project Objectives

The main objective of this project is to understand how Stateful Applications are deployed inside Kubernetes.

During this project we learned:

- Difference between Stateless and Stateful applications
- Why Deployments are not suitable for databases
- Why StatefulSets are required
- Persistent Volume and Persistent Volume Claims
- Headless Services
- Stable Pod Identity
- MongoDB Replica Set
- Database Replication
- Data Persistence
- Docker Image Creation
- Multi-tier Kubernetes Architecture
- Kubernetes Networking

---

# 🏗️ Architecture

```
                        Internet
                            │
                            │
                    NodePort Service
                            │
                    React Frontend
                            │
                            │
                    NodePort Service
                            │
                    Node.js Backend
                            │
                            │
          -------------------------------------
          │                                   │
    mongodb-0                          mongodb-1
    (Primary)                         (Secondary)
          │                                   │
          └──────── Replica Set ──────────────┘
                     │
             Persistent Volumes
```

---

# ⚙️ Technologies Used

| Technology | Purpose |
|------------|----------|
| Kubernetes | Container Orchestration |
| Docker | Containerization |
| React.js | Frontend |
| Node.js | Backend |
| Express.js | REST API |
| MongoDB | Database |
| MongoDB Replica Set | High Availability |
| StatefulSet | Stateful Database Deployment |
| Persistent Volume | Data Persistence |
| Persistent Volume Claim | Storage Allocation |
| Headless Service | Stable DNS |
| AWS EC2 | Infrastructure |
| Linux | Operating System |

---

# 📂 Repository Structure

```
kubernetes-statefulset-3tier-app
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── public/
│
├── kubernetes/
│   ├── mongodb-statefulset.yml
│   ├── mongodb-headless-service.yml
│   ├── backend-deployment.yml
│   ├── backend-service.yml
│   ├── frontend-deployment.yml
│   └── frontend-service.yml
│
├── screenshots/
│
├── docs/
│
├── README.md
└── LICENSE
```

---

# ⭐ Features

✔ React Frontend

✔ Node.js Backend

✔ MongoDB Replica Set

✔ Kubernetes StatefulSet

✔ Persistent Volumes

✔ Persistent Volume Claims

✔ Dockerized Applications

✔ Kubernetes Services

✔ NodePort Access

✔ Replica Set Configuration

✔ Data Persistence

✔ Automatic Pod Recovery

✔ Stable Pod Identity

✔ Scalable Architecture

✔ Production-style Deployment

---

# 🖥️ Infrastructure

AWS EC2 Instance

Operating System

```
Amazon Linux
```

Container Runtime

```
Docker
```

Kubernetes Distribution

```
Kubernetes
```

Database

```
MongoDB Replica Set
```

Storage

```
Persistent Volumes
```

---

# 📷 Project Screenshots

Add screenshots here after deployment.

Example:

```
screenshots/

pods-running.png

frontend-ui.png

services.png

replicaset-status.png

architecture.png
```

Example:

## Pods

![Pods](screenshots/pods-running.png)

---

## Frontend

![Frontend](screenshots/frontend-ui.png)

---

## Replica Set

![Replica Set](screenshots/replicaset-status.png)

---
