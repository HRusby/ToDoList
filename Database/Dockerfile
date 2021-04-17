ARG VERSION=10.4
FROM mariadb/server:${VERSION}
ENV MYSQL_ROOT_PASSWORD admin
EXPOSE 3306


### Docker Build ###
# docker build -t todolist-database-image .
### Docker Run ###
# docker run -d \
# --name=todolist-database \
# -p 6001:3306 \
# -v todo-db:/var/lib/mysql \
# todolist-database-image