import React, { useState } from 'react';

const About = () => {
    const [pValue, setPvalue] = useState(0);
    const [qValue, setQvalue] = useState(0);
    const [eValue, setEvalue] = useState(0);
    const [cipher, setCipher] = useState(0);
    
    const handleSubmitBtn = (event) => {
        event.preventDefault();
        const form = event.target;
        const pvalue = form.pvalue.value;
        const qvalue = form.qvalue.value;
        const pNumber = parseInt(pvalue);
        const qNumber = parseInt(qvalue);
        setPvalue(pNumber);
        setQvalue(qNumber);

    }
    const nValue = pValue * qValue;
    const qnValue = (pValue-1) * (qValue-1);
    const dValue = ((1/eValue)%qnValue).toFixed(2)
    const calculateE = (event) => {
            event.preventDefault();
            const form = event.target;
            const evalue = parseInt(form.evalue.value);
            const gcd = gcd_two_numbers(qnValue, evalue);
            if(gcd === 1){
                setEvalue(evalue);
            }
            else{
                alert("have to be gcd 1")
                
            }

    }
    function gcd_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
          return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          var t = y;
          y = x % y;
          x = t;
        }
        return x;
      }

      const calculateCipher = (event) => {
        event.preventDefault();
        const form = event.target;
        const mvalue = parseInt(form.mvalue.value);
        const c = (Math.pow(mvalue, eValue)%nValue);
        setCipher(c);
      }
    return (
        <div>
            <h1 className='text-red-400 text-4xl font-semibold'>Key Generator</h1>
            <form onSubmit={handleSubmitBtn}>
                <div className='mt-5'>
                    <h1>Input the value of p :</h1>
                    <input className='h-8 p-2 rounded-lg' type="text" name='pvalue' placeholder='enter the value of p..'/>
                </div>
                <div className='mt-5'>
                    <h1>Input the value of q :</h1>
                    <input className='h-8 p-2 rounded-lg' type="text" name='qvalue' placeholder='enter the value of q..'/>
                </div>
                <div className='mt-5'>
                    <input className='btn btn-danger' type="submit" />
                </div>
            </form>

            <h1>The p value is : {pValue}</h1>
            <h1>The Q value is : {qValue}</h1>
            <h1>The value of N is : {nValue}</h1>
            <h1>The value of pi(N) is :{qnValue} </h1>
            <form onSubmit={calculateE} className='mt-5'>
                <h1>Value of E: </h1>
                <input name='evalue' className='h-8 p-4 py-5 rounded-lg' type="text" placeholder={`value between 1 to ${qnValue}`} />
                <input className='btn btn-danger' type="submit" />
            </form>
            <h1>E value is : {eValue}</h1>
            <h1>The value of D is : {dValue}</h1>
            <h1>The Public Key , PU = {`{${eValue}, ${nValue}}`}</h1>
            <h1>The Priavte Key , PR = {`{${dValue}, ${nValue}}`}</h1>
            <h1 className='text-red-400 mt-5 mb-2 text-2xl font-semibold'>Cipher number : </h1>
            <form onSubmit={calculateCipher}>
                <input className='h-8 p-4 py-5 rounded-lg' type="text" placeholder='enter  a plain number' name='mvalue' />
                <input className='btn btn-danger' type="submit" />
            </form>

            <h1>{cipher}</h1>
        </div>
    );
};

export default About;