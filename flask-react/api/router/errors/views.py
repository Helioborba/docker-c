from flask import Blueprint
from helpers.errorHandlers.responses import ApiRaisedError,createJsonRaisedError

errors_blueprint = Blueprint('errors',__name__)

# error handlers
@errors_blueprint.errorhandler(404) #Pagina caso não seja encontrado a requisição no servidor
def error404(err):
    data = {"error":err}
    return data

@errors_blueprint.errorhandler(ApiRaisedError)
def handle_exception(err):
    """Return JSON with the error for the client"""
    if len(err.description) > 0:
        res = err.description
    else :
        res = "Error happened"
    return createJsonRaisedError(err.code,res)
