---
title: "Automated AWS EC2 Deployment with CI/CD"
short: "AWS EC2 CI/CD"
order: 3
role: "DevOps Specialist"
stack: ["AWS EC2", "Docker", "Nginx", "GitHub Actions", "Cloudflare", "Let's Encrypt"]
problem: "A Node.js app was released by hand. Each release took around 30 minutes and caused downtime."
delivered:
  - "Provisioned and hardened the EC2 server"
  - "Containerised the app with Docker Compose"
  - "Nginx reverse proxy with a custom domain through Cloudflare"
  - "Auto-renewing Let's Encrypt SSL"
  - "GitHub Actions: every push to main builds and deploys"
result: "Deploy time cut from about 30 minutes to about 90 seconds, with zero downtime, instant rollback and HTTPS."
cover: "/assets/img/cases/aws-deploy.svg"
pipelineImage: true
---
