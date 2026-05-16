'use client';

export default function NavBar() {
  return (
    <nav className="sticky-nav z-40">
      
            <div className="nav-inner">
                <span className="nav-brand">CT-TAS</span>
                <a href="#toc" className="nav-link">目次</a>
                <a href="#ch1" className="nav-link">Ch.1 概念</a>
                <a href="#ch2" className="nav-link">Ch.2 リソース</a>
                <a href="#ch3" className="nav-link">Ch.3 準備</a>
                <a href="#ch4" className="nav-link">Ch.4 デプロイ</a>
                <a href="#ch5" className="nav-link">Ch.5 影響分析</a>
                <a href="#ch6" className="nav-link">Ch.6 改善</a>
                <a href="#ai" className="nav-link">AI/トレンド</a>
                <a href="#exam" className="nav-link">試験対策</a>
                <a href="#refs" className="nav-link">参考文献</a>
            </div>
        
    </nav>
  );
}
