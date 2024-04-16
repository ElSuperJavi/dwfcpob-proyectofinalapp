import logo from '../../assets/img/principal/logo.png'
import {Link} from "react-router-dom"

export const Search=()=>{
    // const myImageStyle={ width: '55px', height: 'auto' };
    // fixed Header
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY>100)
    })
    
  return(
    <>
    <section className='search'>
        <div className='container c_flex'>
            <div className='logo width '>
                <img src={logo} alt=''/>
            </div>
            <div className='search-box f_flex'>
                <i className='fa fa-search'></i>
                <input type='text' placeholder='Busca y presiona enter...' />
                <span>Todo</span>
            </div>
            <div className='icon f_flex width'>
                {/* <i className='fa fa-user icon-circle'></i> */}
                <div className=''>
                    <Link to='/usuario'>
                        <i className='fa fa-user icon-circle'></i>
                    </Link>
                </div>
                <div className='cart'>
                    <Link to='/carrito'>
                        <i className='fa fa-shopping-bag icon-circle'></i>
                        {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}