# CookCue

CookCue is a smart recipe recommendation web application that helps users manage their fridge inventory and receive personalized recipe suggestions based on the ingredients they have, dietary preferences, and meal types.

## Features

- **User Authentication & Profile Management:**  
  Secure user registration, login, and profile updates.
  
- **Fridge Inventory Management:**  
  Easily add, update, and remove ingredients from your fridge.
  
- **Personalized Recipe Recommendations:**  
  Get recipe suggestions based on your available ingredients and dietary/meal preferences (e.g., vegan, gluten-free / breakfast, dinner).
  
- **Detailed Recipe Information:**  
  View full recipes, including nutritional details such as calories, carbohydrates, proteins, and fats.
  
- **Alternative Recommendations:**  
  Request additional recipes if the initial suggestions don’t suit your taste.

## Tech Stack

- **Backend:** 
    - Node.js with Express for buildling RESTful APIs.
    - PostgreSQL for structured data storage.
- **Recommendation Engine:**
    - A separate **Python microservice** utilizing **scikit-learn** for a rule-based and content-based recommendation system.
- **Frontend:**
    - **React.js** with **React Router** for a dynamic single-page application.
    - **Redux** for state management.
    - **Material-UI** for responsive, modern UI components.
- **DevOps:**  
  - **Docker & Docker Compose** for containerization and local orchestration.
  - **GitHub Actions** for CI/CD pipelines.
  - Deployment on GCP

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cymnyon/CookCue.git
   cd CookCue
   ```

## Usage
- **Dashboard:**
    Sign up or log in to access your personalized dashboard.
- **Shelf/Fridge Management:**
    Manage your ingredients by adding, editing, or deleting items from your shelf/fridge inventory.
- **Recipe Recommendations:**
    Apply dietary and meal filters to get personalized recipe suggestions. Click on a recipe to view full details.
- **Alternative Options:**
    Use the “More Recommendations” feature to explore additional recipe options if needed.

## License

This project is licensed under the MIT License.