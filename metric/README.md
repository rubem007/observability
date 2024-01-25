<h1>Nodejs e Prometheus - Projeto de Observabilidade</h1>

> Status do Projeto: Concluído :heavy_check_mark:

## Descrição do Projeto
<p align="justify">
Este projeto simples visa monitorar as métricas do nodejs, e da nossa aplicação, utilizando o Prometheus para coleta e visualização dessas métricas.
</p>

## Pré-requisitos
:warning: [Docker](https://www.docker.com/products/docker-desktop/)

## Como rodar a aplicação
 1 - Clone o repositório: 
 ```
 git clone https://github.com/rubem007/observability.git
 ```
 2 - Navegue até o diretório /metric: 
 ```
 cd observability/metric
 ```
 3 - Execute o seguinte comando para rodar os containers: 
 ```
 docker-compose up -d
 ```
 4 - Verifique se os containers estão em execução: 
 ```
 docker-compose ps
 ```

## Teste
 - Abra o navegador e insira a seguinte URL para verificar se a aplicação está expondo as métricas: 
 ```
 http://localhost:3000/metrics
 ```
 - Em seguida aceda a UI do prometheus inserindo a seguinte URL: 
 ```
 http://localhost:9090
 ```
 - Na barra de pesquisa do prometheus, pesquise por qualquer métrica encontrada no **http://localhost:3000/metrics**  
 Ex: **app_total_http_requests**, que é incrementada cada vez que um usuário acessa http://localhost:3000/


## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e propor melhorias para o projeto.

## Licença
The [MIT License]() (MIT)

Copyright :copyright: 2024 - Projeto de Observabilidade
