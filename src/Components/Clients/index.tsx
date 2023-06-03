import React, { useEffect, useState } from 'react'
import { SERVERURL, TABLE_CUSTOM_STYLING } from '../../lib/Constants/Constants'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import dayjs from 'dayjs'
import { ViewClient } from '../Overlay'
import { EyeIcon } from '@heroicons/react/20/solid'
import { getToken } from '../../lib/helpers'

type ClientscomponentProps = {fillterClientDatas:any}

const Clientscomponent:React.FC<ClientscomponentProps> = ({fillterClientDatas}) => {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState({
    "OrgId": 1,
    "ClientId": "CL0002",
    "ClientName": "Sheik",
    "AddressLine1": "string",
    "AddressLine2": "string",
    "AddressLine3": "string",
    "Country": "India",
    "PostalCode": "string",
    "MobileNo": "9788770094",
    "FaxNo": "string",
    "EmailId": "axsafi.itsolution@gmail.com",
    "PaymentTerm": "string",
    "Currency": "INR",
    "TaxCode": 1,
    "TaxType": "E",
    "TaxPerc": 5.00,
    "ContactPerson": "string",
    "ContactNo": "string",
    "IsActive": true,
    "CreatedBy": "admin",
    "CreatedOn": "2023-02-07T19:23:29.06",
    "ChangedBy": "admin",
    "ChangedOn": "2023-02-07T19:23:29.06",
    "Password": "A123456$",
    "ClientSocialMediaList": [
        {
            "OrgId": 1,
            "ClientId": "CL0002",
            "SlNo": 1,
            "SocialMediaId": "S1001",
            "SocialMediaName": "Facebook",
            "SocialMediaLink": "linkoffacebook",
            "UserName": "username",
            "Password": "password",
            "CreatedBy": "admin",
            "CreatedOn": "2023-02-07T19:23:29.147"
        }
    ]
})
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjg1NDcxNTgyLCJleHAiOjE2ODU0ODk1ODIsImlhdCI6MTY4NTQ3MTU4Mn0.JjOMbWUyu8nysRq6xfiS_twrZIu0cF8SLKd8Gjz8DyI')

const singleGet= async(item:any)=>{
  setOpen(true)
  await axios
  .get(`${SERVERURL}api/SocialMediaList/Getbycode?OrganizationId=1&ClientId=${item.ClientId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }} )
  .then((response: any) => {
    console.log(response.data.data, "login");
    let data=response.data.data
  });
}

const columns: any = [
  {
    name: "Client Id",
    selector: (row: any) => row.ClientId,
    sortable: true,
  },
  {
    name: "Client Name",
    selector: (row: any) => row.ClientName,
  },
  {
    name: "Country",
    selector: (row: any) => row.Country,
  },
  {
    name: "Mobile No",
    selector: (row: any) => row.MobileNo,
  },

  {
    name: "Email",
    selector: (row: any) => row.EmailId,
  },
  {
    name: "Postal Code",
    selector: (row: any) => row.PostalCode,
  },
  {
    name: "Action",
    center: true,
    selector: (row: any) => {
      return (
        <div onClick={() =>singleGet(row) }>
          <EyeIcon height={20} width={20} color="#db2777" />
        </div>
      );
    },
  },
];

useEffect(() => {
  let tokenRespons= getToken()
 }, [])



  return (
     <>
      <DataTable
        columns={columns}
        data={fillterClientDatas}
        customStyles={TABLE_CUSTOM_STYLING}
      
        pagination
        noDataComponent={
          <>
          <h6 className="text-xl font-semibold text-gray-700">
          Client data Not Avaliable
          </h6>
         
          </>
        }
      />
      <ViewClient setOpen={setOpen} open={open} items={items} />
    </>
  )
}

export default Clientscomponent