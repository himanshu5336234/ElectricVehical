import { MenuItem, Select } from '@mui/material'
// import {makeStyles} from "@mui/styles"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import RemoveIcon from '@mui/icons-material/Remove';
// import { makeStyles } from '@mui/material';
import React, { useState } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";
import './Faq.scss'
import Footer from '../../components/Footer/Footer';



const Faq = () => {

    // const classes = useStyles()
    const [expanded, setExpanded] = useState("")
    const handleChange = (panel) => {
        if (expanded === "")
            setExpanded(panel)
        else
            setExpanded("")
    }
    return (
        <>
            <Topbar />
            <div className='faq-top-container'>
                <h2 className='main-head'>We're here to help.</h2>
                <p>Find answers on the most popular questions about Oben EV</p>
                <div className='acordian-container'>

                    <Select defaultValue={"purchase"} style={{marginTop: "32px", marginBottom: "32px", width: "100%", backgroundColor: "white", border: "none"}} >
                        <MenuItem value={"purchase"}>Purchase</MenuItem>
                        <MenuItem value={"oben"}>Oben</MenuItem>
                    </Select>

                    <Accordion
                        elevation={0}
                        className='accordian'
                        expanded={expanded === 'panel1'}
                        onChange={() => handleChange("panel1")}
                    >
                        <AccordionSummary
                            className='accordian-summary'
                            style={{fontWeight: "500px", fontSize: "16px"}}
                            expandIcon={expanded === "panel1" ? <RemoveIcon style={{width: "10px"}}  /> : <AddIcon style={{width: "10px"}}  />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h4>How do I purchase the Oben EV Rorr?</h4>
                        </AccordionSummary>
                        <AccordionDetails className='accordian-details'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                    elevation={0}
                        expanded={expanded === 'panel2'}
                        onChange={() => handleChange("panel2")}>
                        <AccordionSummary
                            className='accordian-summary'
                            expandIcon={expanded === "panel2" ? <RemoveIcon style={{width: "10px"}} /> : <AddIcon style={{width: "10px", scale: "1.1"}}  />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <h4>In which cities Oben EV are available.</h4>
                        </AccordionSummary>
                        <AccordionDetails className='accordian-details'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                    elevation={0}
                        expanded={expanded === 'panel3'}
                        onChange={() => handleChange("panel3")}>
                        <AccordionSummary
                            className='accordian-summary'
                            expandIcon={expanded === "panel3" ? <RemoveIcon style={{width: "10px"}}  /> : <AddIcon style={{width: "10px"}}  />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <h4>Another frequently asked question about Purchase?</h4>
                        </AccordionSummary>
                        <AccordionDetails className='accordian-details'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                    elevation={0}
                        expanded={expanded === 'panel4'}
                        onChange={() => handleChange("panel4")}>
                        <AccordionSummary
                            className='accordian-summary'
                            expandIcon={expanded === "panel4" ? <RemoveIcon style={{width: "10px"}}  /> : <AddIcon style={{width: "10px"}}  />}

                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <h4>Question about Purchase</h4>
                        </AccordionSummary>
                        <AccordionDetails className='accordian-details'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                    elevation={0}
                        expanded={expanded === 'panel5'}
                        onChange={() => handleChange("panel5")}>
                        <AccordionSummary
                            className='accordian-summary'
                            expandIcon={expanded === "panel5" ? <RemoveIcon style={{width: "10px"}} /> : <AddIcon style={{width: "10px"}} />}

                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <h4>Question about Purchase</h4>
                        </AccordionSummary>
                        <AccordionDetails className='accordian-details'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                    elevation={0}
                        expanded={expanded === 'panel6'}
                        onChange={() => handleChange("panel6")}>
                        <AccordionSummary
                            className='accordian-summary'
                            expandIcon={expanded === "panel6" ? <RemoveIcon style={{width: "10px"}} /> : <AddIcon style={{width: "10px"}}  />}

                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <h4>Question about Purchase</h4>
                        </AccordionSummary>
                        <AccordionDetails className='accordian-details'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                <div style={{marginTop: "64px"}}>Can’t find your question in the list?</div>
                <div>Let us know your questions.</div>
                <button className='contact-btn'>CONTACT US</button>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Faq