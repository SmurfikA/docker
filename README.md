## Student
- Name: <ПІБ>
- Group: <Група>
 
## Практичне заняття №5 — JWT Authentication + Guards + RBAC
 
### Структура репозиторію
```
.
├── src/
│   ├── auth/
│   │   ├── dto/
│   │   │   ├── register.dto.ts
│   │   │   └── login.dto.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   └── auth.controller.ts
│   ├── users/
│   │   ├── user.entity.ts
│   │   ├── users.module.ts
│   │   └── users.service.ts
│   ├── common/
│   │   ├── enums/
│   │   │   └── role.enum.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   └── pipes/
│   │   	└── trim.pipe.ts
│   ├── categories/ ...
│   ├── products/ ...
│   ├── migrations/
│   ├── data-source.ts
│   ├── main.ts
│   └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md
```
 
### Запуск проекту
```bash
cp .env.example .env
docker compose up --build
```
 
### API Endpoints
| Method | URL | Auth | Role |
|--------|-----|------|------|
| POST | /auth/register | - | - |
| POST | /auth/login | - | - |
| GET | /api/categories | - | - |
| POST | /api/categories | JWT | admin |
| GET | /api/products | - | - |
| POST | /api/products | JWT | admin |
| PATCH | /api/products/:id | JWT | admin |
| DELETE | /api/products/:id | JWT | admin |
 
### Тест реєстрації
```text
<вивід curl POST /auth/register>
```
![alt text](image.png) 
### Тест логіну
```text
<вивід curl POST /auth/login>
```
![![alt text](image-2.png)](image-1.png)
### Тест 401 — запит без токена
```text
<вивід curl POST /api/products без Authorization>
```
![alt text](image-3.png)
### Тест 403 — запит з роллю user
```text
<вивід curl POST /api/products з токеном user>
```
![alt text](image-4.png) 
### Тест успішного створення від admin
```text
<вивід curl POST /api/products з токеном admin>
```
![alt text](image-5.png)