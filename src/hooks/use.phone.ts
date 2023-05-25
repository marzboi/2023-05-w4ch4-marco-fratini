import { useCallback, useEffect, useMemo, useState } from "react";
import { Phone } from "../models/phone";

export function usePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<Phone>();

  function handleCall() {
    setIsCalling(true);
  }

  function handleHang() {
    setIsCalling(true);
    setPhoneNumber;
  }

  return { isCalling, phoneNumber, handleCall, handleHang };
}
