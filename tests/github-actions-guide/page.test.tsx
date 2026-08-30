import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import GithubActionsGuidePage from '../../app/github-actions-guide/page';
import NavBar from '../../app/github-actions-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaid.render = mock(async () => {
    return {
      svg: '<svg data-testid="mock-mermaid"></svg>',
      diagramType: 'flowchart',
    };
  }) as unknown as typeof mermaid.render;

  const mockIntersectionObserver = mock(() => {
    return {
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    };
  });
  window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  mermaid.render = originalMermaidRender;
  window.IntersectionObserver = originalIntersectionObserver;
});

describe('GitHub Actions Guide Page - Comprehensive Suite', () => {
  it('renders the hero section with main title, eyebrow, and metadata chips', () => {
    const { container } = render(<GithubActionsGuidePage />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('GitHub Actions 中級〜上級者向け完全ガイド');

    const eyebrow = container.querySelector('.eyebrow');
    expect(eyebrow?.textContent).toContain('CI/CD');
    expect(eyebrow?.textContent).toContain('DevSecOps');

    const meta = container.querySelector('.hero-meta');
    expect(meta?.textContent).toContain('全18章');
    expect(meta?.textContent).toContain('図解: Mermaid');
    expect(meta?.textContent).toContain('中級〜上級');
    expect(meta?.textContent).toContain('docs.github.com/en/actions');
  });

  it('renders all 18 main sections with corresponding IDs and headings', () => {
    const { container } = render(<GithubActionsGuidePage />);

    const sectionIds = [
      'sec-1',
      'sec-2',
      'sec-3',
      'sec-4',
      'sec-5',
      'sec-6',
      'sec-7',
      'sec-8',
      'sec-9',
      'sec-10',
      'sec-11',
      'sec-12',
      'sec-13',
      'sec-14',
      'sec-15',
      'sec-16',
      'sec-17',
      'sec-18',
    ];

    for (const id of sectionIds) {
      const section = container.querySelector(`#${id}`);
      expect(section).not.toBeNull();
    }

    expect(screen.getByRole('heading', { level: 2, name: /はじめに/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /アーキテクチャ全体像/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /ワークフロー構文/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /トリガーイベント/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /マトリックス戦略/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /キャッシュとアーティファクト/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /並行実行制御/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /再利用可能なワークフロー.*複合アクション/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /GITHUB_TOKEN/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /Secrets.*Environments/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /OIDC.*キーレス認証/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /セキュリティ脅威/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /サプライチェーンセキュリティ.*Artifact Attestations.*SLSA/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /モニタリング.*デバッグ.*可観測性/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /コストと料金/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /実践例.*エンドツーエンドCI\/CDパイプライン/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /チェックリスト/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /参考資料/ })).toBeDefined();
  });

  it('renders all key subsections (h3 and h4) across the document', () => {
    const { container } = render(<GithubActionsGuidePage />);

    // Section 6
    expect(container.textContent).toContain('6.1 actions/cacheによるキャッシュ');
    expect(container.textContent).toContain('6.2 actions/upload-artifact / download-artifact');

    // Section 8
    expect(container.textContent).toContain('8.1 比較表');
    expect(container.textContent).toContain('8.2 再利用可能なワークフローの例');
    expect(container.textContent).toContain('8.3 複合アクションの例');
    expect(container.textContent).toContain('8.4 アーキテクチャ上の位置づけ');
    expect(container.textContent).toContain('8.5 バージョン管理のベストプラクティス');

    // Section 9
    expect(container.textContent).toContain('9.1 権限スコープの一覧(抜粋)');
    expect(container.textContent).toContain('9.2 最小権限の原則を徹底する');

    // Section 10
    expect(container.textContent).toContain('10.1 3つのスコープ');
    expect(container.textContent).toContain('10.2 環境の保護ルール(Deployment Protection Rules)');

    // Section 11
    expect(container.textContent).toContain('11.1 OIDCの利点');
    expect(container.textContent).toContain('11.2 ワークフロー側の設定');
    expect(container.textContent).toContain('11.3 信頼条件の設計');

    // Section 12
    expect(container.textContent).toContain('12.1 サードパーティアクションの信頼境界');
    expect(container.textContent).toContain('12.2 実際に起きたサプライチェーン事件(2025〜2026年)');
    expect(container.textContent).toContain('12.3 pull_request_targetと');
    expect(container.textContent).toContain('12.4 セルフホストランナーのリスク');
    expect(container.textContent).toContain('12.5 コマンドインジェクション対策');

    // Section 13
    expect(container.textContent).toContain('13.1 SLSAフレームワークとGitHubの対応レベル');
    expect(container.textContent).toContain('13.2 Artifact Attestationsの実装');
    expect(container.textContent).toContain('13.3 消費側での検証');

    // Section 14
    expect(container.textContent).toContain('14.1 Job Summaries');
    expect(container.textContent).toContain('14.2 ワークフローコマンド');
    expect(container.textContent).toContain('14.3 デバッグロギング');

    // Section 15
    expect(container.textContent).toContain('コスト最適化の実践ポイント');

    // Section 18
    expect(container.textContent).toContain('GitHub公式ドキュメント・ブログ');
    expect(container.textContent).toContain('セキュリティベンダー・技術記事(信頼できる二次情報源)');
  });

  it('renders all 6 Mermaid diagrams across the page with diagram captions', () => {
    const { container } = render(<GithubActionsGuidePage />);
    const diagrams = container.querySelectorAll('.mermaid, .mermaid-wrapper');
    expect(diagrams.length).toBeGreaterThanOrEqual(6);

    // Check diagram captions
    expect(container.textContent).toContain('Fig. 2-1 — ワークフロー実行の全体フロー');
    expect(container.textContent).toContain('Fig. 8-1 — 再利用可能なワークフローと複合アクションの関係');
    expect(container.textContent).toContain('Fig. 10-1 — 環境保護ルールを通過するデプロイフロー');
    expect(container.textContent).toContain('Fig. 11-1 — OIDCによるキーレス認証の流れ');
    expect(container.textContent).toContain('Fig. 12-1 — pull_request と pull_request_target の危険性の違い');
    expect(container.textContent).toContain('Fig. 16-1 — エンドツーエンドパイプラインの全体像');
  });

  it('renders all 7 data tables with complete and accurate content', () => {
    const { container } = render(<GithubActionsGuidePage />);
    const tables = container.querySelectorAll('table');
    expect(tables.length).toBeGreaterThanOrEqual(7);

    // Table 1: Architecture (Section 2)
    const sec2Table = container.querySelector('#sec-2 table');
    expect(sec2Table?.textContent).toContain('ワークフロー (Workflow)');
    expect(sec2Table?.textContent).toContain('ジョブ (Job)');
    expect(sec2Table?.textContent).toContain('ステップ (Step)');
    expect(sec2Table?.textContent).toContain('ランナー (Runner)');
    expect(sec2Table?.textContent).toContain('アクション (Action)');

    // Table 2: Trigger events (Section 4)
    const sec4Table = container.querySelector('#sec-4 table');
    expect(sec4Table?.textContent).toContain('push');
    expect(sec4Table?.textContent).toContain('pull_request');
    expect(sec4Table?.textContent).toContain('pull_request_target');
    expect(sec4Table?.textContent).toContain('schedule');
    expect(sec4Table?.textContent).toContain('workflow_dispatch');
    expect(sec4Table?.textContent).toContain('repository_dispatch');
    expect(sec4Table?.textContent).toContain('workflow_call');
    expect(sec4Table?.textContent).toContain('workflow_run');

    // Table 3: Reusable Workflows vs Composite Actions (Section 8)
    const sec8Table = container.querySelector('#sec-8 table');
    expect(sec8Table?.textContent).toContain('再利用の単位');
    expect(sec8Table?.textContent).toContain('呼び出し方法');
    expect(sec8Table?.textContent).toContain('複数ジョブ・別ランナー');
    expect(sec8Table?.textContent).toContain('シークレットの受け渡し');
    expect(sec8Table?.textContent).toContain('ネスト');
    expect(sec8Table?.textContent).toContain('ログの表示');
    expect(sec8Table?.textContent).toContain('保存場所');

    // Table 4: Permissions (Section 9)
    const sec9Table = container.querySelector('#sec-9 table');
    expect(sec9Table?.textContent).toContain('contents');
    expect(sec9Table?.textContent).toContain('pull-requests');
    expect(sec9Table?.textContent).toContain('issues');
    expect(sec9Table?.textContent).toContain('id-token');
    expect(sec9Table?.textContent).toContain('packages');
    expect(sec9Table?.textContent).toContain('deployments');
    expect(sec9Table?.textContent).toContain('attestations');
    expect(sec9Table?.textContent).toContain('actions');
    expect(sec9Table?.textContent).toContain('security-events');

    // Table 5: Environment Protection (Section 10)
    const sec10Table = container.querySelector('#sec-10 table');
    expect(sec10Table?.textContent).toContain('Required reviewers');
    expect(sec10Table?.textContent).toContain('Wait timer');
    expect(sec10Table?.textContent).toContain('Deployment branches/tags');
    expect(sec10Table?.textContent).toContain('カスタム保護ルール');

    // Table 6: Supply Chain Incidents (Section 12)
    const sec12Table = container.querySelector('#sec-12 table');
    expect(sec12Table?.textContent).toContain('tj-actions/changed-files');
    expect(sec12Table?.textContent).toContain('Shai-Huludワーム');
    expect(sec12Table?.textContent).toContain('trivy-action');
    expect(sec12Table?.textContent).toContain('Axiosの悪意あるバージョン公開');

    // Table 7: SLSA Levels (Section 13)
    const sec13Table = container.querySelector('#sec-13 table');
    expect(sec13Table?.textContent).toContain('Build Level 1');
    expect(sec13Table?.textContent).toContain('Build Level 2');
    expect(sec13Table?.textContent).toContain('Build Level 3');
  });

  it('renders all major code blocks across sections with code-line wrappers', () => {
    const { container } = render(<GithubActionsGuidePage />);
    const codeBlocks = container.querySelectorAll('.code-block');
    expect(codeBlocks.length).toBeGreaterThanOrEqual(15);

    // Verify key filenames in code headers
    expect(container.textContent).toContain('.github/workflows/ci.yml');
    expect(container.textContent).toContain('schedule.yml');
    expect(container.textContent).toContain('matrix-test.yml');
    expect(container.textContent).toContain('dynamic-matrix.yml');
    expect(container.textContent).toContain('cache.yml');
    expect(container.textContent).toContain('artifacts.yml');
    expect(container.textContent).toContain('concurrency.yml');
    expect(container.textContent).toContain('.github/workflows/reusable-build.yml');
    expect(container.textContent).toContain('caller.yml');
    expect(container.textContent).toContain('.github/actions/setup-python-env/action.yml');
    expect(container.textContent).toContain('permissions.yml');
    expect(container.textContent).toContain('environments.yml');
    expect(container.textContent).toContain('oidc-deploy.yml');
    expect(container.textContent).toContain('trust-policy.json');
    expect(container.textContent).toContain('pinning.yml');
    expect(container.textContent).toContain('vulnerable-pull_request_target.yml');
    expect(container.textContent).toContain('injection-risk.yml');
    expect(container.textContent).toContain('injection-safe.yml');
    expect(container.textContent).toContain('attestation.yml');
    expect(container.textContent).toContain('verify.sh');
    expect(container.textContent).toContain('summary.yml');
    expect(container.textContent).toContain('annotations.yml');
    expect(container.textContent).toContain('upload-logs-on-failure.yml');
    expect(container.textContent).toContain('.github/workflows/pipeline.yml');

    // Ensure code lines exist inside blocks
    const codeLines = container.querySelectorAll('.code-line');
    expect(codeLines.length).toBeGreaterThanOrEqual(100);
  });

  it('renders the 10-item production-ready checklist in section 17', () => {
    const { container } = render(<GithubActionsGuidePage />);
    const checklist = container.querySelector('#sec-17 .checklist');
    expect(checklist).not.toBeNull();

    const items = checklist?.querySelectorAll('li');
    expect(items?.length).toBe(10);

    const checklistText = checklist?.textContent ?? '';
    expect(checklistText).toContain('ワークフロー全体のpermissionsをread-only');
    expect(checklistText).toContain('サードパーティアクションはフルコミットSHAでピン留め');
    expect(checklistText).toContain('pull_request_targetを使う場合');
    expect(checklistText).toContain('クラウド認証はOIDCベースの短命トークンに移行');
    expect(checklistText).toContain('本番デプロイに対応するEnvironmentにRequired Reviewers');
    expect(checklistText).toContain('セルフホストランナーをパブリックリポジトリで使っていないか');
    expect(checklistText).toContain('リリース成果物にArtifact Attestations');
    expect(checklistText).toContain('キャッシュキーに依存関係ファイルのハッシュを含め');
    expect(checklistText).toContain('失敗時のログ・アーティファクトを保存');
    expect(checklistText).toContain('コストの前提(料金・無料枠)は必ずGitHub公式の最新情報で確認');
  });

  it('renders all references and links in section 18', () => {
    const { container } = render(<GithubActionsGuidePage />);
    const sec18 = container.querySelector('#sec-18');
    expect(sec18).not.toBeNull();

    const refLinks = sec18?.querySelectorAll('.ref-list a');
    expect(refLinks?.length).toBeGreaterThanOrEqual(30);

    const linkUrls = Array.from(refLinks ?? []).map((a) => a.getAttribute('href'));
    expect(linkUrls).toContain('https://docs.github.com/en/actions');
    expect(linkUrls).toContain('https://docs.github.com/en/actions/concepts/security/openid-connect');
    expect(linkUrls).toContain('https://docs.github.com/en/actions/concepts/security/artifact-attestations');
    expect(linkUrls).toContain('https://www.sysdig.com/blog/how-threat-actors-are-using-self-hosted-github-actions-runners-as-backdoors');
    expect(linkUrls).toContain('https://www.wiz.io/blog/github-actions-security-guide');
  });

  it('renders the sidebar navigation and verifies interactive behavior', () => {
    const { container } = render(<NavBar />);
    const sidebar = container.querySelector('#sidebar-nav, nav');
    expect(sidebar).not.toBeNull();

    const tocLinks = sidebar?.querySelectorAll('a');
    expect(tocLinks?.length).toBe(18);

    const toggleButton = container.querySelector('.mobile-nav-toggle');
    expect(toggleButton).not.toBeNull();
    expect(toggleButton?.getAttribute('aria-expanded')).toBe('false');

    // Click toggle to open
    if (toggleButton) {
      fireEvent.click(toggleButton);
      expect(toggleButton.getAttribute('aria-expanded')).toBe('true');
      expect(sidebar?.classList.contains('open')).toBe(true);

      // Click a link to close
      const firstLink = tocLinks?.[0];
      if (firstLink) {
        fireEvent.click(firstLink);
        expect(sidebar?.classList.contains('open')).toBe(false);
      }
    }
  });
});
