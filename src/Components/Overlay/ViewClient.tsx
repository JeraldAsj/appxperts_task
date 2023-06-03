import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Formik } from "formik";
import * as Yup from "yup";

type ViewClientProps = {
    setOpen: any;
    open: any;
    items: any;
   
  };

const ViewClient : React.FC<ViewClientProps> = ({ open, setOpen ,items}) => {
    
  
  
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
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-screen flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        View Client 
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
                  <div className="relative mt-6 flex-1 px-4 sm:px-6 ">
               <div className=" grid grid-cols-12 gap-4 pb-4">
               <p className=" text-sm text-gray-800 font-semibold col-span-5">Client Name</p>
               <p className=" text-sm text-gray-800 font-semibold text-center col-span-2">:</p>
               <p className=" text-sm text-gray-800 font-semibold col-span-5">{items.ClientName}</p>
               </div>
               <div className=" grid grid-cols-12 gap-4 pb-4">
               <p className=" text-sm text-gray-800 font-semibold col-span-5">Client Name</p>
               <p className=" text-sm text-gray-800 font-semibold text-center col-span-2">:</p>
               <p className=" text-sm text-gray-800 font-semibold col-span-5">{items.ClientName}</p>
               </div>
               <div className=" grid grid-cols-12 gap-4 pb-4">
               <p className=" text-sm text-gray-800 font-semibold col-span-5">Mobile Number</p>
               <p className=" text-sm text-gray-800 font-semibold text-center col-span-2">:</p>
               <p className=" text-sm text-gray-800 font-semibold col-span-5">{items.MobileNo}</p>
               </div>
               <div className=" grid grid-cols-12 gap-4 pb-4">
               <p className=" text-sm text-gray-800 font-semibold col-span-5">Email Id</p>
               <p className=" text-sm text-gray-800 font-semibold text-center col-span-2">:</p>
               <p className=" text-sm text-gray-800 font-semibold col-span-5 truncate w-11/12">{items.EmailId}</p>
               </div>
               <div className=" grid grid-cols-12 gap-4 pb-4">
               <p className=" text-sm text-gray-800 font-semibold col-span-5">Country</p>
               <p className=" text-sm text-gray-800 font-semibold text-center col-span-2">:</p>
               <p className=" text-sm text-gray-800 font-semibold col-span-5">{items.Country}</p>
               </div>
               <div className=" grid grid-cols-12 gap-4 pb-4">
               <p className=" text-sm text-gray-800 font-semibold col-span-5">Contact Person</p>
               <p className=" text-sm text-gray-800 font-semibold text-center col-span-2">:</p>
               <p className=" text-sm text-gray-800 font-semibold col-span-5">{items.ContactPerson}</p>
               </div>
               <div className=" grid grid-cols-12 gap-4 pb-4">
               <p className=" text-sm text-gray-800 font-semibold col-span-5">Contact Person Number</p>
               <p className=" text-sm text-gray-800 font-semibold text-center col-span-2">:</p>
               <p className=" text-sm text-gray-800 font-semibold col-span-5">{items.ContactNo}</p>
               </div>
               <div className=" col-span-12">
                <p className=" text-base text-gray-800 font-semibold">{'Social Media'}</p>
                </div>
               
               {/*  <div className=" grid grid-cols-12 gap-5"> */}
                    {
                        items.ClientSocialMediaList?.map((item:any)=>{
                            return <div className=" border-b-2 border-gray-200 pb-5 col-span-6">
                               <div className=" flex items-center gap-3">
                               <div className=" h-20 w-20">
<img src={item.SocialMediaName=='FACEBOOK'?"https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png":item.SocialMediaName=='INSTAGRAM'?'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png':item.SocialMediaName=='LINKEDIN'?'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png':item.SocialMediaName=='TWITTER'?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553':'https://e7.pngegg.com/pngimages/100/765/png-clipart-software-testing-logo-los-angeles-center-of-graphy-others-text-trademark.png'}/>

                                </div>
                                <div className=" w-full">
                               <div className=" flex justify-between items-center">
                               <p className=" text-sm text-gray-800 font-semibold">{item.SocialMediaName}</p>
                               
                               </div>
                                <label className=" text-sm text-gray-800 font-semibold">User Name</label>
                               <input disabled type="text" 
                               value={item.UserName}
                               name="UserName" id=""  
                               className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"/>
                                <label className=" text-sm text-gray-800 font-semibold">Password</label>
                               <input disabled type="text" name="Password" id=""  
                               value={item.Password}
                              
                               className="block w-full text-fuchsia-900 bg-purple-200 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-fuchsia-700 placeholder:text-fuchsia-900 focus:ring-2 focus:ring-inset focus:ring-fuchsia-700 sm:text-sm sm:leading-6"/>
                                </div>
                               </div>
                            </div>
                        })
                    }
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
  )
}

export default ViewClient