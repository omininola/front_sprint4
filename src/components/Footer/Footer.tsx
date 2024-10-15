import { FaFacebookSquare, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  const links = [
    {
      text: 'Instagram',
      icon: <FaInstagram />
    },
    {
      text: 'Facebook',
      icon: <FaFacebookSquare />
    },
    {
      text: 'Twitter',
      icon: <FaSquareXTwitter />
    },
    {
      text: 'Github',
      icon: <FaGithubSquare />
    },
    {
      text: 'Linkedin',
      icon: <FaLinkedin />
    }
  ];
  
  return (
    <footer className="flex flex-col items-center gap-6">
      <h1
        className="font-semibold text-3xl text-yellow-500"
      >
        Siga a gente nas redes sociais!
      </h1>

      <ul className="flex gap-8 flex-wrap">
        {
          links.map(link => (
            <li key={link.text}>
              <a href="/" className="flex flex-col items-center text-xl" target="_blank">
                {link.icon}
                {link.text}
              </a>
            </li>
          ))
        }
      </ul>
    </footer>
  );
}