//НА ДАННЫЙ МОМЕНТ РУКОВОДСТВО НЕАКТУАЛЬНОЕ (СКОРО ОБНОВИТСЯ!)

Последовательные шаги для создания сайта через node express:

//КАК СДЕЛАТЬ ПРОСТОЙ САЙТ ПРИ ПОМОЩИ NODE EXPRESS

1. Установить node.js
2. Установить postman
3. Создать пустую папку
4. Открыть папку при помощи VSCode
5. В терминале прописать npm init, для подключения будущих утилит для запуска сервера с сайтом
6. Прописать в терминале npn install express(должно появиться 3 папки - package.json, package-lock.json и node_modules)
7. Создать файл app.js
8. В файле app.js прописать строки для включения сервера : //{
    
    const express = require("express");
    const {request, response} = require("express");
    const app = express();


    //==>(ЗДЕСЬ БУДЕТ ПИСАТЬСЯ КОД УЖЕ ДЛЯ САМИХ СТРАНИЦ ВАШЕГО САЙТА)


    app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000") //НУЖЕН ДЛЯ ВЫВОДА ТЕКСТА О ВКЛЮЧЕНИИ СЕРВЕРА
})


}//

9. Внутри нашего кода добавляем команду, позволяющую выводить информацию на нашем сайте: //{

    app.get("/", (request, response) => {
        response.send("Hello World!") 
    })

}//

10. Запустить postman и зарегистрироваться в нём
11. Создать Workspace и в нём collection
12. В строке, справа от GET прописать: localhost:8000 //ЕСЛИ СЕРВЕР ЗАПУЩЕН, ТО ВО ВКЛАДКЕ PREWIEV ДОЛЖНО ВЫВЕСТИСЬ "Hello World!"

//СОЗДАНИЕ НОВЫХ СТРАНИЦ ДЛЯ САЙТА

13. Создаём новый файл с названием той странцы, которая нам будет нужна. К примеру: shop.js
14. Заходим в файл shop.js и записываем в первую строку: //{

            const shop = `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Список продуктов</h1>
            <ul>
                <li>Сыр</li>
                <li>Молоко</li>
                <li>Сметана</li>
                <li>Лук</li>
                <li>Сосиски</li>
            </ul>
        </body>
        </html>
            `
            module.exports = shop;


}//СОДЕРЖАНИЕ СТРАНИЦЫ ДЕЛАЕТСЯ НА ОСНОВЕ HTML КОДА

15. В app.js прописываем новую команду //{

     app.get("/", (request, response) => {
        response.send("Hello World!") 
    })

    app.get("/shop", (request, response) => {
        response.send(shop)
    })


}//

16. Далее проверяем в postman нашу вторую страницу вводя: localhost:8000/shop

//ПОДКЛЮЧЕНИЕ CSS К NODE EXPRESS

17. В проекте создаём папку public, внутри которого создаём папку css
18. После чего в app.js прописываем команду: //{

    app.use(express.static(__dirname + '/public'));
}//

19. В папке css добавляем файл style.css
20. В style.css добавляем нужнные вам стили для определённой страницы. Примером послужит shop.js //{

    * {
        background: yellow;
    }
}//

21. Дальше в самом файле shop.js добавляем команду: //{

        <link rel="stylesheet" href="css/style.css">


}//

//ДОЛЖНО ВСЁ ВЫГЛЯДЕТЬ ТАК //{

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css">
        <title>Document</title>
    </head>
    <body>
        <h1>Список продуктов</h1>
        <ul>
            <li>Сыр</li>
            <li>Молоко</li>
            <li>Сметана</li>
            <li>Лук</li>
            <li>Сосиски</li>
        </ul>
    </body>
    </html>


}//

22. Проверяем изменение страницы через postman //Задний фон должен быть жёлтого цвета

//ДОПОЛНИТЕЛЬНЫЕ УТИЛИТЫ ДЛЯ ВАШЕГО СЕРВЕРА

23. Открываем терминал и прописываем: npm install sqlite3
24. Также прописываем в терминале: npm install nodemon
25. В файле package.json в функции scripts под строкой "test": "echo \"Error: no test specified\" && exit 1" прописываем: "start": "nodemon app.js"(НЕ ЗАБУДЬ ДОБАВИТЬ "," В СТРОКЕ "test": "echo \"Error: no test specified\" && exit 1", ИНАЧЕ КОД ОТКАЖЕТСЯ РАБОТАТЬ)
//NODEMON НУЖЕН ДЛЯ АВТОМАТИЧЕСКОГО ОБНОВЛЕНИЯ СЕРВЕРА, ЕСЛИ НЕ ДОБАВИТЬ ЭТУ УТИЛИТУ, ТО ПРИХОДИТЬСЯ ПЕРЕЗАПУСКАТЬ ВРУЧНУЮ СЕРВЕР ПОСЛЕ КАЖДОГО ИЗМЕНЕНИЕ СВОЕГО КОДА
26. Продолжаем, в терминале также прописываем: npm install body-parser
27. В файле app.js добавлем команду: //{

    const bodyParser = require('body-parser');


    app.use(bodyParser.urlencoded({ extended: false }))


}//

//ПРИМЕР ВСЕХ ДЕЙСТВИЙ МОЖНО ПОСМОТРЕТЬ НА ГОТОВОМ ПРОЕКТЕ

//ФАЙЛ README.md ЛУЧШЕ СМОТРЕТЬ ОТДЕЛЬНО