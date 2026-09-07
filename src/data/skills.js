import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa'
import { SiBootstrap, SiNodedotjs, SiExpress } from 'react-icons/si'
import { TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbPalette } from 'react-icons/tb'

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    blurb: 'Building interfaces that feel considered, not just functional.',
    items: [
      { name: 'HTML5', icon: FaHtml5, note: 'Semantic structure, first and always.' },
      { name: 'CSS3', icon: FaCss3Alt, note: 'Layout systems, motion, and detail work.' },
      { name: 'JavaScript', icon: FaJs, note: 'The logic underneath every interaction.' },
      { name: 'React.js', icon: FaReact, note: 'Component architecture for real products.' },
      { name: 'Bootstrap', icon: SiBootstrap, note: 'Fast, consistent responsive layouts.' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    blurb: 'Enough of the other side of the stack to build something whole.',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, note: 'Explored through a full-stack capstone project.' },
      { name: 'Express.js', icon: SiExpress, note: 'REST APIs behind a React frontend.' },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    blurb: 'Where the interface gets decided before it gets built.',
    items: [
      { name: 'Figma', icon: FaFigma, note: 'Wireframes through to shippable UI.' },
      { name: 'Photoshop', icon: TbBrandAdobePhotoshop, note: 'Image editing and visual assets.' },
      { name: 'Illustrator', icon: TbBrandAdobeIllustrator, note: 'Vector work and visual identity.' },
      { name: 'Canva', icon: TbPalette, note: 'Quick, polished visual content.' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    blurb: 'The everyday workbench.',
    items: [
      { name: 'Git', icon: FaGitAlt, note: 'Version control, branching, review.' },
      { name: 'GitHub', icon: FaGithub, note: 'Collaboration and shipping.' },
    ],
  },
]
