import requests
import json

def test_chat_endpoint():
    """Test the /chat endpoint"""
    
    # Test data
    test_data = {
        "email": "test@example.com",
        "article_url": "https://example.com/article"
    }
    
    # API endpoint
    url = "http://localhost:8000/chat"
    
    try:
        print("Testing /chat endpoint...")
        print(f"Request data: {json.dumps(test_data, indent=2)}")
        
        response = requests.post(url, json=test_data)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 200:
            print("✅ Test passed!")
        else:
            print("❌ Test failed!")
            
    except requests.exceptions.ConnectionError:
        print("❌ Connection failed! Make sure the FastAPI server is running on localhost:8000")
        print("Run: python main.py")
    except Exception as e:
        print(f"❌ Error: {e}")

def test_health_endpoint():
    """Test the health endpoint"""
    try:
        print("\nTesting /health endpoint...")
        response = requests.get("http://localhost:8000/health")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 200:
            print("✅ Health check passed!")
        else:
            print("❌ Health check failed!")
            
    except Exception as e:
        print(f"❌ Health check error: {e}")

if __name__ == "__main__":
    test_health_endpoint()
    test_chat_endpoint()
