# Career-Ops

> **Fork Notice:** This is a customized version of [Career-Ops](https://github.com/santifer/career-ops), an open-source AI-powered job search system created by [Santiago Fernández de Valderrama](https://santifer.io).

<p align="center">
  <img src="https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white" alt="Claude Code">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white" alt="Go">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT">
</p>

---

## What Is This

Career-Ops turns any AI coding assistant (Claude, Copilot, Cursor) into a full job search command center. Instead of manually tracking applications in a spreadsheet, you get an AI-powered pipeline that:

- **Evaluates job offers** with structured scoring (match %, gaps, compensation research)
- **Generates tailored CVs** — ATS-optimized PDFs customized per job description
- **Creates cover letters** — personalized for each application
- **Scans company portals** automatically (Greenhouse, Ashby, Lever, company pages)
- **Prepares interview stories** — STAR format based on your experience
- **Tracks everything** in a single source of truth

> **Important: This is NOT a spray-and-pray tool.** Career-ops helps you find the few offers worth your time out of hundreds, then generates high-quality application materials for those roles.

---

## Complete Setup Guide

### Prerequisites

| Requirement | Version | Check Command |
|-------------|---------|---------------|
| **Node.js** | 18+ | `node --version` |
| **npm** | 9+ | `npm --version` |
| **Git** | Any | `git --version` |
| **Go** (optional) | 1.21+ | `go version` |

### Step 1: Clone and Install

```bash
# Clone the repository
git clone https://github.com/santifer/career-ops.git
cd career-ops

# Install Node.js dependencies
npm install

# Install Playwright browser (required for PDF generation)
npx playwright install chromium
```

### Step 2: Verify Installation

```bash
# Run the doctor check — all items should pass
node doctor.mjs
```

Expected output:
```
✅ Node.js version ok (v22.x.x)
✅ npm version ok (10.x.x)
✅ playwright installed
✅ chromium browser available
✅ Required directories exist
```

### Step 3: Create Your Profile

```bash
# Copy the example profile
cp config/profile.example.yml config/profile.yml
```

Edit `config/profile.yml` with your details:

```yaml
name: Your Name
email: your.email@example.com
linkedin: https://linkedin.com/in/yourprofile
github: https://github.com/yourusername
portfolio: https://yourportfolio.com

# Target roles (choose your archetypes)
archetypes:
  - DevOps Engineer
  - Cloud Platform Engineer
  - SRE
  - Platform Engineer

# Target locations
locations:
  - Germany
  - Netherlands
  - Remote (EU)

# Compensation targets
compensation:
  min: 80000
  target: 100000
  currency: EUR

# Languages you speak
languages:
  - English (Fluent)
  - German (B1)

# Key skills to highlight
skills:
  - Kubernetes
  - Terraform
  - Azure
  - CI/CD
  - Python
```

### Step 4: Create Your CV

Create `cv.md` in the project root with your CV in markdown format:

```markdown
# Your Name

**Your Title**

Location | email@example.com | [LinkedIn](url) | [GitHub](url)

---

## Professional Summary

Your 2-3 sentence summary here...

---

## Professional Experience

### Job Title
**Company Name** | Location | 2020 – Present

- Achievement 1 with metrics
- Achievement 2 with impact
- Technology stack used

### Previous Job Title
**Previous Company** | Location | 2017 – 2020

- Key accomplishments
- Projects delivered

---

## Technical Skills

| Category | Technologies |
|----------|-------------|
| Cloud | AWS, Azure, GCP |
| Containers | Kubernetes, Docker |
| IaC | Terraform, Ansible |

---

## Certifications

- Certification 1
- Certification 2

---

## Education

**Degree in Field**
University Name | Year
```

### Step 5: Configure Company Portals (Optional)

```bash
# Copy the example portals file
cp templates/portals.example.yml portals.yml
```

Add companies you want to track in `portals.yml`:

```yaml
companies:
  - name: Microsoft
    careers_url: https://careers.microsoft.com
    keywords: ["DevOps", "Cloud Engineer", "Azure"]
    
  - name: Google
    careers_url: https://careers.google.com
    keywords: ["SRE", "Platform Engineer"]
    
  - name: Spotify
    careers_url: https://lifeatspotify.com/jobs
    keywords: ["Infrastructure", "Platform"]
```

### Step 6: Create Profile Mode (Optional)

Create `modes/_profile.md` with your career context:

```markdown
# Profile Context

## Target Archetypes
- DevOps Engineer: Azure, Kubernetes, Terraform, CI/CD
- Cloud Platform Engineer: Infrastructure, automation, observability
- SRE: Reliability, monitoring, incident response

## Compensation Targets (EUR)
| Country | Range |
|---------|-------|
| Germany | €70K-100K |
| Switzerland | CHF 100K-140K |
| Netherlands | €65K-95K |

## Location Preferences
1. Remote-first companies
2. Germany (Munich, Berlin)
3. Netherlands (Amsterdam)

## Key Differentiators
- 7+ years cloud experience
- Kubernetes expertise (CKA certified)
- Strong Terraform/IaC background
```

---

## Usage Guide

### Method 1: Using VS Code with GitHub Copilot/Cursor

The simplest way — just chat with your AI assistant in VS Code:

```
# Evaluate a job posting
"Evaluate this job against my CV: [paste URL]"

# Generate tailored CV
"Create a tailored CV for this DevOps role at SAP"

# Generate cover letter
"Write a cover letter for this position"

# Generate PDF
"Convert output/cv-sap.md to PDF"
```

### Method 2: Using Claude Code CLI

If you have Claude Code CLI installed (`npm install -g @anthropic-ai/claude-code`):

```bash
# Evaluate a job posting
claude "scan https://jobs.company.com/job/12345" --prompt-file modes/scan.md

# Deep analysis with company research
claude "deep https://jobs.company.com/job/12345" --prompt-file modes/deep.md

# Generate application materials
claude "apply to DevOps Engineer at Company" --prompt-file modes/apply.md

# Interview preparation
claude "prep for Company interview" --prompt-file modes/interview-prep.md

# Track applications
claude "add Company to tracker - applied today" --prompt-file modes/tracker.md

# Batch process multiple jobs
claude --prompt-file modes/batch.md
```

### Method 3: Direct Script Usage

```bash
# Generate PDF from markdown
node generate-pdf.mjs output/cv-tailored.html output/cv-tailored.pdf --format=a4

# Run health check
node doctor.mjs

# Verify pipeline integrity
node verify-pipeline.mjs
```

---

## Available Modes

| Mode | File | Description |
|------|------|-------------|
| **scan** | `modes/scan.md` | Quick job evaluation (match %, gaps, recommendation) |
| **deep** | `modes/deep.md` | Deep analysis with company research |
| **apply** | `modes/apply.md` | Generate full application (CV + cover letter) |
| **pdf** | `modes/pdf.md` | Generate ATS-optimized PDF |
| **tracker** | `modes/tracker.md` | Manage application tracking |
| **batch** | `modes/batch.md` | Process multiple jobs in parallel |
| **interview-prep** | `modes/interview-prep.md` | Prepare STAR stories and answers |
| **pipeline** | `modes/pipeline.md` | Process pending applications |
| **contacto** | `modes/contacto.md` | LinkedIn outreach messages |

---

## Workflow Example

Here's a typical job search workflow:

```
1. Find interesting job posting
   └── Paste URL to AI assistant

2. Evaluate fit
   └── "scan [URL]" → Get match %, gaps, recommendation

3. If good fit (>80% match)
   └── "apply to [role] at [company]" → Get tailored CV + cover letter

4. Generate PDFs
   └── "convert to PDF" → ATS-optimized documents

5. Track application
   └── "add to tracker - applied" → Update pipeline

6. Prepare for interview
   └── "prep for [company]" → STAR stories, company research
```

---

## Output Files

Generated files are saved in the `output/` directory:

```
output/
├── cv-company-role.md          # Tailored CV (markdown)
├── cv-company-role.html        # Tailored CV (HTML)
├── cv-company-role.pdf         # Tailored CV (PDF)
├── cover-letter-company.md     # Cover letter (markdown)
├── cover-letter-company.html   # Cover letter (HTML)
└── cover-letter-company.pdf    # Cover letter (PDF)
```

---

## Project Structure

```
career-ops/
├── cv.md                        # Your master CV (create this)
├── config/
│   └── profile.yml              # Your profile (create this)
├── modes/                       # AI mode prompts
│   ├── _shared.md               # Shared context
│   ├── _profile.md              # Your career context (create this)
│   ├── scan.md                  # Quick evaluation
│   ├── deep.md                  # Deep analysis
│   ├── apply.md                 # Application generation
│   └── ...
├── templates/
│   ├── cv-template.html         # CV HTML template
│   └── portals.example.yml      # Company portals template
├── output/                      # Generated files (gitignored)
├── reports/                     # Evaluation reports (gitignored)
├── data/                        # Tracking data (gitignored)
└── docs/                        # Additional documentation
```

---

## Tips for Best Results

1. **Feed it context** — The more your AI knows about you, the better. Update cv.md and profile.yml with details.

2. **Be specific** — "Apply to Senior DevOps at SAP Walldorf" works better than "apply to job".

3. **Review outputs** — AI-generated content should always be reviewed before submitting.

4. **Iterate** — If the first CV isn't perfect, ask for adjustments: "Make it more concise" or "Emphasize Kubernetes more".

5. **Keep master CV updated** — Your cv.md is the source of truth. Keep it comprehensive.

6. **Use the evaluation** — Don't apply to everything. Focus on 4+ score matches.

---

## Features

| Feature | Description |
|---------|-------------|
| **Job Evaluation** | Match percentage, gap analysis, compensation research |
| **Tailored CVs** | Customized for each job description |
| **Cover Letters** | Personalized for each application |
| **ATS-Optimized PDFs** | Clean, parseable format |
| **Interview Prep** | STAR stories based on job requirements |
| **Application Tracking** | Pipeline status management |
| **Batch Processing** | Evaluate multiple jobs at once |
| **Company Research** | Deep analysis mode with company context |

---

## Dashboard TUI (Optional)

The built-in terminal dashboard lets you browse your pipeline visually:

```bash
cd dashboard
go build -o career-dashboard .
./career-dashboard --path ..
```

Features: filter tabs, sort modes, grouped/flat view, inline status changes.

---

## Tech Stack

- **Agent**: Claude Code / GitHub Copilot / Cursor with custom modes
- **PDF**: Playwright + HTML templates
- **Scanner**: Playwright + Greenhouse API
- **Dashboard**: Go + Bubble Tea (optional)
- **Data**: Markdown + YAML config

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `playwright not found` | Run `npx playwright install chromium` |
| `doctor.mjs fails` | Ensure Node.js 18+ is installed |
| PDF generation fails | Check chromium is installed: `npx playwright install chromium` |
| Permission errors | Run terminal as administrator (Windows) |

---

## Credits

This project is based on [Career-Ops](https://github.com/santifer/career-ops) by [Santiago Fernández de Valderrama](https://santifer.io) — an incredible open-source contribution to the job search community.

- Original author: [@santifer](https://x.com/santifer)
- Original repo: [github.com/santifer/career-ops](https://github.com/santifer/career-ops)
- Case study: [santifer.io/career-ops-system](https://santifer.io/career-ops-system)

---

## Disclaimer

**career-ops is a local, open-source tool — NOT a hosted service.**

1. **Your data stays local.** CV, contact info, and personal data stay on your machine.
2. **Always review AI outputs.** AI models can make mistakes. Review before submitting.
3. **Respect ToS.** Use responsibly with career portals (Greenhouse, Lever, LinkedIn, etc.).
4. **No guarantees.** Evaluations are recommendations, not truth.

See [LEGAL_DISCLAIMER.md](LEGAL_DISCLAIMER.md) for full details.

---

## License

MIT
