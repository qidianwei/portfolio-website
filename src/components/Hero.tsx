import { motion } from 'framer-motion';
import SplitText from '../components/SplitText'
import ShinyText from '../components/ShinyText'
import '../styles/Hero.css';

const Hero = () => {
  const handleAnimationComplete = (): void => {
    console.log('All letters have animated!')
  }
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <SplitText
            text="Tirth Patel"
            delay={30}
            fontSize="4rem"
            fontWeight={600}
            textAlign="center"
            responsive={true}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <ShinyText
              text="专注于用户体验与界面设计，打造令人惊艳的数字产品"
              speed={3}
            />
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          >
            <a href="#works" className="cta-button">
              查看作品
            </a>
            <a href="#contact" className="cta-link">
              联系我
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero;