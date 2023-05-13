import '../styles/index.css'
import axios from "axios";
import {useEffect} from "react";


function MyApp({ Component, pageProps }) {
  //     useEffect(() => {
  //   console.log(axios.get("https://cdn.contentful.com/spaces/rim9cv6rjfjs/environments/master/entries/14PSJgW6NisIh0uNMTML6z?")
  //       .then((r => {
  //         console.log(r)
  //       })))
  // })
  // console.log("esss")

  return <Component {...pageProps} />
}

export default MyApp
