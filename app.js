// MENU COMPLETO LA SEDE - extraído del PDF
const MENU = [
  // ENTRADAS
  { categoria: "Entradas", nombre: "Plato de Entrada", descripcion: "Vitel Toné, Ensalada Rusa, Huevo relleno, Bondiola, Jamón, Lengua a la Vinagreta", precio: "18000", foto: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
  
  // PICADAS
  { categoria: "Picadas", nombre: "Picada Simple", descripcion: "Bondiola, queso, chorizo, aceituna", precio: "10000", foto: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400" },
  { categoria: "Picadas", nombre: "Picada Cervecera", descripcion: "Queso, salame, mortadela, aceitunas, sandwich de miga de peceto, arrolladito de pollo", precio: "30000", foto: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400" },
  { categoria: "Picadas", nombre: "Picada La Sede Caliente", descripcion: "Rabas, milanesa, papas La Sede, pollo krispy, carlitos, rollito chino. Para 2", precio: "46000", foto: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400" },
  { categoria: "Picadas", nombre: "Picada Caliente 2", descripcion: "Aros de cebolla, milanesa, papas La Sede, pollo krispy, carlitos, rollito chino. Para 2", precio: "38000", foto: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400" },

  // PICOTEO
  { categoria: "Picoteo", nombre: "Rollitos Chinos x12", descripcion: "Masa hojaldre relleno carne y verduras con salsita", precio: "24000", foto: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400" },
  { categoria: "Picoteo", nombre: "Rollitos Chinos x6", descripcion: "", precio: "12000", foto: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400" },
  { categoria: "Picoteo", nombre: "Pollo Krispy x16", descripcion: "", precio: "12000", foto: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400" },
  { categoria: "Picoteo", nombre: "Porción de Rabas", descripcion: "", precio: "20000", foto: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400" },
  { categoria: "Picoteo", nombre: "Cazuelas en vinagre", descripcion: "Lengua, verduras o pollo c/verduras", precio: "7000", foto: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400" },
  { categoria: "Picoteo", nombre: "Tostado", descripcion: "", precio: "7200", foto: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=400" },
  { categoria: "Picoteo", nombre: "Triple tostado con papas", descripcion: "", precio: "8000", foto: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=400" },
  { categoria: "Picoteo", nombre: "Empanadas c/u", descripcion: "Dulces, Saladas, JyQ, Cebolla, Choclo, Capresse, Árabes, Salteñas", precio: "2000", foto: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=400" },

  // PLATOS PRINCIPALES
  { categoria: "Platos Principales", nombre: "Carré de cerdo", descripcion: "A la mostaza o salsa a elección", precio: "16000", foto: "https://images.unsplash.com/photo-1546964053-d2934cd33e3f?w=400" },
  { categoria: "Platos Principales", nombre: "Lomo a la pimienta", descripcion: "", precio: "22000", foto: "https://images.unsplash.com/photo-1546964053-d2934cd33e3f?w=400" },
  { categoria: "Platos Principales", nombre: "Bife de chorizo", descripcion: "Aclarar punto", precio: "20000", foto: "https://images.unsplash.com/photo-1558030006-450066393d65?w=400" },
  { categoria: "Platos Principales", nombre: "Salmón con guarnición", descripcion: "Con salsa y guarnición", precio: "30000", foto: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
  { categoria: "Platos Principales", nombre: "Pollo al limón", descripcion: "", precio: "13000", foto: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400" },
  { categoria: "Platos Principales", nombre: "Pollo a la mostaza", descripcion: "", precio: "15000", foto: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400" },

  // ENSALADAS
  { categoria: "Ensaladas", nombre: "Rúcula y Queso", descripcion: "", precio: "10000", foto: "https://images.unsplash.com/photo-1512621776952-a57141f2eefd?w=400" },
  { categoria: "Ensaladas", nombre: "Mixta", descripcion: "", precio: "7000", foto: "https://images.unsplash.com/photo-1512621776952-a57141f2eefd?w=400" },

  // GUARNICIONES
  { categoria: "Guarniciones", nombre: "Papas La Sede", descripcion: "Bastón, panceta, cheddar, puerro", precio: "10000", foto: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400" },
  { categoria: "Guarniciones", nombre: "Papas bastón", descripcion: "", precio: "7500", foto: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400" },

  // INFANTIL
  { categoria: "Infantil", nombre: "Cajita Feliz", descripcion: "Hamburguesa o pollo krispy + papas + heladito + regalo sorpresa", precio: "16000", foto: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400" },

  // PASTAS
  { categoria: "Pastas", nombre: "Con crema", descripcion: "Pasta a elección", precio: "12000", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400" },
  { categoria: "Pastas", nombre: "Con salsa", descripcion: "Pasta a elección", precio: "14000", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400" },
  { categoria: "Pastas", nombre: "Ñoquis con crema", descripcion: "", precio: "10000", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400" },
  { categoria: "Pastas", nombre: "Tallarines con salsa", descripcion: "", precio: "16000", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400" },
  { categoria: "Pastas", nombre: "Sorrentinos con salsa", descripcion: "", precio: "18000", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400" },

  // MINUTAS
  { categoria: "Minutas", nombre: "Milanesa al plato", descripcion: "", precio: "16000", foto: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=400" },
  { categoria: "Minutas", nombre: "Milanesa picada c/ fritas", descripcion: "", precio: "20000", foto: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=400" },
  { categoria: "Minutas", nombre: "Suprema a la napolitana", descripcion: "", precio: "17500", foto: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400" },

  // SANDWICHES
  { categoria: "Sandwiches", nombre: "Lomito bife", descripcion: "Todos salen con fritas", precio: "16000", foto: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=400" },
  { categoria: "Sandwiches", nombre: "Lomito gourmet", descripcion: "Bife o desmenuzado c/queso, rúcula y jamón crudo", precio: "17000", foto: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=400" },
  { categoria: "Sandwiches", nombre: "Hamburguesa CHANTA CUATRO", descripcion: "Doble medallón y cuatro quesos", precio: "14500", foto: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=400" },
  { categoria: "Sandwiches", nombre: "Hamburguesa GOLAZO", descripcion: "Pan papa, doble carne, barbacoa, papas revueltas en huevo y tybo", precio: "15000", foto: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=400" },

  // PIZZAS
  { categoria: "Pizzas", nombre: "Especial", descripcion: "Entera / Media", precio: "16000 / 9000", foto: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
  { categoria: "Pizzas", nombre: "Muzzarela", descripcion: "", precio: "15000 / 8000", foto: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
  { categoria: "Pizzas", nombre: "Rúcula", descripcion: "", precio: "20000 / 12000", foto: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
  { categoria: "Pizzas", nombre: "AL ÁNGULO", descripcion: "Huevos fritos", precio: "20000 / 13000", foto: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },

  // POSTRES Y BEBIDAS
  { categoria: "Postres", nombre: "Flan", descripcion: "", precio: "6000", foto: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400" },
  { categoria: "Bebidas", nombre: "Gaseosa 500cc", descripcion: "Línea Coca Cola", precio: "3800", foto: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400" },
  { categoria: "Bebidas", nombre: "Cerveza Santa Fe porrón", descripcion: "", precio: "7000", foto: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400" },
  { categoria: "Bebidas", nombre: "Chopp Jarra", descripcion: "", precio: "10000", foto: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400" },
];

const filtrosDiv = document.getElementById('filtros');
const menuDiv = document.getElementById('menu');
const categorias = ['Todo', ...new Set(MENU.map(m=>m.categoria))];

categorias.forEach((cat,i)=>{
  const b = document.createElement('button');
  b.textContent = cat;
  if(i==0) b.classList.add('activo');
  b.onclick = ()=>{
    document.querySelectorAll('#filtros button').forEach(x=>x.classList.remove('activo'));
    b.classList.add('activo');
    render(cat);
    if(window.innerWidth <= 768){
      filtrosDiv.style.display = 'none';
    }
  };
  filtrosDiv.appendChild(b);
});

function render(filtro){
  menuDiv.innerHTML = "";
  let categoriaActual = "";
  MENU.filter(m=> filtro==='Todo' || m.categoria===filtro).forEach(item=>{
    if(filtro==='Todo' && item.categoria !== categoriaActual){
      categoriaActual = item.categoria;
      menuDiv.innerHTML += `<h2 class="titulo-categoria">${categoriaActual}</h2>`;
    }
    const precioTxt = item.precio ? `$${item.precio}` : 'A confirmar';
    menuDiv.innerHTML += `
      <div class="card">
        <img src="${item.foto}" loading="lazy" alt="">
        <div class="card-body">
          <h3>${item.nombre}</h3>
          <p>${item.descripcion}</p>
          <div class="precio">${precioTxt}</div>
        </div>
      </div>`;
  });
  setTimeout(()=>observarCards(), 100);
}

// Header transparente
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Animación
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

const observarCards = () => {
  document.querySelectorAll('.card').forEach(card=> observer.observe(card));
};

render('Todo');
observarCards();

const btnMenu = document.querySelector('header span');
btnMenu.style.cursor = 'pointer';
btnMenu.addEventListener('click', () => {
  console.log("TOQUÉ HAMBURGUESA");
  filtrosDiv.style.display = filtrosDiv.style.display === 'flex' ? 'none' : 'flex';
  filtrosDiv.style.flexDirection = 'column';
});

// Borra los 2 carteles de Netlify
setInterval(()=>{
  document.querySelectorAll('div, span, iframe').forEach(el=>{
    if(el.innerText && (el.innerText.includes('Build your own site with Netlify') || el.innerText.includes('Powered by Netlify'))){
      // busca el contenedor grande
      let box = el.closest('div[style*="position: fixed"]');
      if(box) box.style.display='none';
      if(el.textContent === 'Powered by Netlify' || el.textContent.includes('Powered by')) el.style.display='none';
    }
  });
  // el boton chiquito negro
  const pill = document.querySelector('a[href*="netlify.com"]');
  if(pill && pill.textContent.includes('Powered')) pill.parentElement.style.display='none';
}, 800);

