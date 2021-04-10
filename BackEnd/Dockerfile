FROM mcr.microsoft.com/dotnet/aspnet:5.0
# Container SetUp
EXPOSE 5001
# .NET specific
COPY ToDoListBackEnd.Api/bin/Release/net5.0/publish ToDoListBackEnd/
WORKDIR /ToDoListBackEnd
ENTRYPOINT ["dotnet", "ToDoListBackEnd.Api.dll"]