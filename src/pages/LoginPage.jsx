import { useState } from "react";
import { FiEye, FiMessageSquare } from "react-icons/fi";
import TabNavigation from "../componants/TabNavigation";
import LoginForm from "../componants/LoginForm";
import FormHeader from "../componants/FormHeader";
import BackgroundEffect from "../componants/BackgroundEffect";
import { PAGE_CONTENT, fields } from "../staticData";

const LoginPage = () => {
  const [tab, setTab] = useState("signin");
  const isSignup = tab === "signup";

  const formFields = isSignup
    ? [
        {
          label: "User Name",
          type: "text",
          name: "username",
          placeholder: "Enter username",
        },
        ...fields,
      ]
    : fields;

  const content = PAGE_CONTENT[tab];

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090910]">
      <BackgroundEffect />
      <div className="relative z-10 w-107.5 rounded-30 border border-white/10 bg-white/5 p-[42px_40px_34px] shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl min-h-160 max-h-160">
        <FormHeader tab={tab} content={content} />
        <TabNavigation tab={tab} setTab={setTab} />
        <LoginForm
          tab={tab}
          fields={formFields}
          isSignup={isSignup}
          setTab={setTab}
        />
      </div>
    </div>
  );
};

export default LoginPage;
