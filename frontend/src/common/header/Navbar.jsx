import {Helmet} from 'react-helmet'
import {nombre_tienda} from '../../components/constants/Global'
import {Navbar1} from './Navbar1'
import {Navbar2} from './Navbar2'

export const Navbar=()=>{
    return(
        <>
        <Helmet>
            <script src="src/assets/js/navbar.js"></script>
        </Helmet>
        <Navbar1/>
        <Navbar2/>
        </>
    )
}