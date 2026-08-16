import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Load photo
const photoPath = resolve('output', 'Saichander.JPG');
const photoBuffer = readFileSync(photoPath);
console.log(`Photo loaded: ${photoBuffer.length} bytes`);
const photoDataUri = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`;

// ATS-optimized CV - single column, clean formatting, keyword-rich
const cvHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>CV - Saichander Vorem - Site Reliability Engineer</title>
<style>
  @page { margin: 15mm 18mm; }
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
  .certs-list li::before { content: "✓"; position: absolute; left: 0; color: #1b3a5c; font-weight: 700; }
  .edu-item { margin-bottom: 6px; }
  .edu-item strong { font-size: 10pt; }
  .edu-item p { font-size: 9pt; color: #555; }
  .keywords { font-size: 8pt; color: #999; margin-top: 12px; border-top: 1px solid #eee; padding-top: 6px; }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <img src="${photoDataUri}" class="photo" alt="Saichander Vorem"/>
    <div class="header-info">
      <h1>Saichander Vorem</h1>
      <div class="subtitle">Site Reliability Engineer | Azure · Kubernetes · Terraform · Observability</div>
      <div class="contact">
        <span>📍 Munich, Germany</span>
        <span>📧 saichander944@gmail.com</span>
        <span>📱 +4915254911684</span><br/>
        <span>🔗 linkedin.com/in/saichander-reddy-vorem-683870229</span>
        <span>🌐 github.com/saichandevorem</span>
      </div>
    </div>
  </div>

  <h2>Professional Summary</h2>
  <p class="summary">Site Reliability Engineer with 5+ years of experience in platform engineering and cloud operations, specializing in Kubernetes (AKS) cluster management, Infrastructure as Code (Terraform), and observability (Prometheus, Grafana, Azure Monitor). Proven track record of defining SLOs/SLIs, driving incident response, eliminating operational toil through automation, and maintaining platform reliability in regulated enterprise environments. Experienced in GitOps-based CI/CD (GitHub Actions, ArgoCD), capacity planning, cost optimization, and cross-functional collaboration with security and development teams.</p>

  <h2>Technical Skills</h2>
  <div class="skills-grid">
    <div class="skill-item"><span class="skill-label">Cloud Platform:</span> Azure (AKS, ACR, Key Vault, Azure Monitor, Application Insights, Virtual Networks, Private Endpoints, App Services, Functions)</div>
    <div class="skill-item"><span class="skill-label">Kubernetes:</span> AKS cluster lifecycle, networking (Ingress, network policies), autoscaling (HPA/VPA), multi-tenancy, resource quotas, Helm, Kyverno</div>
    <div class="skill-item"><span class="skill-label">Infrastructure as Code:</span> Terraform (modules, workspaces, state management), Ansible, ARM Templates, Bicep</div>
    <div class="skill-item"><span class="skill-label">Observability:</span> Prometheus, Grafana, Alertmanager, Azure Monitor, Application Insights, ELK Stack, distributed tracing</div>
    <div class="skill-item"><span class="skill-label">CI/CD &amp; GitOps:</span> GitHub Actions, ArgoCD, Azure DevOps Pipelines, release gates, rollback mechanisms</div>
    <div class="skill-item"><span class="skill-label">SRE Practices:</span> SLO/SLI definition, error budget tracking, incident management, blameless post-incident reviews, runbook authorship, capacity planning</div>
    <div class="skill-item"><span class="skill-label">Scripting &amp; Automation:</span> Python, Bash, PowerShell (toil elimination, operational tooling)</div>
    <div class="skill-item"><span class="skill-label">Security &amp; Compliance:</span> Azure Key Vault, HashiCorp Vault, NSGs, firewalls, Private Endpoints, RBAC, Defender for Cloud, Kyverno policies</div>
    <div class="skill-item"><span class="skill-label">FinOps &amp; Cost:</span> Resource right-sizing, node pool optimization, cost attribution, reserved capacity planning</div>
    <div class="skill-item"><span class="skill-label">Reliability:</span> Disaster recovery runbooks, rolling upgrades, backup/recovery testing, chaos engineering, change freeze coordination</div>
  </div>

  <h2>Professional Experience</h2>

  <div class="job">
    <div class="job-header">
      <span class="job-title">DevOps Engineer &amp; Cloud Consultant (Site Reliability Focus)</span>
      <span class="job-date">06/2022 - Present</span>
    </div>
    <div class="job-company">Cluster Reply GmbH (Client: BMW Group) | Munich, Germany</div>
    <ul>
      <li>Implemented and operated Kubernetes infrastructure (AKS): managed cluster lifecycle including upgrades, networking, resource quotas, autoscaling configuration, and multi-tenancy patterns across product team namespaces</li>
      <li>Defined and maintained SLOs/SLIs for platform components using Prometheus and Grafana; produced reliability reports and tracked error budgets for production services achieving 99.9% uptime</li>
      <li>Built and maintained observability infrastructure: Prometheus, Grafana, Azure Monitor, and Application Insights with custom alerting rules, dashboards, and distributed tracing coverage</li>
      <li>Developed Infrastructure as Code (Terraform) to provision and manage Azure resources with consistency, auditability, and repeatable rollback capability across multiple environments</li>
      <li>Contributed to CI/CD pipelines and GitOps tooling (GitHub Actions, ArgoCD) with focus on deployment safety, release gates, and automated rollback mechanisms</li>
      <li>Performed capacity planning and cost-aware resource management: right-sized node pools, tuned horizontal/vertical pod autoscalers, and identified resource waste across namespaces - saving 30% on cloud spend</li>
      <li>Served as infrastructure escalation point for incident response; led blameless post-incident reviews and authored operational runbooks for cluster-level and network-level failures</li>
      <li>Eliminated operational toil through automation: developed Python and Bash tooling for repetitive tasks, reducing manual operational work by 60%</li>
      <li>Implemented Kubernetes security and compliance policies (Kyverno) in regulated enterprise environment with strict data protection and auditability requirements</li>
      <li>Maintained platform reliability procedures including rolling upgrades, backup and recovery testing, and disaster recovery runbook maintenance</li>
      <li>Collaborated with Security Engineers on infrastructure hardening: Azure WAF, Private Endpoints, network policies, and vulnerability remediation</li>
      <li>Architected BMW's enterprise API gateway on Azure (API Management, Front Door CDN, Application Gateway) managing 20+ global automotive APIs</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-header">
      <span class="job-title">IT Engineer (Freelance)</span>
      <span class="job-date">06/2025 - 09/2025</span>
    </div>
    <div class="job-company">Nokia | Munich, Germany</div>
    <ul>
      <li>Led IT infrastructure setup for new office locations: installation of firewalls, switches, routers, and servers</li>
      <li>Coordinated on-site activities including rack mounting, cabling, and network device configuration</li>
      <li>Acted as liaison between on-site teams, back-end operations, and project management ensuring SLA compliance</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-header">
      <span class="job-title">Hardware Network Engineer (Freelance)</span>
      <span class="job-date">09/2019 - 02/2022</span>
    </div>
    <div class="job-company">E.ON | Hannover, Germany</div>
    <ul>
      <li>Conducted infrastructure health checks for physical data center infrastructure in regulated energy environment</li>
      <li>Managed data center operations: troubleshooting switch interfaces, cable connectivity, and network issues</li>
      <li>Performed preventive maintenance for servers and storage equipment; authored maintenance runbooks</li>
    </ul>
  </div>

  <h2>Certifications</h2>
  <ul class="certs-list">
    <li>Certified Kubernetes Administrator (CKA) - Cloud Native Computing Foundation</li>
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

  <h2>Key Projects</h2>
  <div class="job">
    <ul>
      <li><strong>Enterprise AKS Platform (SRE):</strong> Built and operated enterprise-scale Azure Kubernetes platform with full SLO/SLI instrumentation, Terraform IaC, GitOps delivery (ArgoCD), and comprehensive observability stack (Prometheus/Grafana/Azure Monitor)</li>
      <li><strong>Observability-as-Code:</strong> Implemented centralized monitoring infrastructure with Prometheus, Grafana dashboards, and Alertmanager; created standardized alerting rules and distributed tracing across platform components</li>
      <li><strong>Toil Elimination Program:</strong> Systematically identified and automated repetitive operational tasks through Python/Bash tooling; measured and tracked toil reduction achieving 60% reduction in manual operations</li>
      <li><strong>Platform Reliability Framework:</strong> Developed disaster recovery runbooks, backup/recovery testing procedures, and change freeze coordination processes for production Kubernetes clusters</li>
    </ul>
  </div>
</div>
</body>
</html>`;

writeFileSync(resolve('output', 'cv-allianz-sre.html'), cvHtml);
console.log('✅ Allianz Partners SRE CV written');

// ─── Cover Letter ───
const coverHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>Cover Letter - Saichander Vorem - Allianz Partners SRE</title>
<style>
  @page { margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #1a1a1a; line-height: 1.6; }
  .page { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 25mm 25mm 20mm 25mm; }
  .header { display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #1b3a5c; padding-bottom: 15px; }
  .photo { width: 35mm; height: 35mm; border-radius: 50%; object-fit: cover; border: 2px solid #1b3a5c; margin-right: 15px; }
  .header-text h1 { font-size: 16pt; color: #1b3a5c; }
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
      <p>Site Reliability Engineer | Azure · Kubernetes · Terraform · Observability</p>
      <p>Munich, Germany · saichander944@gmail.com · +4915254911684</p>
    </div>
  </div>

  <div class="meta">
    <p>To: Allianz Partners - Chief Data &amp; AI Office, Advanced Analytics (DA3)</p>
    <p>Re: Site Reliability Engineer - Platform Engineering Team</p>
    <p>Date: 15 June 2026</p>
  </div>

  <div class="body-text">
    <p>Dear Hiring Team,</p>

    <p>I am excited to apply for the Site Reliability Engineer position within the Advanced Analytics team at Allianz Partners. The opportunity to own the reliability and operational health of a central engineering platform supporting AI services, Java APIs, and frontend applications is a perfect match for my experience and professional passion. With over 5 years in platform engineering and cloud operations - including 3+ years focused on AKS reliability at enterprise scale - I am well-positioned to contribute immediately to your platform engineering team.</p>

    <p>In my current role at Cluster Reply, consulting for BMW Group, I operate production-grade Azure Kubernetes (AKS) platforms with responsibilities that directly mirror this position. I manage cluster lifecycle including upgrades, networking, resource quotas, autoscaling configuration, and multi-tenancy across product team namespaces. I have defined SLOs and SLIs for platform components using Prometheus and Grafana, tracked error budgets, and produced reliability reports - achieving 99.9% uptime for production clusters. When incidents occur, I serve as the infrastructure escalation point and lead blameless post-incident reviews.</p>

    <p>Toil elimination is central to my approach. I have systematically identified repetitive operational tasks and automated them through Python and Bash tooling, reducing manual operations by 60%. I develop Infrastructure as Code with Terraform to ensure consistency, auditability, and repeatable rollback capability - essential qualities for a regulated environment like Allianz. I also contribute to CI/CD pipelines and GitOps tooling (GitHub Actions, ArgoCD) with a focus on deployment safety and rollback mechanisms.</p>

    <p>My observability experience is comprehensive: I build and maintain Prometheus, Grafana, Azure Monitor, and Application Insights infrastructure with custom alerting rules, dashboards, and distributed tracing. I perform capacity planning, right-size node pools, tune autoscalers, and identify resource waste - my cost optimization initiatives have saved 30% on cloud spend. I hold the CKA, AZ-104, AZ-400, and Terraform Associate certifications, validating my hands-on expertise across the exact technologies in your stack.</p>

    <p>Working at BMW - a highly regulated enterprise - has given me strong experience with auditability, change traceability, compliance policies (Kyverno), and secure-by-default operations. I collaborate daily with Security Engineers on infrastructure hardening, vulnerability remediation, and network security (WAF, Private Endpoints, network policies). This regulated-industry background translates directly to the insurance context at Allianz Partners.</p>

    <p>I am comfortable in agile, iterative environments with personal ownership and accountability. I communicate clearly across cross-functional stakeholders and I actively use AI-assisted tools (GitHub Copilot) to improve automation coverage. I would welcome the opportunity to discuss how my SRE experience can strengthen your platform's reliability commitments.</p>

    <p>Thank you for your consideration.</p>
  </div>

  <div class="closing">
    <p>Best regards,</p>
    <p><strong>Saichander Vorem</strong></p>
  </div>
</div>
</body>
</html>`;

writeFileSync(resolve('output', 'cover-letter-allianz-sre.html'), coverHtml);
console.log('✅ Allianz Partners SRE Cover Letter written');
