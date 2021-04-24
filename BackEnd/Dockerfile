FROM mcr.microsoft.com/dotnet/aspnet:5.0
# Container SetUp
EXPOSE 80
# .NET specific
COPY ToDoListBackEnd.Api/bin/Release/net5.0/publish ToDoListBackEnd/
WORKDIR /ToDoListBackEnd
ENTRYPOINT ["dotnet", "ToDoListBackEnd.Api.dll"]

### Docker Build ###
# docker build -t todolist-backend-image .

### Docker Run ###
# docker run -d \
# -p 5001:80 \
# --network todolist \
# --name=todolist-backend \
# todolist-backend-image