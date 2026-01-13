// --- BASE DE DADOS EXPANDIDA ---
let menuData = [
    // CORTES
    { id: 1, name: "Picanha Black Angus", category: "cortes", price: 129.90, desc: "A rainha do churrasco. Corte alto, capa de gordura uniforme.", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=400" },
    { id: 2, name: "Ancho Premium", category: "cortes", price: 98.50, desc: "Corte do dianteiro, extremamente macio e saboroso.", img: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=400" },
    { id: 3, name: "Fraldinha Red", category: "cortes", price: 75.00, desc: "Peça inteira grelhada na manteiga de garrafa.", img: "https://images.unsplash.com/photo-1558039948-47ac6cb39027?q=80&w=400" },
    
    // BURGERS
    { id: 4, name: "Braza Burger", category: "burgers", price: 42.00, desc: "180g costela, queijo gouda, cebola caramelizada e bacon.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400" },
    { id: 5, name: "Smash Duplo", category: "burgers", price: 38.00, desc: "Dois discos de 90g, cheddar inglês e molho especial.", img: "https://images.unsplash.com/photo-1586190848861-99c8a3bd7991?q=80&w=400" },
    { id: 6, name: "Chicken Crispy", category: "burgers", price: 32.00, desc: "Frango empanado, maionese de ervas e alface americana.", img: "https://images.unsplash.com/photo-1619250907298-9635c3614275?q=80&w=400" },

    // ACOMPANHAMENTOS
    { id: 7, name: "Batata Rústica", category: "acompanhamentos", price: 28.00, desc: "Com alecrim e alho.", img: "https://images.unsplash.com/photo-1623238918235-9f5b61a3579a?q=80&w=400" },
    { id: 8, name: "Pão de Alho (Un)", category: "acompanhamentos", price: 12.00, desc: "Recheado com requeijão e parmesão.", img: "https://images.unsplash.com/photo-1573147820718-2b89ae65646f?q=80&w=400" },
    { id: 9, name: "Farofa de Ovos", category: "acompanhamentos", price: 18.00, desc: "Farofa crocante com ovos e bacon.", img: "https://images.unsplash.com/photo-1600336056636-f633ed4d436f?q=80&w=400" },

    // SOBREMESAS
    { id: 10, name: "Pudim de Leite", category: "sobremesas", price: 18.00, desc: "Sem furinhos, com calda de caramelo.", img: "https://images.unsplash.com/photo-1517260739337-6799d2ff1fdb?q=80&w=400" },
    { id: 11, name: "Petit Gateau", category: "sobremesas", price: 26.00, desc: "Com sorvete de baunilha.", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=400" },

    // BEBIDAS
    { id: 12, name: "Chopp IPA", category: "bebidas", price: 16.00, desc: "500ml, artesanal da casa.", img: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=400" },
    { id: 13, name: "Caipirinha", category: "bebidas", price: 22.00, desc: "Limão, morango ou maracujá.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400" },
    { id: 14, name: "Refrigerante", category: "bebidas", price: 8.00, desc: "Lata 350ml.", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400" }
];

let stock = [
    { id: 1, name: "Carvão", qty: 50, unit: "sc" },
    { id: 2, name: "Picanha", qty: 25, unit: "kg" },
    { id: 3, name: "Cerveja Barril", qty: 4, unit: "un" }
];

let cart = [];
let orders = [];

// --- NAVEGAÇÃO ---
function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
    document.getElementById(screenId).classList.add('active-screen');
    
    // Re-trigger animation
    const screen = document.getElementById(screenId);
    screen.classList.remove('fade-in');
    void screen.offsetWidth;
    screen.classList.add('fade-in');

    if (screenId === 'client-app') filterItems('todos');
    if (screenId === 'cart-screen') renderCart();
    if (screenId === 'admin-app') showAdminTab('pedidos');
}

// --- LÓGICA DO CLIENTE ---
function filterItems(category) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    
    // Atualizar botões
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(category));
    });

    const items = category === 'todos' ? menuData : menuData.filter(i => i.category === category);
    
    items.forEach(item => {
        grid.innerHTML += `
            <div class="product-card" onclick="openModal(${item.id})">
                <img src="${item.img}" class="card-img">
                <div class="card-info">
                    <h3>${item.name}</h3>
                    <div class="card-price">R$ ${parseFloat(item.price).toFixed(2)}</div>
                    <div class="add-btn-mini"><i class="ri-add-line"></i></div>
                </div>
            </div>
        `;
    });
}

// Modal
let currentItem = null;
function openModal(id) {
    currentItem = menuData.find(i => i.id === id);
    document.getElementById('modal-img').src = currentItem.img;
    document.getElementById('modal-title').innerText = currentItem.name;
    document.getElementById('modal-desc').innerText = currentItem.desc;
    document.getElementById('modal-price').innerText = `R$ ${parseFloat(currentItem.price).toFixed(2)}`;
    document.getElementById('modal-obs').value = '';
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() { document.getElementById('product-modal').style.display = 'none'; }

document.getElementById('btn-add-modal').onclick = () => {
    const obs = document.getElementById('modal-obs').value;
    const existing = cart.find(x => x.id === currentItem.id && x.obs === obs);
    if(existing) existing.qty++;
    else cart.push({ ...currentItem, qty: 1, obs });
    
    updateCartCount();
    closeModal();
    alert("Adicionado!");
};

// Carrinho
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.reduce((a,b) => a + b.qty, 0);
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" style="width:60px; height:60px; border-radius:8px; object-fit:cover;">
                <div style="flex:1">
                    <h4>${item.name}</h4>
                    <small style="color:#888">${item.obs || ''}</small>
                    <div style="display:flex; justify-content:space-between; margin-top:5px">
                        <span class="card-price">R$ ${(item.price * item.qty).toFixed(2)}</span>
                        <div style="background:#333; padding:2px 8px; border-radius:5px; display:flex; gap:10px; align-items:center;">
                            <span onclick="updateQty(${index}, -1)">-</span>
                            <span>${item.qty}</span>
                            <span onclick="updateQty(${index}, 1)">+</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('cart-total-display').innerText = `R$ ${total.toFixed(2)}`;
}

function updateQty(idx, delta) {
    cart[idx].qty += delta;
    if(cart[idx].qty <= 0) cart.splice(idx, 1);
    renderCart();
    updateCartCount();
}

function checkout() {
    if(cart.length === 0) return alert("Carrinho vazio!");
    const total = cart.reduce((a,b) => a + (b.price * b.qty), 0);
    orders.unshift({ id: Date.now(), items: [...cart], total, status: 'Pendente' });
    cart = [];
    updateCartCount();
    alert("Pedido enviado para a cozinha!");
    navigateTo('client-app');
}

// --- LÓGICA DO ADMIN ---
function showAdminTab(tabId) {
    document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
    document.getElementById(`tab-${tabId}`).style.display = 'block';
    
    document.querySelectorAll('.sidebar-nav button').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if(tabId === 'pedidos') renderAdminOrders();
    if(tabId === 'estoque') renderStock();
    if(tabId === 'pratos') renderAdminProducts();
}

// 1. Pedidos
function renderAdminOrders() {
    const div = document.getElementById('admin-orders-grid');
    div.innerHTML = orders.map(o => `
        <div class="glass-card" style="padding:15px; border-left:4px solid var(--primary)">
            <h4>Pedido #${o.id.toString().slice(-4)}</h4>
            ${o.items.map(i => `<p>${i.qty}x ${i.name} <small>(${i.obs||''})</small></p>`).join('')}
            <div style="margin-top:10px; border-top:1px solid #333; padding-top:5px; display:flex; justify-content:space-between">
                <strong>R$ ${o.total.toFixed(2)}</strong>
                <button class="btn-primary" style="padding:5px 10px; font-size:0.8rem">Concluir</button>
            </div>
        </div>
    `).join('') || '<p style="color:#666">Sem pedidos ativos.</p>';
}

// 2. Estoque
function renderStock() {
    const tbody = document.getElementById('stock-table-body');
    tbody.innerHTML = stock.map((s, i) => `
        <tr>
            <td>${s.name}</td>
            <td>${s.qty} ${s.unit}</td>
            <td><button style="color:red; background:none;" onclick="removeStock(${i})"><i class="ri-delete-bin-line"></i></button></td>
        </tr>
    `).join('');
}

function addStock() {
    const name = document.getElementById('stock-name').value;
    const qty = document.getElementById('stock-qty').value;
    const unit = document.getElementById('stock-unit').value;
    if(name && qty) {
        stock.push({ id: Date.now(), name, qty, unit });
        renderStock();
        document.getElementById('stock-name').value = '';
        document.getElementById('stock-qty').value = '';
    }
}

function removeStock(index) {
    stock.splice(index, 1);
    renderStock();
}

// 3. Produtos (Pratos)
function renderAdminProducts() {
    const list = document.getElementById('admin-products-list');
    list.innerHTML = menuData.map(p => `
        <div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #333; align-items:center;">
            <div style="display:flex; gap:10px; align-items:center;">
                <img src="${p.img}" style="width:40px; height:40px; border-radius:5px;">
                <span>${p.name}</span>
            </div>
            <span>R$ ${parseFloat(p.price).toFixed(2)}</span>
        </div>
    `).join('');
}

function addNewProduct() {
    const name = document.getElementById('new-prod-name').value;
    const price = parseFloat(document.getElementById('new-prod-price').value);
    const cat = document.getElementById('new-prod-cat').value;
    const img = document.getElementById('new-prod-img').value || 'https://via.placeholder.com/150';

    if(name && price) {
        menuData.push({ id: Date.now(), name, category: cat, price, desc: "Novo item adicionado.", img });
        renderAdminProducts();
        alert("Prato adicionado!");
        // Limpar campos
        document.getElementById('new-prod-name').value = '';
        document.getElementById('new-prod-price').value = '';
    } else {
        alert("Preencha nome e preço.");
    }
}

// 4. Configurações
function saveConfig() {
    const name = document.getElementById('config-name').value;
    document.getElementById('brand-name-display').innerText = name;
    alert("Configurações salvas!");
}

// Init
filterItems('todos');