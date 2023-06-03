import axios from "axios";
import { SERVERURL } from "../Constants/Constants";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const getToken = async () => {
  await axios
    .post(
      `https://sleepy-leakey.154-26-130-251.plesk.page/api/Token/GenerateToken`,
      {
        Username: "admin",
        Password: "admin54321",
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "en-US,en",
          Connection: "keep-alive",
          "Content-Length": 59,
          Host: "154.26.130.251:127",
          Origin: "http://154.26.130.251:127",
        },
      }
    )
    .then((response: any) => {
      console.log(response, "token");
      return response;
    });
};
