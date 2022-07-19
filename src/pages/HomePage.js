import React, { Fragment } from 'react'
import './HomePage.module.css'
const HomePage = () => 
{

  return (

    <Fragment>
         <nav>
        <div id="websiteName" className="">buca.</div>
        <ul className="menu-list closed animation">
            <li className="menu-list-item"><a href="#">SHOP</a></li>
            <li className="menu-list-item"><a href="#">BRANDS</a></li>
            <li className="menu-list-item"><a href="#">MY BOYFRIENDS BACK</a></li>
            <li className="menu-list-item"><a href="#">STAFF EDIT</a></li>
        </ul>
        <ul className="icon-list">
            <li className="icon-list-item"><i className="fas fa-user"></i></li>
            <li className="icon-list-item"><i className="fas fa-search"></i></li>
            <li className="icon-list-item"><i className="fas fa-shopping-bag"></i></li>
            <li id="menu-item" className="icon-list-item invisible"><i className="fas fa-bars"></i></li>
        </ul>
    </nav>
    <header>
        <div>
            <h2>End of Season Sale</h2>
            <p>Pieces from $50!</p>
            <input type="button" value="Shop Now"/>
        </div>
    </header>
    <div className="brand-promotion">
        Curators of ethical fashion and New Zealand designed. Hebe is a destination for style seekers. Located in
        Masterton's boutique Kuripuni.
    </div>
    <div className="best-of-the-week">
        <h2>Must Haves</h2>
        <p>Some of our favourite picks this week</p>
        <div className="container">
            <div className="card">
                <div className="card-picture"></div>
                <p className="card-title">Black Night Trench</p>
                <p className="card-comment">STOLEN GIRLFRIENDS CLUB</p>
                <p className="card-price">$499.00</p>
            </div>
            <div className="card">
                <div className="card-picture"></div>
                <p className="card-title">Black Night Trench</p>
                <p className="card-comment">STOLEN GIRLFRIENDS CLUB</p>
                <p className="card-price">$499.00</p>
            </div>
            <div className="card">
                <div className="card-picture"></div>
                <p className="card-title">Black Night Trench</p>
                <p className="card-comment">STOLEN GIRLFRIENDS CLUB</p>
                <p className="card-price">$499.00</p>
            </div>
            <div className="card">
                <div className="card-picture"></div>
                <p className="card-title">Black Night Trench</p>
                <p className="card-comment">STOLEN GIRLFRIENDS CLUB</p>
                <p className="card-price">$499.00</p>
            </div>
            <div className="card">
                <div className="card-picture"></div>
                <p className="card-title">Black Night Trench</p>
                <p className="card-comment">STOLEN GIRLFRIENDS CLUB</p>
                <p className="card-price">$499.00</p>
            </div>
            <div className="card">
                <div className="card-picture"></div>
                <p className="card-title">Black Night Trench</p>
                <p className="card-comment">STOLEN GIRLFRIENDS CLUB</p>
                <p className="card-price">$499.00</p>
            </div>
            <div className="card">
                <div className="card-picture"></div>
                <p className="card-title">Black Night Trench</p>
                <p className="card-comment">STOLEN GIRLFRIENDS CLUB</p>
                <p className="card-price">$499.00</p>
            </div>
            <div className="card">
                <div className="card-picture"></div>
                <p className="card-title">Black Night Trench</p>
                <p className="card-comment">STOLEN GIRLFRIENDS CLUB</p>
                <p className="card-price">$499.00</p>
            </div>
            <div className="card">
                <div className="card-picture"></div>
                <p className="card-title">Black Night Trench</p>
                <p className="card-comment">STOLEN GIRLFRIENDS CLUB</p>
                <p className="card-price">$499.00</p>
            </div>
            <div className="card">
                <div className="card-picture"></div>
                <p className="card-title">Black Night Trench</p>
                <p className="card-comment">STOLEN GIRLFRIENDS CLUB</p>
                <p className="card-price">$499.00</p>
            </div>
        </div>
    </div>
    <div className="gif"></div>
    <div className="sponsors">
        <div className="sponsor">MARLE</div>
        <div className="sponsor" style={{fontSize:'1.5rem'}}>ASSEMBLY LABEL</div>
        <div className="sponsor"><span style={{fontWeight:'900',fontSize:'5rem'}}>C&M</span><br/>CAMILLA AND MARC</div>
        <div className="sponsor">REMAIN</div>
        <div className="sponsor">STOLEN <br/> GIRLFRIENDS <br/> CLUB</div>
        <div className="sponsor">COMMONERS</div>
        <div className="sponsor" style={{fontWeight: 900}}>twenty-seven <br/> names</div>
        <div className="sponsor">Caitlin Crisp</div>
        <div className="sponsor" style={{fontWeight:'900',fontSize: '4rem'}}>BLAK</div>
        <div className="sponsor" style={{fontWeight:'900',fontSize: '4rem'}}>SABEN</div>
    </div>
    <div className="introduction">
        <div className="introduction-text">
            <h2>Homegrown</h2>
            <p>We love all of our beautiful brands here at Hebe but there is a special place in our heart for the New
                Zealand brands. We have made it easy for you to find a little about each of these amazing brands. Head
                over to our Homegrown page where we give you a little insight into what makes each of these brands so
                special.</p>
            <button>Find out more</button>
        </div>
        <div className="introduction-picture"></div>
    </div>
    <div className="product-information">
        <div className="card">
            <div className="card-img"
                style={{backgroundImage:`url('https://www.fotografindir.net/wp-content/uploads/2022/04/guzel-kadin-resimleri.jpg')`}}>
            </div>
            <div className="card-box">
                <div className="card-text">New Arrivals</div>
            </div>
        </div>
        <div className="card">
            <div className="card-img"
                style={{backgroundImage: `url('https://i0.wp.com/antalyatv.com/wp-content/uploads/2022/03/Guzel-Kadin-Resmi-En-Guzel-Bayanlar-1.jpg?fit=879%2C853&ssl=1')`}}>
            </div>
            <div className="card-box">
                <div className="card-text">Pre-Order</div>
            </div>
        </div>
        <div className="card">
            <div className="card-img"
                style={{backgroundImage: `url('https://p0.piqsels.com/preview/19/1006/481/beautiful-woman-black-t-shirt-blonde-grass-wall.jpg')`}}>
            </div>
            <div className="card-box">
                <div className="card-text">Sale</div>
            </div>
        </div>
    </div>
    <footer>© 2022 Hebe Designer Boutique</footer>
    </Fragment>

    
  )
}

export default HomePage