import Logo from "../componants/Logo";

const FormHeader = ({ tab, content }) => {
  return (
    <div>
      <div className="mb-5 flex items-center gap-4">
        <Logo />
      </div>
      <h2 className="text-21 font-bold text-white">{content?.title}</h2>
      <p className="mt-2 text-13 text-gray-400">{content?.subtitle}</p>
    </div>
  );
};

export default FormHeader;
