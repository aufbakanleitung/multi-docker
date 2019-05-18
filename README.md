# multi-docker
Overly complex Fibonnacci calculator to showcase the DevOps principles: Containerization, Continuous Integration, and Cloud Automation in AWS.

The local development version consists of 6 docker containers. 3 with Node.js (server, worker, client), 1 with PostGRES, Redis, and Nginx. 

![Multi-docker-local]



The production version consists of 4 docker containers and 3 AWS services: IAM, Elastic Beanstalk, RDS, S3, ElastiCache, VPS

![Multi-docker-AWS]



Automated testing and deployment using Travis CI

![Multi-docker-CI]




[Multi-docker-local]: https://github.com/aufbakanleitung/multi-docker/blob/master/info/Multi-docker-local.png "Diagram of development version"
[Multi-docker-CI]: https://github.com/aufbakanleitung/multi-docker/blob/master/info/Multi-docker-CI.png "Deployment flow"
[Multi-docker-AWS]: https://github.com/aufbakanleitung/multi-docker/blob/master/info/Multi-docker-AWS.png "Diagram of production version"
