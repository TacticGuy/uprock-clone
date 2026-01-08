import { motion } from 'framer-motion';
const Hero = () => {
  const marqueeText = [
    'Feeling lonely?',
    'Your words unheard?',
    'Feeling misunderstood?'
  ];
  return (
    <div className="relative min-h-screen bg-[rgb(245,243,242)] overflow-hidden">
      {/* Animated Background Marquee */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeText.map((text, idx) => (
                <span
                  key={idx}
                  className="text-[120px] font-bold text-[rgba(62,26,1,0.05)] px-10"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      {/* Header Navigation */}
      <header className="relative z-10 px-6 py-5">
        <nav className="max-w-[1920px] mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <img 
              src="https://companion.uprock.pro/thumb/2/BJ079p5p_7wSk9zd_EhfMA/380r460/d/companion_img.png" 
              alt="companion" 
              className="h-10"
            />
            <span className="text-2xl font-bold text-[rgb(62,26,1)]" style={{ fontFamily: 'Inter, sans-serif' }}>
              companion
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#about" className="text-[rgb(62,26,1)] hover:text-[rgb(255,99,0)] transition-colors cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
              About
            </a>
            <a href="#functions" className="text-[rgb(62,26,1)] hover:text-[rgb(255,99,0)] transition-colors cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
              Functions
            </a>
            <a href="#advantages" className="text-[rgb(62,26,1)] hover:text-[rgb(255,99,0)] transition-colors cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
              Advantages
            </a>
            <a href="#specifications" className="text-[rgb(62,26,1)] hover:text-[rgb(255,99,0)] transition-colors cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
              Specifications
            </a>
            <button 
              className="px-6 py-3 bg-[rgb(255,99,0)] text-white rounded-full hover:bg-[rgb(255,120,20)] transition-colors cursor-pointer font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Pre-order
            </button>
          </motion.div>
        </nav>
      </header>
      {/* Hero Content - Centered Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="max-w-7xl w-full flex flex-col items-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span 
              className="inline-block px-4 py-2 bg-[rgba(62,26,1,0.08)] rounded-full text-[rgb(62,26,1)] text-sm font-medium mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Solution
            </span>
          </motion.div>
          {/* Main Hero Text - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-[rgb(62,26,1)] mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Feeling lonely?
            </h1>
            <p 
              className="text-xl md:text-2xl text-[rgba(62,26,1,0.7)] max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Companion is a personal AI device that learns from thousands of conversations with an open line of psychological support.
            </p>
          </motion.div>
          {/* Center Device Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative mb-12"
          >
            <motion.img 
              src="https://companion.uprock.pro/thumb/2/BJ079p5p_7wSk9zd_EhfMA/380r460/d/companion_img.png"
              alt="Companion Device"
              className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            />
            {/* Floating Orbs/Glow Effect */}
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 bg-[rgb(255,99,0)] rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-[rgb(255,99,0)] rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.25, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
            />
          </motion.div>
          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[rgb(255,99,0)] text-white rounded-full text-lg font-semibold hover:bg-[rgb(255,120,20)] transition-colors cursor-pointer shadow-xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Pre-order
          </motion.button>
          {/* People Images - Bottom Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-3 gap-6 max-w-4xl w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <img 
                src="https://companion.uprock.pro/thumb/2/J6iOwz1MyE0s68Q983mgBA/1024r1536/d/chatgpt_image_23_iyun_2025_g_16_20_46.webp"
                alt="Person 1"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <img 
                src="https://companion.uprock.pro/thumb/2/mG70xPoUzsE9BQuOL_W0Gg/1024r1536/d/chatgpt_image_23_iyun_2025_g_17_26_10.webp"
                alt="Person 2"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <img 
                src="https://companion.uprock.pro/thumb/2/jvfGfiKGnnxs0M-QDK4omQ/1024r1536/d/chatgpt_image_23_iyun_2025_g_17_19_29.webp"
                alt="Person 3"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(245,243,242)] to-transparent pointer-events-none" />
    </div>
  );
};
export default Hero;