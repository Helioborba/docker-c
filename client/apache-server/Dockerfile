FROM php:7.4-apache

WORKDIR '/client'
RUN apt-get update && yes | apt-get upgrade
RUN apt-get install gettext-base
# RUN yes | apt-get install wget
# RUN yes | apt-get install software-properties-common
# RUN apt-get -y install apt-transport-https lsb-release ca-certificates curl
# RUN wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
# RUN sh -c 'echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list'
# RUN yes | apt-get update
# RUN yes | apt-get install default-mysql-client
# RUN add-apt-repository ppa:ondrej/php
# RUN yes | apt install php7.4-mysql

# RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

COPY ./deb-packs/php7-common.deb ./
## O problema : Travis não consegue rodar o comando : docker-php-ext-install, por isso é necessário pegar todos os pacotes do deb e instalar, após passar para a pasta de inis

# PACKAGES PACKAGES
# Deps do MYSQL
RUN curl http://ftp.de.debian.org/debian/pool/main/u/ucf/ucf_3.0043_all.deb --output php-ucf.deb && yes | dpkg -i php-ucf.deb
RUN curl http://ftp.de.debian.org/debian/pool/main/p/psmisc/psmisc_23.4-2_amd64.deb --output php-psmisc.deb && yes | dpkg -i php-psmisc.deb
RUN curl http://ftp.de.debian.org/debian/pool/main/p/php-defaults/php-common_76_all.deb  --output php-common.deb && yes | dpkg -i php-common.deb
# RUN curl http://ftp.de.debian.org/debian/pool/main/p/php7.4/php7.4-common_7.4.21-1+deb11u1_amd64.deb --output php7-common.deb && yes | dpkg -i php7-common.deb

#pack retirado
RUN chmod +x -R /usr/share/
RUN dpkg -i php7-common.deb

#Deps do CLI
RUN curl http://ftp.de.debian.org/debian/pool/main/p/php7.4/php7.4-json_7.4.21-1+deb11u1_amd64.deb --output php7-json.deb && yes | dpkg -i php7-json.deb
RUN curl http://ftp.de.debian.org/debian/pool/main/p/php7.4/php7.4-opcache_7.4.21-1+deb11u1_amd64.deb --output php7-opcache.deb && yes | dpkg -i php7-opcache.deb
RUN curl http://ftp.de.debian.org/debian/pool/main/p/php7.4/php7.4-readline_7.4.21-1+deb11u1_amd64.deb --output php7-readline.deb && yes | dpkg -i php7-readline.deb

#CLI e MYSQL
RUN curl http://ftp.de.debian.org/debian/pool/main/p/php7.4/php7.4-cli_7.4.21-1+deb11u1_amd64.deb --output php-cli.deb && yes | dpkg -i php-cli.deb
RUN curl http://ftp.de.debian.org/debian/pool/main/p/php7.4/php7.4-mysql_7.4.21-1+deb11u1_amd64.deb --output php-mysql.deb && yes | dpkg -i php-mysql.deb
RUN yes | apt-get install libapache2-mod-php

#VAI DELETAR DOS OS DEB previamente baixados
RUN rm ./*

COPY ./php.ini /etc/php/7.4/apache2/php.ini
RUN /bin/bash -c "mv /usr/lib/php/20190902/* /usr/local/lib/php/extensions/no-debug-non-zts-20190902"

EXPOSE 80
CMD /bin/bash -c "envsubst '\$herokusqlHost,\$herokusqlDatabase,\$herokusqlPassword,\$herokusqlUser' < /var/www/html/php/conexao.php > /var/www/html/php/conexao.php" && apachectl -D FOREGROUND

