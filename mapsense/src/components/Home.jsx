import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, updateData } from '../Redux/Redux';
import { useForm } from 'react-hook-form';
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const [disabled,setDisabled] = useState(false)

    const {register, handleSubmit, formState:{errors}} = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async data => {
        setDisabled(true);
        await fetch(`${import.meta.env.VITE_URL}?pincode=${data.pincode}`)
        .then((res)=>{
            if(res.ok){
                return res;
            }
            return null;
        })
        .then(res=>res.json())
        .then(arr=>{
            const arr2 = arr.map((item)=>{
                return {
                    ...item,
                    key: item.id
                }
            })
            dispatch(updateData(arr2))
        })
        .then(()=>dispatch(updateUser(data)))
        .then(()=>toast.success('Data fetched!'))
        .then(()=>setDisabled(false))
        .then(()=>navigate('/data'))
        .catch(()=>{
            setDisabled(false);
            toast.error('Sorry, no data for this pincode')
        })
    };
    
  return (
    <div className='homeContainer'>
        <Toaster/>
        <div className='bgContainer'>
            <div className='shade'/>
            <div className='text'>
                <h1>Vaccine Tracker</h1>
                <p>Find all the important information and all the things related to Covid Virus and Vaccine Here</p>
            </div>
        </div>
        <div className='heroContainer'>
            <div className='logoContainer'>
                <img src="/images/logo.png" alt="Logo"/>
            </div>
            <div className='formContainer'>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <div className='input-group'>
                        <label htmlFor="fname">First Name</label>
                        <p>{errors.fname?.message}</p>
                        <input {...register("fname",{required:"Enter your first name",pattern:{value: /^[a-z]*$/i,message:"Enter a valid Name"}})} type="text" placeholder={user.fname}/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="lname">Last Name</label>
                        <p>{errors.lname?.message}</p>
                        <input type="text" {...register('lname',{required:'Enter your last name',pattern:{value: /^[a-z]*$/i,message:"Enter a valid Name"}})} placeholder={user.lname}/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="pincode">Pincode</label>
                        <p>{errors.pincode?.message}</p>
                        <input type="text" {...register('pincode',{required:"Enter your pincode",pattern:{value: /^[0-9]*$/i,message:"Enter a valid Pincode"}})} placeholder='Pinocde'/>
                    </div>
                    <div className='button-group'>
                        <button type='submit' disabled={disabled}>Show Statistics</button>
                        <button type='reset' disabled={disabled}>Reset Form</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home