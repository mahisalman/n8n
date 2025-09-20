from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, EmailStr
import httpx
import uuid
from typing import Dict, Any
import uvicorn
import os

app = FastAPI(title="Article Processor API", version="1.0.0")

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

class ChatRequest(BaseModel):
    email: EmailStr
    article_url: str

class WebhookPayload(BaseModel):
    email: EmailStr
    article_url: str
    session_id: str

@app.post("/chat")
async def chat_endpoint(request: ChatRequest) -> Dict[str, Any]:
    """
    Process article chat request by sending data to n8n webhook
    """
    try:
        # Generate session_id
        session_id = str(uuid.uuid4())
        
        # Prepare payload for webhook
        payload = WebhookPayload(
            email=request.email,
            article_url=request.article_url,
            session_id=session_id
        )
        
        # Webhook URL
        webhook_url = "https://mahisalman.app.n8n.cloud/webhook/8f901235-6202-4a78-955d-89ecc3996308"
        
        # Send POST request to webhook
        async with httpx.AsyncClient() as client:
            response = await client.post(
                webhook_url,
                json=payload.model_dump(),
                timeout=30.0
            )
            
            # Check if request was successful
            if response.status_code == 200:
                return {
                    "success": True,
                    "message": "Article processing started successfully",
                    "session_id": session_id,
                    "webhook_response": response.json() if response.headers.get("content-type", "").startswith("application/json") else response.text
                }
            else:
                raise HTTPException(
                    status_code=response.status_code,
                    detail=f"Webhook request failed with status {response.status_code}: {response.text}"
                )
                
    except httpx.RequestError as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to connect to webhook: {str(e)}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Internal server error: {str(e)}"
        )

@app.get("/")
async def root():
    """
    Serve the main frontend page
    """
    return FileResponse("static/index.html")

@app.get("/api")
async def api_info():
    """
    API information endpoint
    """
    return {"message": "Article Processor API is running", "version": "1.0.0"}

@app.get("/health")
async def health_check():
    """
    Health check endpoint
    """
    return {"status": "healthy", "service": "article-processor-api"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
