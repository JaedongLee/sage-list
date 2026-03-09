import { useState } from "react";
import { PersonCard } from "../components/PersonCard";
import { persons } from "../data/persons";
import { Trophy, Users } from "lucide-react";

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");

  const categories = ["全部", ...Array.from(new Set(persons.map(p => p.category)))];

  const filteredPersons = selectedCategory === "全部" 
    ? persons 
    : persons.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-amber-50 relative overflow-hidden">
      {/* 中国风背景纹理 */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B0000' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* 头部 */}
      <header className="relative bg-red-900 shadow-2xl border-b-8 border-yellow-600 sticky top-0 z-50">
        {/* 传统云纹装饰 */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* 印章样式图标 */}
              <div className="relative">
                <div className="bg-red-700 p-4 border-4 border-yellow-600 shadow-2xl transform -rotate-3"
                  style={{
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                  }}
                >
                  <Trophy className="w-10 h-10 text-yellow-100" />
                </div>
              </div>
              
              <div>
                <h1 className="text-5xl font-black text-yellow-100 mb-2" 
                  style={{ 
                    fontFamily: "'Ma Shan Zheng', cursive", 
                    letterSpacing: '0.15em',
                    textShadow: '3px 3px 0px rgba(0,0,0,0.3)'
                  }}>
                  尧舜榜
                </h1>
                <p className="text-base text-yellow-200 tracking-widest" style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>
                  春风杨柳万千条，六亿神州尽舜尧
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-red-800 px-5 py-3 border-3 border-yellow-600 shadow-lg">
              <Users className="w-6 h-6 text-yellow-200" />
              <div className="text-yellow-100" style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>
                <div className="text-xs text-yellow-300">共计</div>
                <div className="text-xl font-bold">{persons.length} 位</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 主要内容区 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* 分类筛选 */}
        <div className="mb-12 bg-red-50 p-8 border-4 border-red-900/40 shadow-xl relative">
          {/* 装饰角 */}
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-yellow-600"></div>
          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-yellow-600"></div>
          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-yellow-600"></div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-yellow-600"></div>
          
          <h2 className="text-2xl font-black text-red-950 mb-6 text-center" 
            style={{ fontFamily: "'Ma Shan Zheng', cursive", letterSpacing: '0.2em' }}>
            尧与舜
          </h2>
          
          {/* 装饰线 */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-1 bg-red-900"></div>
            <div className="w-3 h-3 bg-yellow-600 rotate-45 mx-3"></div>
            <div className="w-16 h-1 bg-red-900"></div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 font-bold transition-all duration-300 border-3 shadow-md transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-red-900 text-yellow-100 border-yellow-600 shadow-xl scale-105"
                    : "bg-red-50 text-red-900 border-red-900/40 hover:bg-red-100"
                }`}
                style={{ 
                  fontFamily: "'ZCOOL XiaoWei', serif",
                  letterSpacing: '0.1em',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 人物网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPersons.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        {/* 空状态 */}
        {filteredPersons.length === 0 && (
          <div className="text-center py-20 bg-red-50 border-4 border-red-900/40 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-red-900 w-16 h-16 rotate-45 border-4 border-yellow-600"></div>
            </div>
            <div className="bg-stone-200 w-24 h-24 flex items-center justify-center mx-auto mb-6 border-4 border-red-900/40">
              <Users className="w-12 h-12 text-red-900/50" />
            </div>
            <p className="text-red-900 text-xl tracking-widest" style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>
              此类别暂无人物
            </p>
          </div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="relative bg-red-950 border-t-8 border-yellow-600 mt-20">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            {/* 装饰元素 */}
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