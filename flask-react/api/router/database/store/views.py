import os
import time
from helpers import logs
from flask import Blueprint,jsonify,request,Response
from helpers.errorHandlers.responses import ApiRaisedError
import app
import json
localStorage = []
store_blueprint = Blueprint('store',__name__)

@store_blueprint.route('/mensagem_post', methods=['POST'])
def mensagemPost():
    data = request.get_json(force=True)
    localStorage.append(data)
    newvalue = []
    val = 0
    for tup in localStorage:
        # Checar caso haja um valor null e retornar um response de "valor errado"
        for key,value in tup.items():
            if key == '' or value == '':
                raise ApiRaisedError(code=400,description='Empty data received!')
        val += 1
        tup.update(id=str(val))
        newvalue.append({
        f'Row {val}': tup
    })
    
    app.fileDir = os.path.join(app.static_folder, 'temp-data.json')
    with open(app.fileDir,'w',encoding='utf-8') as file:
        json.dump(newvalue, file, ensure_ascii=False, indent=4)
    logs.printData(data)
    logs.printLocal(localStorage)
    res =  Response("Data stored")
    res.status = 200
    res.headers['Content-Type'] = 'application/json' 
    res.mimetype = 'application/json'
    time.sleep(5)
    return res
     # serve the data to the endpoint

@store_blueprint.route('/mensagem_get', methods=['GET'])
def mensagemGet():
    time.sleep(5)
    return jsonify(localStorage) # serve the data to the endpoint
