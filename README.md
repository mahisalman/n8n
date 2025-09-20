<div align="center">

# 🧠 Article Processor AI

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://www.python.org/)
[![n8n](https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white)](https://n8n.io/)
[![AI](https://img.shields.io/badge/AI-Powered-00D4AA?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)

**🚀 AI-Powered Article Analysis & Insights Platform**

*Transform any article into actionable insights with cutting-edge AI technology*

[🌐 Live Demo](#-live-demo) • [📖 Documentation](#-documentation) • [⚡ Quick Start](#-quick-start) • [🤝 Contributing](#-contributing)

</div>

---

## ✨ Features

<div align="center">

| 🎯 **Core Features** | 🛠️ **Technical Features** | 🎨 **UI/UX Features** |
|:---:|:---:|:---:|
| 🤖 **AI-Powered Analysis** | ⚡ **FastAPI Backend** | 🎨 **Modern Design** |
| 📝 **Article Summarization** | 🔗 **n8n Integration** | 📱 **Responsive Layout** |
| 💡 **Key Insights Extraction** | 🔐 **Session Management** | ✨ **Smooth Animations** |
| 📧 **Email Delivery** | 🛡️ **Input Validation** | 🎯 **User-Friendly** |
| 📊 **Data Storage** | 🔄 **Real-time Processing** | 🌈 **Beautiful Gradients** |

</div>

## 🎯 What You'll Get

<div align="center">

### 📋 **Article Summary**
AI-generated 3-5 sentence summary of any article

### 💡 **Key Insights** 
Extract 3-5 important insights and takeaways

### 📧 **Email Delivery**
Results delivered directly to your inbox

### 📊 **Data Storage**
Results saved for future reference

</div>

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- pip (Python package installer)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/article-processor-ai.git
cd article-processor-ai
```

2. **Install dependencies**
```bash
pip install -r requirements.txt
```

3. **Start the application**
```bash
python main.py
```

4. **Open your browser**
```
http://localhost:8000
```

## 📖 Documentation

### API Endpoints

#### 🎯 **POST /chat**
Process article for AI analysis

**Request:**
```json
{
  "email": "user@example.com",
  "article_url": "https://example.com/article"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Article processing started successfully",
  "session_id": "uuid-generated-session-id",
  "webhook_response": {
    "message": "Workflow was started"
  }
}
```

#### 🔍 **GET /**
Serve the main frontend interface

#### ❤️ **GET /health**
Health check endpoint

### Interactive Documentation

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## 🏗️ Architecture

```mermaid
graph TB
    A[🌐 Frontend] --> B[⚡ FastAPI Server]
    B --> C[🔗 n8n Webhook]
    C --> D[📰 Article Fetcher]
    D --> E[🤖 Gemini AI]
    E --> F[📊 Google Sheets]
    E --> G[📧 Email Service]
    
    style A fill:#667eea,stroke:#333,stroke-width:2px,color:#fff
    style B fill:#00D4AA,stroke:#333,stroke-width:2px,color:#fff
    style C fill:#FF6D5A,stroke:#333,stroke-width:2px,color:#fff
    style E fill:#4285F4,stroke:#333,stroke-width:2px,color:#fff
```

## 🛠️ Tech Stack

<div align="center">

| **Frontend** | **Backend** | **AI/ML** | **Automation** |
|:---:|:---:|:---:|:---:|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi) | ![Google AI](https://img.shields.io/badge/Google_AI-4285F4?style=flat&logo=google&logoColor=white) | ![n8n](https://img.shields.io/badge/n8n-FF6D5A?style=flat&logo=n8n&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) | ![Gemini](https://img.shields.io/badge/Gemini-4285F4?style=flat&logo=google&logoColor=white) | ![Webhooks](https://img.shields.io/badge/Webhooks-FF6D5A?style=flat&logo=webhooks&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | ![Uvicorn](https://img.shields.io/badge/Uvicorn-4B8BBE?style=flat&logo=uvicorn&logoColor=white) | ![AI](https://img.shields.io/badge/AI-00D4AA?style=flat&logo=openai&logoColor=white) | ![Google Sheets](https://img.shields.io/badge/Google_Sheets-34A853?style=flat&logo=google-sheets&logoColor=white) |

</div>

## 🌐 Live Demo

<div align="center">

### 🎨 **Beautiful Frontend Interface**

![Frontend Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Article+Processor+AI+Frontend)

### 📱 **Responsive Design**

![Mobile Preview](https://via.placeholder.com/300x600/764ba2/ffffff?text=Mobile+View)

</div>

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Webhook Configuration
WEBHOOK_URL=https://mahisalman.app.n8n.cloud/webhook/8f901235-6202-4a78-955d-89ecc3996308

# Server Configuration
HOST=0.0.0.0
PORT=8000
DEBUG=True
```

### Customization

- **Webhook URL**: Update the webhook URL in `main.py`
- **Styling**: Modify `static/style.css` for custom themes
- **API Endpoints**: Add new endpoints in `main.py`

## 📊 Project Structure

```
article-processor-ai/
├── 📁 static/
│   ├── 📄 index.html          # Main frontend page
│   ├── 🎨 style.css           # Modern CSS styling
│   └── ⚡ script.js           # Interactive JavaScript
├── 📄 main.py                 # FastAPI application
├── 📄 requirements.txt        # Python dependencies
├── 📄 README.md              # Project documentation
└── 📄 .env                   # Environment variables
```

## 🚀 Deployment

### Local Development

```bash
# Development mode with auto-reload
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Production Deployment

```bash
# Production mode
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

### Docker Deployment

```dockerfile
FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

<div align="center">

**Mahi Salman**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mahisalman)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mahisalman)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://mahisalman.dev)

</div>

## 🙏 Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) for the amazing web framework
- [n8n](https://n8n.io/) for workflow automation
- [Google AI](https://ai.google.dev/) for Gemini AI capabilities
- [Font Awesome](https://fontawesome.com/) for beautiful icons

---

<div align="center">

### ⭐ **Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/mahisalman/article-processor-ai?style=social)](https://github.com/mahisalman/article-processor-ai)
[![GitHub forks](https://img.shields.io/github/forks/mahisalman/article-processor-ai?style=social)](https://github.com/mahisalman/article-processor-ai)

**Made with ❤️ by [Mahi Salman](https://linkedin.com/in/mahisalman)**

</div>
