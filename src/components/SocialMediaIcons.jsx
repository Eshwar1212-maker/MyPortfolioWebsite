import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/eshwar-tangirala-08973316b/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={60} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Eshwar1212-maker"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={60} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/eshwartangirala/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineInstagram size={60} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
