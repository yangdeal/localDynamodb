# localDynamodb
1. create docker network:
    ```
    docker network create lambda
    ```
2. start dynamodb docker:
    ```
    docker run --name db --network lambda -p 8000:8000 dwmkerr/dynamodb
    ```
3. start local api gateway
    ```
    sam local start-api --docker-network lambda --template lambda.yml
    ```
    
    