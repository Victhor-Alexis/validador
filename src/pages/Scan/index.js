import React, { useRef, useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Scan = () => {
    const count = useRef(0);

    return (
        <div style={{ width: "320px" }}>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        ++count.current;

                        if (count.current > 1) {
                            alert("Esse convite da inscrita "+result+" já foi lido")
                        } else {
                            alert(result)
                        }
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default Scan;
