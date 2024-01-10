import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
       
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants} >
        <motion.div
          className="box p-6overflow-auto"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Web Developing</h2>
          <p className=""> 
            Elevate user experiences with my frontend development expertise.
            Crafting visually appealing and intuitive interfaces, I seamlessly
            blend creativity with functionality. From responsive designs to
            engaging user interactions, I bring your digital vision to life.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Web Developing</h2>
          <p>
            Powering your digital infrastructure, my backend development prowess
            ensures robust, scalable, and secure systems. With expertise in
            server-side technologies, databases, and API integrations, I
            architect the backbone of your applications, optimizing performance
            and ensuring seamless functionality.
          </p>
      </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mobile App Developing</h2>
          <p>
            Transforming ideas into dynamic mobile experiences, I specialize in
            crafting innovative and user-friendly applications for iOS and
            Android platforms. From concept to deployment, my mobile app
            development skills encompass UI/UX design, native or cross-platform
            development, and integration of cutting-edge features for a standout
            mobile presence
          </p>
    </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
