import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.footer}>
        <div className="my-10 mt-40 flex grid-cols-[3fr_1fr_1fr] flex-col gap-14 text-sm sm:grid">
          <div>
            <img src={assets.logo} alt="Site Logo" className="mb-5 w-32" />
            <p className="w-full text-gray-600 md:w-2/3">
              Thank you for visiting our site! We&apos;re dedicated to providing
              you with the best in fashion and style. Stay connected by
              subscribing to our newsletter for exclusive updates, offers, and
              trends straight to your inbox. Your satisfaction is our priority,
              and we look forward to serving you. For any inquiries or support,
              feel free to contact us anytime. Happy shopping!
            </p>
          </div>
          <div>
            <p className="mb-5 text-xl font-medium">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
            <ul className="flex flex-col gap-3 text-gray-600">
              <li className="flex gap-2">
                <img
                  src="../../public/telephone.svg"
                  alt="phone"
                  className="h-6 w-6"
                />
                <p>+98-9xx xx xx xxx</p>
              </li>
              <li>
                <Link
                  to="mailto:navidzare7775@gmail.com"
                  className="flex gap-2 text-base no-underline"
                >
                  <img
                    src="../../public/envelope.svg"
                    alt="Email"
                    className="h-6 w-6"
                  />
                  navidzare7775@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com/navidzare7775"
                  className="flex gap-2 text-base no-underline"
                >
                  <img
                    src="../../public/github.svg"
                    alt="Email"
                    className="h-6 w-6"
                  />
                  @NavidZare7775
                </Link>
              </li>
              <li>
                <Link
                  to="https://t.me/navidzare7775"
                  className="flex gap-2 text-base no-underline"
                >
                  <img
                    src="../../public/telegram.svg"
                    alt="Email"
                    className="h-6 w-6"
                  />
                  @NavidZare7775
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-5">
          <hr className={style.hr} />
          <p className="py=5 text-center text-sm">
            CopyRight© 2024@Ecommerce - All rights Reserved by{" "}
            <Link
              to={"https://github.com/navidzare7775"}
              className="font-semibold text-blue-950"
            >
              @NavidZare7775
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
