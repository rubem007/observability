<h1>Nestjs and Loki - Log Project</h1>

<h6> Não fala inglês?<a href="https://github.com/rubem007/observability/blob/main/log/README-pt.md"> Click here </a> to view this page in English. </h6>

> Project Status: Completed :heavy_check_mark:

## Description
<p align="justify">
This is a log project developed using NestJS for exposing logs, Grafana Loki for storing and querying logs, Promtail for collecting logs, and Grafana for visualizing the data.
</p>

## Prerequisites
:warning: [Docker](https://www.docker.com/products/docker-desktop/)

## How to Run the Application
 1 - Clone the repository: 
 ```
 git clone https://github.com/rubem007/observability.git
 ```
 2 - Navigate to the /log directory: 
 ```
 cd observability/log
 ```
 3 - Run the following command to start the containers: 
 ```
 docker-compose up -d
 ```
 4 - Verify that the containers are running: 
 ```
 docker-compose ps
 ```

## Test
### Accessing Grafana
 - Open your browser and enter the following URL: 
 ```
 http://localhost:3200
 ```
 
 - Log in with the following credentials:
   - Username: `admin`
   - Password: `admin`
  
   You will be prompted to create a new password, but you can ignore this step

 - On the home page, click the **Add your first data source**:
 ![Grafana Homepage](https://github.com/rubem007/observability/raw/dev/log/images/grafana-homepage.png "Grafana Homepage")

 - If you cannot find the **Add your first data source** panel, enter the following URL:
 ```
 http://localhost:3200/connections/datasources/new
 ```
 
 - Select Loki as the data source type
 - Add the following URL in the URL no campo **URL** field of the **Connection** section:
 ```
 http://loki:3100
 ```
 - Leave all other fields as they are
 - Click the **Save & test** button, and you will see the message `Data source connected successfully`

 - Click the **Explore data** option, and you will see the following panel:
 ![Grafana Loki Panel](https://github.com/rubem007/observability/raw/dev/log/images/grafana-loki-panel.png "Grafana Loki Panel")

 - Viewing the application logs
   - In **Label filters**:
     - Select the **job** option in the **Select label** 
     - Select the **nestjs-logs**, option in the **Select value** 

 - Click the **Run query** button, and you will see the result similar to this image:
  ![Grafana Log Visualization](https://github.com/rubem007/observability/raw/dev/log/images/grafana-log-visualization.png "Grafana Log Visualization")

## Documentation
  <a href="https://www.grafana.com/">Grafana official website</a><br>
  <a href="https://observability.courselabs.co/">Observability labs</a>

## Contributions
Contributions are welcome! Feel free to open issues and propose improvements for the project.

## Licença
The [MIT License]() (MIT)

Copyright :copyright: 2024 - Projeto de Observabilidade
