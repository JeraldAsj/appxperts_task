import React, { useEffect, useState } from "react";
import { SERVERURL, TABLE_CUSTOM_STYLING } from "../../lib/Constants/Constants";
import axios from "axios";
import DataTable from "react-data-table-component";
import dayjs from "dayjs";
import { ViewClient } from "../Overlay";
import { EyeIcon } from "@heroicons/react/20/solid";

type ClientscomponentProps = { fillterClientDatas: any };

const Clientscomponent: React.FC<ClientscomponentProps> = ({
  fillterClientDatas,
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState({});
  const [token, setToken] = useState();

  // this function is used to get ssingle client data
  const singleGet = async (item: any) => {
    setOpen(true);

    await axios
      .get(
        `${SERVERURL}/api/ClientMaster/Getbycode?OrganizationId=${item.OrgId}&ClientId=${item.ClientId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response: any) => {
        let data = response.data.Data?.[0];
        setItems(data);
      })
      .catch((err: any) => {
        if (err.response.status) {
          getToken();
        }
      });
  };

  // this is table columns
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
          <div onClick={() => singleGet(row)}>
            <EyeIcon height={20} width={20} color="#db2777" />
          </div>
        );
      },
    },
  ];

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
  );
};

export default Clientscomponent;
