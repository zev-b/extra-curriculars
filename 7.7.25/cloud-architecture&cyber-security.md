# Cloud Architecture & Cybersecurity Overview

## Table of Contents

* [Cloud Architecture Basics](#cloud-architecture-basics)
* [Key Cloud Service Models](#key-cloud-service-models)
* [Major Cloud Providers](#major-cloud-providers)
* [Common Cloud Components](#common-cloud-components)
* [Security in the Cloud](#security-in-the-cloud)
* [Cybersecurity Overview](#cybersecurity-overview)
* [Shared Responsibility Model](#shared-responsibility-model)
* [Key Takeaways](#key-takeaways)
* [Glossary](#glossary)
* [Pro Tips for Office Visit](#pro-tips-for-office-visit)

---

## Cloud Architecture Basics

Cloud architecture refers to the components and subcomponents required for cloud computing. These typically consist of:

* **Front-end platform** (client devices and applications)
* **Back-end platforms** (servers and storage)
* **Cloud-based delivery** (network and internet)
* **Network infrastructure** (routers, switches, etc.)

### Benefits of Cloud Architecture

* Scalability
* Cost-efficiency (pay-as-you-go)
* High availability and reliability
* Disaster recovery
* Global reach

---

## Key Cloud Service Models

### IaaS (Infrastructure as a Service)

* Provides virtualized computing resources over the internet.
* Examples: Amazon EC2, Google Compute Engine
* You manage OS, runtime, and apps.

### PaaS (Platform as a Service)

* Provides tools and services to develop, test, and deploy applications.
* Examples: Google App Engine, Azure App Services
* You manage the app and data; the provider manages the rest.

### SaaS (Software as a Service)

* Delivers software applications via the internet.
* Examples: Gmail, Salesforce, Dropbox
* Everything is managed by the provider.

---

## Major Cloud Providers

### AWS (Amazon Web Services)

* Most widely adopted cloud platform.
* Offers wide array of services across compute, storage, AI, networking.

### Microsoft Azure

* Strong hybrid cloud capabilities.
* Deep integration with Microsoft tools.

### Google Cloud Platform (GCP)

* Strong in big data and machine learning.
* Competitive pricing and open-source integrations.

---

## Common Cloud Components

* **Compute**: EC2, Azure VMs, GCE
* **Storage**: S3, Azure Blob Storage, Google Cloud Storage
* **Databases**: RDS, Cosmos DB, BigQuery
* **Networking**: VPCs, load balancers, VPNs
* **Monitoring**: CloudWatch, Azure Monitor, Stackdriver
* **IAM (Identity and Access Management)**: Role-based access controls

---

## Security in the Cloud

### Common Cloud Security Concerns

* Data breaches
* Misconfigured storage buckets
* Insecure APIs
* Insider threats
* DDoS attacks

### Key Cloud Security Practices

* Use IAM to enforce least privilege
* Enable multi-factor authentication (MFA)
* Encrypt data at rest and in transit
* Regular vulnerability assessments and patching
* Logging and monitoring (SIEM tools)

---

## Cybersecurity Overview

### Core Domains

* **Network Security**: Firewalls, IDS/IPS
* **Application Security**: Secure coding, input validation
* **Endpoint Security**: Antivirus, EDR
* **Identity & Access Management**
* **Security Operations (SecOps)**: Monitoring and incident response

### Security Frameworks

* NIST Cybersecurity Framework
* ISO/IEC 27001
* CIS Controls

### Tools Commonly Used

* SIEM: Splunk, ELK Stack, QRadar
* Vulnerability Scanners: Nessus, OpenVAS
* Endpoint Detection & Response (EDR): CrowdStrike, SentinelOne
* Cloud Security Posture Management: Prisma Cloud, Wiz

---

## Shared Responsibility Model

A core concept in cloud security:

* **Cloud Provider**: Responsible for security *of* the cloud (hardware, software, networking).
* **Customer**: Responsible for security *in* the cloud (data, identity, apps).

Example:

* AWS secures physical servers, but *you* must secure your S3 buckets.

---

## Key Takeaways

* Cloud architecture is foundational for scalable, modern apps.
* Understand the differences between IaaS, PaaS, and SaaS.
* Cloud security is a shared responsibility.
* Familiarity with IAM, encryption, monitoring, and least privilege access is essential.
* Cybersecurity includes broader concerns like network, endpoint, and operational security.

---

*📌 Tip: Ask your cybersecurity contact what tools or cloud platforms they use most. Tailor deeper learning from there.*

---

## Glossary

* **API (Application Programming Interface)**: A set of protocols for building and integrating application software.
* **Availability**: The degree to which a system is operational and accessible when required.
* **Blob Storage**: Object storage solution for the cloud, optimized for storing large amounts of unstructured data.
* **Cloud Computing**: Delivery of computing services over the internet.
* **Compute**: Processing power required to run applications, often provided via virtual machines.
* **DDoS (Distributed Denial of Service)**: Cyberattack that floods systems, servers, or networks with traffic to exhaust resources.
* **Encryption**: The process of encoding data to prevent unauthorized access.
* **Firewall**: A security system that controls incoming and outgoing network traffic.
* **IAM (Identity and Access Management)**: Framework of policies and technologies to ensure the right individuals access the right resources.
* **IaaS**: Infrastructure as a Service, where users manage OS and applications on cloud-hosted virtual machines.
* **IDS/IPS**: Intrusion Detection/Prevention Systems used to detect and prevent security breaches.
* **Load Balancer**: A tool that distributes network or application traffic across multiple servers.
* **MFA (Multi-Factor Authentication)**: Authentication method requiring two or more verification methods.
* **PaaS**: Platform as a Service, providing a platform to develop, run, and manage applications.
* **RDS (Relational Database Service)**: Managed relational database service that supports several database engines.
* **SaaS**: Software as a Service, software accessed over the internet managed by a third party.
* **SIEM (Security Information and Event Management)**: Tools that provide real-time analysis of security alerts.
* **VPC (Virtual Private Cloud)**: A secure, isolated private cloud hosted within a public cloud.
* **VPN (Virtual Private Network)**: Extends a private network across a public network, enabling secure remote access.
* **Zero Trust**: Security model that assumes no implicit trust and verifies every request as though it originated from an open network.

---

## Pro Tips for Office Visit

### Topics You Might Encounter

* Cloud-native security practices (Zero Trust, DevSecOps)
* Infrastructure as Code (IaC) — tools like Terraform, CloudFormation
* Cloud compliance and governance (SOC 2, HIPAA, GDPR)
* Penetration testing, red/blue team exercises
* Audit logs and real-time alerting (CloudTrail, GuardDuty, etc.)

### Smart Questions to Ask

* What cloud tools or platforms do you use most?
* What are the biggest security challenges you deal with?
* How do you approach incident response?
* What skills helped you transition into cybersecurity?
* Are there any beginner certifications or projects you’d recommend?

### Tools That Might Come Up

* **IaC**: Terraform, Ansible
* **Security**: CrowdStrike, Wiz, Palo Alto, SentinelOne
* **Monitoring**: Datadog, Prometheus, Grafana
* **CI/CD**: GitHub Actions, Jenkins, GitLab
* **Auth**: Okta, Azure AD

### Final Tips

* Be curious and take notes — even sketch quick diagrams
* It’s okay to say “I’m not sure, but I’d love to learn more”
* Express genuine interest and follow up with thanks
* Bring your own value: ask thoughtful questions

---
