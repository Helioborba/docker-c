# Environment
import os
import json
import time
#Flask
from flask import Flask, request, jsonify,send_from_directory,Response

# Inicializacão do flask
app = Flask(__name__)

# basedir = os.path.abspath(os.path.dirname(__file__)) usado para escrever arquivos

# Rotas
@app.route('/', methods=['GET']) # home
def home():
    data = "you should not be here, neither seeing this message you know?"
    return data # serve the data to the endpoint

# test api
@app.route('/mock', methods=['GET']) # api
def dataApi():
    filename = os.path.join(app.static_folder, 'mock.json') # looks for file direc
    with open(filename) as json_file: 
        data = json.load(json_file) # open and process data file
    time.sleep(3)
    return jsonify(data) # serve the data to the endpoint

# test api
@app.route('/mock_no_value', methods=['GET']) # api
def noDataApi():
    data = {}
    time.sleep(3)
    return jsonify(data) # serve the data to the endpoint

# test api
@app.route('/mock_err', methods=['GET']) # api
def dataErr():
    time.sleep(3)
    return Response(
        "bad gateway", status=403
    ) # serve the data to the endpoint
# test api
@app.route('/mock_post', methods=['POST']) # api
def dataA():
    input_json = request.get_json(force=True) 
    # force=True, above, is necessary if another developer 
    # forgot to set the MIME type to 'application/json'
    print('data from client:', input_json)
    resolucao = {'mensagem':'funcionou!'}
    return jsonify(resolucao)

# error handler
@app.errorhandler(404) # Pagina caso não seja encontrado a requisição no servidor
def error404(e):
    data = {"error":"nothing here"}
    return data

@app.route('/favicon.ico') 
def favicon(): 
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

# colocar a api para o port 5000
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)
# interessante; caso o host nao seja especificado e for utilizado o composer sem o 0.0.0.0, sera causado um bug (nao encontrado)

