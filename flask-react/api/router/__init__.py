import os
#Flask
from flask import Flask,send_from_directory

app = Flask(__name__) # PRINCIPAL, cria a seção do flask!
basedir = os.path.abspath(os.path.dirname(__file__)) # file path

# Blueprint (routes)
from router.database.store.views import store_blueprint
from router.errors.views import errors_blueprint
# from database.login.views import usuarios_blueprint

@app.route('/', methods=['GET']) # home
def hom():
    data = "you should not be here, neither seeing this message you know?"   
    return data # serve the data to the endpoint

@app.route('/favicon.ico') 
def favicon(): 
    """Servir o favicon do folder estatico"""
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

app.register_blueprint(store_blueprint,url_prefix='/store')
app.register_blueprint(errors_blueprint,url_prefix='/errors')
# app.register_blueprint(login_blueprint,url_prefix='/login')