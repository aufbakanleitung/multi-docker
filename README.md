# Containerized Fibonnacci calculator
Overly complex Fibonnacci calculator to showcase the DevOps principles: Containerization, Continuous Integration, and Cloud Automation in AWS.

1. Copy with: ```console git clone https://github.com/aufbakanleitung/multi-docker.git```
2. Run development version with: ```console docker-compose up ```
3. Browse to: http://localhost:3050/
4. Deployment is automatic when code is pushed to this repository
5. Website is [live on AWS here](http://multidocker-env.2q8jdskgqs.us-east-2.elasticbeanstalk.com/)

## Development version

The local development version consists of 6 docker containers. 3 with Node.js (server, worker, client), 1 with PostGRES, Redis, and Nginx. The building and communication between the containers is configured in Docker-compose. Compose directy links to the custom files on the such that a change in the website does not require a new build in Docker. 

* Nginx:    Listens to localhost:3050, routes data to Client and Server
* Client:   Front-end of the website, sends values to Express server
* Server:   Acts as an API, delivers and retreives values to Redis and Postgres.
* Redis:    Stores all indices, shown under *_"Indexes I have seen"_*
* Postgres: Stores a permanent list of values, shown under *_"Calculated Values"_*           
* Worker:   Watches Redis for new indices, calculates fibonnacci value, and returns answer

![Multi-docker-local]


## Production version

The production version consists of 4 docker containers and 3 AWS services: Identity and Access management, Elastic Beanstalk, Relational Database Service, S3 Storage, ElastiCache, Virtual Private Cloud

![Multi-docker-AWS]



## Deployment flow

Automated testing, deployment and secure credential storage using Travis CI

![Multi-docker-CI]

* Travis CI: https://travis-ci.com/aufbakanleitung/multi-docker
* Docker-hub containers:
  * https://hub.docker.com/r/hvdveer/multi-docker-worker
  * https://hub.docker.com/r/hvdveer/multi-docker-server
  * https://hub.docker.com/r/hvdveer/multi-docker-nginx
  * https://hub.docker.com/r/hvdveer/multi-docker-client
* Website on AWS: http://multidocker-env.2q8jdskgqs.us-east-2.elasticbeanstalk.com/



[Multi-docker-local]: https://github.com/aufbakanleitung/multi-docker/blob/master/info/Multi-docker-local.png "Diagram of development version"
[Multi-docker-CI]: https://github.com/aufbakanleitung/multi-docker/blob/master/info/Multi-docker-CI.png "Deployment flow"
[Multi-docker-AWS]: https://github.com/aufbakanleitung/multi-docker/blob/master/info/Multi-docker-AWS.png "Diagram of production version"
