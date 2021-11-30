import React, {useState} from 'react';
import Box from '@mui/material/Box';
import s from '../components/Cart/Cart.module.css';
import Cards from 'react-credit-cards';
import TextField from '@mui/material/TextField';
import 'react-credit-cards/es/styles-compiled.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
const CardList = () => {
    const [cvc, setCvc] = useState("");
    const [expiry, setExpiry] = useState("");
    const [focus, setFocus] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");


    return (

        <>
            <div className={s.contentDiv }>
                <div className={s.content}>

                    <div className={s.formContent}>
                        <form action="">
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="filled-number"
                                    label="Card Number"
                                    type="tel"
                                    name='number'
                                    value={number}
                                    onChange={e => setNumber(e.target.value)}
                                    onFocus={e => setFocus(e.target.name)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                />
                                <TextField
                                    id="filled-text"
                                    label="Name"
                                    type="text"
                                    name='name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    onFocus={e => setFocus(e.target.name)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                />
                                <TextField
                                    id="filled-text"
                                    label="MM/YY Expiry"
                                    type="text"
                                    name='expiry'
                                    value={expiry}
                                    onChange={e => setExpiry(e.target.value)}
                                    onFocus={e => setFocus(e.target.name)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                />
                                <TextField
                                    id="filled-number"
                                    label="CVC"
                                    type="tel"
                                    name='cvc'
                                    value={cvc}
                                    onChange={e => setCvc(e.target.value)}
                                    onFocus={e => setFocus(e.target.name)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                />


                            </Box>

                        </form>

                    </div>
                    <div className={s.cardBox}>
                        <Cards
                            cvc={cvc}
                            expiry={expiry}
                            focused={focus}
                            name={name}
                            number={number}
                        />
                        <Button variant="contained" endIcon={<SendIcon />}style={{width:"50%",margin:"2% 25%"}}>
                            Submit
                        </Button>
                    </div>

                </div>
            </div>

        </>
    );
};

export default CardList;