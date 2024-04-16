import React from 'react'
import { createClient } from '@/prismicio';

import Navbar from '../app/Navbar';

const Header = async () => {
    const client = createClient();
    const settings = await client.getSingle('settings');
    return (
        <header className="relative inset-x-0 top-0 z-50">
            <Navbar settings={settings} />
        </header>
    )
}

export default Header