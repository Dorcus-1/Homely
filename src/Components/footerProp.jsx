import React from 'react'
import Footer from './Footer'

function FooterProp() {

    const myFooter=[
        {
            head:'Property',
            first:'Learning Modules',
            sec:'Partnership',
            third:'Watch demo',
            four:'Events'
        },
        {
            head:'About',
            first:'Our Company',
            sec:'Career',
            third:'Investors Relation',
            four:'Social Impact'
        },
        {
            head:'Resources',
            first:'Contact',
            sec:'Give feedback',
            third:'System status',
            four:'Privacy Policy'
        }
    ]

  return (
    <Footer myFooter={myFooter}></Footer>
  )
}

export default FooterProp