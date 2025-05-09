import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectPreview } from '../types';
import '../styles/Works.css';


const Works = () => {
  // 模拟作品数据，实际项目中可以从API获取或使用CMS
  const projects: ProjectPreview[] = [
    {
      id: 1,
      title: 'Fandom',
      category: 'UI/UX',
      images: new URL('../assets/fandom/fandom04.jpg', import.meta.url).href,
    },
    {
      id: 2,
      title: 'Easy Talk',
      category: 'UI/UX',
      images: new URL('../assets/easTalk/easy15.jpg', import.meta.url).href,
    },
    {
      id: 3,
      title: 'Fandom Web',
      category: 'Web设计',
      images: new URL('../assets/fandomweb/fandomweb26.jpg', import.meta.url)
        .href,
    },
    {
      id: 4,
      title: '品牌设计',
      category: '桂煮 烫捞·炸串',
      images: new URL(
        '../assets/graphicDesign/graphicDesign29.jpg',
        import.meta.url
      ).href,
    },
    {
      id: 5,
      title: '京东双十一 AI海报设计',
      category: 'AIGC运用',
      images: new URL('../assets/aicg/cover.jpg', import.meta.url).href,
    },
    {
      id: 6,
      title: 'Logo设计',
      category: '北京农学院动物医院等',
      images: new URL('../assets/logo/logo1.jpg', import.meta.url).href,
    },
  ]

  return (
    <section id="works" className="works-section">
      <div className="works-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          精选作品
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          探索我的设计作品集，了解我如何通过设计解决问题
        </motion.p>

        <div className="works-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="work-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/project/${project.id}`} className="work-item-link">
                <div className="work-image">
                  {project.images ? (
                    <img src={project.images} alt={project.title} />
                  ) : (
                    <div className="placeholder-image">
                      <span>项目图片</span>
                    </div>
                  )}
                </div>
                <div className="work-info">
                  <h3 className="work-title">{project.title}</h3>
                  <p className="work-category">{project.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Works;