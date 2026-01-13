// BANCO DE DADOS LOCAL
const data = {
    products: [
        { id: 1, name: "Picanha Argentina", price: 98.00, desc: "Corte premium grelhado na brasa." },
        { id: 2, name: "Costela 12 Horas", price: 72.00, desc: "Assada lentamente em fogo de chão." },
        { id: 3, name: "Pão de Alho Especial", price: 15.00, desc: "Recheado com blend de queijos." },
        { id: 4, name: "Cerveja IPA 600ml", price: 22.00, desc: "Cerveja artesanal bem gelada." }
    ],
    stock: [
        { item: "Picanha (KG)", qtd: 12 },
        { item: "Carvão (Sacos)", qtd: 45 },
        { item: "Cerveja IPA", qtd: 24 }
    ],
    orders: [] // Armazena pedidos enviados para a cozinha
};

let cart = [];

// NAVEGAÇÃO
function changeScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    if(screenId === 'client-app') renderMenu();
    if(screenId === 'cart-screen') renderCart();
}

// MENU CLIENTE
function renderMenu() {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = data.products.map(p => `
        <div class="item-card" onclick="openModal(${p.id})">
            <div class="item-img" style="background: url('https://images.unsplash.com/photo-1558039948-47ac6cb39027?auto=format&fit=crop&w=200&q=80') center/cover"></div>
            <h4>${p.name}</h4>
            <div class="price">R$ ${p.price.toFixed(2)}</div>
        </div>
    `).join('');
}

// MODAL
function openModal(id) {
    const p = data.products.find(x => x.id === id);
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <h2 style="color:var(--primary)">${p.name}</h2>
        <p style="color:var(--gray); margin: 10px 0;">${p.desc}</p>
        <h3 class="price">R$ ${p.price.toFixed(2)}</h3>
    `;
    document.getElementById('add-to-cart-btn').onclick = () => addToCart(p);
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
    document.getElementById('modal-obs').value = '';
}

// CARRINHO
function addToCart(p) {
    const obs = document.getElementById('modal-obs').value;
    const itemInCart = cart.find(i => i.id === p.id && i.obs === obs);
    
    if(itemInCart) {
        itemInCart.qty++;
    } else {
        cart.push({...p, qty: 1, obs: obs});
    }
    closeModal();
    alert("Adicionado ao carrinho!");
}

function renderCart() {
    const list = document.getElementById('cart-items-list');
    let total = 0;
    list.innerHTML = cart.map((item, index) => {
        total += item.price * item.qty;
        return `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <small>${item.obs || ''}</small>
                    <p class="price">R$ ${(item.price * item.qty).toFixed(2)}</p>
                </div>
                <div class="qty-controls">
                    <button class="btn-qty" onclick="updateQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="btn-qty" onclick="updateQty(${index}, 1)">+</button>
                </div>
            </div>
        `;
    }).join('');
    document.getElementById('cart-total-value').innerText = `R$ ${total.toFixed(2)}`;
}

function updateQty(index, delta) {
    cart[index].qty += delta;
    if(cart[index].qty <= 0) cart.splice(index, 1);
    renderCart();
}

// FINALIZAR E ADMIN
function checkout() {
    if(cart.length === 0) return alert("Carrinho vazio!");
    data.orders.push({ id: Date.now(), items: [...cart] });
    cart = [];
    alert("Pedido enviado para o restaurante!");
    changeScreen('client-app');
}

function showTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
    document.getElementById(tab).style.display = 'block';
    if(tab === 'pedidos') renderAdminOrders();
    if(tab === 'estoque') renderAdminStock();
}

function renderAdminOrders() {
    const cont = document.getElementById('orders-container');
    cont.innerHTML = data.orders.map(o => `
        <div class="order-card">
            <h4>Pedido #${o.id.toString().slice(-4)}</h4>
            ${o.items.map(i => `<p>${i.qty}x ${i.name} <small>(${i.obs})</small></p>`).join('')}
            <button class="btn-primary" style="margin-top:10px; padding: 5px 15px">Finalizar</button>
        </div>
    `).join('');
}

function renderAdminStock() {
    const cont = document.getElementById('stock-container');
    cont.innerHTML = data.stock.map(s => `
        <div style="background:#111; padding:15px; margin-bottom:10px; border-radius:10px; display:flex; justify-content:space-between">
            <span>${s.item}</span>
            <span style="color:var(--primary)">${s.qtd} unid.</span>
        </div>
    `).join('');
}