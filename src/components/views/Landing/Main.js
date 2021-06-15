import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { FiHelpCircle } from 'react-icons/fi'
import { BsExclamationCircleFill } from 'react-icons/bs'

import ArtistList from './ArtistList';
import '../../scss/Main.scss';
import { HelpCenter, HelpToggle } from '../Common/Components';
import { getFAQ } from '../../../api/faq';
import ApplyAgency from '../Common/ApplyAgency';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { OPEN_APPLY_AGENCY, OPEN_HELP_CENTER } from '../../../_actions/openModules';



function Main() {
    const data = getFAQ()
    const openModule = useSelector(state => state.openModules.main);
    const dispatch = useDispatch();

    return (
        <>
            <ArtistList />
            <HelpToggle 
                open={openModule.help} 
                onClick={() => { dispatch({ type: OPEN_HELP_CENTER })}}
            >
                {
                    openModule.help ? <BsExclamationCircleFill /> : <FiHelpCircle />
                }
            </HelpToggle>
            {
                openModule.help && 
                <HelpCenter open={openModule.help}>
                    <h2>Fantimate HelpCenter</h2>
                    {
                        data.map(faq => {
                            return (
                                <div key={faq.id}>
                                    <button className="faqTitle">{faq.title}</button>
                                    <p className="faqContent">{faq.content}<br />
                                    {
                                        faq.link && 
                                        <button 
                                            className="linkButton"
                                            onClick={() => { dispatch({ type: OPEN_APPLY_AGENCY })}}
                                        >이 링크를 클릭</button>
                                    }
                                    </p>
                                </div>
                            )
                        })
                    }
                </HelpCenter>
            }
            {
                openModule.agency && <ApplyAgency />
            }
        </>
    )
}


export default withRouter(Main);