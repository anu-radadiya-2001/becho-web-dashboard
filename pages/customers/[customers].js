  import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import RadioCircle from "@/assets/images/icon/radio-circle.svg";
import CustomerPhoto from "@/assets/images/users/customer-photo.png";
import Camera from "@/assets/images/icon/camera.svg";
import PageHeader from "@/components/ui/PageHeader";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import InputContent from "@/components/ui/InputContent";
import VarientDropdown from "@/components/ui/SelectOption";
import MultiselectDropdown from "@/components/ui/MultiselectDropdown";
import Layout from "@/layouts/layout";
import closeico from "@/assets/images/icon/close-circle.svg";

import CountryDropdown from "@/components/ui/CountryStateDropdown/CountryDropdown";
import RegionDropdown from "@/components/ui/CountryStateDropdown/RegionDropdown";

const Customers = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const [radiioBtn, setRadiioBtn] = useState(true);
  const [radiioBtnTwo, setRadiioBtnTwo] = useState(false);
  const radiioBtnHendler = () => {
    setRadiioBtn(true);
    setRadiioBtnTwo(false);
  };
  const radiioBtnTwoHendler = () => {
    setRadiioBtn(false);
    setRadiioBtnTwo(true);
  };
 
  return (
    <Layout container>
      <UnsavedChanges>
        <Button
          color={"white"}
          name={"Discard"}
          size={"small"}
          outline={"true"}
          className={"!text-xs mr-5 dark:border-blacklight dark:text-black"}
        />
        <Button color={"green"} name={"Save"} className={"!text-xs"} />
      </UnsavedChanges>
      <PageHeader
        className={"mb-5 sm:flex-nowrap flex-wrap gap-5"}
        orderid={"New customer"}
        Badgesdata={[]}
      ></PageHeader>
      <div className="flex flex-wrap justify-between gap-y-5 mb-4">
        <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-11 p-5 sm:px-5 px-3">
          <div className="grid sm:grid-cols-2 sm:gap-6 ">
            <InputContent ontent title={"First name"} className="dark:bg-black/40 mb-3">
              <input type="text" name="" defaultValue="Baalkrishan" className="w-full dark:bg-transparent" />
            </InputContent>
            <InputContent title={"Last name"} className="dark:bg-black/40 mb-3">
              <input type="text" name="" defaultValue="Lal Sani" className="w-full dark:bg-transparent" />
            </InputContent>
          </div>
          <InputContent className={"!py-[10px] dark:bg-black/40 dark:text-white/40 mb-3"}>
            <VarientDropdown
              selectitem={[
                { id: 1, name: "Select Language..." },
                { id: 2, name: "English" },
                { id: 3, name: "Hindi" },
              ]}
              className="dark:text-white/40"
            />
          </InputContent>
          <InputContent className={"!py-2.5 dark:bg-black/40 mb-3"}>
            <input
              type="email"
              name=""
              defaultValue={""}
              placeholder="Email"
              className="dark:bg-transparent dark:text-white dark:placeholder:text-white/20 placeholder:text-black/20 w-full"
            />
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent title={"Country code"} className={"dark:bg-black/40 dark:text-white/40 mb-3"}>
              <VarientDropdown
                selectitem={[
                  { name: "+91" },
                  { name: "Algeria (+213)" },
                  { name: "Andorra (+376)" },
                  { name: "Angola (+244)" },
                  { name: "Anguilla (+1264)" },
                  { name: "Antigua Barbuda (+1268)" },
                  { name: "Argentina (+54)" },
                  { name: "Armenia (+374)" },
                  { name: "Aruba (+297)" },
                  { name: "Australia (+61)" },
                  { name: "Austria (+43)" },
                  { name: "Azerbaijan (+994)" },
                  { name: "Bahamas (+1242)" },
                  { name: "Bahrain (+973)" },
                  { name: "Bangladesh (+880)" },
                  { name: "Barbados (+1246)" },
                  { name: "Belarus (+375)" },
                  { name: "Belgium (+32)" },
                  { name: "Belize (+501)" },
                  { name: "Benin (+229)" },
                  { name: "Bermuda (+1441)" },
                  { name: "Bhutan (+975)" },
                  { name: "Bolivia (+591)" },
                  { name: "Bosnia Herzegovina (+387)" },
                  { name: "Botswana (+267)" },
                  { name: "Brazil (+55)" },
                  { name: "Brunei (+673)" },
                  { name: "Bulgaria (+359)" },
                  { name: "Burkina Faso (+226)" },
                  { name: "Burundi (+257)" },
                  { name: "Cambodia (+855)" },
                  { name: "Cameroon (+237)" },
                  { name: "Canada (+1)" },
                  { name: "Cape Verde Islands (+238)" },
                  { name: "Cayman Islands (+1345)" },
                  { name: "Central African Republic (+236)" },
                  { name: "Chile (+56)" },
                  { name: "China (+86)" },
                  { name: "Colombia (+57)" },
                  { name: "Comoros (+269)" },
                  { name: "Congo (+242)" },
                  { name: "Cook Islands (+682)" },
                  { name: "Costa Rica (+506)" },
                  { name: "Croatia (+385)" },
                  { name: "Cuba (+53)" },
                  { name: "Cyprus North (+90392)" },
                  { name: "Cyprus South (+357)" },
                  { name: "Czech Republic (+42)" },
                  { name: "Denmark (+45)" },
                  { name: "Djibouti (+253)" },
                  { name: "Dominica (+1809)" },
                  { name: "Dominican Republic (+1809)" },
                  { name: "Ecuador (+593)" },
                  { name: "Egypt (+20)" },
                  { name: "El Salvador (+503)" },
                  { name: "Equatorial Guinea (+240)" },
                  { name: "Eritrea (+291)" },
                  { name: "Estonia (+372)" },
                  { name: "Ethiopia (+251)" },
                  { name: "Falkland Islands (+500)" },
                  { name: "Faroe Islands (+298)" },
                  { name: "Fiji (+679)" },
                  { name: "Finland (+358)" },
                  { name: "France (+33)" },
                  { name: "French Guiana (+594)" },
                  { name: "French Polynesia (+689)" },
                  { name: "Gabon (+241)" },
                  { name: "Gambia (+220)" },
                  { name: "Georgia (+7880)" },
                  { name: "Germany (+49)" },
                  { name: "Ghana (+233)" },
                  { name: "Gibraltar (+350)" },
                  { name: "Greece (+30)" },
                  { name: "Greenland (+299)" },
                  { name: "Grenada (+1473)" },
                  { name: "Guadeloupe (+590)" },
                  { name: "Guam (+671)" },
                  { name: "Guatemala (+502)" },
                  { name: "Guinea (+224)" },
                  { name: "Guinea - Bissau (+245)" },
                  { name: "Guyana (+592)" },
                  { name: "Haiti (+509)" },
                  { name: "Honduras (+504)" },
                  { name: "Hong Kong (+852)" },
                  { name: "Hungary (+36)" },
                  { name: "Iceland (+354)" },
                  { name: "India (+91)" },
                  { name: "Indonesia (+62)" },
                  { name: "Iran (+98)" },
                  { name: "Iraq (+964)" },
                  { name: "Ireland (+353)" },
                  { name: "Israel (+972)" },
                  { name: "Italy (+39)" },
                  { name: "Jamaica (+1876)" },
                  { name: "Japan (+81)" },
                  { name: "Jordan (+962)" },
                  { name: "Kazakhstan (+7)" },
                  { name: "Kenya (+254)" },
                  { name: "Kiribati (+686)" },
                  { name: "Korea North (+850)" },
                  { name: "Korea South (+82)" },
                  { name: "Kuwait (+965)" },
                  { name: "Kyrgyzstan (+996)" },
                  { name: "Laos (+856)" },
                  { name: "Latvia (+371)" },
                  { name: "Lebanon (+961)" },
                  { name: "Lesotho (+266)" },
                  { name: "Liberia (+231)" },
                  { name: "Libya (+218)" },
                  { name: "Liechtenstein (+417)" },
                  { name: "Lithuania (+370)" },
                  { name: "Luxembourg (+352)" },
                  { name: "Macao (+853)" },
                  { name: "Macedonia (+389)" },
                  { name: "Madagascar (+261)" },
                  { name: "Malawi (+265)" },
                  { name: "Malaysia (+60)" },
                  { name: "Maldives (+960)" },
                  { name: "Mali (+223)" },
                  { name: "Malta (+356)" },
                  { name: "Marshall Islands (+692)" },
                  { name: "Martinique (+596)" },
                  { name: "Mauritania (+222)" },
                  { name: "Mayotte (+269)" },
                  { name: "Mexico (+52)" },
                  { name: "Micronesia (+691)" },
                  { name: "Moldova (+373)" },
                  { name: "Monaco (+377)" },
                  { name: "Mongolia (+976)" },
                  { name: "Montserrat (+1664)" },
                  { name: "Morocco (+212)" },
                  { name: "Mozambique (+258)" },
                  { name: "Myanmar (+95)" },
                  { name: "Namibia (+264)" },
                  { name: "Nauru (+674)" },
                  { name: "Nepal (+977)" },
                  { name: "Netherlands (+31)" },
                  { name: "New Caledonia (+687)" },
                  { name: "New Zealand (+64)" },
                  { name: "Nicaragua (+505)" },
                  { name: "Niger (+227)" },
                  { name: "Nigeria (+234)" },
                  { name: "Niue (+683)" },
                  { name: "Norfolk Islands (+672)" },
                  { name: "Northern Marianas (+670)" },
                  { name: "Norway (+47)" },
                  { name: "Oman (+968)" },
                  { name: "Palau (+680)" },
                  { name: "Panama (+507)" },
                  { name: "Papua New Guinea (+675)" },
                  { name: "Paraguay (+595)" },
                  { name: "Peru (+51)" },
                  { name: "Philippines (+63)" },
                  { name: "Poland (+48)" },
                  { name: "Portugal (+351)" },
                  { name: "Puerto Rico (+1787)" },
                  { name: "Qatar (+974)" },
                  { name: "Reunion (+262)" },
                  { name: "Romania (+40)" },
                  { name: "Russia (+7)" },
                  { name: "Rwanda (+250)" },
                  { name: "San Marino (+378)" },
                  { name: "Sao Tome Principe (+239)" },
                  { name: "Saudi Arabia (+966)" },
                  { name: "Senegal (+221)" },
                  { name: "Serbia (+381)" },
                  { name: "Seychelles (+248)" },
                  { name: "Sierra Leone (+232)" },
                  { name: "Singapore (+65)" },
                  { name: "Slovak Republic (+421)" },
                  { name: "Slovenia (+386)" },
                  { name: "Solomon Islands (+677)" },
                  { name: "Somalia (+252)" },
                  { name: "South Africa (+27)" },
                  { name: "Spain (+34)" },
                  { name: "Sri Lanka (+94)" },
                  { name: "St. Helena (+290)" },
                  { name: "St. Kitts (+1869)" },
                  { name: "St. Lucia (+1758)" },
                  { name: "Sudan (+249)" },
                  { name: "Suriname (+597)" },
                  { name: "Swaziland (+268)" },
                  { name: "Sweden (+46)" },
                  { name: "Switzerland (+41)" },
                  { name: "Syria (+963)" },
                  { name: "Taiwan (+886)" },
                  { name: "Tajikstan (+7)" },
                  { name: "Thailand (+66)" },
                  { name: "Togo (+228)" },
                  { name: "Tonga (+676)" },
                  { name: "Trinidad Tobago (+1868)" },
                  { name: "Tunisia (+216)" },
                  { name: "Turkey (+90)" },
                  { name: "Turkmenistan (+7)" },
                  { name: "Turkmenistan (+993)" },
                  { name: "Turks Caicos Islands (+1649)" },
                  { name: "Tuvalu (+688)" },
                  { name: "Uganda (+256)" },
                  { name: "Ukraine (+380)" },
                  { name: "United Arab Emirates (+971)" },
                  { name: "Uruguay (+598)" },
                  { name: "Uzbekistan (+7)" },
                  { name: "Vanuatu (+678)" },
                  { name: "Vatican City (+379)" },
                  { name: "Venezuela (+58)" },
                  { name: "Vietnam (+84)" },
                  { name: "Virgin Islands - British (+1284)" },
                  { name: "Virgin Islands - US (+1340)" },
                  { name: "Wallis Futuna (+681)" },
                  { name: "Yemen (North)(+969)" },
                  { name: "Yemen (South)(+967)" },
                  { name: "Zambia (+260)" },
                  { name: "Zimbabwe (+263)" },
                ]}
                className="dark:!text-white/80 !text-black/80"
              />
            </InputContent>
                <InputContent title={"Phone number"} className="dark:bg-black/40 mb-3">
                    <input type="number" name="" defaultValue="8073589105" className="w-full dark:bg-transparent"/>
                </InputContent>
          </div>
          {/* radio button start */}
          <div className="product-type-radio grid">
            <div className="grid justify-center product-type-radio">
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <div className="inline-block min-h-[1.5rem]">
                  <div
                    onClick={() => radiioBtnHendler()}
                    className={`cursor-pointer bg-white dark:bg-black/40 dark:border-white/10 border border-black/10 rounded-lg py-6 px-5 mb-3 relative ${
                      radiioBtn ? "dark:border-secondary-purpleb border-black" : "border-black/10"
                    }`}
                  >
                    {radiioBtn ? (
                      <svg
                        width="26"
                        height="26"
                        className="absolute right-[15px] top-[15px]"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                          fill="black"
                          className="dark:fill-secondary-purpleb"
                          fillOpacity="0.8"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                          fill="black"
                          className="dark:fill-secondary-purpleb"
                          fillOpacity="0.8"
                        />
                      </svg>
                    ) : (
                      <Image src={RadioCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                    )}
                    <h3
                      className={`mb-1 font-semibold dark:text-white/80 ${
                        radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Email subscription
                    </h3>
                    <p
                      className={` ${
                        radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Customer agreed to receive marketing emails.
                    </p>
                  </div>
                </div>
                <div className="inline-block min-h-[1.5rem]">
                  <div
                    onClick={() => radiioBtnTwoHendler()}
                    className={`cursor-pointer bg-white dark:bg-black/40  border border-black/10 rounded-lg py-6 px-5 mb-3 relative ${
                      radiioBtnTwo ? "dark:border-secondary-purpleb border-black" : "border-black/10 "
                    }`}
                  >
                    {radiioBtnTwo ? (
                      <svg
                        width="26"
                        height="26"
                        className="absolute right-[15px] top-[15px]"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                          fill="black"
                          className="dark:fill-secondary-purpleb"
                          fillOpacity="0.8"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                          fill="black"
                          className="dark:fill-secondary-purpleb"
                          fillOpacity="0.8"
                        />
                      </svg>
                    ) : (
                      <Image src={RadioCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                    )}
                    <h3
                      className={`mb-1 font-semibold dark:text-white/80 ${
                        radiioBtnTwo ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      SMS subscription
                    </h3>
                    <p
                      className={` ${
                        radiioBtnTwo ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                      }`}
                    >
                      Customer agreed to receive SMS marketing text messages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* radio button end */}
          <h3 className="text-lg font-semibold pb-3 text-black/80 dark:text-white/80">Address</h3>
         
          <InputContent className={"!py-[10px] dark:bg-black/40 dark:text-white/40 mb-3"}>
            <CountryDropdown onChange={setSelectedCountry}/>
          </InputContent>
            <InputContent title={"First name"} className="dark:bg-black/40 mb-3">
              <input type="text" name="" defaultValue="Baalkrishan" className="w-full dark:bg-transparent" />
            </InputContent>
            <InputContent title={"Last name"} className="dark:bg-black/40 mb-3">
              <input type="text" name="" defaultValue="Lal Sani" className="w-full dark:bg-transparent" />
            </InputContent>
        
          <InputContent title={"Company"} className="dark:bg-black/40 mb-3">
            <input type="text" name="" defaultValue="Company name" className="w-full dark:bg-transparent" />
          </InputContent>
          <InputContent title={"Address"} className="dark:bg-black/40 mb-3">
            <input
              type="text"
              name=""
              defaultValue="Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani"
              className="w-full dark:bg-transparent"
            />
          </InputContent>
          <InputContent title={"Apartment etc."} className="dark:bg-black/40 mb-3">
            <input type="text" name="" defaultValue="Apartment, suite, etc" className="w-full dark:bg-transparent" />
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent title={"State"} className="dark:bg-black/40 dark:text-white/40 mb-3">
              <RegionDropdown  onChange={setSelectedState} country={selectedCountry}/>
            </InputContent>
            <InputContent title={"City"} className="dark:bg-black/40 mb-3">
              <input type="text" name="" defaultValue="Pilani" className="w-full dark:bg-transparent" />
            </InputContent>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent title={"Country code"} className="dark:bg-black/40 mb-3">
              <VarientDropdown
                selectitem={[
                  { name: "+91" },
                  { name: "Algeria (+213)" },
                  { name: "Andorra (+376)" },
                  { name: "Angola (+244)" },
                  { name: "Anguilla (+1264)" },
                  { name: "Antigua Barbuda (+1268)" },
                  { name: "Argentina (+54)" },
                  { name: "Armenia (+374)" },
                  { name: "Aruba (+297)" },
                  { name: "Australia (+61)" },
                  { name: "Austria (+43)" },
                  { name: "Azerbaijan (+994)" },
                  { name: "Bahamas (+1242)" },
                  { name: "Bahrain (+973)" },
                  { name: "Bangladesh (+880)" },
                  { name: "Barbados (+1246)" },
                  { name: "Belarus (+375)" },
                  { name: "Belgium (+32)" },
                  { name: "Belize (+501)" },
                  { name: "Benin (+229)" },
                  { name: "Bermuda (+1441)" },
                  { name: "Bhutan (+975)" },
                  { name: "Bolivia (+591)" },
                  { name: "Bosnia Herzegovina (+387)" },
                  { name: "Botswana (+267)" },
                  { name: "Brazil (+55)" },
                  { name: "Brunei (+673)" },
                  { name: "Bulgaria (+359)" },
                  { name: "Burkina Faso (+226)" },
                  { name: "Burundi (+257)" },
                  { name: "Cambodia (+855)" },
                  { name: "Cameroon (+237)" },
                  { name: "Canada (+1)" },
                  { name: "Cape Verde Islands (+238)" },
                  { name: "Cayman Islands (+1345)" },
                  { name: "Central African Republic (+236)" },
                  { name: "Chile (+56)" },
                  { name: "China (+86)" },
                  { name: "Colombia (+57)" },
                  { name: "Comoros (+269)" },
                  { name: "Congo (+242)" },
                  { name: "Cook Islands (+682)" },
                  { name: "Costa Rica (+506)" },
                  { name: "Croatia (+385)" },
                  { name: "Cuba (+53)" },
                  { name: "Cyprus North (+90392)" },
                  { name: "Cyprus South (+357)" },
                  { name: "Czech Republic (+42)" },
                  { name: "Denmark (+45)" },
                  { name: "Djibouti (+253)" },
                  { name: "Dominica (+1809)" },
                  { name: "Dominican Republic (+1809)" },
                  { name: "Ecuador (+593)" },
                  { name: "Egypt (+20)" },
                  { name: "El Salvador (+503)" },
                  { name: "Equatorial Guinea (+240)" },
                  { name: "Eritrea (+291)" },
                  { name: "Estonia (+372)" },
                  { name: "Ethiopia (+251)" },
                  { name: "Falkland Islands (+500)" },
                  { name: "Faroe Islands (+298)" },
                  { name: "Fiji (+679)" },
                  { name: "Finland (+358)" },
                  { name: "France (+33)" },
                  { name: "French Guiana (+594)" },
                  { name: "French Polynesia (+689)" },
                  { name: "Gabon (+241)" },
                  { name: "Gambia (+220)" },
                  { name: "Georgia (+7880)" },
                  { name: "Germany (+49)" },
                  { name: "Ghana (+233)" },
                  { name: "Gibraltar (+350)" },
                  { name: "Greece (+30)" },
                  { name: "Greenland (+299)" },
                  { name: "Grenada (+1473)" },
                  { name: "Guadeloupe (+590)" },
                  { name: "Guam (+671)" },
                  { name: "Guatemala (+502)" },
                  { name: "Guinea (+224)" },
                  { name: "Guinea - Bissau (+245)" },
                  { name: "Guyana (+592)" },
                  { name: "Haiti (+509)" },
                  { name: "Honduras (+504)" },
                  { name: "Hong Kong (+852)" },
                  { name: "Hungary (+36)" },
                  { name: "Iceland (+354)" },
                  { name: "India (+91)" },
                  { name: "Indonesia (+62)" },
                  { name: "Iran (+98)" },
                  { name: "Iraq (+964)" },
                  { name: "Ireland (+353)" },
                  { name: "Israel (+972)" },
                  { name: "Italy (+39)" },
                  { name: "Jamaica (+1876)" },
                  { name: "Japan (+81)" },
                  { name: "Jordan (+962)" },
                  { name: "Kazakhstan (+7)" },
                  { name: "Kenya (+254)" },
                  { name: "Kiribati (+686)" },
                  { name: "Korea North (+850)" },
                  { name: "Korea South (+82)" },
                  { name: "Kuwait (+965)" },
                  { name: "Kyrgyzstan (+996)" },
                  { name: "Laos (+856)" },
                  { name: "Latvia (+371)" },
                  { name: "Lebanon (+961)" },
                  { name: "Lesotho (+266)" },
                  { name: "Liberia (+231)" },
                  { name: "Libya (+218)" },
                  { name: "Liechtenstein (+417)" },
                  { name: "Lithuania (+370)" },
                  { name: "Luxembourg (+352)" },
                  { name: "Macao (+853)" },
                  { name: "Macedonia (+389)" },
                  { name: "Madagascar (+261)" },
                  { name: "Malawi (+265)" },
                  { name: "Malaysia (+60)" },
                  { name: "Maldives (+960)" },
                  { name: "Mali (+223)" },
                  { name: "Malta (+356)" },
                  { name: "Marshall Islands (+692)" },
                  { name: "Martinique (+596)" },
                  { name: "Mauritania (+222)" },
                  { name: "Mayotte (+269)" },
                  { name: "Mexico (+52)" },
                  { name: "Micronesia (+691)" },
                  { name: "Moldova (+373)" },
                  { name: "Monaco (+377)" },
                  { name: "Mongolia (+976)" },
                  { name: "Montserrat (+1664)" },
                  { name: "Morocco (+212)" },
                  { name: "Mozambique (+258)" },
                  { name: "Myanmar (+95)" },
                  { name: "Namibia (+264)" },
                  { name: "Nauru (+674)" },
                  { name: "Nepal (+977)" },
                  { name: "Netherlands (+31)" },
                  { name: "New Caledonia (+687)" },
                  { name: "New Zealand (+64)" },
                  { name: "Nicaragua (+505)" },
                  { name: "Niger (+227)" },
                  { name: "Nigeria (+234)" },
                  { name: "Niue (+683)" },
                  { name: "Norfolk Islands (+672)" },
                  { name: "Northern Marianas (+670)" },
                  { name: "Norway (+47)" },
                  { name: "Oman (+968)" },
                  { name: "Palau (+680)" },
                  { name: "Panama (+507)" },
                  { name: "Papua New Guinea (+675)" },
                  { name: "Paraguay (+595)" },
                  { name: "Peru (+51)" },
                  { name: "Philippines (+63)" },
                  { name: "Poland (+48)" },
                  { name: "Portugal (+351)" },
                  { name: "Puerto Rico (+1787)" },
                  { name: "Qatar (+974)" },
                  { name: "Reunion (+262)" },
                  { name: "Romania (+40)" },
                  { name: "Russia (+7)" },
                  { name: "Rwanda (+250)" },
                  { name: "San Marino (+378)" },
                  { name: "Sao Tome Principe (+239)" },
                  { name: "Saudi Arabia (+966)" },
                  { name: "Senegal (+221)" },
                  { name: "Serbia (+381)" },
                  { name: "Seychelles (+248)" },
                  { name: "Sierra Leone (+232)" },
                  { name: "Singapore (+65)" },
                  { name: "Slovak Republic (+421)" },
                  { name: "Slovenia (+386)" },
                  { name: "Solomon Islands (+677)" },
                  { name: "Somalia (+252)" },
                  { name: "South Africa (+27)" },
                  { name: "Spain (+34)" },
                  { name: "Sri Lanka (+94)" },
                  { name: "St. Helena (+290)" },
                  { name: "St. Kitts (+1869)" },
                  { name: "St. Lucia (+1758)" },
                  { name: "Sudan (+249)" },
                  { name: "Suriname (+597)" },
                  { name: "Swaziland (+268)" },
                  { name: "Sweden (+46)" },
                  { name: "Switzerland (+41)" },
                  { name: "Syria (+963)" },
                  { name: "Taiwan (+886)" },
                  { name: "Tajikstan (+7)" },
                  { name: "Thailand (+66)" },
                  { name: "Togo (+228)" },
                  { name: "Tonga (+676)" },
                  { name: "Trinidad Tobago (+1868)" },
                  { name: "Tunisia (+216)" },
                  { name: "Turkey (+90)" },
                  { name: "Turkmenistan (+7)" },
                  { name: "Turkmenistan (+993)" },
                  { name: "Turks Caicos Islands (+1649)" },
                  { name: "Tuvalu (+688)" },
                  { name: "Uganda (+256)" },
                  { name: "Ukraine (+380)" },
                  { name: "United Arab Emirates (+971)" },
                  { name: "Uruguay (+598)" },
                  { name: "Uzbekistan (+7)" },
                  { name: "Vanuatu (+678)" },
                  { name: "Vatican City (+379)" },
                  { name: "Venezuela (+58)" },
                  { name: "Vietnam (+84)" },
                  { name: "Virgin Islands - British (+1284)" },
                  { name: "Virgin Islands - US (+1340)" },
                  { name: "Wallis Futuna (+681)" },
                  { name: "Yemen (North)(+969)" },
                  { name: "Yemen (South)(+967)" },
                  { name: "Zambia (+260)" },
                  { name: "Zimbabwe (+263)" },
                ]}
                className="dark:!text-white/80 !text-black/80"
              />
            </InputContent>
            <InputContent title={"Phone number"} className="dark:bg-black/40 mb-3">
              <input type="number" name="" defaultValue="8073589105" className="w-full dark:bg-transparent" />
            </InputContent>
          </div>

          <p className="mb-3 text-black/40 dark:text-white/40">Other options</p>
          <InputContent title={"Notes"} className="dark:bg-black/40 mb-3">
            <input type="text" name="" defaultValue="Text" className="w-full dark:bg-transparent" />
          </InputContent>
          <InputContent title={"Add tags"} className={"mt-3 w-full cursor-pointer"}>
            <MultiselectDropdown
              options={[
                {
                  cat: "tag 1",
                  key: "tag 1",
                },
                {
                  cat: "tag 2",
                  key: "tag 2",
                },
                {
                  cat: "tag 3",
                  key: "tag 3",
                },
                {
                  cat: "tag 4",
                  key: "tag 4",
                },
              ]}
              selectedValues={[
                {
                  cat: "tag",
                  key: "tag",
                },
                {
                  cat: "tag",
                  key: "tag",
                },
              ]}
            />
          </InputContent>
          <div className="flex justify-end sm:py-9 py-5 pt-7 flex-wrap gap-4">
            <Button name={"Save"} className="font-normal text-sm !px-4 text-white" color="green" size="large" />
          </div>
        </div>
        <div className="w-full md:max-w-[35%] ">
          <div className="bg-primary-light rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-8 sm:px-5 py-5 px-3 mb-7 dark:bg-white/5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Media</h3>
              <label className="bg-primary-blue text-xs font-semibold rounded-lg px-2 py-[5px] cursor-pointer dark:text-black">
                Add
                <input className="font-semibold" type="file" id="fileopen" />
              </label>
            </div>
            <label htmlFor="fileopen" className="relative group max-w-[120px] w-full" >
              <Image src={CustomerPhoto} alt="" className="rounded-lg cursor-pointer" />
              <Image
                src={Camera}
                alt=""
                className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            <Image src={closeico} alt="" className={"cursor-pointer dark:invert absolute w-6 top-[6px] right-[6px] bg-white rounded-full"} />

            </label>
            <p className="my-[10px] text-black/40 dark:text-white/40 pl-[7px]">Allowed file types: png, jpg, jpeg.</p>
          </div>
          <div className="bg-primary-light rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-8 sm:p-5 py-5 px-3 mb-8 dark:bg-white/5">
            <h3 className="text-lg font-semibold">Last placed orders</h3>
            <p className="text-lg font-semibold text-black/40 py-[13px] dark:text-white/40">
              This customer hasn’t placed any orders.
            </p>
            <div>
              <Button
                name={"Create order"}
                color={"purple"}
                secondary={"true"}
                className="font-normal text-sm "
                size="large"
              />
            </div>
          </div>
          <div className="bg-primary-light rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-8 sm:p-5 py-5 px-3 dark:bg-white/5">
            <h3 className="text-lg font-semibold mb-[10px]">Last placed orders</h3>
            <div className="flex justify-between bg-white py-[10px] px-4 mb-3 border-b border-black/5 dark:bg-black/40 dark:border-white/10">
              <h2 className="text-sm text-blacklight font-semibold border-black/5 dark:text-white">Total orders</h2>
              <h2 className="text-sm text-blacklight font-semibold dark:text-white">2</h2>
            </div>
            <div className="flex justify-between py-[11px] px-4 bg-white mb-3 border-b border-black/5 dark:bg-black/40 dark:border-white/10">
              <p className="text-blacklight text-xs	leading-[18px] dark:text-white">#CM9805</p>
              <p className="text-primary-green text-xs leading-[18px]">View details</p>
            </div>
            <div className="flex justify-between py-[11px] px-4 bg-white mb-3 border-b border-black/5 dark:bg-black/40 dark:border-white/10">
              <p className="text-blacklight text-xs	leading-[18px] dark:text-white">#CM9805</p>
              <p className="text-primary-green text-xs  leading-[18px]">View details</p>
            </div>
            <div>
              <Button name={"Create order"} color={"purple"} secondary={"true"} className="text-sm" size="large" />
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  );
};

export default Customers;
