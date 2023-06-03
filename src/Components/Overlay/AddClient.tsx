import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Formik } from "formik";
import * as Yup from "yup";

type AddClientProps = {
  setOpen: any;
  open: any;
  initialData: {
    ClientName: string;
    MobileNo: string;
    EmailId: string;
    PostalCode: string;
    ContactPerson: string;
    ContactNo: string;
    Password: string;
  };
  clientAdd: any;
  socialData: any;
  selectSocial: any;
  showErr: any;
};

const AddClient: React.FC<AddClientProps> = ({
  open,
  setOpen,
  initialData,
  clientAdd,
  socialData,
  selectSocial,
  showErr,
}) => {
  const ClientSchema = Yup.object().shape({
    ClientName: Yup.string().required("Client Name is Required"),
    MobileNo: Yup.string().required("Mobile number is Required"),
    EmailId: Yup.string()
      .email("Invalid email")
      .required("Email id is Required"),
    PostalCode: Yup.string().required("Postal Code is Required"),
    ContactPerson: Yup.string().required("Contact Person name is Required"),
    ContactNo: Yup.string().required("Contact Person number is Required"),
    Password: Yup.string().required("Password is Required"),
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                  <div className="flex h-screen flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Add Client
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 "
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <Formik
                        initialValues={initialData}
                        onSubmit={(values) => clientAdd(values)}
                        validationSchema={ClientSchema}
                        enableReinitialize={true}
                      >
                        {({
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          values,
                          touched,
                          isValid,
                          errors,
                          setErrors,
                        }) => (
                          <div className="grid grid-cols-12 gap-5">
                            <div className=" col-span-6">
                              <label className=" text-sm text-gray-800 font-semibold">
                                Client Name
                              </label>
                              <input
                                id="ClientName"
                                name="ClientName"
                                type="ClientName"
                                autoComplete="ClientName"
                                onChange={handleChange("ClientName")}
                                onBlur={handleBlur("ClientName")}
                                className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"
                              />

                              {errors.ClientName && touched.ClientName && (
                                <p
                                  className="mt-1 leading-6 font-medium font-poppins
                              text-left text-sm text-red-400 max-w-xs"
                                >
                                  {errors.ClientName}
                                </p>
                              )}
                            </div>
                            <div className=" col-span-6">
                              <label className=" text-sm text-gray-800 font-semibold">
                                Mobile
                              </label>
                              <input
                                id="MobileNo"
                                name="MobileNo"
                                type="MobileNo"
                                autoComplete="MobileNo"
                                onChange={handleChange("MobileNo")}
                                onBlur={handleBlur("MobileNo")}
                                className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"
                              />

                              {errors.MobileNo && touched.MobileNo && (
                                <p
                                  className="mt-1 leading-6 font-medium font-poppins
                              text-left text-sm text-red-400 max-w-xs"
                                >
                                  {errors.MobileNo}
                                </p>
                              )}
                            </div>
                            <div className=" col-span-6">
                              <label className=" text-sm text-gray-800 font-semibold">
                                Email
                              </label>
                              <input
                                id="EmailId"
                                name="EmailId"
                                type="EmailId"
                                autoComplete="EmailId"
                                onChange={handleChange("EmailId")}
                                onBlur={handleBlur("EmailId")}
                                className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"
                              />

                              {errors.EmailId && touched.EmailId && (
                                <p
                                  className="mt-1 leading-6 font-medium font-poppins
                              text-left text-sm text-red-400 max-w-xs"
                                >
                                  {errors.EmailId}
                                </p>
                              )}
                            </div>
                            <div className=" col-span-6">
                              <label className=" text-sm text-gray-800 font-semibold">
                                Postal Code
                              </label>
                              <input
                                id="PostalCode"
                                name="PostalCode"
                                type="PostalCode"
                                autoComplete="PostalCode"
                                onChange={handleChange("PostalCode")}
                                onBlur={handleBlur("PostalCode")}
                                className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"
                              />

                              {errors.PostalCode && touched.PostalCode && (
                                <p
                                  className="mt-1 leading-6 font-medium font-poppins
                              text-left text-sm text-red-400 max-w-xs"
                                >
                                  {errors.PostalCode}
                                </p>
                              )}
                            </div>
                            <div className=" col-span-6">
                              <label className=" text-sm text-gray-800 font-semibold">
                                Contact Person
                              </label>
                              <input
                                id="ContactPerson"
                                name="ContactPerson"
                                type="ContactPerson"
                                autoComplete="ContactPerson"
                                onChange={handleChange("ContactPerson")}
                                onBlur={handleBlur("ContactPerson")}
                                className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"
                              />

                              {errors.ContactPerson &&
                                touched.ContactPerson && (
                                  <p
                                    className="mt-1 leading-6 font-medium font-poppins
                              text-left text-sm text-red-400 max-w-xs"
                                  >
                                    {errors.ContactPerson}
                                  </p>
                                )}
                            </div>
                            <div className=" col-span-6">
                              <label className=" text-sm text-gray-800 font-semibold">
                                Contact Person Number
                              </label>
                              <input
                                id="ContactNo"
                                name="ContactNo"
                                type="ContactNo"
                                autoComplete="ContactNo"
                                onChange={handleChange("ContactNo")}
                                onBlur={handleBlur("ContactNo")}
                                className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"
                              />

                              {errors.ContactNo && touched.ContactNo && (
                                <p
                                  className="mt-1 leading-6 font-medium font-poppins
                              text-left text-sm text-red-400 max-w-xs"
                                >
                                  {errors.ContactNo}
                                </p>
                              )}
                            </div>
                            <div className=" col-span-6">
                              <label className=" text-sm text-gray-800 font-semibold">
                                Password
                              </label>
                              <input
                                id="Password"
                                name="Password"
                                type="Password"
                                autoComplete="Password"
                                onChange={handleChange("Password")}
                                onBlur={handleBlur("Password")}
                                className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"
                              />

                              {errors.Password && touched.Password && (
                                <p
                                  className="mt-1 leading-6 font-medium font-poppins
                              text-left text-sm text-red-400 max-w-xs"
                                >
                                  {errors.Password}
                                </p>
                              )}
                            </div>
                            <div className=" col-span-6"></div>
                            <div className=" col-span-12">
                              <p className=" text-base text-gray-800 font-semibold">
                                {"Social Media"}
                              </p>
                            </div>
                            {showErr && (
                              <div className=" col-span-12">
                                <p className=" text-base text-red-400 font-semibold">
                                  {
                                    "Kindly check user name and password is selected social media"
                                  }
                                </p>
                              </div>
                            )}
                            {/*  <div className=" grid grid-cols-12 gap-5"> */}
                            {socialData?.map((item: any) => {
                              return (
                                <div className=" border-b-2 border-gray-200 pb-5 col-span-6">
                                  <div className=" flex items-center gap-3">
                                    <div className=" h-20 w-20">
                                      <img
                                        src={
                                          item.SocialMediaName == "FACEBOOK"
                                            ? "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
                                            : item.SocialMediaName ==
                                              "INSTAGRAM"
                                            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                                            : item.SocialMediaName == "LINKEDIN"
                                            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                                            : item.SocialMediaName == "TWITTER"
                                            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"
                                            : "https://e7.pngegg.com/pngimages/100/765/png-clipart-software-testing-logo-los-angeles-center-of-graphy-others-text-trademark.png"
                                        }
                                      />
                                    </div>
                                    <div className=" w-full">
                                      <div className=" flex justify-between items-center">
                                        <p className=" text-sm text-gray-800 font-semibold">
                                          {item.SocialMediaName}
                                        </p>
                                        <input
                                          type="checkbox"
                                          name=""
                                          id=""
                                          className=""
                                          checked={item.checked}
                                          onChange={(e: any) =>
                                            selectSocial("check", item, e)
                                          }
                                        />
                                      </div>
                                      <label className=" text-sm text-gray-800 font-semibold">
                                        User Name
                                      </label>
                                      <input
                                        disabled={!item.checked}
                                        type="text"
                                        value={item.UserName}
                                        name="UserName"
                                        id=""
                                        onChange={(e: any) =>
                                          selectSocial("input", item, e)
                                        }
                                        className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"
                                      />
                                      <label className=" text-sm text-gray-800 font-semibold">
                                        Password
                                      </label>
                                      <input
                                        disabled={!item.checked}
                                        type="text"
                                        name="Password"
                                        id=""
                                        value={item.Password}
                                        onChange={(e: any) =>
                                          selectSocial("input", item, e)
                                        }
                                        className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            {/* </div> */}
                            <div className=" col-span-6 flex items-end justify-end">
                              <button
                                className=" h-12 bg-pink-600 text-white"
                                onClick={() => {
                                  handleSubmit();
                                }}
                              >
                                Add client
                              </button>
                            </div>
                          </div>
                        )}
                      </Formik>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddClient;
