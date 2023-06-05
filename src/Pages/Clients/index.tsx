import React, { useEffect, useState } from "react";
import SideBar from "../../layout/SideBar";
import Clientscomponent from "../../Components/Clients";
import { AddClient } from "../../Components/Overlay";
import { SERVERURL } from "../../lib/Constants/Constants";
import axios from "axios";

type Props = {};

const Clients = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [socialData, setsocialData] = useState([]);
  const [initialData, setInitialData] = useState({
    ClientName: "",
    MobileNo: "",
    EmailId: "",
    PostalCode: "",
    ContactPerson: "",
    ContactNo: "",
    Password: "",
  });

  const [clientDatas, setClientDatas] = useState([]);
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjg1OTQ2MjY3LCJleHAiOjE2ODU5NjQyNjcsImlhdCI6MTY4NTk0NjI2N30.0jJggCdaQcuVdfgfhbgH6TvFzcdcpBhrHWvS_Xd6L8aHgmrYIquQcI"
  );
  const [fillterClientDatas, setFillterClientDatas] = useState([]);

  // this function is used to add new client
  const clientAdd = async (item: any) => {
    let social = socialData?.filter((social: any) => social.checked);
    let emptysocial = social?.filter(
      (social: any) => !social.UserName || !social.Password
    );

    if (emptysocial?.length > 0) {
      setShowErr(true);
    } else {
      setShowErr(false);
      let params = {
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
        ClientSocialMediaList: social,
      };
      await axios
        .post(`${SERVERURL}api/ClientMaster/Create`, params, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response: any) => {
          getAllClientDatas();
          setOpen(false);
        })
        .catch((err: any) => {
          if (err.response.status) {
            getToken();
          }
        });
    }
  };

  // this function is used to select social media account
  const selectSocial = (tag: any, item: any, event: any) => {
    let findData: any = socialData?.find(
      (socila: any) => socila.SocialMediaId == item.SocialMediaId
    );

    if (tag == "check") {
      let isTrue = event.target.checked;
      // if(event.target.checked){
      let newarray: any = socialData?.map((social: any) => {
        if (social.SocialMediaId == item.SocialMediaId) {
          return {
            ...social,
            checked: isTrue,
            UserName: isTrue ? social.UserName : "",
            Password: isTrue ? social.Password : "",
          };
        } else {
          return social;
        }
      });

      setsocialData(newarray);
    } else {
      if (findData?.checked) {
        let name = event.target.name;
        let value = event.target.value;
        let newarray: any = socialData?.map((social: any) => {
          if (social.SocialMediaId == item.SocialMediaId) {
            return {
              ...social,
              [name]: value,
            };
          } else return social;
        });
        setsocialData(newarray);
      }
    }
  };

  // this function is used to get all social media datas
  const getAllSocialDatas = async () => {
    await axios
      .get(`${SERVERURL}api/SocialMediaList/GetAll?OrganizationId=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        let data = response.data.Data?.map((item: any) => {
          return {
            ...item,
            UserName: "",
            Password: "",
            checked: false,
          };
        });
        setsocialData(data);
      })
      .catch((err: any) => {
        if (err.response.status) {
          getToken();
        }
      });
  };

  // this function is used to get all clents datas
  const getAllClientDatas = async () => {
    await axios
      .get(`${SERVERURL}api/ClientMaster/GetAll?OrganizationId=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        setFillterClientDatas(response.data.Data);
      })
      .catch((err: any) => {
        if (err.response.status) {
          getToken();
        }
      });
  };

  // this function is used to get token
  const getToken = async () => {
    await axios
      .post(`${SERVERURL}api/Token/GenerateToken`, {
        Username: "admin",
        Password: "admin54321",
      })
      .then(async (response: any) => {
        let token = response.data.Jwt_Token;
        setToken(token);
      });
  };

  useEffect(() => {
    getToken();
  }, []);
  useEffect(() => {
    token && getAllClientDatas();
    token && getAllSocialDatas();
  }, [token]);

  return (
    <div className="h-screen z-0   lg:flex-row bg-white overflow-hidden grid grid-cols-12">
      <div className=" col-span-12 lg:col-span-1">
        <SideBar />
      </div>
      <div className="col-span-12 lg:col-span-11 lg:pr-14 px-5 - lg:py-10">
        <div className=" flex justify-between items-center pb-5">
          <h2 className=" text-gray-800 text-xl font-bold">Client</h2>
          <button
            className=" bg-pink-600 text-white"
            onClick={() => setOpen(true)}
          >
            Add Client
          </button>
        </div>
        <Clientscomponent fillterClientDatas={fillterClientDatas} />
      </div>

      <AddClient
        setOpen={setOpen}
        open={open}
        initialData={initialData}
        clientAdd={clientAdd}
        socialData={socialData}
        selectSocial={selectSocial}
        showErr={showErr}
      />
    </div>
  );
};

export default Clients;
