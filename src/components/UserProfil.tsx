import axios from 'axios';
import { useEffect, useState } from 'react';
import { getUserById } from '../secondary-adapters/services/user/user.service'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

const onichan = () => {
    axios.get('http://localhost:8080/oni-chan/user/get?id=778')
        .then(res =>{
            const user = res.data;
            console.log(user);
            return user;
        });
}

const UserProfil = () => {
    const [x, setX] = useState({
        firstname: '', 
        lastname: '',
        email: ''
    });
    
    useEffect(()=>{
        getUserById().then((value)=>{
            setX(value.response.data);
        });
    }, []);
    
    return (
        <div>
             <Box component="form" autoComplete="off">
                <div className="grid grid-row-2 gap-4 mx-64">
                    <TextField id="outlined-basic" value={x.firstname ? x.firstname : ""}/>
                    <TextField id="outlined-basic" value={x.lastname}/>
                    <TextField className='col-span-2' id="outlined-basic" value={x.email} />
                </div>
            </Box>
            
        </div>
  );
};

export default UserProfil;
