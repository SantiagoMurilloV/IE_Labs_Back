import requests
import json

url = 'http://localhost:8084/api/inventory'

with open('../src/inventory.json', 'r') as json_file:
    data = json.load(json_file)  

headers = {
    'Content-Type': 'application/json'
}

for item in data:
    response = requests.post(url, json=item, headers=headers)
    
    if response.status_code == 201:
        print(f'Elemento {item.get("reference", "sin referencia")} creado exitosamente.')
    else:
        print(f'Error {response.status_code} al crear el elemento {item.get("reference", "sin referencia")}.')
        print('Respuesta del servidor:', response.text)
