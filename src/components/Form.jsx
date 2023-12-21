import React from "react";
import { FaRegCopy } from "react-icons/fa6";

import { useGeneratingPassword } from "../hooks/useGeneratingPassword";
import "./Form.scss";
export const Form = () => {
  const {
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
    reset,
    message,
    copyToClipboard,
  } = useGeneratingPassword();
  return (
    <section aria-label="Password Generator Form">
      <form className="form" onSubmit={generatePassword}>
        {message && <p className="message">{message}</p>}
        <div className="input_group ">
          <label htmlFor="generated-password">Generated Password:</label>
          <input
            type="text"
            readOnly
            id="generated-password"
            defaultValue={password}
            placeholder="Your password will appear here"
          />
          <FaRegCopy className="copy-icon" onClick={copyToClipboard} />
        </div>
        <div className="input_group">
          <label htmlFor="password-length">Number of characters:</label>
          <input
            type="number"
            min={8}
            max={32}
            id="password-length"
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>

        <div className="checkbox-group">
          <div className="input_group">
            <label htmlFor="symbols">
              <input
                type="checkbox"
                id="symbols"
                checked={useSymbol}
                onChange={(e) => setUseSymbol(e.target.checked)}
              />
              Use Symbols
            </label>
          </div>
          <div className="input_group">
            <label htmlFor="numbers">
              <input
                type="checkbox"
                id="numbers"
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
              />
              Use Numbers
            </label>
          </div>
          <div className="input_group">
            <label htmlFor="lower-case">
              <input
                type="checkbox"
                id="lower-case"
                checked={useLowerCase}
                onChange={(e) => setUseLowerCase(e.target.checked)}
              />
              Use Lowercase
            </label>
          </div>
          <div className="input_group">
            <label htmlFor="upper-case">
              <input
                type="checkbox"
                id="upper-case"
                checked={useHighCase}
                onChange={(e) => setUseHighCase(e.target.checked)}
              />
              Use UpperCase
            </label>
          </div>
        </div>

        <div className="control">
          <button type="submit" className="btn generate_btn">
            Generate Password --&gt;
          </button>
          <button type="reset" className=" btn reset_btn" onClick={reset}>
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};
