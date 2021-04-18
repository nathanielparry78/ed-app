// import { useEffect, useState } from 'react'
// import ndjsonParser from "ndjson-parse"


// export default function Log () {
//   useEffect(() => {
//     const getLog = async () => {
//       fetch('/public/Journal.210414220818.01.txt')
//         .then(res => res.text())
//         .then(string => ndjsonParser(string))
//         .then(blob => console.log(blob))
//     }

//     getLog()
//   }, [])


//   return (
//     <div></div>
//   )
// }