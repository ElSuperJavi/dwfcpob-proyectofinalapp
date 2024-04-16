import {SliderInicio} from './SliderInicio'
import {Categoria} from './Categoria'
import {OfertasRapidas} from '../../components/ofertasrapidas/OfertasRapidas'
import {CategoriaTop} from '../../components/categoriatop/CategoriaTop'
import {Delivery} from '../../components/delivery/Delivery'
import '../../components/layout/Layout.css'
import "./Inicio.css"

export const Inicio=()=>{
    return(
        <>
        <section className='home'>
            <div className='container d_flex'>
                {/* <Categoria/> */}
                <SliderInicio/>
            </div>
        </section>
        <OfertasRapidas/>
        <CategoriaTop/>
        <Delivery/>
        </>
    )
}