import React, { createContext, useState } from 'react'

export const DataContext = createContext()

function DataProvider(props) {

  // const [personalAccInfo, setPersonalAccInfo] = useState({
  //   Account_Type: "Personal Account",
  //   Name: "",
  //   Email: "",
  //   Password: "",
  //   Account_Plan: "",
  //   Team_Size: "1",
  //   Address: "",
  //   Mobile: "",
  //   Business_Type: "null",
  //   Document_Type: "",
  //   Document_Number: "",
  //   Document_Location: "",
  //   Name_On_Card: "",
  //   Card_Number: "",
  //   Expire_Date: "",
  //   isVerified: "false"
  // })
  const [personalAccInfo, setPersonalAccInfo] = useState({
    Account_Type: "Personal Account",
    Name: "Santosh",
    Email: "santosh.283143@gmail.com",
    Password: "santosh123",
    Account_Plan: "Developer Account",
    Team_Size: "1",
    Address: "Harihar",
    Mobile: "8660822483",
    Business_Type: "null",
    Document_Type: "Adhar",
    Document_Number: "233022395979",
    Document_Location: "Davanagere",
    Name_On_Card: "Santosh Kumar H A",
    Card_Number: "12345678910",
    Expire_Date: "10/30",
    isVerified: "false"
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
    isVerified: "false"
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
    isVerified: "false"
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