ARG VERSION=10.4
FROM mariadb/server:${VERSION}
ENV MYSQL_ROOT_PASSWORD admin
ENV MYSQL_DATABASE: ToDoList
ENV MYSQL_USER: root
EXPOSE 3306


### Docker Build ###
# docker build -t todolist-database-image .

### Docker Run ###
# docker run -d \
# --network todolist --network-alias database \
# --name=todolist-database \
# -p 6001:3306 \
# -v todo-db:/var/lib/mysql \
# todolist-database-image

### Connecting to mysql from host ###
# mysql -h localhost -P 6001 --protocol=tcp -u root -padmin
#docker run -d --network todolist --network-alias database --name=todolist-database -p 6001:3306 -v todo-db:/var/lib/mysql todolist-database-image