import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AdminSubMenu({ data, isWidth }) {
    const [openSubMenus, setOpenSubMenus] = useState({})

    const handleSubMenuToggle = (id) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    return (
        <div className='mt-5 px-5 text-lightSkyBlue'>
            {
                isWidth && (
                    <div>
                        <ul className='flex flex-col gap-2.5'>
                            {
                                data.map(item => (
                                    <li key={item.id}>
                                        <span
                                            onClick={() => handleSubMenuToggle(item.id)}
                                            className="cursor-pointer text-xl font-medium"
                                        >
                                            {item.title}
                                        </span>
                                        {openSubMenus[item.id] && (
                                            <ul className='w-full px-3 mt-1.5 flex flex-col gap-1.5'>
                                                {item.subMenu.map(subItem => (
                                                    <li
                                                        key={subItem.id}
                                                    >
                                                        <Link
                                                            to={subItem.link}
                                                            className='text-base text-gray-300'
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default AdminSubMenu