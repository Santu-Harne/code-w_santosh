import React, { createContext, useState } from 'react'

export const DataContext = createContext()

function DataProvider(props) {

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
    Card_Type: "Visa",
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