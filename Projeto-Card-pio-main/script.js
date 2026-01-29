// --- BASE DE DADOS EXPANDIDA ---
const defaultMenuData = [
    // CORTES
    { id: 1, name: "Picanha Black Angus", category: "cortes", price: 129.90, desc: "A rainha do churrasco. Corte alto (300g), capa de gordura uniforme e marmoreio intenso. Acompanha farofa e vinagrete.", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=600", available: true },
    { id: 2, name: "Ancho Premium", category: "cortes", price: 98.50, desc: "O famoso Ribeye. Corte do dianteiro (350g), extremamente macio, suculento e com sabor marcante.", img: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=600", available: true },
    { id: 3, name: "Tomahawk Gold", category: "cortes", price: 189.90, desc: "Impressionante corte de 1kg com osso longo. Sabor inigualável e apresentação de cinema. Ideal para compartilhar.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600", available: true },
    { id: 4, name: "Chorizo Argentino", category: "cortes", price: 89.00, desc: "Contra-filé com a clássica capa de gordura lateral. Grelhado na parrilla para máxima suculência.", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600", available: true },
    { id: 5, name: "Short Ribs", category: "cortes", price: 75.00, desc: "Costela dianteira com osso (400g). Carne desmanchando de tão macia, com sabor defumado.", img: "https://images.unsplash.com/photo-1558039948-47ac6cb39027?q=80&w=600", available: true },
    
    // BURGERS
    { id: 10, name: "Braza Burger", category: "burgers", price: 42.00, desc: "Blend 180g de Costela, queijo Gouda derretido, cebola caramelizada no açúcar mascavo e bacon crocante no pão brioche.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600", available: true },
    { id: 11, name: "Truffle Burger", category: "burgers", price: 48.00, desc: "Sofisticação pura. Blend 180g, queijo Brie, maionese de trufas negras e rúcula selvagem.", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600", available: true },
    { id: 12, name: "Smash Duplo Bacon", category: "burgers", price: 38.00, desc: "Dois discos de 90g prensados na chapa, muito Cheddar inglês, farofa de bacon e molho especial da casa.", img: "https://images.unsplash.com/photo-1586190848861-99c8a3bd7991?q=80&w=600", available: true },
    { id: 13, name: "Chicken Crispy", category: "burgers", price: 32.00, desc: "Sobrecoxa desossada empanada na panko, coleslaw (salada de repolho cremosa) e picles caseiro.", img: "https://images.unsplash.com/photo-1619250907298-9635c3614275?q=80&w=600", available: true },
    { id: 14, name: "Veggie Grill", category: "burgers", price: 35.00, desc: "Burger de grão de bico e cogumelos, queijo prato, tomate confit e maionese de ervas.", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600", available: true },

    // ACOMPANHAMENTOS
    { id: 20, name: "Batata Rústica", category: "acompanhamentos", price: 28.00, desc: "Corte canoa, fritas com casca, finalizadas com alho frito, alecrim fresco e páprica.", img: "https://images.unsplash.com/photo-1623238918235-9f5b61a3579a?q=80&w=600", available: true },
    { id: 21, name: "Dadinhos de Tapioca", category: "acompanhamentos", price: 24.00, desc: "Crocantes por fora, macios por dentro. Acompanha geleia de pimenta artesanal.", img: "https://images.unsplash.com/photo-1635443292886-0773d52d2c2f?q=80&w=600", available: true },
    { id: 22, name: "Pão de Alho Supremo", category: "acompanhamentos", price: 14.00, desc: "Baguete recheada com pasta de alho suave, muito queijo e gratinada na brasa.", img: "https://images.unsplash.com/photo-1573147820718-2b89ae65646f?q=80&w=600", available: true },
    { id: 23, name: "Salada Caesar", category: "acompanhamentos", price: 22.00, desc: "Alface romana, croutons, parmesão em lascas e molho caesar clássico.", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600", available: true },

    // SOBREMESAS
    { id: 30, name: "Grand Gateau", category: "sobremesas", price: 32.00, desc: "Bolo quente de chocolate, picolé Magnum, morangos frescos e calda de avelã.", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600", available: true },
    { id: 31, name: "Pudim de Leite", category: "sobremesas", price: 18.00, desc: "A receita da vovó. Sem furinhos, super cremoso e com calda de caramelo amber.", img: "https://images.unsplash.com/photo-1517260739337-6799d2ff1fdb?q=80&w=600", available: true },
    { id: 32, name: "Cheesecake Frutas Vermelhas", category: "sobremesas", price: 24.00, desc: "Base de biscoito, creme de queijo suave e calda rústica de frutas vermelhas.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600", available: true },

    // BEBIDAS
    { id: 40, name: "Chopp IPA Artesanal", category: "bebidas", price: 16.00, desc: "500ml. Notas cítricas e amargor equilibrado. Produção local.", img: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=600", available: true },
    { id: 41, name: "Gin Tônica Tropical", category: "bebidas", price: 28.00, desc: "Gin importado, tônica, rodela de laranja bahia e xarope de maracujá.", img: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=600", available: true },
    { id: 42, name: "Caipirinha Clássica", category: "bebidas", price: 22.00, desc: "Cachaça envelhecida, limão taiti fresco e açúcar na medida certa.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600", available: true },
    { id: 43, name: "Soda Italiana", category: "bebidas", price: 14.00, desc: "Água com gás e xarope de maçã verde ou frutas vermelhas. Refrescante.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600", available: true },
    { id: 44, name: "Refrigerante Lata", category: "bebidas", price: 8.00, desc: "350ml. Escolha o sabor nas opções abaixo.", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600", available: true },
    { id: 45, name: "Cerveja Long Neck", category: "bebidas", price: 14.00, desc: "330ml. Escolha sua marca preferida.", img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=600", available: true },
    { id: 46, name: "Cerveja Garrafa", category: "bebidas", price: 22.00, desc: "600ml. Ideal para dividir.", img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=600", available: true }
];

const defaultStock = [
    { id: 1, name: "Carvão", qty: 50, unit: "sc", minQty: 10 },
    { id: 2, name: "Picanha Angus", qty: 25, unit: "kg", minQty: 5 },
    { id: 3, name: "Pão Brioche", qty: 100, unit: "un", minQty: 20 },
    { id: 4, name: "Queijo Gouda", qty: 5, unit: "kg", minQty: 1 },
    { id: 5, name: "Barril Chopp", qty: 4, unit: "un", minQty: 2 }
];

// --- SISTEMA DE BANCO DE DADOS (LOCALSTORAGE) ---
// Atualizei para v3 para carregar as novas bebidas
const DB_KEYS = { MENU: 'braza_menu_v3', STOCK: 'braza_stock_v3', ORDERS: 'braza_orders_v3', CART: 'braza_cart_v3' };

function loadDB(key, fallback) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
}

function saveDB(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Inicialização dos Dados
// Garante que todos os itens tenham a propriedade 'available' (para dados antigos)
let menuData = loadDB(DB_KEYS.MENU, defaultMenuData).map(i => ({ available: true, ...i }));
let stock = loadDB(DB_KEYS.STOCK, defaultStock);
let orders = loadDB(DB_KEYS.ORDERS, []);
let cart = loadDB(DB_KEYS.CART, []);

// Atualizar contador ao iniciar
setTimeout(updateCartCount, 100);

// --- UTILITÁRIOS ---
const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

// --- SISTEMA DE NOTIFICAÇÕES (TOAST) ---
function showToast(msg, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="${type === 'success' ? 'ri-checkbox-circle-line' : 'ri-error-warning-line'}"></i> <span>${msg}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// --- SINCRONIZAÇÃO EM TEMPO REAL ---
window.addEventListener('storage', (e) => {
    if (e.key === DB_KEYS.MENU) {
        menuData = JSON.parse(e.newValue);
        filterItems('todos'); // Atualiza cliente
        renderAdminProducts(); // Atualiza admin
    }
    if (e.key === DB_KEYS.STOCK) {
        stock = JSON.parse(e.newValue);
        renderStock();
    }
    if (e.key === DB_KEYS.ORDERS) {
        const newOrders = JSON.parse(e.newValue);
        if (newOrders.length > orders.length) {
            document.getElementById('audio-alert')?.play().catch(() => {});
        }
        orders = newOrders;
        renderAdminOrders();
        renderDashboard();
    }
});

// --- NAVEGAÇÃO ---
let isAdminAuthenticated = false;

function attemptLogin() {
    const passInput = document.getElementById('admin-pass');
    if (passInput && passInput.value === "admin") {
        isAdminAuthenticated = true;
        navigateTo('admin-app');
    } else {
        showToast("Senha incorreta!", "error");
    }
}

function navigateTo(screenId) {
    const targetScreen = document.getElementById(screenId);
    if (!targetScreen) return; // Evita erro se a tela não existir na página atual

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active-screen'));
    targetScreen.classList.add('active-screen');
    
    // Re-trigger animation
    targetScreen.classList.remove('fade-in');
    void targetScreen.offsetWidth;
    targetScreen.classList.add('fade-in');

    if (screenId === 'client-app') filterItems('todos');
    if (screenId === 'cart-screen') renderCart();
    if (screenId === 'admin-app') showAdminTab('pedidos');
    if (screenId === 'admin-app') renderDashboard();
}

// --- LÓGICA DO CLIENTE ---
let activeCategory = 'todos';

function searchMenu(term) {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    const lowerTerm = term.toLowerCase();
    const items = menuData.filter(i => 
        i.name.toLowerCase().includes(lowerTerm) || 
        i.desc.toLowerCase().includes(lowerTerm)
    );

    if (items.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:#888;">Nenhum item encontrado.</div>';
        return;
    }
    renderItems(items);
}

function filterItems(category) {
    const grid = document.getElementById('menu-grid');
    if (!grid) return; // Proteção
    grid.innerHTML = '';
    
    // Atualizar botões
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(category));
    });

    activeCategory = category;
    const items = category === 'todos' ? menuData : menuData.filter(i => i.category === category);
    renderItems(items);
}

function renderItems(items) {
    const grid = document.getElementById('menu-grid');
    items.forEach(item => {
        grid.innerHTML += `
            <div class="product-card ${!item.available ? 'unavailable' : ''}" onclick="openModal(${item.id})">
                <img src="${item.img}" class="card-img">
                <div class="card-info">
                    <h3>${item.name}</h3>
                    <div class="card-price">${formatCurrency(item.price)}</div>
                    <div class="add-btn-mini"><i class="ri-add-line"></i></div>
                </div>
            </div>
        `;
    });
}

// Modal
let currentItem = null;
let modalQty = 1;

// Tags rápidas por categoria
const QUICK_TAGS = {
    burgers: ["Sem Cebola", "Sem Bacon", "Sem Molho", "Bem Passado", "Ao Ponto"],
    cortes: ["Bem Passado", "Ao Ponto", "Mal Passado", "Sem Sal"],
    bebidas: ["Sem Gelo", "Com Limão", "Sem Açúcar"],
    acompanhamentos: ["Sem Molho", "Extra Crocante"]
};

function openModal(id) {
    currentItem = menuData.find(i => i.id === id);
    document.getElementById('modal-img').src = currentItem.img;
    document.getElementById('modal-title').innerText = currentItem.name;
    document.getElementById('modal-desc').innerText = currentItem.desc;
    document.getElementById('modal-price').innerText = formatCurrency(currentItem.price);
    
    modalQty = 1;
    updateModalQtyDisplay();
    
    // Gerar Tags
    const tagsDiv = document.getElementById('modal-tags');
    tagsDiv.innerHTML = '';
    
    let tags = [];
    const nameLower = currentItem.name.toLowerCase();
    
    // Lógica inteligente para bebidas
    if (currentItem.category === 'bebidas') {
        if (nameLower.includes('refrigerante')) {
            tags = ["Coca-Cola", "Coca Zero", "Guaraná", "Guaraná Zero", "Sprite", "Fanta Laranja", "Fanta Uva"];
        } else if (nameLower.includes('cerveja') || nameLower.includes('long neck') || nameLower.includes('garrafa')) {
            tags = ["Heineken", "Stella Artois", "Budweiser", "Spaten", "Original", "Amstel"];
        } else if (nameLower.includes('chopp')) {
            tags = ["Com Colarinho", "Sem Colarinho"];
        } else {
            tags = QUICK_TAGS.bebidas || [];
        }
    } else {
        tags = QUICK_TAGS[currentItem.category] || [];
    }

    tags.forEach(tag => {
        tagsDiv.innerHTML += `<span onclick="toggleTag(this)" class="tag-chip">${tag}</span>`;
    });

    document.getElementById('modal-obs').value = ''; // Limpa observações anteriores
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() { document.getElementById('product-modal').style.display = 'none'; }

function toggleTag(element) {
    element.classList.toggle('selected');
}

function updateModalQty(delta) {
    if (modalQty + delta >= 1) {
        modalQty += delta;
        updateModalQtyDisplay();
    }
}

function updateModalQtyDisplay() {
    const display = document.getElementById('modal-qty-display');
    if(display) display.innerText = modalQty;
}

document.getElementById('btn-add-modal').onclick = () => {
    // Coletar tags selecionadas
    const selectedTags = Array.from(document.querySelectorAll('.tag-chip.selected')).map(el => el.innerText);
    const obs = document.getElementById('modal-obs').value;
    const fullObs = [ ...selectedTags, obs ].filter(Boolean).join(', ');

    const existing = cart.find(x => x.id === currentItem.id && x.obs === fullObs);
    if(existing) existing.qty += modalQty;
    else cart.push({ ...currentItem, qty: modalQty, obs: fullObs });
    
    saveDB(DB_KEYS.CART, cart);
    updateCartCount();
    closeModal();
    showToast("Adicionado à sacola!");
};

// Carrinho
function updateCartCount() {
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = cart.reduce((a,b) => a + b.qty, 0);
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    if (!container) return; // Proteção
    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="ri-shopping-cart-2-line"></i>
                <p>Sua sacola está vazia.<br>Que tal pedir um burger?</p>
            </div>`;
        document.getElementById('cart-total-display').innerText = 'R$ 0,00';
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" style="width:60px; height:60px; border-radius:8px; object-fit:cover;">
                <div style="flex:1">
                    <h4>${item.name}</h4>
                    <small style="color:#888">${item.obs || ''}</small>
                    <div style="display:flex; justify-content:space-between; margin-top:5px">
                        <span class="card-price">${formatCurrency(item.price * item.qty)}</span>
                        <div class="qty-selector">
                            <span class="qty-btn" onclick="updateQty(${index}, -1)">-</span>
                            <span>${item.qty}</span>
                            <span class="qty-btn" onclick="updateQty(${index}, 1)">+</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('cart-total-display').innerText = formatCurrency(total);
}

function updateQty(idx, delta) {
    cart[idx].qty += delta;
    if(cart[idx].qty <= 0) cart.splice(idx, 1);
    saveDB(DB_KEYS.CART, cart);
    renderCart();
    updateCartCount();
}

function checkout() {
    if(cart.length === 0) return alert("Carrinho vazio!");
    const total = cart.reduce((a,b) => a + (b.price * b.qty), 0);
    
    orders.unshift({ id: Date.now(), items: [...cart], total, status: 'Pendente', time: new Date().toLocaleTimeString() });
    saveDB(DB_KEYS.ORDERS, orders);
    cart = [];
    saveDB(DB_KEYS.CART, cart);
    updateCartCount();
    showToast("Pedido enviado para a cozinha!");
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
    if(tabId === 'dashboard') renderDashboard();
}

// 0. Dashboard
function renderDashboard() {
    const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);
    const totalOrders = orders.length;
    
    const revEl = document.getElementById('dash-revenue');
    const ordEl = document.getElementById('dash-orders');
    if(revEl) revEl.innerText = formatCurrency(totalRevenue);
    if(ordEl) ordEl.innerText = totalOrders;
}

// 1. Pedidos
function renderAdminOrders() {
    const div = document.getElementById('admin-orders-grid');
    if (!div) return; // Proteção
    div.innerHTML = orders.map((o, index) => `
        <div class="glass-card" style="padding:15px; border-left:4px solid ${getStatusColor(o.status)}">
            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <h4>Pedido #${o.id.toString().slice(-4)}</h4>
                <small>${o.time}</small>
            </div>
            ${o.items.map(i => `<p>${i.qty}x ${i.name} <small>(${i.obs||''})</small></p>`).join('')}
            <div style="margin-top:10px; border-top:1px solid #333; padding-top:5px; display:flex; justify-content:space-between">
                <strong>${formatCurrency(o.total)}</strong>
                <button class="btn-primary" onclick="advanceOrderStatus(${index})" style="padding:5px 10px; font-size:0.8rem">
                    ${o.status === 'Pendente' ? 'Aceitar' : (o.status === 'Em Preparo' ? 'Concluir' : 'Arquivar')}
                </button>
            </div>
            <div style="margin-top:5px; font-size:0.8rem; color:${getStatusColor(o.status)}">${o.status}</div>
        </div>
    `).join('') || '<p style="color:#666">Sem pedidos ativos.</p>';
}

function getStatusColor(status) {
    if(status === 'Pendente') return 'orange';
    if(status === 'Em Preparo') return '#3498db';
    return '#2ecc71';
}

function advanceOrderStatus(index) {
    if(orders[index].status === 'Pendente') orders[index].status = 'Em Preparo';
    else if(orders[index].status === 'Em Preparo') orders[index].status = 'Pronto';
    else orders.splice(index, 1); // Remove se já estava pronto
    
    saveDB(DB_KEYS.ORDERS, orders);
    renderAdminOrders();
    renderDashboard();
}

// 2. Estoque
function renderStock() {
    const tbody = document.getElementById('stock-table-body');
    if (!tbody) return; // Proteção
    tbody.innerHTML = stock.map((s, i) => {
        const isLow = s.qty <= (s.minQty || 5);
        return `
        <tr style="${isLow ? 'color: #ff6b6b; font-weight:bold;' : ''}">
            <td>${s.name}</td>
            <td>${s.qty} ${s.unit} ${isLow ? '<i class="ri-alert-line"></i>' : ''}</td>
            <td style="display:flex; gap:5px;">
                <button class="btn-icon-sm" onclick="editStock(${i})"><i class="ri-pencil-line"></i></button>
                <button class="btn-icon-sm danger" onclick="removeStock(${i})"><i class="ri-delete-bin-line"></i></button>
            </td>
        </tr>
    `}).join('');
}

function addStock() {
    const name = document.getElementById('stock-name').value;
    const qty = document.getElementById('stock-qty').value;
    const unit = document.getElementById('stock-unit').value;
    if(name && qty) {
        stock.push({ id: Date.now(), name, qty, unit, minQty: 5 });
        saveDB(DB_KEYS.STOCK, stock);
        renderStock();
        document.getElementById('stock-name').value = '';
        document.getElementById('stock-qty').value = '';
    }
}

// Modal Genérico para Admin
function openAdminModal(title, placeholder, initialValue, onConfirm) {
    const modal = document.getElementById('admin-generic-modal');
    document.getElementById('admin-modal-title').innerText = title;
    const input = document.getElementById('admin-modal-input');
    input.placeholder = placeholder;
    input.value = initialValue || '';
    input.focus();
    
    document.getElementById('admin-modal-confirm').onclick = () => {
        if(input.value) {
            onConfirm(input.value);
            closeAdminModal();
        }
    };
    
    modal.style.display = 'flex';
}

function closeAdminModal() {
    document.getElementById('admin-generic-modal').style.display = 'none';
}

function editStock(index) {
    openAdminModal("Editar Estoque", "Nova quantidade", stock[index].qty, (val) => {
        stock[index].qty = parseFloat(val);
        saveDB(DB_KEYS.STOCK, stock);
        renderStock();
    });
}

function removeStock(index) {
    stock.splice(index, 1);
    saveDB(DB_KEYS.STOCK, stock);
    renderStock();
}

// 3. Produtos (Pratos)
function renderAdminProducts() {
    const list = document.getElementById('admin-products-list');
    if (!list) return; // Proteção
    list.innerHTML = menuData.map((p, index) => `
        <div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #333; align-items:center;">
            <div style="display:flex; gap:10px; align-items:center;">
                <img src="${p.img}" style="width:40px; height:40px; border-radius:5px;">
                <span>${p.name}</span>
            </div>
            <div class="admin-item-actions">
                <label class="switch">
                    <input type="checkbox" ${p.available ? 'checked' : ''} onchange="toggleProductAvailability(${index})">
                    <span class="slider"></span>
                </label>
                <span style="font-size:0.9rem; margin-right:5px;">${formatCurrency(p.price)}</span>
                <button class="btn-icon-sm" onclick="editProduct(${index})"><i class="ri-pencil-line"></i></button>
                <button class="btn-icon-sm danger" onclick="deleteProduct(${index})"><i class="ri-delete-bin-line"></i></button>
            </div>
        </div>
    `).join('');
}

function addNewProduct() {
    const name = document.getElementById('new-prod-name').value;
    const price = parseFloat(document.getElementById('new-prod-price').value);
    const cat = document.getElementById('new-prod-cat').value;
    const img = document.getElementById('new-prod-img').value || 'https://via.placeholder.com/150';

    if(name && price) {
        menuData.push({ id: Date.now(), name, category: cat, price, desc: "Novo item adicionado.", img, available: true });
        saveDB(DB_KEYS.MENU, menuData);
        renderAdminProducts();
        showToast("Prato adicionado!");
        // Limpar campos
        document.getElementById('new-prod-name').value = '';
        document.getElementById('new-prod-price').value = '';
    } else {
        showToast("Preencha nome e preço.", "error");
    }
}

function toggleProductAvailability(index) {
    menuData[index].available = !menuData[index].available;
    saveDB(DB_KEYS.MENU, menuData);
    // Não precisa chamar renderAdminProducts pois o evento storage cuidará disso se necessário, 
    // mas para feedback visual imediato no próprio admin:
    // renderAdminProducts(); (Opcional, o checkbox já mudou visualmente)
}

function editProduct(index) {
    const p = menuData[index];
    openAdminModal(`Editar Preço: ${p.name}`, "Novo preço (R$)", p.price, (val) => {
        menuData[index].price = parseFloat(val);
        saveDB(DB_KEYS.MENU, menuData);
        renderAdminProducts();
    });
}

function deleteProduct(index) {
    if(confirm("Tem certeza que deseja remover este prato?")) {
        menuData.splice(index, 1);
        saveDB(DB_KEYS.MENU, menuData);
        renderAdminProducts();
    }
}

// 4. Configurações
function saveConfig() {
    const name = document.getElementById('config-name').value;
    const brandDisplay = document.getElementById('brand-name-display');
    if (brandDisplay) brandDisplay.innerText = name;
    showToast("Configurações salvas!");
}

// Init
filterItems('todos');