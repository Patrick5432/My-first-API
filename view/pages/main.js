const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const main = `
${head('Главная страница')}
<body>
    ${header}
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
    ${footer}
</body>
</html>
`
module.exports = main