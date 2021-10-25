#!/bin/bash

###### PYTHON #######
## Cria o virtual env na area caso nao exista

## CRIAR AQUI O CODIGO

## Iniciar Venv
checar() { #Checa se o venv esta ativo (no caso, o venv TEM de se chamar venv (ou se quiser mudar o nome no script em si) para funcionar)
	if [[ "$VIRTUAL_ENV" != "" ]];
	then
		echo "'ERROR' : O venv já está ativado!"
	else
		echo "O venv está sendo ativado..."
		source env/bin/activate
	fi		
}

## Iniciar Flask
enflask() { #Script principal, vai rodar o flask em modo de desenvolvimento, necessita do parametro start
	echo "Iniciando o flask... apenas um segundo!"
	export FLASK_APP=app
	export FLASK_ENV=development
	python3.6 ./app.py
	echo 'flask fechado.'
}

## Flask migrate/update
enmigrate() { #Rapido upgrade (commit) da DB, necessita do parametro da mensagem para ser o commit
	if [ "$1" = '' ]; # Bloquear caso a pessoa não coloque a mensagem
	then
		echo "Não foi digitado mensagem!" 
	else
		if [ -d "./migrations" ]; # Checar se já foi criado a db
		then
			# Take action if $DIR exists. #
			echo "Migrations já existe, execultando task..."
		else
			echo "Migrations não existe, criando.. "
			flask db init
		fi
		if (( $# > 1 )); # ter certeza que não foi digitado sem aspas a mensagem
		then
			echo "Este commando NÃO aceita parametros extras! utilize 'aspas' para a mensagem!"
		else
			echo "Realizando operações da DB"
			flask db migrate -m "$1"
			flask db upgrade
			echo "task terminado."
		fi
	fi
}

## Script para o docker >
enflask
