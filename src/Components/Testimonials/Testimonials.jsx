import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CustLogo1 from "../../assets/Avk_Logo.webp";
// import CustLogo2 from "../../../assets/CLIENTLOGO/COLORPANA.webp";
// import CustLogo3 from "../../../assets/CLIENTLOGO/COLORTATA.webp";
// import CustLogo4 from "../../../assets/CLIENTLOGO/COLORVELAKANI.webp";
// import CustLogo5 from "../../../assets/CLIENTLOGO/CLIENT2-Logo.webp";

const testimonials = [
  {
    id: 1,
    company: "CYIENT DLM Ltd",
    review:
      "Limana Technologies Pvt Ltd delivers high-quality automation solutions with expertise in SMT tooling, system design, and integration. Their precision and reliability make them a valuable partner across industries. We highly recommend them for their technical excellence and commitment to quality.",
    rating: 4,
    logo: `${CustLogo1}`,
  },
  {
    id: 2,
    company: "Panasonic",
    review:
      "Limana Technologies Pvt Ltd is a reliable partner in SMT tooling and automation solutions. Their expertise in system design and integration enhances efficiency and precision. We appreciate their technical excellence and commitment to quality.",
    rating: 5,
    // logo: `${CustLogo2}`,
  },
  {
    id: 3,
    company: "TATA ELECTRONICS",
    review:
      "Limana Technologies Pvt Ltd is a trusted partner in SMT tooling and automation solutions. Their expertise in system design and integration enhances manufacturing efficiency and precision. We appreciate their technical excellence and commitment to quality.",
    rating: 5,
    // logo: `${CustLogo3}`,
  },
  {
    id: 4,
    company: "VELANKANI ELECTRONICS",
    review:
      "Limana Technologies Pvt Ltd excels in SMT tooling and automation solutions, delivering precision and efficiency in manufacturing. Their expertise in system design and integration makes them a valuable partner. We appreciate their technical excellence and reliability",
    rating: 5,
    // logo: `${CustLogo4}`,
  },
  {
    id: 5,
    company: "PEGATRON",
    review:
      "Limana Technologies Pvt Ltd is a trusted provider of SMT tooling and automation solutions, ensuring precision and efficiency in manufacturing. Their expertise in system design and integration makes them a valuable partner. We highly appreciate their technical excellence and commitment to quality.",
    rating: 4,
    // logo: `${CustLogo5}`,
  },
];

const Testimonials = () => {
  return (
    <>
      <h2 className="cust-head">What Our Customer Says</h2>
      <div className="CustSays">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-left">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="client-logo"
                  />
                </div>
                <div className="testimonial-right">
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }, (_, index) => (
                      <span key={index}>
                        <i className="ri-star-s-fill"></i>
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.review}</p>
                  <p className="client-company">{testimonial.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
