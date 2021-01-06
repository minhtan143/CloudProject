#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
ARG environment=Development
ENV ASPNETCORE_ENVIRONMENT=$environment

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Kube1.CloudProject.API/Kube1.CloudProject.API.csproj", "Kube1.CloudProject.API/"]
RUN dotnet restore "Kube1.CloudProject.API/Kube1.CloudProject.API.csproj"
COPY . .
WORKDIR "/src/Kube1.CloudProject.API"
RUN dotnet build "Kube1.CloudProject.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Kube1.CloudProject.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Kube1.CloudProject.API.dll"]