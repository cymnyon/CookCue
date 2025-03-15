# recommendation-engine/app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    ingredients = data.get('ingredients', [])
    diet = data.get('diet', '')
    
    # Dummy recommendation logic: simply return three recipes using the provided ingredients
    recommendations = [
        {
            "id": 1,
            "title": "Pasta with Tomato Sauce",
            "details": f"Delicious pasta prepared with {', '.join(ingredients)}."
        },
        {
            "id": 2,
            "title": "Veggie Stir-Fry",
            "details": f"A quick stir-fry suitable for a {diet} diet using {', '.join(ingredients)}."
        },
        {
            "id": 3,
            "title": "Quinoa Salad",
            "details": f"A healthy salad featuring {', '.join(ingredients)} and other fresh veggies."
        }
    ]
    return jsonify({"recommendations": recommendations})

if __name__ == '__main__':
    app.run(port=5000)