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
  df = df.sort_values(by='Sustanibility_ind', ascending=False)
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


@app.route('/query_records/json/<category>/', methods=['GET'])
def query_records_json(category):
  url = "http://localhost:8888/api/products"
  response = requests.get(url)
  json_data = response.json()
  # print(json_data)
  # ndf = pd.DataFrame(python_object)
  str_query = category
  print("bccc",str_query)
  df = pd.DataFrame(json_data)
  print(df)
  new_df = df[df["Category"] == str_query]
  df=new_df
  print(df)
  df['material_used'] = df['material_used'].map({1: 1, 2: 0.5, 3: 0})
  if not pd.api.types.is_numeric_dtype(df['carbon_emissions']):
    # Convert the `carbon_emissions` column to a numeric type.
    df['carbon_emissions'] = pd.to_numeric(df['carbon_emissions'])

  # Cast the `carbon_emissions` column to a float type.
  df['carbon_emissions'] = df['carbon_emissions'].astype(float)
  print(df['material_used'])
  df['Sustanibility_ind'] = ((1 - df['carbon_emissions'] / max(df['carbon_emissions'])) * 0.6 + (df['material_used']) * 0.4)
  df = df.sort_values(by='Sustanibility_ind', ascending=False)
  # print(df)
  json_data = df.to_json(orient='records')
  return jsonify(json_data)

if __name__ == '__main__':
  app.run(debug=True,port=7777)