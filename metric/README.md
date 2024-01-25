<h1>Nodejs and Prometheus - Observability Project</h1>

<h6> Não fala inglês? <a href="https://github.com/rubem007/observability/blob/dev/metric/README-pt.md"> Clique aqui </a> para ver essa página em português. </h6>

> Status do Projeto: Completed  :heavy_check_mark:

## Project Description
<p align="justify">
This simple project aims to monitor Node.js metrics and our application using Prometheus for metric collection and visualization.
A custom counter (`app_total_http_requests`) is used to track the total requests to the '/' route.
</p>

## Prerequisites
:warning: [Docker](https://www.docker.com/products/docker-desktop/)

## How to Run the Application
 1 - Clone the repository: 
 ```
 git clone https://github.com/rubem007/observability.git
 ```
 2 - Navigate to the /metric directory: 
 ```
 cd observability/metric
 ```
 3 - Execute the following command to run the containers: 
 ```
 docker-compose up -d
 ```
 4 - Verify that the containers are running: 
 ```
 docker-compose ps
 ```

## Testing
 - Open your browser and enter the following URL to check if the application is exposing metrics: 
 ```
 http://localhost:3000/metrics
 ```
 - Then, access the Prometheus UI by entering the following URL: 
 ```
 http://localhost:9090
 ```
 - In the Prometheus search bar, search for any metric found in **http://localhost:3000/metrics**  
  Example: **app_total_http_requests**, which increments each time a user accesses http://localhost:3000/


## Contributions
Contributions are welcome! Feel free to open issues and propose improvements to the project.

## License
The [MIT License]() (MIT)

Copyright :copyright: 2024 - Observability Project
