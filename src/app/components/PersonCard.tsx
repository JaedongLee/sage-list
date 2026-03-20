import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Person } from "../data/persons";

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <Link
      to={`/person/${person.id}`}
      className="group relative bg-red-50 overflow-hidden border-4 border-red-900/80 hover:border-red-700 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
      style={{ 
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
      }}
    >
      {/* 祥云纹样背景 */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z' fill='%238B0000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 中国风装饰边框 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-yellow-600"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-yellow-600"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-yellow-600"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-600"></div>
      </div>

      {/* 头像 */}
      <div className="relative h-72 overflow-hidden bg-stone-300">
        <img
          src={person.avatar}
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ filter: 'sepia(20%) contrast(110%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-red-900/20 to-transparent" />
      </div>

      {/* 内容区域 */}
      <div className="p-6 bg-gradient-to-b from-red-50 via-amber-50 to-red-50 relative">
        {/* 顶部装饰线 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>
        
        <h3 className="text-2xl font-black text-red-950 mb-2 group-hover:text-red-800 transition-colors text-center" 
          style={{ fontFamily: "'Ma Shan Zheng', cursive", letterSpacing: '0.1em' }}>
          {person.name}
        </h3>
        
        {/* 装饰线 */}
        <div className="flex items-center justify-center my-3">
          <div className="w-8 h-0.5 bg-red-900/30"></div>
          <div className="w-2 h-2 bg-red-900 rotate-45 mx-2"></div>
          <div className="w-8 h-0.5 bg-red-900/30"></div>
        </div>
        
        <p className="text-stone-700 text-sm line-clamp-2 mb-4 leading-relaxed text-center" style={{ fontFamily: "'Noto Serif SC', serif" }}>
          {person.shortDescription}
        </p>

        {/* 查看详情按钮 */}
        <div className="flex items-center justify-center text-red-900 font-medium text-sm group-hover:text-red-700 border-t-2 border-red-900/20 pt-4">
          <span style={{ fontFamily: "'ZCOOL XiaoWei', serif" }}>详阅</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
