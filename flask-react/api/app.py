# Environment
import os

#Flask
from router import app  # Aqui se encontra o app principal

basedir = os.path.abspath(os.path.dirname(__file__)) # file path

# colocar a api para o port 5000
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)
# interessante; caso o host nao seja especificado e for utilizado o composer sem o 0.0.0.0, sera causado um bug (nao encontrado)

