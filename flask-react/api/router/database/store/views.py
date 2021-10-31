import os
import time # utilizado para simular demora entre respostas 
import json
from helpers.logs import logs
from flask import Blueprint,jsonify,request,Response
from helpers.errorHandlers.responses import ApiRaisedError
from app import basedir # root dir

localStorage = [] # simular db

store_blueprint = Blueprint('store',__name__) # main blue

@store_blueprint.route('/mensagem_post', methods=['POST'])
def mensagemPost():
    data = request.get_json(force=True)
    if data.get('request_safe') == 'DELETE_ALL_DATA':
        localStorage.clear()
        res =  Response("All data deleted")
        res.status = 200
        res.headers['Content-Type'] = 'application/json' 
        res.mimetype = 'application/json'
        time.sleep(3)
        return res
    
    for key,value in data.items():
            if key == '' or value == '':
                raise ApiRaisedError(code=400,description='Empty data received!')
    localStorage.append(data)
    jsonValues = []
    val = 0
    for tup in localStorage:
        # Checar caso haja um valor null e retornar um response de "valor errado"
        val += 1
        tup.update(id=str(val))
        jsonValues.append({
        f'Row {val}': tup
    })
    dir = os.path.join(basedir, 'static', 'temp-data.json')
    with open(dir,'w',encoding='utf-8') as file:
        json.dump(jsonValues, file, ensure_ascii=False, indent=4) # salva no json
    logs.printData(data)
    logs.printLocal(localStorage)
    res =  Response("Data stored")
    res.status = 200
    res.headers['Content-Type'] = 'application/json' 
    res.mimetype = 'application/json'
    time.sleep(3)
    return res
     # serve the data to the endpoint

@store_blueprint.route('/mensagem_get', methods=['GET'])
def mensagemGet():
    time.sleep(3)
    return jsonify(localStorage) # serve the data to the endpoint
