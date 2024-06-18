docker build --no-cache -f SQL\Dockerfile.PostgreSql -t newtestgen180624/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t newtestgen180624/app ../..
