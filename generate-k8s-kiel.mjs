import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Load photo
const photoPath = resolve('output', 'Saichander.JPG');
const photoBuffer = readFileSync(photoPath);
console.log(`Photo loaded: ${photoBuffer.length} bytes`);
const photoDataUri = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`;

const cvHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>CV - Saichander Vorem - Kubernetes Specialist</title>
<style>
  @page { margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10.5pt; color: #1a1a1a; line-height: 1.5; }
  .page { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 15mm 18mm; }
  .header { display: flex; align-items: center; border-bottom: 2px solid #1b3a5c; padding-bottom: 12px; margin-bottom: 14px; }
  .photo { width: 32mm; height: 32mm; border-radius: 50%; object-fit: cover; border: 2px solid #1b3a5c; margin-right: 14px; }
  .header-info h1 { font-size: 18pt; color: #1b3a5c; margin-bottom: 2px; }
  .header-info .subtitle { font-size: 11pt; color: #444; margin-bottom: 4px; }
  .header-info .contact { font-size: 9pt; color: #555; }
  .header-info .contact span { margin-right: 12px; }
  h2 { font-size: 11pt; text-transform: uppercase; color: #1b3a5c; letter-spacing: 0.8px; border-bottom: 1.5px solid #ccc; padding-bottom: 3px; margin: 14px 0 8px 0; }
  .summary { font-size: 10pt; margin-bottom: 4px; }
  .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 20px; font-size: 9.5pt; margin-bottom: 4px; }
  .skills-grid .skill-item { padding: 2px 0; }
  .skill-label { font-weight: 600; color: #1b3a5c; }
  .job { margin-bottom: 12px; }
  .job-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
  .job-title { font-weight: 700; font-size: 10.5pt; color: #1a1a1a; }
  .job-date { font-size: 9pt; color: #555; }
  .job-company { font-size: 9.5pt; color: #333; margin-bottom: 4px; }
  .job ul { padding-left: 16px; }
  .job ul li { font-size: 9.5pt; margin-bottom: 2.5px; }
  .certs-list { list-style: none; padding: 0; }
  .certs-list li { font-size: 9.5pt; margin-bottom: 3px; padding-left: 12px; position: relative; }
  .certs-list li::before { content: "\\2713"; position: absolute; left: 0; color: #1b3a5c; font-weight: 700; }
  .edu-item { margin-bottom: 6px; }
  .edu-item strong { font-size: 10pt; }
  .edu-item p { font-size: 9pt; color: #555; }
  .avail { font-size: 10pt; background: #f0f5fa; padding: 8px 12px; border-left: 3px solid #1b3a5c; margin-bottom: 10px; }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <img src="${photoDataUri}" class="photo" alt="Saichander Vorem"/>
    <div class="header-info">
      <h1>Saichander Vorem</h1>
      <div class="subtitle">Kubernetes Specialist | On-Prem Cluster Operations · CI/CD · Ansible · Linux</div>
      <div class="contact">
        <span>📍 Munich, Germany</span>
        <span>📧 saichander944@gmail.com</span>
        <span>📱 +4915254911684</span><br/>
        <span>🔗 linkedin.com/in/saichander-reddy-vorem-683870229</span>
        <span>🌐 github.com/saichandevorem</span>
      </div>
    </div>
  </div>

  <div class="avail"><strong>Availability:</strong> From August 2026 · 2 days/week · 1 day on-site in Kiel possible</div>

  <h2>Professional Summary</h2>
  <p class="summary">Certified Kubernetes Administrator (CKA) with 5+ years of experience in container orchestration, CI/CD automation, and infrastructure operations. Deep hands-on expertise in Docker and Kubernetes cluster setup and operations (including on-prem), deployment strategies (Rolling, Blue/Green, Canary), Helm chart management, and GitOps-based delivery. Strong background in Ansible-driven infrastructure provisioning, Linux administration (RHEL), and security-focused operations. Experienced in building and maintaining monitoring, logging, backup &amp; recovery solutions for production Kubernetes workloads.</p>

  <h2>Technical Skills</h2>
  <div class="skills-grid">
    <div class="skill-item"><span class="skill-label">Containerization &amp; Orchestration:</span> Docker, Kubernetes (on-prem &amp; AKS); cluster setup &amp; operations; Deployments (Rolling, Blue/Green, Canary); Helm charts &amp; manifests; monitoring, logging, backup &amp; recovery</div>
    <div class="skill-item"><span class="skill-label">CI/CD &amp; SCM:</span> GitHub &amp; GitHub Actions; CI/CD pipeline design &amp; operation; branching strategies; release management; container build/deploy automation; registry management (ACR, Harbor)</div>
    <div class="skill-item"><span class="skill-label">Infrastructure as Code:</span> Ansible (roles, playbooks, versioned documentation); Terraform (modules, state management); declarative provisioning &amp; configuration management</div>
    <div class="skill-item"><span class="skill-label">Workflow Automation:</span> n8n; workflow orchestration in Kubernetes; API &amp; database integrations; security concepts for automation platforms</div>
    <div class="skill-item"><span class="skill-label">Operations &amp; Security:</span> Linux (RHEL, Ubuntu); networking (DNS, TLS, proxy, load balancers); secrets management (Vault, K8s Secrets); IAM &amp; RBAC; Kubernetes security (network policies, Kyverno, pod security)</div>
    <div class="skill-item"><span class="skill-label">Monitoring &amp; Logging:</span> Prometheus, Grafana, Alertmanager; ELK Stack; Azure Monitor; centralized logging; performance dashboards; alerting rules</div>
  </div>

  <h2>Professional Experience</h2>

  <div class="job">
    <div class="job-header">
      <span class="job-title">DevOps Engineer &amp; Cloud Consultant</span>
      <span class="job-date">06/2022 - Present</span>
    </div>
    <div class="job-company">Cluster Reply GmbH (Client: BMW Group) | Munich, Germany</div>
    <ul>
      <li>Built and operated Kubernetes clusters (AKS) for enterprise-grade applications: cluster lifecycle management, node pools, networking, resource quotas, and multi-tenancy</li>
      <li>Implemented deployment strategies including Rolling updates, Blue/Green, and Canary deployments using ArgoCD and Helm charts</li>
      <li>Designed and managed Helm charts and Kubernetes manifests for reusable, version-controlled application deployments across namespaces</li>
      <li>Built CI/CD pipelines with GitHub Actions: container build/deploy automation, branching strategies, release management, and registry management</li>
      <li>Adopted GitOps principles (ArgoCD) for continuous delivery, improving traceability and minimizing configuration drift</li>
      <li>Automated infrastructure provisioning with Ansible (roles, playbooks) and Terraform modules for consistent, declarative configuration</li>
      <li>Implemented monitoring, logging, and alerting: Prometheus, Grafana, Alertmanager with custom dashboards and alerting rules for Kubernetes workloads</li>
      <li>Managed backup &amp; recovery procedures for stateful Kubernetes workloads and associated databases</li>
      <li>Configured Kubernetes security: network policies, Kyverno compliance policies, secrets management (Azure Key Vault), RBAC, and pod security standards</li>
      <li>Administered Linux-based infrastructure (RHEL): networking (DNS, TLS, proxy, load balancers), system hardening, and automation via Bash/Python scripts</li>
      <li>Managed container registries (ACR): image builds, vulnerability scanning, lifecycle policies, and access control</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-header">
      <span class="job-title">IT Engineer (Freelance)</span>
      <span class="job-date">06/2025 - 09/2025</span>
    </div>
    <div class="job-company">Nokia | Munich, Germany</div>
    <ul>
      <li>Set up IT infrastructure for new office locations: firewalls, switches, routers, servers</li>
      <li>Configured network infrastructure including DNS, load balancers, and TLS termination</li>
      <li>Coordinated on-site activities with back-end operations and project management</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-header">
      <span class="job-title">Hardware Network Engineer (Freelance)</span>
      <span class="job-date">09/2019 - 02/2022</span>
    </div>
    <div class="job-company">E.ON | Hannover, Germany</div>
    <ul>
      <li>Managed data center infrastructure: servers, storage, network switches, and connectivity</li>
      <li>Performed network administration: troubleshooting interfaces, DNS, routing, and monitoring</li>
      <li>Conducted preventive maintenance, backup operations, and infrastructure health checks</li>
    </ul>
  </div>

  <h2>Certifications</h2>
  <ul class="certs-list">
    <li>Certified Kubernetes Administrator (CKA) - CNCF</li>
    <li>Microsoft Certified: Azure Administrator Associate (AZ-104)</li>
    <li>Microsoft Certified: Azure DevOps Engineer Expert (AZ-400)</li>
    <li>HashiCorp Certified: Terraform Associate</li>
  </ul>

  <h2>Education</h2>
  <div class="edu-item">
    <strong>M.Sc. Computational Engineering</strong> (In Progress)
  </div>
  <div class="edu-item">
    <strong>B.Eng. Automotive Engineering</strong>
  </div>

  <h2>Languages</h2>
  <p style="font-size: 9.5pt;">English (Fluent) · German (Conversational / B1) · Telugu (Native) · Hindi (Fluent)</p>
</div>
</body>
</html>`;

writeFileSync(resolve('output', 'cv-k8s-specialist-kiel.html'), cvHtml);
console.log('✅ Kubernetes Specialist CV written');
