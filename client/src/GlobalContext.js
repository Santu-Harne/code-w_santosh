import React, { createContext, useState } from 'react'

export const DataContext = createContext()

function DataProvider(props) {



  // const [personalAccInfo, setPersonalAccInfo] = useState({
  //   Account_Type: "Personal Account",
  //   Name: "Santosh",
  //   Email: "santosh@gmail.com",
  //   Password: "santosh123",
  //   Account_Plan: "Developer acount",
  //   Team_Size: "1",
  //   Address: "harihar",
  //   Mobile: "8660822483",
  //   Business_Type: "null",
  //   Document_Type: "Aadhar",
  //   Document_Number: "233022395979",
  //   Document_Location: "",
  //   Name_On_Card: "Santosh Kumar",
  //   Card_Number: "123456789",
  //   Expire_Date: "10/30",
  //   isVerified: false,
  //   Document_Object: {}
  // })
  const [personalAccInfo, setPersonalAccInfo] = useState({
    Account_Type: "Personal Account",
    Name: "",
    Email: "",
    Password: "",
    Account_Plan: "",
    Team_Size: "1",
    Address: "",
    Mobile: "",
    Business_Type: "null",
    Document_Type: "",
    Document_Number: "",
    Document_Location: "",
    Name_On_Card: "",
    Card_Number: "",
    Expire_Date: "",
    isVerified: false,
    Document_Object: {}
  })

  const [corpAccInfo, setCorpAccInfo] = useState({
    Account_Type: "Corporate Account",
    Name: "",
    Email: "",
    Password: "",
    Account_Plan: "",
    Team_Size: "",
    Address: "",
    Mobile: "",
    Business_Type: "",
    Document_Type: "",
    Document_Number: "",
    Document_Location: "",
    Name_On_Card: "",
    Card_Number: "",
    Expire_Date: "",
    isVerified: false,
    Document_Object: {}
  })


  const [agencyAccInfo, setAgencyAccInfo] = useState({
    Account_Type: "Agency Account",
    Name: "",
    Email: "",
    Password: "",
    Account_Plan: "",
    Team_Size: "",
    Address: "",
    Mobile: "",
    Business_Type: "",
    Document_Type: "",
    Document_Number: "",
    Document_Location: "",
    Name_On_Card: "",
    Card_Number: "",
    Expire_Date: "",
    isVerified: false,
    Document_Object: {}
  })

  const data = {
    personalAccInfo: [personalAccInfo, setPersonalAccInfo],
    corporateAccInfo: [corpAccInfo, setCorpAccInfo],
    agencyAccInfo: [agencyAccInfo, setAgencyAccInfo]
  }
  return (
    <DataContext.Provider value={data}>
      {props.children}
    </DataContext.Provider>
  )


}

export default DataProvider