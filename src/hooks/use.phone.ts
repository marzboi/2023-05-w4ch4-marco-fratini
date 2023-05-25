import { useState } from "react";

export function usePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleCall() {
    setIsCalling(false);
  }

  function handleHang() {
    setIsCalling(true);
    setPhoneNumber;
  }

  function handleAddNumber(value: string) {
    setPhoneNumber(value);
  }

  const keyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

  return {
    isCalling,
    phoneNumber,
    handleCall,
    handleHang,
    handleAddNumber,
    keyValue,
  };
}
