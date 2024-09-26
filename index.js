const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.container-items');

let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        console.log('Button clicked'); // Depuración
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        console.log('Product info:', infoProduct); // Depuración

        const exists = allProducts.some(
            p => p.title === infoProduct.title
        );

        if (exists) {
            const products = allProducts.map(p => {
                if (p.title === infoProduct.title) {
                    p.quantity++;
                    return p;
                } else {
                    return p;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.closest('.cart-product');
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            p => p.title !== title
        );

        console.log('All products after removal:', allProducts); // Depuración

        showHTML();
    }
});

const showHTML = () => {
    if (allProducts.length === 0) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = ` 
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>   
        `;

        rowProduct.append(containerProduct);
        
        // Convertir el precio del producto a un número para cálculos
        const productPrice = parseFloat(product.price.replace(/[^0-9.,]/g, '').replace(',', '.'));
        total += product.quantity * productPrice;
        totalOfProducts += product.quantity;
    });

    // Formatear el total en pesos colombianos con tres decimales
    valorTotal.innerText = total.toLocaleString('es-CO', { 
        style: 'currency', 
        currency: 'COP',
        minimumFractionDigits: 3, 
        maximumFractionDigits: 3
    });

    countProducts.innerText = totalOfProducts;
    console.log('Total:', total, 'Total Products:', totalOfProducts); // Depuración
};