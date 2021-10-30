import os
import app
import json
import time
from helpers.errorHandlers.responses import ApiRaisedError
from flask import Blueprint,jsonify,request

mocks_blueprint = Blueprint('mocks',__name__)

# Test endpoints
@mocks_blueprint.route('/mock', methods=['GET']) # api
def dataApi():
    fileDir = os.path.join(app.fileDir.static_folder, 'mock.json') # looks for file direc
    with open(fileDir) as json_file: 
        data = json.load(json_file) # open and process data file
    time.sleep(3)
    return jsonify(data) # serve the data to the endpoint,


@mocks_blueprint.route('/mock_no_value', methods=['GET']) # api
def noDataApi():
    data = {}
    time.sleep(3)
    return jsonify(data)


@mocks_blueprint.route('/mock_err', methods=['GET']) # api
def dataErr():
    time.sleep(3)
    raise ApiRaisedError(500,"server did not have files to send")

@mocks_blueprint.route('/mock_post', methods=['POST']) # api
def dataA():
    input_json = request.get_json(force=True) 
    # force=True, above, is necessary if another developer 
    # forgot to set the MIME type to 'application/json'
    print('data from client:', input_json)
    resolucao = {'mensagem':'funcionou!'}
    return jsonify(resolucao)