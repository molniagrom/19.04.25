import React from "react";

export function Accordion() {
    return <div>
        <AccordionTittle/>
        <AccordionBody/>
    </div>
}

function AccordionTittle() {
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}