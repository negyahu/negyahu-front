import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { FiHelpCircle } from 'react-icons/fi'
import { BsExclamationCircleFill } from 'react-icons/bs'

import ArtistList from './ArtistList';
import '../../scss/Main.scss';
import { HelpCenter, HelpToggle } from '../Common/Components';
import { getFAQ } from '../../../api/faq';
import BackgroundBlur from '../Common/Background';
import ApplyAgency from '../Common/ApplyAgency';



function Main() {
    const data = getFAQ()
    
    const [open, setOpen] = useState(false)
    const [application, setApplication] = useState(false)
    const openHelpCenter = () => {
        setOpen(!open)
    }
    const openApplyForAgency = () => {
        setApplication(!application)
        setOpen(!open)
    }

    return (
        <>
            <ArtistList />
            <HelpToggle onClick={openHelpCenter} open={open}>
                {
                    open ? <BsExclamationCircleFill /> : <FiHelpCircle />
                }
            </HelpToggle>
            {
                open && 
                <HelpCenter open={open}>
                    <h2>Fantimate HelpCenter</h2>
                    {
                        data.map(faq => {
                            return (
                                <>
                                    <button className="faqTitle">{faq.title}</button>
                                    <p className="faqContent">{faq.content}<br />
                                    {
                                        faq.link && 
                                        <button className="linkButton" onClick={openApplyForAgency}>이 링크를 클릭</button>
                                    }
                                    </p>
                                </>
                            )
                        })
                    }
                </HelpCenter>
            }
            {
                application && <ApplyAgency />
            }
        </>
    )
}


export default withRouter(Main);