## Student
- Name: Тринька Сергій
- Group: 232.1
 
## Практичне заняття №2 — NestJS + PostgreSQL + Redis
 
## Структура репозиторію
```
.
├── src/              	# NestJS source code
├── Dockerfile
├── docker-compose.yml
├── .env.example      	# шаблон змінних оточення
└── README.md
```
 
## Запуск проекту
```bash
cp .env.example .env   # налаштувати значення
docker compose up --build
```
 
## Перевірка сервісів
```text
<вивід docker compose ps>
```
![alt text](<194334.png>)
 
## Перевірка PostgreSQL
```text
<вивід docker compose exec postgres psql -U nestuser -d nestdb -c '\l'>
```
![alt text](image.png)
 
## Перевірка Redis
```text
<вивід docker compose exec redis redis-cli ping>
```
 ![alt text](image-1.png)
## Перевірка застосунку
```text
<вивід curl http://localhost:3000>
```
 ![alt text](image-2.png)
## Логи NestJS (фрагмент)
```text
<вивід docker compose logs app (ключові рядки запуску)>
```
![alt text](image-3.png)