import { motion } from 'framer-motion';
import { 
  FaCloud, 
  FaDatabase, 
  FaCode, 
  FaChartBar, 
  FaJava, 
  FaHtml5,
  FaUserGraduate 
} from 'react-icons/fa';
import { SiMongodb, SiOracle } from 'react-icons/si';

const CertificationsSection = () => {
  const certifications = [
    {
      name: "AWS Cloud Foundations",
      provider: "Amazon Web Services",
      icon: FaCloud,
      color: "#FF9900"
    },
    {
      name: "MongoDB for Students",
      provider: "MongoDB University",
      icon: SiMongodb,
      color: "#47A248"
    },
    {
      name: "Java Bootcamp",
      // provider: "E-Box",
      icon: FaJava,
      color: "#007396"
    },
    {
      name: "DSA Fundamentals",
      // provider: "E-Box",
      icon: FaCode,
      color: "#00D9FF"
    },
    {
      name: "HTML/CSS Bootcamp",
      // provider: "E-Box",
      icon: FaHtml5,
      color: "#E34F26"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Certifications & </span>
            <span className="neon-text">Training</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                boxShadow: `0 0 30px ${cert.color}40`
              }}
              whileTap={{ scale: 0.95 }}
              className="gradient-border card-3d cursor-pointer"
            >
              <div className="gradient-border-content p-6 text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  <cert.icon 
                    className="text-3xl"
                    style={{ color: cert.color }}
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {cert.name}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {cert.provider}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
