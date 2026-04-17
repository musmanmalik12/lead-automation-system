# 🚀 Automated Lead Processing & Scoring System

A real-time lead automation system that ingests leads via API, scores them dynamically, and triggers instant notifications using workflow automation.

---

## 🧠 Overview

This project demonstrates a backend-driven automation pipeline similar to lightweight CRM and lead management systems.

It processes incoming leads, evaluates their quality, and routes high-priority leads to external systems for immediate action.

---

## ⚙️ Features

- ✅ Lead ingestion via REST API (Node.js + Express)
- ✅ Dynamic lead scoring (HOT / WARM / COLD)
- ✅ Event-driven workflow using n8n
- ✅ Conditional routing using Switch logic
- ✅ Real-time Slack notifications for HOT leads
- ✅ Modular and extensible architecture

---

## 🏗️ Architecture


Lead Source (API / Scraper / Form)
↓
Backend API (Node.js)
↓
Scoring Engine (HOT / WARM / COLD)
↓
n8n Workflow (Webhook + Switch)
↓
Slack Notification (HOT Leads)


---

## 🛠️ Tech Stack

- Node.js (Express)
- TypeScript
- n8n (Workflow Automation)
- Slack Webhooks
- Axios

---

## 🔄 Workflow

1. Lead is sent to backend API
2. Backend evaluates lead score and assigns a tier
3. Data is forwarded to n8n via webhook
4. n8n routes lead using Switch node
5. HOT leads trigger real-time Slack notifications

---

## 🚀 Getting Started

### 1. Clone Repository


git clone https://github.com/your-username/lead-automation-system.git


### 2. Install Dependencies


cd backend
npm install


### 3. Run Backend


npm run dev


### 4. Run n8n (Docker)


docker run -it --rm -p 5678:5678 n8nio/n8n


## 💡 Use Cases

- Lead generation systems
- CRM automation
- Sales pipeline prioritization
- Marketing automation workflows

---

## 📌 Future Improvements

- Email automation for WARM leads
- Lead storage (database integration)
- Multi-client support
- Advanced scoring rules

---

## 🧑‍💻 Author

Muhammad Usman  
Backend & Automation Engineer
