const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const pageContacts = `
${head('Контакты')}
<body>
    ${header}
    <h1>Контакты</h1>
    <ul>
        <li>Максим = +23489234</li>
        <li>Семён = +38942714</li>
        <li>Илья = +3242142134</li>
    </ul>
    ${footer}
</body>
</html>
`
module.exports = pageContacts;