import os
#Flask
from flask import Flask,send_from_directory
from helpers.errorHandlers.responses import ApiRaisedError,createJsonRaisedError

app = Flask(__name__) # PRINCIPAL, cria a seção do flask!

# Blueprint (routes)
from router.database.store.views import store_blueprint
from router.mocks.views import mocks_blueprint

# from database.login.views import usuarios_blueprint

@app.route('/', methods=['GET']) # home
def hom():
    data = "you should not be here, neither seeing this message you know?"   
    return data # serve the data to the endpoint

@app.route('/favicon.ico') 
def favicon(): 
    """Servir o favicon do folder estatico"""
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.errorhandler(404) #Pagina caso não seja encontrado a requisição no servidor
def error404(err):
    data = {"error":err}
    return data

@app.errorhandler(ApiRaisedError)
def handle_exception(err):
    """Return JSON with the error for the client"""
    if len(err.description) > 0:
        res = err.description
    else :
        res = "Error happened"
    return createJsonRaisedError(err.code,res)


app.register_blueprint(store_blueprint,url_prefix='/store')
app.register_blueprint(mocks_blueprint,url_prefix='/mocks')
# app.register_blueprint(login_blueprint,url_prefix='/login')