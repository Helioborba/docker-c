# Environment
import os
#Flask
from flask import Flask, request, jsonify,send_from_directory

# Inicializacão do flask
app = Flask(__name__)

# basedir = os.path.abspath(os.path.dirname(__file__)) usado para escrever arquivos

# Rotas
@app.route('/', methods=['GET']) # home
def home():
    data = {"error":"you should not be here"}
    return data

# test api
@app.route('/mock', methods=['GET']) # api
def dataApi():
    data = {"nome":"helo","idade":"12","stuffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffqeqfqefefeqffewdfafrfafrafrfeafrfefefferf":"staaaer","sssstuff":"sdaterer","stdauff":"stedwr","stufffq":"stewqr","stuqweff":"stfer"}
    print("teve um request")
    return jsonify(data)

# test api
@app.route('/mock_post', methods=['POST']) # api
def dataA():
    input_json = request.get_json(force=True) 
    # force=True, above, is necessary if another developer 
    # forgot to set the MIME type to 'application/json'
    print('data from client:', input_json)
    resolucao = {'mensagem':'funcionou!'}
    return jsonify(resolucao)


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

