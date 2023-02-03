const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const shop = `
${head('Магазин')}
<body>
    ${header}
    <h1>Список продуктов</h1>
    <ul>
        <li>Сыр</li>
        <li>Молоко</li>
        <li>Сметана</li>
        <li>Лук</li>
        <li>Сосиски</li>
    </ul>
    ${footer}
</body>
</html>
`
module.exports = shop;