import graphicDesign from '../assets/pattern-graphic-design.svg'
import apps from '../assets/pattern-apps.svg'
import illustrations from '../assets/pattern-illustrations.svg'
import motionGraphics from '../assets/pattern-motion-graphics.svg'
import photography from '../assets/pattern-photography.svg'
import uiUx from '../assets/pattern-ui-ux.svg'
import profileImg from '../assets/image-amy.webp'
import imageSlide1 from '../assets/image-slide-1.jpg'
import imageSlide2 from '../assets/image-slide-2.jpg'
import imageSlide3 from '../assets/image-slide-3.jpg'
import imageSlide4 from '../assets/image-slide-4.jpg'
import imageSlide5 from '../assets/image-slide-5.jpg'

export const mainCard1 = [
	{
		id: 1,
		className: 'card1',
		title: 'Graphic designer',
		img: `${graphicDesign}`,
	},
]
export const mainCard2 = [
	{
		id: 1,
		className: 'card2',
		title: 'UI/UX',
		img: `${uiUx}`,
	},
	{
		id: 2,
		className: 'card3',
		title: 'Apps',
		img: `${apps}`,
	},
]
export const mainCard3 = [
	{
		id: 1,
		className: 'card4',
		title: 'Illustrations',
		img: `${illustrations}`,
	},
]
export const mainCard4 = [
	{
		id: 1,
		className: 'card5',
		title: 'Photography',
		img: `${photography}`,
	},
	{
		id: 2,
		className: 'card6',
		title: 'Motion Graphics',
		img: `${motionGraphics}`,
	},
]

export const profile = [
	{
		id: 1,
		name: 'Amy',
		title: 'I’m Amy, and I’d love to work on your next project',
		info: 'I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!',
		img: `${profileImg}`,
		className: 'profile',
	},
]

export const work = [
	{
		id: 1,
		name: 'image slide 1',
		img: `${imageSlide1}`,
	},
	{
		id: 2,
		name: 'image slide 2',
		img: `${imageSlide2}`,
	},
	{
		id: 3,
		name: 'image slide 3',
		img: `${imageSlide3}`,
	},
	{
		id: 4,
		name: 'image slide 4',
		img: `${imageSlide4}`,
	},
	{
		id: 5,
		name: 'image slide 5',
		img: `${imageSlide5}`,
	},
]
