<h1>Nestjs e Loki - Projeto de Log</h1>

<h6> Don't speak portuguese? <a href="https://github.com/rubem007/observability/blob/main/log/README.md"> Click here </a> to view this page in English. </h6>

> Status do Projeto: Concluído :heavy_check_mark:

## Descrição do Projeto
<p align="justify">
Este é um projeto de log desenvolvido utilizando o NestJS para a exposição dos logs, Grafana Loki para armazenamento e consulta de logs, Promtail para coleta de logs e Grafana para visualização dos dados.
</p>

## Pré-requisitos
:warning: [Docker](https://www.docker.com/products/docker-desktop/)

## Como rodar a aplicação
 1 - Clone o repositório: 
 ```
 git clone https://github.com/rubem007/observability.git
 ```
 2 - Navegue até o diretório /log: 
 ```
 cd observability/log
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
### Acessando o Grafana
 - Abra o navegador e insira a seguinte URL: 
 ```
 http://localhost:3200
 ```
 
 - Faça o login com as seguintes credenciais:
   - Nome de Usuário: `admin`
   - Palavra-passe: `admin`
  
   Ser-lhe-á pedido para criar uma nova palavra-passe, mas pode ignorar este passo

 - Na página inicial, clique no painel **Add your first data source**:
 ![alt text](https://github.com/rubem007/observability/blob/dev/log/images/grafana-homepage.png "Grafana Homepage")

 - Caso não tenha encontrado o painel **Add your first data source**, insira a seguinte URL:
 ```
 http://localhost:3200/connections/datasources/new
 ```
 
 - Selecione o Loki como tipo de data source
 - Adicione a seguinte URL no campo **URL** da secção **Connection**:
 ```
 http://loki:3100
 ```
 - Deixe todos os outros campos como estão
 - Clique no botão **Save & test**, e você verá a mensagem `Data source conectado com êxito`

 - Clique na opção **Explore data** e ser-lhe-á aberto o seguinte painel:
 ![alt text](https://github.com/rubem007/observability/raw/dev/log/images/grafana-loki-panel.png "Grafana Loki Panel")

 - Visualizando os logs da aplicação
   - Em **Label filters**:
     - Escolha a opção **job**, no campo **Select label** 
     - Escolha a opção **nestjs-logs**, no campo **Select value** 

 - Clique no botão **Run query** e você verá o resultado semelhante a esta imagem:
  ![alt text](https://github.com/rubem007/observability/raw/dev/log/images/grafana-log-visualization.png "Grafana Log Visualization")

## Documentação
  <a href="https://www.grafana.com/">Site oficial do grafana</a><br>
  <a href="https://observability.courselabs.co/">Observability labs</a>

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e propor melhorias para o projeto.

## Licença
The [MIT License]() (MIT)

Copyright :copyright: 2024 - Projeto de Observabilidade
