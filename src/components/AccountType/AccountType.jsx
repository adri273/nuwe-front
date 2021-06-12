import React from 'react'
import './AccountType.css'

function AccountType({icon, title, desc, link}) {
    return (
        <div className="accountType">        {/*TODO LINK */}
            <div className="accountType--icon">
                <img src={`icons/bg-${icon}.png`} alt={title} />
                <img src={`icons/icon-${icon}.png`} alt={title} />
            </div>
            <div className="accountType--content">
                <b>{title}</b>
                <p>{desc}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#4E934A" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"/></svg>
        </div>
    )
}

export default AccountType
