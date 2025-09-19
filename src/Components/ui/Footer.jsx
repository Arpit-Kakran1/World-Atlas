import footerData from '../../api/footerData.json'
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
const Footer = () => {
  const footerIcon = {
    MdPlace:<MdPlace />,
    IoCallSharp:<IoCallSharp />,
    TbMailPlus:<TbMailPlus />
  }
  return (
    <footer className="footer-section">
      <div className='container grid grid-three-cols'>
        {footerData.map((currData,index) => {
          const { icon, title, details } = currData;

          return (<div key={index} className='footer-contact'>
            <div className="icon">{footerIcon[icon]}</div>
            <div className="footer-contact-text">
              <p>{title}</p>
              <p>{details}</p>
              
            </div>

          </div>)
        })}
      </div>
    </footer>
  )
}

export default Footer
