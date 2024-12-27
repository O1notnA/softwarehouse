
Para criação do banco terá que utilizar o docker:
    sudo docker-compose up -d

Após criação das tabelas, terá que criar as tabelas
    npx sequelize-cli db:migrate
Em seguinda, populá-la para demonstração:
    npx sequelize-cli db:seed:all