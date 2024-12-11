import React from 'react'
import {Helmet} from 'react-helmet-async'

function HelmetTittle({tittle="Messenger", discription="This is a chat app"}) {
  return <Helmet>
        <title>{tittle}</title>
        <meta discription={discription}/>
  </Helmet>
}

export default HelmetTittle