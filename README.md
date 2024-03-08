## Установка

Установка проекта
```shell
git clone https://github.com/loveuloveme/frontend-task.git
cd frontend-task
npm install
```
### VK конфиг

Создать в корне файл

```
{
    "static_path": "dist",
    "app_id": xxxxxxxx,
    "endpoints": {
        "mobile": "index.html",
        "mvk": "index.html",
        "web": "index.html"
    }
}
```

## Запуск
- run `npm run dev`


## Dev Tasks

- `npm run build` сборка приложения
- `npm run deploy` деплой приложения в vk mini apps