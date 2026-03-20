import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { persons } from "../data/persons";
import { 
  ArrowLeft, 
  Trophy, 
  ExternalLink, 
  Award, 
  BarChart3,
  Globe,
  Twitter,
  Linkedin,
  Video,
  ImageIcon,
  Users
} from "lucide-react";

export function PersonDetailPage() {
  const { id } = useParams<{ id: string }>();
  const person = persons.find(p => p.id === parseInt(id || "0"));

  if (!person) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center bg-red-50 p-12 border-4 border-red-900/40">
          <h2 className="text-2xl font-black text-red-950 mb-4" style={{ fontFamily: "'Ma Shan Zheng', cursive", letterSpacing: '0.15em' }}>未寻得此人</h2>
          <Link to="/" className="text-red-900 hover:text-red-700 font-bold underline" style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 relative overflow-hidden">
      {/* 中国风背景纹理 */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B0000' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* 顶部导航 */}
      <div className="relative bg-red-900 shadow-lg border-b-8 border-yellow-600 sticky top-0 z-50">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-yellow-100 hover:text-yellow-200 transition-colors tracking-wider"
            style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回首页
          </Link>
        </div>
      </div>

      {/* 头部英雄区域 */}
      <div className="relative bg-red-900 text-yellow-50 border-b-8 border-yellow-600">
        {/* 中国风花纹背景 */}
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z' fill='%23FCD34D' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* 左侧：头像 */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-72 overflow-hidden shadow-2xl border-8 border-yellow-600 bg-stone-300 relative">
                  {/* 装饰角 */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-red-700 z-10"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-700 z-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-red-700 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-red-700 z-10"></div>
                  
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'sepia(20%) contrast(110%)' }}
                  />
                </div>
                
                {/* 排名印章 */}
                <div className="absolute -top-6 -right-6">
                  <div className="bg-red-700 px-8 py-6 shadow-2xl border-4 border-yellow-600 transform rotate-12"
                    style={{
                      clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <Trophy className="w-8 h-8 text-yellow-100 mb-1" />
                      <div className="text-xs text-yellow-200 tracking-wider" style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>排名</div>
                      <div className="text-3xl font-black text-yellow-100" style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>第{person.rank}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：基本信息 */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="inline-block px-6 py-2 bg-red-700 border-3 border-yellow-600 text-base font-bold mb-5 shadow-lg tracking-widest"
                style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}
              >
                {person.category}
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black text-yellow-100 mb-4" 
                style={{ 
                  fontFamily: "'Ma Shan Zheng', cursive", 
                  letterSpacing: '0.15em',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.3)'
                }}>
                {person.name}
              </h1>
              
              {/* 装饰线 */}
              <div className="flex items-center justify-center lg:justify-start my-6">
                <div className="w-20 h-1 bg-yellow-600"></div>
                <div className="w-3 h-3 bg-yellow-600 rotate-45 mx-3"></div>
                <div className="w-20 h-1 bg-yellow-600"></div>
              </div>
              
              <p className="text-lg text-yellow-100/90 max-w-2xl leading-relaxed" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                {person.shortDescription}
              </p>

              {/* 社交链接 */}
              <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                {person.socialLinks.website && (
                  <a
                    href={person.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-yellow-100 text-red-900 hover:bg-yellow-200 transition-colors font-bold border-3 border-red-900 shadow-lg tracking-wider"
                    style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    官方网站
                  </a>
                )}
                {person.socialLinks.twitter && (
                  <a
                    href={person.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-red-800 hover:bg-red-700 border-2 border-yellow-600 transition-colors tracking-wider"
                    style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}
                  >
                    <Twitter className="w-5 h-5 mr-2" />
                    Twitter
                  </a>
                )}
                {person.socialLinks.linkedin && (
                  <a
                    href={person.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-red-800 hover:bg-red-700 border-2 border-yellow-600 transition-colors tracking-wider"
                    style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：详细内容 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 详细介绍 */}
            <section className="bg-red-50 shadow-xl p-10 border-4 border-red-900/40 relative">
              <div className="absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 border-yellow-600"></div>
              <div className="absolute -top-1 -right-1 w-12 h-12 border-t-4 border-r-4 border-yellow-600"></div>
              <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-4 border-l-4 border-yellow-600"></div>
              <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-yellow-600"></div>
              
              <h2 className="text-3xl font-black text-red-950 mb-8 text-center tracking-widest" 
                style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
                人物传记
              </h2>
              
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-1 bg-red-900"></div>
                <div className="w-3 h-3 bg-yellow-600 rotate-45 mx-3"></div>
                <div className="w-16 h-1 bg-red-900"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-stone-800 whitespace-pre-line leading-loose" 
                style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.05rem' }}>
                {person.detailedBio}
              </div>
            </section>

            {/* 照片展示 */}
            {person.photos.length > 0 && (
              <section className="bg-red-50 shadow-xl p-10 border-4 border-red-900/40 relative">
                <div className="absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 border-yellow-600"></div>
                <div className="absolute -top-1 -right-1 w-12 h-12 border-t-4 border-r-4 border-yellow-600"></div>
                <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-4 border-l-4 border-yellow-600"></div>
                <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-yellow-600"></div>
                
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <ImageIcon className="w-7 h-7 text-red-900" />
                  <h2 className="text-3xl font-black text-red-950 tracking-widest" 
                    style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
                    照片集锦
                  </h2>
                </div>
                
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-1 bg-red-900"></div>
                  <div className="w-3 h-3 bg-yellow-600 rotate-45 mx-3"></div>
                  <div className="w-16 h-1 bg-red-900"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {person.photos.map((photo, index) => (
                    <div key={index} className="relative overflow-hidden group border-4 border-red-900/40">
                      <img
                        src={photo}
                        alt={`${person.name} - 照片 ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ filter: 'sepia(20%) contrast(110%)' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 视频链接 */}
            {person.videoUrl && (
              <section className="bg-red-50 shadow-xl p-10 border-4 border-red-900/40 relative">
                <div className="absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 border-yellow-600"></div>
                <div className="absolute -top-1 -right-1 w-12 h-12 border-t-4 border-r-4 border-yellow-600"></div>
                <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-4 border-l-4 border-yellow-600"></div>
                <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-yellow-600"></div>
                
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <Video className="w-7 h-7 text-red-900" />
                  <h2 className="text-3xl font-black text-red-950 tracking-widest" 
                    style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
                    影像资料
                  </h2>
                </div>
                
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-1 bg-red-900"></div>
                  <div className="w-3 h-3 bg-yellow-600 rotate-45 mx-3"></div>
                  <div className="w-16 h-1 bg-red-900"></div>
                </div>
                
                <a
                  href={person.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-8 bg-amber-50 hover:bg-amber-100 transition-all group border-4 border-red-900/40"
                >
                  <div className="flex items-center space-x-5">
                    <div className="bg-red-900 p-4 border-3 border-yellow-600">
                      <Video className="w-8 h-8 text-yellow-100" />
                    </div>
                    <div>
                      <div className="font-black text-red-950 mb-2 text-lg tracking-wider" style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>
                        观看相关视频
                      </div>
                      <div className="text-sm text-stone-700" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                        了解更多关于 {person.name} 的故事
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-6 h-6 text-red-900/50 group-hover:text-red-900 transition-colors" />
                </a>
              </section>
            )}

            {/* 主要成就 */}
            <section className="bg-red-50 shadow-xl p-10 border-4 border-red-900/40 relative">
              <div className="absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 border-yellow-600"></div>
              <div className="absolute -top-1 -right-1 w-12 h-12 border-t-4 border-r-4 border-yellow-600"></div>
              <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-4 border-l-4 border-yellow-600"></div>
              <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-yellow-600"></div>
              
              <div className="flex items-center justify-center space-x-3 mb-8">
                <Award className="w-7 h-7 text-red-900" />
                <h2 className="text-3xl font-black text-red-950 tracking-widest" 
                  style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
                  人物事迹
                </h2>
              </div>
              
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-1 bg-red-900"></div>
                <div className="w-3 h-3 bg-yellow-600 rotate-45 mx-3"></div>
                <div className="w-16 h-1 bg-red-900"></div>
              </div>
              
              <ul className="space-y-5">
                {person.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-5">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-900 flex items-center justify-center border-2 border-yellow-600 shadow-md">
                      <span className="text-yellow-100 font-black" style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>{index + 1}</span>
                    </div>
                    <div className="text-stone-800 flex-1 leading-relaxed pt-1 markdown-content" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: '1.05rem' }}>
                      <ReactMarkdown>{achievement}</ReactMarkdown>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* 右侧：统计数据 */}
          <div className="lg:col-span-1">
            <div className="bg-red-50 shadow-xl p-8 border-4 border-red-900/40 sticky top-28 relative">
              <div className="absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 border-yellow-600"></div>
              <div className="absolute -top-1 -right-1 w-10 h-10 border-t-4 border-r-4 border-yellow-600"></div>
              <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-4 border-l-4 border-yellow-600"></div>
              <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 border-yellow-600"></div>
              
              <div className="flex items-center justify-center space-x-2 mb-6">
                <BarChart3 className="w-6 h-6 text-red-900" />
                <h2 className="text-2xl font-black text-red-950 tracking-widest" 
                  style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
                  影响力
                </h2>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-0.5 bg-red-900"></div>
                <div className="w-2 h-2 bg-yellow-600 rotate-45 mx-2"></div>
                <div className="w-12 h-0.5 bg-red-900"></div>
              </div>
              
              <div className="space-y-6">
                {person.stats.map((stat, index) => (
                  <div key={index} className="border-b-2 border-red-900/20 last:border-0 pb-6 last:pb-0 text-center">
                    <div className="text-sm text-red-800/70 mb-3 tracking-wider" style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>
                      {stat.label}
                    </div>
                    <div className="text-4xl font-black text-red-900" style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* 分类标签 */}
              <div className="mt-8 pt-6 border-t-4 border-red-900/20 text-center">
                <div className="text-sm text-red-800/70 mb-3 tracking-wider" style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>
                  所属类别
                </div>
                <span className="inline-block px-6 py-3 bg-red-900 text-yellow-100 font-bold border-3 border-yellow-600 shadow-lg tracking-widest"
                  style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>
                  {person.category}
                </span>
              </div>
            </div>

            {/* 后代情况 */}
            {person.descendants && (
              <div className="bg-red-50 shadow-xl p-8 border-4 border-red-900/40 mt-8 relative">
                <div className="absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 border-yellow-600"></div>
                <div className="absolute -top-1 -right-1 w-10 h-10 border-t-4 border-r-4 border-yellow-600"></div>
                <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-4 border-l-4 border-yellow-600"></div>
                <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 border-yellow-600"></div>
                
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Users className="w-6 h-6 text-red-900" />
                  <h2 className="text-2xl font-black text-red-950 tracking-widest" 
                    style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>
                    后代情况
                  </h2>
                </div>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-0.5 bg-red-900"></div>
                  <div className="w-2 h-2 bg-yellow-600 rotate-45 mx-2"></div>
                  <div className="w-12 h-0.5 bg-red-900"></div>
                </div>
                
                <ul className="space-y-4">
                  {person.descendants.map((desc, index) => (
                    <li key={index} className="text-stone-800 leading-relaxed text-center" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="relative bg-red-950 border-t-8 border-yellow-600 mt-20">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-1 bg-yellow-600"></div>
              <div className="w-4 h-4 bg-yellow-600 rotate-45 mx-4"></div>
              <div className="w-20 h-1 bg-yellow-600"></div>
            </div>
            
            <p className="text-yellow-200 text-base tracking-widest" 
              style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>
              贰零贰陆年 · 尧舜榜
            </p>
            <p className="text-yellow-300/70 text-sm mt-2 tracking-wider" 
              style={{ fontFamily: "'Noto Serif SC', serif" }}>
              爱具体的人，不要爱抽象的人
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
