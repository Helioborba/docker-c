from flask import Response

class ApiRaisedError(Exception):
    def __init__(self, code, description):
        self.code = code
        self.description = description
    # code = Exception.code
    # description = Exception.description

    
def createJsonRaisedError(code,response):
    res =  Response(response)
    res.status = code
    res.headers['Content-Type'] = 'application/json' 
    res.mimetype = 'application/json'
    return res