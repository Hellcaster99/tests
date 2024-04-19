import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { useNavigate } from 'react-router-dom'


var ls = [];
for(let i=1;i<=100;i++){
  ls.push({
    text: i,
    value: i
  })
}

const Data = () => {

  const navigate = useNavigate();

  const user = useSelector((state)=>state.user)
  const data = useSelector((state)=>state.data)

  const pagination = {
    total: data.length,
    pageSize: 6
  }

  

  const columns = [
    {
      title:'Pincode',
      dataIndex:'pincode',
    },
    {
      title:'District Name',
      dataIndex:'district',
      
    },
    {
      title:'Name',
      dataIndex:'centerName',
      
    },
    {
      title:'Fee Type',
      dataIndex:'feeType',
      
    },
    {
      title:'State Name',
      dataIndex:'stateName',
      filters: ls,
      onFilter: (value,record) => record.stateName.includes(value)
    },
    {
      title:'Vaccine',
      dataIndex:'vaccineName',
      filters: ls,
      onFilter: (value,record) => record.vaccineName.includes(value)
    },
    {
      title:'Age Limit',
      dataIndex:'ageLimit',
      sorter: (a,b) => a.ageLimit - b.ageLimit,
    },
    {
      title:'Slots',
      dataIndex:'slot',
      sorter: (a,b) => a.slot - b.slot,
    }
  ]

  return (
    <div className='dataContainer'>
      <div className='userContainer'>
        <div className='userDetails'>
          <h2>{user.fname}</h2>
          <h2>{user.lname}</h2>
          <span>,</span>
          <h4>{user.pincode}</h4>
        </div>
        <div className='logoContainer'>
          <img src="/images/logo.png" alt="Logo"/>
        </div>
      </div>
      <div className='tableContainer'>
        <Table dataSource={data} columns={columns} pagination={pagination} className='table'/>
      </div>
      <form className='btnContainer'>
        <button onClick={()=>navigate('/')}>Go Back</button>
        <button type='submit'>Update Data</button>
      </form>
    </div>
  )
}

export default Data