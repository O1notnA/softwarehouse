Setup do Ambiente e Banco de Dados com Docker e Sequelize
Este guia descreve como configurar o ambiente, criar o banco de dados e popular as tabelas usando Docker e Sequelize.

Requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Docker (para executar os contêineres)
Docker Compose (para gerenciar multi-contêineres)
Node.js (com NPM ou Yarn)
Sequelize CLI (para gerenciar migrações e seeds)
Passos para Configuração
1. Subir o Contêiner do Banco de Dados com Docker Compose
Primeiro, é necessário criar o banco de dados MySQL utilizando o Docker. Para isso, execute o seguinte comando na raiz do projeto:

bash
Copiar código
sudo docker-compose up -d
Este comando irá:

Baixar a imagem do MySQL (caso não esteja presente).
Subir o contêiner do banco de dados.
Mapear a porta 3307 para a porta 3306 do contêiner.
Criar o banco de dados softwarehouse com a senha 132456 para o usuário root.
2. Criar Tabelas no Banco de Dados
Após a criação do banco de dados, você pode utilizar o Sequelize CLI para rodar as migrações e criar as tabelas no banco de dados. Execute o seguinte comando para rodar as migrações:

bash
Copiar código
npx sequelize-cli db:migrate
Este comando vai aplicar as migrações e criar as tabelas necessárias no banco de dados softwarehouse.

3. Popular as Tabelas com Dados de Demonstração
Para popular as tabelas com dados de demonstração (seeds), utilize o comando abaixo:

bash
Copiar código
npx sequelize-cli db:seed:all
Esse comando irá rodar todos os arquivos de seed presentes no diretório seeders e popular o banco com dados de exemplo.

4. Verificar o Banco de Dados
Após rodar as migrações e os seeds, você pode verificar se as tabelas e os dados foram criados corretamente. Para isso, acesse o contêiner do MySQL:

bash
Copiar código
sudo docker exec -it mysql mysql -u root -p132456
Dentro do MySQL, execute os comandos:

sql
Copiar código
USE softwarehouse;
SHOW TABLES;
Isso mostrará todas as tabelas do banco de dados softwarehouse.

5. Parar os Contêineres
Quando terminar de usar os contêineres, você pode pará-los com o seguinte comando:

bash
Copiar código
sudo docker-compose down
Isso irá parar e remover os contêineres, redes e volumes criados pelo Docker Compose.