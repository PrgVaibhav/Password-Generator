import { useState } from "react";

export const useGeneratingPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [useSymbol, setUseSymbol] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useHighCase, setUseHighCase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [message, setMessage] = useState("");

  const symbols = "~`!@#$%^&*()_-+={[}]|`:;'<,>.?/";
  const numbers = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const highCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const generatePassword = (e) => {
    e.preventDefault();
    let newPassword = "";
    let charset = "";
    if (useSymbol) charset += symbols;
    if (useLowerCase) charset += lowerCase;
    if (useHighCase) charset += highCase;
    if (useNumbers) charset += numbers;

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setMessage("Copied to clipboard");
    setTimeout(() => {
      setMessage("");
    }, 700);
  };

  const reset = () => {
    setPassword("");
    setPasswordLength(12);
    setUseSymbol(true);
    setUseLowerCase(true);
    setUseHighCase(true);
    setUseNumbers(true);
  };

  return {
    password,
    passwordLength,
    setPasswordLength,
    setUseSymbol,
    setUseLowerCase,
    setUseHighCase,
    generatePassword,
    useSymbol,
    useLowerCase,
    useHighCase,
    useNumbers,
    setUseNumbers,
    copyToClipboard,
    reset,
    message,
  };
};
