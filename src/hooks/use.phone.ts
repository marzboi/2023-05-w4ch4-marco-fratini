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
    if (phoneNumber.length <= 9) {
      setPhoneNumber(value);
    }
  }

  function handleDelete() {
    setPhoneNumber(phoneNumber.slice(phoneNumber.length, 1));
  }

  const keyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

  return {
    isCalling,
    phoneNumber,
    handleCall,
    handleHang,
    handleAddNumber,
    handleDelete,
    keyValue,
  };
}
