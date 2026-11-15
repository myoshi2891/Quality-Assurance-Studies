import React from 'react';
import type { Metadata } from 'next';
import './guide.css';
import Section00 from './Section00';
import NavBar from './NavBar';
export const metadata: Metadata = {
  title: 'ISO/IEC/IEEE 29119-2:2021 テストプロセス 初学者向けステップバイステップ解説',
  description: '組織・マネジメント・動的テストの3層、各プロセスの活動と成果物を具体例と図解から段階的に学ぶ。',
};
/** Retain the original fixed-sidebar layout. */
export default function Page() {
  return <div className="iso29119-2-page"><NavBar /><main className="main">
      <Section00 />
    </main></div>;
}
