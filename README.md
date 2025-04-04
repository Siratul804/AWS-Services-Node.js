# AWS Services Learning Repository

This repository serves as a personal reference for my AWS learning journey. It contains detailed descriptions of AWS services, including AWS Lambda, IAM, S3, EC2, and additional critical AWS services. This README will help me and others review key AWS concepts and implementations.

## 📌 Course Playlist
This repository's content is primarily derived from [Piyush Garg's](https://github.com/piyushgarg-dev) AWS Services Course playlist on YouTube: [AWS Services Course](https://www.youtube.com/playlist?list=PLinedj3B30sDZ17Fpe3xGUDRBkutaGyUp).

## 🚀 AWS Services Covered

### 🛡️ AWS IAM (Identity and Access Management)
IAM is a web service that helps securely control access to AWS resources. It allows the creation and management of AWS users and groups, defining permissions to grant or deny access.

#### Topics Covered:
- **Access and Permission Management:** Understanding users, roles, policies, and how to manage access securely.
- **AWS IAM Identity Center:** A centralized hub to manage user access across multiple AWS accounts.
- **IAM Permission Center:** Managing fine-grained permissions and enforcing security best practices.
- **Multi-Factor Authentication (MFA):** Adding an extra layer of security to user accounts.
- **Role-Based Access Control (RBAC):** Implementing best practices for access management.

---

### ⚡ AWS Lambda (Serverless Computing)
AWS Lambda is a serverless computing service that allows running code without provisioning or managing servers. It automatically scales based on demand and integrates with other AWS services.

#### Topics Covered:
- **Serverless vs. Monolith:** Understanding the differences, advantages, and use cases of serverless architectures.
- **Serverless Framework with Node.js:** Deploying and managing AWS Lambda functions using the Serverless Framework.
- **Efficient Cost Study:** Cost optimization strategies for AWS Lambda, including execution time, memory allocation, and request-based pricing.
- **Event-Driven Architectures:** Leveraging AWS Lambda with event sources like S3, DynamoDB, and API Gateway.
- **Monitoring & Debugging Lambda:** Using AWS CloudWatch Logs and X-Ray for performance optimization.

---

### 🗄️ AWS S3 (Simple Storage Service)
Amazon S3 is an object storage service that offers high scalability, security, and performance for storing and retrieving data.

#### Topics Covered:
- **S3 Bucket:** Understanding S3 buckets, storage classes, and lifecycle policies.
- **Hosting a Simple Website:** Deploying an `index.html` file inside an S3 bucket as a static website.
- **S3 Operations with Node.js:** Interacting with S3 programmatically using the AWS SDK.
- **S3 Presigned URL:** Generating temporary, secure URLs for accessing private S3 objects.
- **Basic Fundamentals:** Learning about objects, metadata, encryption, and access control.
- **Efficient Cost Study:** Analyzing different pricing models, including storage class selection and data transfer optimization.
- **Cross-Region Replication (CRR):** Configuring automatic data replication between AWS regions.
- **Versioning & Lifecycle Policies:** Managing object versions and automating data retention.

---

### 💻 AWS EC2 (Elastic Compute Cloud)
AWS EC2 provides scalable compute capacity in the cloud, allowing users to run virtual machines with various configurations.

#### Topics Covered:
- **Elastic Cloud Service:** Understanding EC2 instances, AMIs, and instance types.
- **Hosting with AWS:** Setting up and managing applications on EC2 instances.
- **SSH into an Amazon EC2 Machine:** Connecting securely to EC2 instances using SSH keys.
- **Security Groups & Network Access:** Configuring inbound/outbound rules to control network traffic.
- **Efficient Cost Study:** Optimizing EC2 costs using Spot Instances, Reserved Instances, and Auto Scaling.
- **Elastic Load Balancing (ELB):** Distributing incoming traffic across multiple EC2 instances.
- **Auto Scaling Groups (ASG):** Automatically adjusting capacity based on demand.
- **Amazon Machine Images (AMI):** Creating and managing custom images for quick instance deployment.

---

### 🌐 AWS CloudFront (Content Delivery Network)
AWS CloudFront is a global content delivery network (CDN) service that securely delivers data, videos, applications, and APIs with low latency.

#### Topics Covered:
- **Edge Locations:** Delivering content with minimal latency.
- **Caching Strategies:** Improving performance and reducing costs.
- **Custom Domain and SSL Certificates:** Securing websites with HTTPS.
- **CloudFront with S3 and EC2:** Accelerating content delivery.

---

### 🔍 AWS CloudWatch (Monitoring & Logging)
Amazon CloudWatch provides monitoring and observability for AWS applications and resources.

#### Topics Covered:
- **Metrics & Logs:** Capturing and analyzing performance data.
- **Alarms & Notifications:** Setting up automated alerts.
- **Dashboard Customization:** Visualizing real-time application insights.
- **CloudWatch with Lambda & EC2:** Monitoring serverless and compute resources.

---

## 🎯 Why This Repository?
This repository serves as a reference for my AWS learning. By documenting concepts, examples, and best practices, I can revisit my lessons anytime and keep improving my AWS knowledge. Feel free to explore and use it as a study guide!

Happy Learning! 🚀
