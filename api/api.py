import json
import pandas as pd

def sustainability_index(json_data):
  df = pd.DataFrame(json_data)
  df['material used'] = df['material used'].map({1: 1, 2: 0.5, 3: 0})
  df['Sustanibility_ind'] = ((1 - df['carbon emissions'] / max(df['carbon emissions'])) * 0.6 + (df['material used']) * 0.4)
  json_data = df.to_json(orient='records')
  return json_data

# Create a Flask application.
from flask import Flask, request, jsonify

app = Flask(__name__)


# Define an API endpoint to calculate the sustainability index of a product.
@app.route('/sustainability_index/json', methods=['POST'])
def calculate_sustainability_index_json():
  json_data = request.get_json()
  json_data = sustainability_index(json_data)
  return jsonify(json_data)

if __name__ == '__main__':
  app.run(debug=True)