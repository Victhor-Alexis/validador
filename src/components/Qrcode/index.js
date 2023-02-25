import React, { useEffect, useRef } from 'react'
import QRCode from 'qrcode';

const Qrcode = ({ text }) => {

    const canvasRef = useRef();

    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, text, {width: 320}, (e) => console.log(e));
    }, [text])
    

    return (
        <div>
            <canvas ref={canvasRef} id="canvas">

            </canvas>
        </div>
    )
}

export default Qrcode