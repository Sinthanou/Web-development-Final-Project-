import React, { useState } from 'react'

function RegisNav() {
    const [selectedLag, setSelectedLag] = useState("");

    return (
        <>
            <header className="flex justify-between items-center bg-white py-4 px-8 shadow-md">
                <div className="text-3xl font-bold italic text-[#D34000] ">the Frame</div>
                <div className="flex space-x-6 text-sm bg-white">
                    <select
                        className='bg-white'
                        value={selectedLag}
                        onChange={(e) => setSelectedLag(e.target.value)}
                    >
                        <option className='bg-white' value="">🌐 English-USD</option>
                        <option className='bg-white' value="Laos">🌐 Laos</option>
                        <option className='bg-white' value="Thailand">🌐 Thailand</option>
                        <option className='bg-white' value="china">🌐 china</option>
                    </select>
                    <span>Help Center</span>
                    <span>Get the App</span>
                </div>
            </header>
        </>
    )
}

export default RegisNav
