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
<title>CV - Saichander Vorem - IT Specialist AIT</title>
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
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <img src="${photoDataUri}" class="photo" alt="Saichander Vorem"/>
    <div class="header-info">
      <h1>Saichander Vorem</h1>
      <div class="subtitle">IT Specialist | Linux Administration · Networking · Virtualization · IT Security</div>
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
  <p class="summary">IT Infrastructure Specialist with 5+ years of experience in system administration, network engineering, and cloud platform operations. Strong expertise in Linux administration (package management, system hardening, shell scripting), TCP/IP networking (VLANs, subnets, routing/switching), virtualization (Proxmox, KVM), and IT security (vulnerability assessments, patch management, firewall configuration). Proven track record of designing, operating, and continuously improving IT systems in regulated enterprise environments with strict compliance and security requirements. Experienced in supporting mission-critical operations and collaborating with cross-functional teams.</p>

  <h2>Technical Skills</h2>
  <div class="skills-grid">
    <div class="skill-item"><span class="skill-label">Linux Administration:</span> RHEL, Ubuntu, CentOS; package management (apt, yum, dnf); system hardening; user/group management; systemd services; log management</div>
    <div class="skill-item"><span class="skill-label">Scripting &amp; Automation:</span> Bash, Python, PowerShell; automated system management; cron jobs; configuration scripts; deployment automation</div>
    <div class="skill-item"><span class="skill-label">Networking:</span> TCP/IP, routing, switching; VLANs, subnets, network segmentation; DNS, DHCP; network monitoring and troubleshooting tools (Wireshark, tcpdump, nmap)</div>
    <div class="skill-item"><span class="skill-label">Storage &amp; Backup:</span> RAID configuration; file systems (ext4, XFS, NFS, CIFS); backup &amp; recovery solutions; performance tuning; monitoring</div>
    <div class="skill-item"><span class="skill-label">Virtualization:</span> Proxmox VE, KVM, VMware vSphere; VM lifecycle management; resource allocation; hypervisor administration</div>
    <div class="skill-item"><span class="skill-label">Cybersecurity:</span> IT security best practices; vulnerability assessments; patch management; system hardening; access control; compliance enforcement</div>
    <div class="skill-item"><span class="skill-label">Firewalls &amp; VPN:</span> Fortinet (FortiGate); firewall rule configuration; VPN setup; security policies; network segmentation</div>
    <div class="skill-item"><span class="skill-label">Monitoring:</span> Prometheus, Grafana, Azure Monitor, Nagios; alerting; performance dashboards; log analysis (ELK)</div>
    <div class="skill-item"><span class="skill-label">Containers &amp; Cloud:</span> Docker, Kubernetes (AKS); Azure cloud services; Terraform IaC; Ansible configuration management</div>
    <div class="skill-item"><span class="skill-label">Databases:</span> PostgreSQL, MySQL; database operations; backup/recovery; integrity monitoring</div>
  </div>

  <h2>Professional Experience</h2>

  <div class="job">
    <div class="job-header">
      <span class="job-title">DevOps Engineer &amp; Cloud Consultant</span>
      <span class="job-date">06/2022 - Present</span>
    </div>
    <div class="job-company">Cluster Reply GmbH (Client: BMW Group) | Munich, Germany</div>
    <ul>
      <li>Designed and operated complex IT infrastructure solutions on Azure and Linux-based systems, ensuring stability, performance, and security across multiple environments</li>
      <li>Administered Linux-based servers (RHEL, Ubuntu): package management, system hardening, kernel updates, and performance optimization</li>
      <li>Developed Bash and Python scripts for automated system management, deployment automation, and routine operational tasks</li>
      <li>Configured and managed network infrastructure: VLANs, subnets, network segmentation, Private Endpoints, and firewall rules (NSGs, WAF)</li>
      <li>Implemented monitoring and alerting infrastructure (Prometheus, Grafana, Azure Monitor) with custom dashboards for system health and performance</li>
      <li>Managed storage systems including backup &amp; recovery procedures, performance monitoring, and data integrity checks</li>
      <li>Ensured IT security and compliance: vulnerability assessments, patch management, security policies (Kyverno), and access control (RBAC)</li>
      <li>Operated virtualized and containerized environments (Docker, Kubernetes/AKS) with resource management and lifecycle operations</li>
      <li>Collaborated with internal and external teams (IT services, security, development) to ensure quality and reliability of infrastructure</li>
      <li>Maintained infrastructure as code (Terraform, Ansible) for consistent, auditable, and repeatable deployments</li>
      <li>Provided user support and troubleshooting for hardware and software issues in production environments</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-header">
      <span class="job-title">IT Engineer (Freelance)</span>
      <span class="job-date">06/2025 - 09/2025</span>
    </div>
    <div class="job-company">Nokia | Munich, Germany</div>
    <ul>
      <li>Led IT room setup for new office locations: installation and configuration of firewalls, switches, routers, and servers</li>
      <li>Performed rack mounting, cabling, and network device configuration following security and compliance standards</li>
      <li>Configured VLANs, network segmentation, and routing for site connectivity</li>
      <li>Coordinated between on-site teams, back-end operations, and project management to ensure project delivery</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-header">
      <span class="job-title">Hardware Network Engineer (Freelance)</span>
      <span class="job-date">09/2019 - 02/2022</span>
    </div>
    <div class="job-company">E.ON | Hannover, Germany</div>
    <ul>
      <li>Managed data center infrastructure: physical servers, storage systems, switches, and network equipment</li>
      <li>Performed system and network administration: troubleshooting switch interfaces, cable connectivity, and network issues</li>
      <li>Conducted storage system operations: RAID management, file systems, backup &amp; recovery, and performance monitoring</li>
      <li>Executed preventive maintenance for servers and storage equipment; authored maintenance procedures and runbooks</li>
      <li>Performed infrastructure health checks and vulnerability assessments in compliance with energy sector regulations</li>
      <li>Monitored network performance using TCP/IP troubleshooting tools; resolved routing and switching issues</li>
    </ul>
  </div>

  <h2>Certifications</h2>
  <ul class="certs-list">
    <li>Microsoft Certified: Azure Administrator Associate (AZ-104)</li>
    <li>Microsoft Certified: Azure DevOps Engineer Expert (AZ-400)</li>
    <li>Certified Kubernetes Administrator (CKA)</li>
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

  <h2>Key Strengths for This Role</h2>
  <div class="job">
    <ul>
      <li><strong>IT Systems Architecture:</strong> Experience designing and implementing complex IT solutions tailored to specific operational requirements with long-term sustainability in mind</li>
      <li><strong>Application Ownership:</strong> Responsible for stability, integrity, and operation of production IT infrastructures including associated databases and monitoring</li>
      <li><strong>Cross-team Collaboration:</strong> Proven ability to work closely with internal/external teams including IT services, security, and development to ensure quality and reliability</li>
      <li><strong>Regulated Environments:</strong> Experience working in compliance-driven settings (automotive, energy) with strict security and audit requirements</li>
    </ul>
  </div>
</div>
</body>
</html>`;

writeFileSync(resolve('output', 'cv-aerospace-ait.html'), cvHtml);
console.log('✅ Aerospace AIT CV written');
