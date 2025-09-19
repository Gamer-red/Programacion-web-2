import { useMemo, useState } from 'react'
import './styles.css'

const GAMES = [
  {
    id: 'mario-odyssey',
    title: 'Super Mario Odyssey',
    platform: 'Nintendo Switch',
    price: 1300,
    image: 'https://tse4.mm.bing.net/th/id/OIP.Z52BIGCQi2mFHam42kxmpQHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    rating: 5,
    reviews: 2341,
    badge: 'Más vendido',
  },
  {
    id: 'halo-infinite',
    title: 'Halo Infinite',
    platform: 'Xbox Series X|S',
    price: 960,
    oldPrice: 1200,
    image: 'https://tse1.mm.bing.net/th/id/OIP.O6SJocUjmbTMlAv7fd-zRgHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    rating: 4,
    reviews: 1876,
    badge: 'Oferta -20%',
  },
  {
    id: 'zelda-botw',
    title: 'Zelda: Breath of the Wild',
    platform: 'Nintendo Switch',
    price: 1400,
    image: 'https://tse3.mm.bing.net/th/id/OIP.wHIG_z9lOnRLHBTwjs05QQHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    rating: 5,
    reviews: 3542,
    badge: 'Nuevo',
  },
  {
    id: 'gta-v-ps5',
    title: 'GTA V Premium Edition',
    platform: 'PlayStation 5',
    price: 999,
    image: 'https://th.bing.com/th/id/R.1f61de5c95100c4635fb92e7ea4f14b0?rik=WOJHcjJdddZnyQ&pid=ImgRaw&r=0',
    rating: 5,
    reviews: 5123,
  },
]

const currency = (mxn) => mxn.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })

function Nav({ cartCount, onSearch }){
  return (
    <header className="nav">
      <div className="nav__inner container">
        <a className="brand" href="#">🎮 Game Paradise</a>
        <div className="search-box">
          <input type="text" placeholder="Buscar juegos, consolas, accesorios..." onChange={(e)=>onSearch(e.target.value)} />
        </div>
        <nav className="nav__links">
          <a href="#catalogo">Catálogo</a>
          <a href="#carrito">🛒 Carrito ({cartCount})</a>
          <div className="user-points">⭐ 2,450 puntos</div>
          <a href="#perfil">Mi Perfil</a>
        </nav>
        <div>
          <button className="btn btn--ghost">Ingresar</button>
          <button className="btn btn--primary">Registrarse</button>
        </div>
      </div>
    </header>
  )
}

function Hero(){
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="container hero__content">
        <h1>Bienvenido a Game Paradise</h1>
        <p>El marketplace gaming más completo de México. Descubre los mejores juegos, consolas y accesorios con recompensas exclusivas por cada compra.</p>
        <div className="hero__cta">
          <a href="#catalogo" className="btn btn--primary">🎮 Explorar Catálogo</a>
          <a href="#perfil" className="btn btn--ghost">👤 Mi Cuenta</a>
        </div>
        <div className="hero__stats">
          <div className="stat">
            <div className="stat__number">15,000+</div>
            <div className="stat__label">Juegos disponibles</div>
          </div>
          <div className="stat">
            <div className="stat__number">50,000+</div>
            <div className="stat__label">Gamers activos</div>
          </div>
          <div className="stat">
            <div className="stat__number">24/7</div>
            <div className="stat__label">Soporte técnico</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const PLATFORMS = ['Todos', 'Nintendo Switch', 'PlayStation 5', 'Xbox Series', 'PC', 'Ofertas']

function Catalog({ games, filter, setFilter, onAdd }){
  return (
    <section id="catalogo" className="section container">
      <div className="section__head">
        <h2>Catálogo de Productos</h2>
        <p>Encuentra los mejores títulos clasificados por plataforma y con reseñas de la comunidad</p>
      </div>
      <div className="filters">
        {PLATFORMS.map(p => (
          <button key={p} className={`filter-btn ${filter===p?'active':''}`} onClick={()=>setFilter(p)}>{p}</button>
        ))}
      </div>
      <div className="grid">
        {games.map(g => (
          <div className="card" key={g.id}>
            {g.badge ? <div className="card__badge">{g.badge}</div> : null}
            <img src={g.image} alt={g.title} />
            <div className="card__body">
              <div className="card__platform">{g.platform}</div>
              <h3 className="card__title">{g.title}</h3>
              <div className="card__rating">
                <span className="stars">{'⭐'.repeat(g.rating)}</span>
                <span>({g.rating.toFixed(1)}) {g.reviews.toLocaleString('es-MX')} reseñas</span>
              </div>
              <div className="card__price">
                <div>
                  <div className="price">{currency(g.price)}</div>
                  {g.oldPrice ? <div className="price--old">{currency(g.oldPrice)}</div> : null}
                </div>
              </div>
              <div className="card__actions">
                <button className="btn btn--primary" style={{flex:1}} onClick={()=>onAdd(g)}>🛒 Agregar</button>
                <button className="btn btn--ghost">❤️</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Cart({ items, onRemove }){
  const subtotal = items.reduce((acc, it) => acc + it.price, 0)
  const points = Math.floor(subtotal * 0.1)
  return (
    <section id="carrito" className="section container">
      <h2>🛒 Carrito de Compras</h2>
      <div className="cart">
        <h3>🎮 Tus productos ({items.length} artículo{items.length!==1?'s':''})</h3>
        {items.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="cart-item__info">
              <h4 className="cart-item__title">{item.title}</h4>
              <div className="cart-item__price">{currency(item.price)} x1</div>
            </div>
            <button className="btn btn--ghost" onClick={()=>onRemove(item.id)}>🗑️</button>
          </div>
        ))}
        <div className="cart-total">
          <p>Subtotal: {currency(subtotal)}</p>
          <p>Puntos que ganarás: ⭐ +{points.toLocaleString('es-MX')} puntos</p>
          <p><strong>Total: {currency(subtotal)}</strong></p>
          <button className="btn btn--primary">💳 Proceder al pago</button>
        </div>
      </div>
    </section>
  )
}

function Profile(){
  return (
    <section id="perfil" className="section container">
      <h2>👤 Mi Perfil</h2>
      <div className="profile">
        <div className="profile__header">
          <div className="profile__avatar">JP</div>
          <div className="profile__info">
            <h3>Juan Pérez</h3>
            <p>juanperez@email.com</p>
            <div className="profile__level">Nivel 12 - Gamer Avanzado</div>
          </div>
          <div className="user-points" style={{fontSize:'1.1rem'}}>
            ⭐ 2,450 puntos disponibles
          </div>
        </div>
        <div className="achievements">
          <h4>🏆 Logros desbloqueados</h4>
          <div className="badges">
            <div className="badge">
              <div className="badge__icon">🛒</div>
              <div className="badge__title">Primera Compra</div>
            </div>
            <div className="badge">
              <div className="badge__icon">⭐</div>
              <div className="badge__title">1000 Puntos</div>
            </div>
            <div className="badge">
              <div className="badge__icon">❤️</div>
              <div className="badge__title">Fan Nintendo</div>
            </div>
            <div className="badge">
              <div className="badge__icon">📝</div>
              <div className="badge__title">Reseñador</div>
            </div>
          </div>
        </div>
        <button className="btn btn--ghost">✏️ Editar perfil</button>
        <button className="btn btn--primary">🎁 Canjear puntos</button>
      </div>
      <div className="recommendations">
        <h3>🎯 Recomendado para ti</h3>
        <p>Basado en tus compras previas y juegos similares que te gustan:</p>
        <div className="grid" style={{marginTop:'.5rem'}}>
          <div className="card">
            <img src="https://thvnext.bing.com/th/id/OIP.K5mQLcjBLd3MXAPPI8huhgHaEJ?o=7&cb=ucfimg2rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Mario 3D World" />
            <div className="card__body">
              <div className="card__platform">Nintendo Switch</div>
              <h3 className="card__title">Super Mario 3D World</h3>
              <div className="card__rating">
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span>(4.6) 1,234 reseñas</span>
              </div>
              <div className="card__price">
                <div className="price">{currency(1200)}</div>
              </div>
              <button className="btn btn--primary" style={{width:'100%',marginTop:'.5rem'}}>🛒 Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h4>Productos</h4>
            <a href="#">Juegos Nintendo</a>
            <a href="#">Juegos PlayStation</a>
            <a href="#">Juegos Xbox</a>
            <a href="#">PC Gaming</a>
            <a href="#">Accesorios</a>
          </div>
          <div className="footer__section">
            <h4>Comunidad</h4>
            <a href="#">Foros</a>
            <a href="#">Reseñas</a>
            <a href="#">Blog Gaming</a>
            <a href="#">Discord</a>
          </div>
          <div className="footer__section">
            <h4>Soporte</h4>
            <a href="#">Centro de ayuda</a>
            <a href="#">Política de devoluciones</a>
            <a href="#">Envíos</a>
            <a href="#">Contacto</a>
          </div>
          <div className="footer__section">
            <h4>Cuenta</h4>
            <a href="#">Mi perfil</a>
            <a href="#">Mis pedidos</a>
            <a href="#">Lista de deseos</a>
            <a href="#">Puntos y recompensas</a>
          </div>
        </div>
        <div style={{textAlign:'center',paddingTop:'2rem',borderTop:'1px solid var(--border)'}}>
          <p>© 2025 Game Paradise • El mejor marketplace gaming de México 🎮</p>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Todos')
  const [cart, setCart] = useState([])

  const filtered = useMemo(() => {
    return GAMES.filter(g => {
      const matchesSearch = g.title.toLowerCase().includes(search.toLowerCase())
      const matchesFilter = filter === 'Todos' || g.platform.includes(filter) || (filter==='Ofertas' && Boolean(g.oldPrice)) || (filter==='Xbox Series' && g.platform.includes('Xbox'))
      return matchesSearch && matchesFilter
    })
  }, [search, filter])

  const addToCart = (game) => setCart(prev => [...prev, game])
  const removeFromCart = (id) => setCart(prev => prev.filter(it => it.id !== id))

  return (
    <>
      <Nav cartCount={cart.length} onSearch={setSearch} />
      <Hero />
      <Catalog games={filtered} filter={filter} setFilter={setFilter} onAdd={addToCart} />
      <Cart items={cart} onRemove={removeFromCart} />
      <Profile />
      <Footer />
    </>
  )
}
