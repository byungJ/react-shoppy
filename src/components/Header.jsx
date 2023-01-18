import React from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr'
import { BsFillPencilFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

export default function Header() {
    return (
        <header>
            <Link to='/'>
                <img src='/eggpotato.jpg' width='70'/>
                EggPotato
            </Link>
            <Link to='/products'>
                Products
            </Link>
            <Link to='/carts'>
                <GrCart/>
            </Link>
            <Link>
                <BsFillPencilFill/>
            </Link>
            <Link>
                <CgProfile/>
            </Link>
            <button>
                Login
            </button>
        </header>
    );
}

