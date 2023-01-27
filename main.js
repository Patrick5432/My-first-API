const main = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>main-page</title>
</head>
<body>
    <header>
        <h1><a href="#">Главная страница</a></h1>
        <nav>
            <ul>
                <li>
                    <a href="/shop">Магазин</a>
                </li>
                <li>
                    <a href="/aboutme">Обо мне</a>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <div>
            <h1>О чём сайт?</h1>
            <p>Сайт предназначенный для демонстрации навыка студента и просто для того, чтобы заполнить пустое поле каким-нибудь текстом(возможны ошибки в орфографии)</p>
        </div>
        <div class="cat-mem">
            <img src="./img/Q41WCvc_gXU.jpg" alt="">
            <span>Мем с котом</span>
        </div>
    </main>
    <footer>
        <h1>Полезные ссылки:</h1>
        <div>
            <a href="/contact">Контакты</a>
        </div>
    </footer>
</body>
</html>
`
module.exports = main