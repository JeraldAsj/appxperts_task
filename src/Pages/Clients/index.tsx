import React, { useEffect, useState } from 'react'
import SideBar from '../../layout/SideBar'
import Clientscomponent from '../../Components/Clients'
import { AddClient } from '../../Components/Overlay'
import { SERVERURL } from '../../lib/Constants/Constants'
import axios from 'axios'
import { getToken } from '../../lib/helpers'

type Props = {}

const Clients = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [showErr, setShowErr] = useState(false)
  const [socialData, setsocialData] = useState([
    {
        "OrgId": 1,
        "SocialMediaId": "SM0001",
        "SocialMediaName": "FACEBOOK",
        "DisplayOrder": 1,
        "IsActive": true,
        "CreatedBy": "ADMIN",
        "CreatedOn": "2022-12-24T00:00:00",
        "ChangedBy": "admin",
        "ChangedOn": "2023-01-07T19:23:04.627",
        "UserName": "",
        "Password": "",
        checked:false,
    },
    {
        "OrgId": 1,
        "SocialMediaId": "SM0002",
        "SocialMediaName": "INSTAGRAM",
        "DisplayOrder": 1,
        "IsActive": true,
        "CreatedBy": "ADMIN",
        "CreatedOn": "2022-12-24T00:00:00",
        "ChangedBy": "admin",
        "ChangedOn": "2022-12-24T00:00:00", "UserName": "",
        "Password": "",
        checked:false,
    },
    {
        "OrgId": 1,
        "SocialMediaId": "SM0003",
        "SocialMediaName": "LINKEDIN",
        "DisplayOrder": 1,
        "IsActive": true,
        "CreatedBy": "ADMIN",
        "CreatedOn": "2022-12-24T00:00:00",
        "ChangedBy": "admin",
        "ChangedOn": "2022-12-24T00:00:00",
        "UserName": "",
        "Password": "",
        checked:false,
    },
    {
        "OrgId": 1,
        "SocialMediaId": "SM0005",
        "SocialMediaName": "Test Media",
        "DisplayOrder": null,
        "IsActive": true,
        "CreatedBy": "admin",
        "CreatedOn": "2023-01-18T14:28:04.667",
        "ChangedBy": "admin",
        "ChangedOn": "2023-01-18T14:28:04.667", "UserName": "",
        "Password": "",
        checked:false,
    },
    {
        "OrgId": 1,
        "SocialMediaId": "SM0004",
        "SocialMediaName": "TWITTER",
        "DisplayOrder": 1,
        "IsActive": true,
        "CreatedBy": "admin",
        "CreatedOn": "2023-01-07T17:49:06.003",
        "ChangedBy": "admin",
        "ChangedOn": "2023-01-07T17:49:06.003", "UserName": "",
        "Password": "",
        checked:false,
    }
])
  const [initialData, setInitialData] = useState({
    ClientName:'',
    MobileNo:'',
    EmailId:'',
    PostalCode:'',
    ContactPerson:'',
    ContactNo:'',
    Password:'',
  })

  const [clientDatas, setClientDatas] = useState([])
const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjg1NTMxNzM3LCJleHAiOjE2ODU1NDk3MzcsImlhdCI6MTY4NTUzMTczN30.dyNmXkv4Uuk1dsvg5FcJbTdMsuXajx1n1c0fUkR_8rs')
const [fillterClientDatas,setFillterClientDatas]=useState([
  {
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
      "ClientSocialMediaList": null
  },
  {
      "OrgId": 1,
      "ClientId": "CL0001",
      "ClientName": "Test Client",
      "AddressLine1": null,
      "AddressLine2": null,
      "AddressLine3": null,
      "Country": "India",
      "PostalCode": "123456",
      "MobileNo": "9788770094",
      "FaxNo": null,
      "EmailId": "test@gmail.com",
      "PaymentTerm": null,
      "Currency": "C1",
      "TaxCode": 1,
      "TaxType": "I",
      "TaxPerc": 10.00,
      "ContactPerson": null,
      "ContactNo": null,
      "IsActive": true,
      "CreatedBy": "admin",
      "CreatedOn": "2023-02-07T19:17:06.007",
      "ChangedBy": "admin",
      "ChangedOn": "2023-02-07T19:17:06.007",
      "Password": "123456",
      "ClientSocialMediaList": null
  }
])

const clientAdd= async(item:any)=>{
console.log(item,'item');
let social=socialData?.filter((social:any)=>social.checked)
console.log(social,'social');
let emptysocial=social?.filter((social:any)=>!social.UserName||!social.Password)
console.log(emptysocial,'emptysocial');



if(emptysocial?.length>0){
setShowErr(true)
}else{
  setShowErr(false)
  let params={
    ...item,
    OrgId: 1,
    ClientId: "",
    AddressLine1: "AddressLine1",
    AddressLine2: "AddressLine2",
    AddressLine3: "AddressLine3",
    Country: "India",
    FaxNo: "FaxNo",
    PaymentTerm: "cash",
    Currency: "INR",
    TaxCode: 1,
    TaxType: "E",
    TaxPerc: 5,
    IsActive: true,
    CreatedBy: "admin",
    CreatedOn: "2023-02-07T11:20:17.494Z",
    ChangedBy: "admin",
    ChangedOn: "2023-02-07T11:20:17.494Z",
    ClientSocialMediaList:social
  }
 await axios
     .post(`${SERVERURL}api/ClientMaster/Create`,params,{
      headers: {
        'Authorization': `Bearer ${token}`
      }})
     .then((response: any) => {
       console.log(response, "token");
       
       
     
     });

}



}

  const selectSocial =(tag:any,item:any,event:any)=>{
  let findData=socialData?.find((socila:any)=>socila.SocialMediaId==item.SocialMediaId)
console.log(findData,'findData');

if(tag=='check'){
  console.log(event.target.checked,'event');
  let isTrue =event.target.checked
  // if(event.target.checked){
    let newarray=socialData?.map((social:any)=>{
      if(social.SocialMediaId==item.SocialMediaId){
        return{
          ...social,
          checked:isTrue,
          UserName:isTrue?social.UserName: "",
        Password: isTrue?social.Password: ""
        }
      }else{
        return social
      }
    })
    console.log(newarray,'newarray');
    
setsocialData(newarray)

  // }else{

  // }
}else{
  if(findData?.checked){
let name=event.target.name
let value=event.target.value
let newarray=socialData?.map((social:any)=>{
  if(social.SocialMediaId==item.SocialMediaId){
return {
  ...social,
  [name]:value
}
  }else return social
})
setsocialData(newarray)


console.log(newarray,'newarray11');



  }
}
  }

  
   const getAllSocialDatas= async()=>{
       await axios
           .get(`${SERVERURL}api/SocialMediaList/GetAll?OrganizationId=1`, {
             headers: {
               'Authorization': `Bearer ${token}`
             }} )
           .then((response: any) => {
             console.log(response.data.data, "login");
             let data=response.data.data
           });
   
          
   
     }
   const getAllClientDatas= async()=>{
       await axios
           .get(`${SERVERURL}api/ClientMaster/GetAll?OrganizationId=1`, {
             headers: {
               'Authorization': `Bearer ${token}`
             }} )
           .then((response: any) => {
             console.log(response.data.data, "login");
             let data=response.data.data
           });
   
          /*  fetch(`${SERVERURL}api/ClientMaster/GetAll?OrganizationId=1`, {
             method: 'GET',
             headers: {
               'Authorization': `Bearer ${token}`
             }
           })
             .then(response => {
               if (response.ok) {
                 return response.json();
               } else {
                 throw new Error('Request failed');
               }
             })
             .then(data => {
               // Handle the response data
               console.log(data);
             })
             .catch(error => {
               // Handle the error
               console.error(error);
             }); */
   
     }
   
   useEffect(() => {
    let tokenRespons= getToken()
   }, [])
   useEffect(() => {
     
    /* token&& */ getAllClientDatas()
    token&& getAllSocialDatas()
   }, [token])



  





  return (
    <div className="h-screen z-0   lg:flex-row bg-white overflow-hidden grid grid-cols-12">
      <div className=' col-span-12 lg:col-span-1'>
      <SideBar/>
      </div>
      <div className='col-span-12 lg:col-span-11 lg:pr-14 px-5 - lg:py-10'>
        <div className=' flex justify-between items-center pb-5'>
          <h2 className=' text-gray-800 text-xl font-bold'>Client</h2>
          <button className=' bg-pink-600 text-white' onClick={()=>setOpen(true)}>Add Client</button>
        </div>
      <Clientscomponent fillterClientDatas={fillterClientDatas}/>
      </div>
      
        <AddClient setOpen={setOpen} open={open} initialData={initialData} clientAdd={clientAdd} socialData={socialData} selectSocial={selectSocial} showErr={showErr}/>
        </div>
  )
}

export default Clients