import React from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import VarientDropdown from "@/components/ui/SelectOption";
import InputContent from "@/components/ui/InputContent";
import Button from "@/components/ui/Button";
function PhoneNumber() {
  return (
    <AuthLayout className={"flex items-center justify-center"}>
      <Auth>
        <div className="pt-20 sm:pt-[118px] flex items-center flex-col">
          <h2 className="text-2xl font-semibold pb-2 text-blacklight">Phone number</h2>
          <p className="text-sm text-black/40 ">
            Enter your phone number, an OTP will be sent to verify it
          </p>
          <div className="grid sm:grid-cols-2 sm:gap-6 gap-3 max-w-[388px] w-full py-[30px]">
            <InputContent
              title={"Country code"}
              className="dark:bg-white/40 dark:border-black/10 mb-0"
              titlestyle="leading-[18px] !text-black/40 mb-1"
            >
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
                className="dark:!text-black/80 !text-black/80 mb-0"
              />
            </InputContent>
            <InputContent
              title={"Phone number"}
              className="dark:bg-white/40 dark:border-black/10  mb-0"
              titlestyle="leading-[18px] mb-1 dark:text-black/40"
            >
              <input
                type="number"
                name=""
                defaultValue="8073589105"
                className="w-full dark:bg-transparent dark:text-blacklight"
              />
            </InputContent>
          </div>
          <Button
            name={"Submit"}
            secondary={"true"}
            color={"blacklight"}
            className={"!text-lg mb-4 !py-2 w-full max-w-[388px] dark:!text-white dark:!bg-blacklight"}
          />
           <Link href={"#/"} className="text-trinary-bule text-sm">Back</Link>
        </div>
      </Auth>
    </AuthLayout>
  );
}
export default PhoneNumber;
