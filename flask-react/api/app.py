# Environment
import os
import json
import time
import sys
#Flask
from flask import Flask, request, jsonify,send_from_directory,Response

def printData(data):
    try:
        print("this is data: ",data,file=sys.stderr)
    except:
        
        print("error",file=sys.stderr)
# Inicializacão do flask
app = Flask(__name__)
localStorage = []
def printLocal():
    print("this is storage ",localStorage,file=sys.stderr)
# basedir = os.path.abspath(os.path.dirname(__file__)) usado para escrever arquivos

# Rotas
@app.route('/', methods=['GET']) # home
def home():
    data = "you should not be here, neither seeing this message you know?"
    return data # serve the data to the endpoint

# Rotas
@app.route('/mensagem_post', methods=['POST']) # home
def mensagemPost():
    data = request.get_json(force=True)
    localStorage.append(data)
    newvalue = []
    val = 0
    for tup in localStorage:
        val += 1
        tup.update(id=str(val))
        newvalue.append( {
        f'Row {val}': tup
    })
    
    filename = os.path.join(app.static_folder, 'temp-data.json')
    with open(filename,'w',encoding='utf-8') as file:
        json.dump(newvalue, file, ensure_ascii=False, indent=4)
    printData(data)
    printLocal()
    res = {"status":"recebido"}
    return jsonify(res) # serve the data to the endpoint

@app.route('/mensagem_get', methods=['GET']) # home
def mensagemGet():
    time.sleep(5)
    return jsonify(localStorage) # serve the data to the endpoint


# error handler
@app.errorhandler(404) # Pagina caso não seja encontrado a requisição no servidor
def error404(e):
    data = {"error":"nothing here"}
    return data

@app.route('/favicon.ico') 
def favicon(): 
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

# Test endpoints
@app.route('/mock', methods=['GET']) # api
def dataApi():
    filename = os.path.join(app.static_folder, 'mock.json') # looks for file direc
    with open(filename) as json_file: 
        data = json.load(json_file) # open and process data file
    time.sleep(3)
    return jsonify(data) # serve the data to the endpoint


@app.route('/mock_no_value', methods=['GET']) # api
def noDataApi():
    data = {}
    time.sleep(3)
    return jsonify(data)


@app.route('/mock_err', methods=['GET']) # api
def dataErr():
    time.sleep(3)
    return Response(
        "bad gateway", status=403
    )

@app.route('/mock_post', methods=['POST']) # api
def dataA():
    input_json = request.get_json(force=True) 
    # force=True, above, is necessary if another developer 
    # forgot to set the MIME type to 'application/json'
    print('data from client:', input_json)
    resolucao = {'mensagem':'funcionou!'}
    return jsonify(resolucao)

# colocar a api para o port 5000
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)
# interessante; caso o host nao seja especificado e for utilizado o composer sem o 0.0.0.0, sera causado um bug (nao encontrado)

