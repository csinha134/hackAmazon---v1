import json
import pandas as pd
import numpy as np
import requests

def sustainability_index(json_data):
  df = pd.DataFrame(json_data)
  df['material_used'] = df['material_used'].map({1: 1, 2: 0.5, 3: 0})
  if not pd.api.types.is_numeric_dtype(df['carbon_emissions']):
    # Convert the `carbon_emissions` column to a numeric type.
    df['carbon_emissions'] = pd.to_numeric(df['carbon_emissions'])

  # Cast the `carbon_emissions` column to a float type.
  df['carbon_emissions'] = df['carbon_emissions'].astype(float)
  df['Sustanibility_ind'] = ((1 - df['carbon_emissions'] / np.nanmax(df['carbon_emissions'])) * 0.6 + (df['material_used']) * 0.4)
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


@app.route('/query_records/json', methods=['POST'])
def query_records_json():
  url = "http://localhost:8888/api/products"
  response = requests.get(url)
  json_data = response.json()
  python_object = request.get_json()
  # ndf = pd.DataFrame(python_object)
  str_query = python_object.get('Category')
  df = pd.DataFrame(json_data)
  new_df = df[df["Category"] == str_query]
  df=new_df
  df['material_used'] = df['material_used'].map({1: 1, 2: 0.5, 3: 0})
  if not pd.api.types.is_numeric_dtype(df['carbon_emissions']):
    # Convert the `carbon_emissions` column to a numeric type.
    df['carbon_emissions'] = pd.to_numeric(df['carbon_emissions'])

  # Cast the `carbon_emissions` column to a float type.
  df['carbon_emissions'] = df['carbon_emissions'].astype(float)
  df['Sustanibility_ind'] = ((1 - df['carbon_emissions'] / max(df['carbon_emissions'])) * 0.6 + (df['material_used']) * 0.4)
  json_data = df.to_json(orient='records')
  return jsonify(json_data)

if __name__ == '__main__':
  app.run(debug=True)