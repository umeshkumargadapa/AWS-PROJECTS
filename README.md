# AWS-PROJECTS
# AWS Cloud Computing Lab Projects

## Overview

This repository contains the implementation of multiple AWS Cloud Computing projects involving AWS EC2, Nginx, Lambda, API Gateway, DynamoDB, S3, RDS, EventBridge, CloudWatch, and serverless architectures.

---

# Technologies Used

* AWS EC2
* AWS Lambda
* Amazon API Gateway
* Amazon DynamoDB
* Amazon RDS (MySQL)
* Amazon S3
* Amazon EventBridge
* Amazon CloudWatch
* Nginx
* PM2
* Node.js
* HTML
* CSS
* JavaScript
* GitHub

---

# Task 1: Nginx Multi Website Hosting

## Objective

Host multiple static websites on a single AWS EC2 Ubuntu instance using Nginx.

## Features

* Hosted 3 websites:

  * website1
  * website2
  * website3
* Separate Nginx configuration for each site
* Different ports:

  * 3001
  * 3002
  * 3003
* AWS Security Group configured

## URLs

* http://SERVER-IP:3001
* http://SERVER-IP:3002
* http://SERVER-IP:3003

---

# Task 2: Frontend and Backend Deployment

## Objective

Deploy a Blog Application using AWS EC2 and RDS.

## Components

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* Amazon RDS MySQL

## Deployment Steps

* Clone repository
* Configure database connection
* Create RDS database
* Start application using PM2
* Configure Nginx reverse proxy

---

# Task 3: SSL Configuration and Reverse Proxy

## Objective

Secure application access using HTTPS.

## Features

* Self-signed SSL certificate
* HTTPS enabled
* HTTP to HTTPS redirection
* Reverse proxy configuration
* Automatic service startup after reboot

## Security

* SSL Certificate
* Secure Backend Routing
* Nginx Reverse Proxy

---

# Task 4: Amazon RDS Backup and Restore

## Objective

Understand database backup and recovery processes.

## Activities

* Create RDS Instance
* Enable Automated Backups
* Configure Retention Period
* Create Manual Snapshot
* Restore Database
* Connect Restored Database

## Outcome

Successfully restored deleted data using RDS snapshots.

---

# Task 5: File Upload and Display Using AWS S3

## Objective

Create a frontend-only application for file uploads.

## Features

* Upload files directly to S3
* Display uploaded files
* Generate public URLs
* Image preview support
* Static website hosting using S3

## AWS Services

* Amazon S3

---

# Task 6: QR Code Generator Using AWS Lambda and S3

## Architecture

User
→ Frontend
→ API Gateway
→ Lambda
→ S3
→ Download URL

## Features

* Generate QR codes dynamically
* Store images in S3
* Return downloadable URL
* Fully serverless implementation

## AWS Services

* AWS Lambda
* Amazon S3
* API Gateway

---

# Task 7: Email Automation Using AWS Lambda

## Objective

Send emails through Gmail SMTP using AWS Lambda.

## Features

* Contact Us Form
* API Gateway Integration
* Lambda Processing
* Company Notification Email
* Customer Confirmation Email

## AWS Services

* AWS Lambda
* API Gateway
* CloudWatch

---

# Task 8: Student Management Using DynamoDB

## Objective

Perform CRUD operations in DynamoDB.

## Operations

* Insert Records
* Retrieve Records
* Update Records
* Query Records
* Delete Records

## Database

Table Name:
Students

Primary Key:
studentId

---

# Task 9: Student Registration System

## Architecture

Frontend
→ API Gateway
→ Lambda
→ DynamoDB

## Features

* Student Registration
* View Student Records
* Input Validation
* CloudWatch Monitoring

## AWS Services

* DynamoDB
* Lambda
* API Gateway
* CloudWatch

---

# Task 10: EventBridge Automation

## Objective

Automate Lambda execution using scheduled triggers.

## Features

* EventBridge Rule
* Scheduled Execution
* CloudWatch Logging
* Automatic Invocation

## Schedule

* Every 5 Minutes
* Modified to Every 10 Minutes

## AWS Services

* EventBridge
* Lambda
* CloudWatch

---

# Task 11: Serverless Job Application Portal

## Architecture

User
→ Nginx (VPS)
→ Frontend
→ API Gateway
→ Lambda
→ DynamoDB

## Features

* Job Details Display
* Application Form
* Serverless Backend
* DynamoDB Storage
* CloudWatch Monitoring

## AWS Services

* Lambda
* API Gateway
* DynamoDB
* CloudWatch

---

# Learning Outcomes

Through these projects, the following skills were developed:

* Linux Server Administration
* Nginx Configuration
* EC2 Deployment
* RDS Management
* S3 Storage Operations
* Lambda Development
* API Gateway Integration
* DynamoDB Operations
* Event-Driven Architecture
* Serverless Application Development
* Cloud Security and SSL Configuration
* Monitoring using CloudWatch

---

# Author

Umesh Kumar Gadapa


