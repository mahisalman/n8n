# Contributing to Article Processor AI

Thank you for your interest in contributing to Article Processor AI! 🚀

## 🤝 How to Contribute

### 1. Fork the Repository
- Click the "Fork" button on the top right of the repository page
- Clone your forked repository to your local machine

### 2. Set Up Development Environment

```bash
# Clone your fork
git clone https://github.com/yourusername/article-processor-ai.git
cd article-processor-ai

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Install development dependencies
pip install -r requirements-dev.txt
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

- Write clean, readable code
- Add comments for complex logic
- Follow the existing code style
- Add tests for new features
- Update documentation if needed

### 5. Test Your Changes

```bash
# Run the application
python main.py

# Test the API endpoints
python test_endpoint.py

# Run linting
flake8 main.py
```

### 6. Commit Your Changes

```bash
git add .
git commit -m "Add: Brief description of your changes"
```

### 7. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📋 Contribution Guidelines

### Code Style
- Use meaningful variable and function names
- Add type hints for function parameters and return values
- Follow PEP 8 style guide
- Keep functions small and focused

### Commit Messages
- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove)
- Keep the first line under 50 characters
- Add more details in the body if needed

### Pull Request Guidelines
- Provide a clear description of your changes
- Reference any related issues
- Include screenshots for UI changes
- Ensure all tests pass

## 🐛 Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment details

## 💡 Feature Requests

We welcome feature requests! Please:
- Check existing issues first
- Provide a clear description
- Explain the use case
- Consider implementation complexity

## 🏷️ Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed

## 📞 Getting Help

- Open an issue for questions
- Join our discussions
- Check the documentation

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🙏
