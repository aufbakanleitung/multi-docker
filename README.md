# multi-docker
Overly complex Fibonnacci calculator to showcase the DevOps principles: Containerization, Continuous Integration, and Cloud Automation in AWS.

1. Copy with: ```console git clone ```
2. Run development version with: ```console docker-compose up ```
3. Deployment is automatic when code is pushed to this repository

The local development version consists of 6 docker containers. 3 with Node.js (server, worker, client), 1 with PostGRES, Redis, and Nginx. The building and communication between the containers is configured in Docker-compose. Compose directy links to the custom files on the such that a change in the website does not require a new build in Docker. 

* Nginx:    Listens to localhost:3050, routes data to Client and Server
* Client:   Front-end of the website, sends values to Express server
* Server:   Acts as an API, delivers and retreives values to Redis and Postgres.
* Redis:    Stores all indices and calculated values
* Postgres: Stores a permanent list of indices that have been received
* Worker:   Watches Redis for new indices, calculates fibonnacci value, and returns answer

![Multi-docker-local]

Run with: 
```console docker-compose up ```


The production version consists of 4 docker containers and 3 AWS services: IAM, Elastic Beanstalk, RDS, S3, ElastiCache, VPS

![Multi-docker-AWS]



Automated testing, deployment and secure credential storage using Travis CI

![Multi-docker-CI]




[Multi-docker-local]: https://github.com/aufbakanleitung/multi-docker/blob/master/info/Multi-docker-local.png "Diagram of development version"
[Multi-docker-CI]: https://github.com/aufbakanleitung/multi-docker/blob/master/info/Multi-docker-CI.png "Deployment flow"
[Multi-docker-AWS]: https://github.com/aufbakanleitung/multi-docker/blob/master/info/Multi-docker-AWS.png "Diagram of production version"
