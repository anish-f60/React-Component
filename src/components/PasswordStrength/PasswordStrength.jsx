import { useState } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");

  const PASSWORD_CHECKS = [
    {
      name: "Lowercase",
      regex: /[a-z]/,
    },
    {
      name: "Uppercase",
      regex: /[A-Z]/,
    },
    {
      name: "Number",
      regex: /[0-9]/,
    },
    {
      name: "Symbols",
      regex: /[^a-zA-Z0-9\s]/,
    },
  ];

  function getProgressLength() {
    let score = 0;

    if (password.length > 3) {
      score = Math.min(6, Math.floor(password.length / 3));
      score +=
        +/[a-z]/.test(password) +
        +/[A-Z]/.test(password) +
        +/[0-9]/.test(password) +
        +/[^a-zA-Z0-9\s]/.test(password);
    }

    return score;
  }

  let passwordStrengthLabel;

  if (getProgressLength() < 3) {
    passwordStrengthLabel = "Weak";
  } else if (getProgressLength() < 6) {
    passwordStrengthLabel = "Medium";
  } else if (getProgressLength() > 6) {
    passwordStrengthLabel = "Strong";
  }

  return (
    <div>
      <h1 className="text-2xl text-center">Password Strength</h1>
      <div className="mt-5 flex flex-col justify-center items-center">
        <input
          placeholder="Enter the password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          className="h-10 rounded-md px-2.5 border mb-5"
        />
        <div className="password-checks flex items-center gap-4">
          {PASSWORD_CHECKS.map((check) => {
            return (
              <p
                className={`${
                  check.regex.test(password) ? "text-green-700" : "text-black"
                } text-sm transition-colors`}
              >
                {check.name}
              </p>
            );
          })}
        </div>
        <progress
          value={getProgressLength()}
          max={10}
          className={`bg-gray-200 h-1.5 rounded-full overflow-hidden my-3`}
        ></progress>
        {password && <p>Your password is {passwordStrengthLabel}</p>}
      </div>
    </div>
  );
};

export default PasswordStrength;
