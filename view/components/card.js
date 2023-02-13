module.exports = (photosrc, tittle, desc, price) => {
    
    return `
    <div class="card">
        <img src = '${photosrc}'>
        <h3>${tittle}</h3>
        <p>${desc}</p>
        <strong>${price}</strong>
        <button>В корзину</button>
    </div>
    `
}