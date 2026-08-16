import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Load photo
const photoPath = resolve('output', 'Saichander.JPG');
const photoBuffer = readFileSync(photoPath);
console.log(`Photo loaded: ${photoBuffer.length} bytes`);
const photoDataUri = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`;

// Real CV data based on cv.md

// ─── CV ───
const cvHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>CV - Saichander Vorem - Azure Cloud Engineer / SRE</title>
<style>
  @page { margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10pt; color: #1a1a1a; line-height: 1.45; }
  .page { width: 210mm; min-height: 297mm; margin: 0 auto; display: flex; }
  .sidebar { width: 70mm; background: #1e2d45; color: #e8edf3; padding: 20mm 6mm 15mm 6mm; }
  .main { flex: 1; padding: 18mm 12mm 15mm 12mm; }
  .photo { width: 42mm; height: 42mm; border-radius: 50%; object-fit: cover; border: 3px solid #0078d4; display: block; margin: 0 auto 12px auto; }
  .sidebar h2 { font-size: 9pt; text-transform: uppercase; letter-spacing: 1.2px; color: #0078d4; margin: 14px 0 6px 0; border-bottom: 1px solid #2d4a7a; padding-bottom: 3px; }
  .sidebar p, .sidebar li { font-size: 8.5pt; line-height: 1.4; }
  .sidebar ul { list-style: none; padding: 0; }
  .sidebar ul li { margin-bottom: 3px; padding-left: 10px; position: relative; }
  .sidebar ul li::before { content: "▸"; position: absolute; left: 0; color: #0078d4; }
  .name { font-size: 18pt; font-weight: 700; color: #1e2d45; margin-bottom: 2px; }
  .title { font-size: 11pt; color: #555; margin-bottom: 14px; }
  .main h2 { font-size: 11pt; text-transform: uppercase; color: #1e2d45; letter-spacing: 1px; border-bottom: 2px solid #0078d4; padding-bottom: 3px; margin: 16px 0 8px 0; }
  .main h2:first-of-type { margin-top: 0; }
  .job { margin-bottom: 12px; }
  .job-header { display: flex; justify-content: space-between; align-items: baseline; }
  .job-title { font-weight: 700; font-size: 10pt; }
  .job-date { font-size: 8.5pt; color: #666; white-space: nowrap; }
  .job-company { font-size: 9pt; color: #444; margin-bottom: 3px; }
  .job ul { padding-left: 14px; }
  .job ul li { font-size: 9pt; margin-bottom: 2px; }
  .edu-item { margin-bottom: 8px; }
  .edu-item strong { font-size: 9.5pt; }
  .edu-item p { font-size: 8.5pt; color: #555; }
</style>
</head>
<body>
<div class="page">
  <div class="sidebar">
    <img src="${photoDataUri}" class="photo" alt="Photo"/>

    <h2>Contact</h2>
    <p>📍 Munich, Germany</p>
    <p>📧 saichander944@gmail.com</p>
    <p>📱 +4915254911684</p>
    <p>🔗 linkedin.com/in/saichander-reddy-vorem-683870229</p>

    <h2>Core Skills</h2>
    <ul>
      <li>Azure (AKS, App Services, Functions, Storage, Networking, IAM)</li>
      <li>Kubernetes &amp; Docker (Helm, ArgoCD)</li>
      <li>Terraform / Ansible / ARM / Bicep</li>
      <li>CI/CD (GitHub Actions, ArgoCD, Azure DevOps)</li>
      <li>Monitoring (Prometheus, Grafana, Azure Monitor)</li>
      <li>PowerShell &amp; Bash scripting</li>
      <li>Security (WAF, Firewalls, NSGs, Key Vault, Defender)</li>
      <li>Networking (VNets, Private Endpoints, Front Door)</li>
      <li>GitOps &amp; Progressive Delivery</li>
      <li>SRE (SLI/SLO, incident response, HA)</li>
    </ul>

    <h2>Certifications</h2>
    <ul>
      <li>Azure Administrator Associate (AZ-104)</li>
      <li>Azure DevOps Engineer Expert (AZ-400)</li>
      <li>Certified Kubernetes Administrator (CKA)</li>
      <li>HashiCorp Terraform Associate</li>
    </ul>

    <h2>Languages</h2>
    <ul>
      <li>English - Fluent</li>
      <li>German - Conversational (B1)</li>
      <li>Telugu - Native</li>
      <li>Hindi - Fluent</li>
    </ul>

    <h2>Tools &amp; Platforms</h2>
    <ul>
      <li>Azure Portal / CLI / ARM / Bicep</li>
      <li>Terraform (modules, workspaces, state)</li>
      <li>Kubernetes / Helm / ArgoCD</li>
      <li>GitHub Actions / Azure DevOps</li>
      <li>Prometheus / Grafana / Alertmanager</li>
      <li>Azure Monitor / Application Insights</li>
      <li>Ansible / Kyverno / Vault</li>
      <li>Linux (RHEL, Ubuntu)</li>
    </ul>
  </div>

  <div class="main">
    <div class="name">Saichander Vorem</div>
    <div class="title">Azure Cloud Engineer / SRE | Kubernetes · Terraform · Observability · Security</div>

    <h2>Professional Summary</h2>
    <p>DevOps Engineer with 5+ years of experience in cloud delivery and enterprise platform operations, specializing in Microsoft Azure and Kubernetes-based environments. Strong expertise in Infrastructure as Code (Terraform, Ansible), CI/CD automation (GitHub Actions, ArgoCD), monitoring (Prometheus, Grafana), and secure cloud architecture. Experienced in building production-grade environments with focus on automation, security, and reliability in regulated enterprise settings.</p>

    <h2>Professional Experience</h2>

    <div class="job">
      <div class="job-header">
        <span class="job-title">DevOps Engineer &amp; Cloud Consultant</span>
        <span class="job-date">06/2022 - Present</span>
      </div>
      <div class="job-company">Cluster Reply GmbH (Client: BMW Group) | Munich, Germany</div>
      <ul>
        <li>Designed and operated Azure-based Kubernetes (AKS) platforms for enterprise-grade cloud-native applications, ensuring high availability and secure production operations</li>
        <li>Operated and maintained AKS clusters including upgrades, scaling, node pool management, and troubleshooting pod/network issues</li>
        <li>Developed CI/CD pipelines using GitHub Actions and ArgoCD, improving deployment reliability and supporting automated product operations</li>
        <li>Automated infrastructure provisioning with Terraform modules and Ansible, improving consistency and reducing configuration drift</li>
        <li>Architected BMW's enterprise API gateway platform on Azure using API Management, Front Door CDN, and Application Gateway with WAF</li>
        <li>Implemented Kubernetes security and compliance policies (Kyverno), reducing misconfigurations and strengthening security posture</li>
        <li>Designed monitoring and alerting with Prometheus, Grafana, and Azure Monitor; defined SLIs/SLOs for critical services</li>
        <li>Worked in enterprise cloud environments with strict compliance, data protection, and governance requirements</li>
        <li>Supported incident troubleshooting and root cause analysis in production environments, ensuring SLA compliance</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span class="job-title">IT Engineer (Freelance)</span>
        <span class="job-date">06/2025 - 09/2025</span>
      </div>
      <div class="job-company">Nokia | Munich, Germany</div>
      <ul>
        <li>Led the setup of IT rooms for new office locations, overseeing installation of firewalls, switches, routers, and servers</li>
        <li>Coordinated on-site activities including rack mounting, cabling, and device configuration</li>
        <li>Acted as liaison between on-site teams, back-end team, and project management</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span class="job-title">Hardware Network Engineer (Freelance)</span>
        <span class="job-date">09/2019 - 02/2022</span>
      </div>
      <div class="job-company">E.ON | Hannover, Germany</div>
      <ul>
        <li>Conducted infrastructure checks for physical infrastructure in data centers</li>
        <li>Managed data centers and troubleshooting issues with switch interfaces and cable connectivity</li>
        <li>Provided preventive maintenance for servers and storage equipment</li>
      </ul>
    </div>

    <h2>Key Achievements</h2>
    <div class="job">
      <ul>
        <li>Reduced deployment time by 60% through automated CI/CD pipelines</li>
        <li>Achieved 99.9% uptime for production Kubernetes clusters</li>
        <li>Implemented cost optimization strategies saving 30% on cloud spend</li>
        <li>Led cross-functional team of 5 engineers on platform modernization initiative</li>
      </ul>
    </div>

    <h2>Education</h2>
    <div class="edu-item">
      <strong>M.Sc. Computational Engineering</strong> (In Progress)
    </div>
    <div class="edu-item">
      <strong>B.Eng. Automotive Engineering</strong>
    </div>

    <h2>Key Projects</h2>
    <div class="job">
      <ul>
        <li><strong>Enterprise AKS Platform:</strong> Built and operated enterprise-scale Azure Kubernetes platform with Terraform IaC, Helm charts, and GitOps (ArgoCD) for regulated environments</li>
        <li><strong>Monitoring &amp; Observability Stack:</strong> Implemented comprehensive monitoring with Prometheus, Grafana, and Alertmanager; created custom dashboards and alerting for proactive incident detection</li>
        <li><strong>Security &amp; Governance:</strong> Implemented Kyverno policies, Azure WAF, Private Endpoints, network policies, and secrets management with Key Vault</li>
      </ul>
    </div>
  </div>
</div>
</body>
</html>`;

// ─── Cover Letter ───
const coverHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>Cover Letter - Saichander Vorem - SimonsVoss Technologies</title>
<style>
  @page { margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #1a1a1a; line-height: 1.6; }
  .page { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 25mm 25mm 20mm 25mm; }
  .header { display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #1e2d45; padding-bottom: 15px; }
  .photo { width: 35mm; height: 35mm; border-radius: 50%; object-fit: cover; border: 2px solid #0078d4; margin-right: 15px; }
  .header-text h1 { font-size: 16pt; color: #1e2d45; }
  .header-text p { font-size: 9.5pt; color: #555; }
  .meta { font-size: 9.5pt; color: #555; margin-bottom: 20px; }
  .body-text p { margin-bottom: 12px; font-size: 10.5pt; text-align: justify; }
  .closing { margin-top: 25px; }
  .closing p { margin-bottom: 4px; }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <img src="${photoDataUri}" class="photo" alt="Photo"/>
    <div class="header-text">
      <h1>Saichander Vorem</h1>
      <p>Azure Cloud Engineer / SRE | Kubernetes · Terraform · Observability · Security</p>
      <p>Munich, Germany · saichander944@gmail.com · +4915254911684</p>
    </div>
  </div>

  <div class="meta">
    <p>To: SimonsVoss Technologies GmbH, Unterfoehring</p>
    <p>Attn: Lea Tikvic</p>
    <p>Re: Azure Cloud Engineer / SRE - R&amp;D Software Team</p>
    <p>Date: 15 June 2026</p>
  </div>

  <div class="body-text">
    <p>Dear Ms. Tikvic,</p>

    <p>I am writing to express my strong interest in the Azure Cloud Engineer / SRE position within your R&amp;D Software team at SimonsVoss Technologies. The opportunity to architect a resilient, high-performance cloud ecosystem that powers digital locking systems globally is precisely the kind of impactful infrastructure work I am passionate about. With over 5 years of IT experience - including 4 years of hands-on Azure infrastructure engineering at enterprise scale - I am confident in my ability to contribute meaningfully to your team.</p>

    <p>In my current role at Cluster Reply, working as a consultant for BMW Group, I design and operate production-grade Azure Kubernetes (AKS) platforms for enterprise cloud-native applications. My responsibilities directly mirror what SimonsVoss is looking for: I build and maintain Azure environments with a strong focus on automation, security, and reliability. I operate Kubernetes platforms including upgrades, scaling, and troubleshooting. I implement monitoring and observability with Prometheus, Grafana, and Azure Monitor, and I contribute to CI/CD pipelines using GitHub Actions and ArgoCD with GitOps-based infrastructure as code practices.</p>

    <p>Security and governance are integral to my daily work at BMW - a highly regulated enterprise environment. I have implemented Kubernetes security policies with Kyverno, configured Azure Application Gateway with WAF, and managed network security through VNets, NSGs, and Private Endpoints. I also have experience with disaster recovery planning and have achieved 99.9% uptime for production Kubernetes clusters through careful architecture and proactive incident management.</p>

    <p>My technical profile aligns closely with your requirements: Azure core services and networking expertise, Terraform for IaC, Ansible for configuration management, PowerShell and Bash scripting, Kubernetes orchestration, and strong security knowledge including firewalls, WAF, and governance frameworks. I hold the AZ-104, AZ-400, CKA, and Terraform Associate certifications - all directly relevant to this role.</p>

    <p>I am based in Munich, making Unterfoehring an ideal commute. I thrive in international, collaborative environments - my current team at BMW spans multiple nationalities and I work daily in English. I would welcome the opportunity to discuss how my experience building secure, automated Azure infrastructure can support SimonsVoss's mission of making people's lives safer through cutting-edge digital security technology.</p>

    <p>Thank you for your consideration. I look forward to hearing from you.</p>
  </div>

  <div class="closing">
    <p>Best regards,</p>
    <p><strong>Saichander Vorem</strong></p>
  </div>
</div>
</body>
</html>`;

writeFileSync(resolve('output', 'cv-simonsvoss-azure-sre.html'), cvHtml);
console.log('✅ SimonsVoss CV written');

writeFileSync(resolve('output', 'cover-letter-simonsvoss-azure-sre.html'), coverHtml);
console.log('✅ SimonsVoss Cover Letter written');
