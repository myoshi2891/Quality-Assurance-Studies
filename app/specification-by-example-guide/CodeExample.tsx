import React from 'react';
export default function CodeExample() {
    return (
        <pre>
            <code className="language-gherkin hljs">
                <div className="code-line">
                    <span className="hljs-keyword">{'Feature'}</span>
                    {': ログイン'}
                </div>
                <div className="code-line"></div>
                <div className="code-line">
                    {'  '}
                    <span className="hljs-keyword">{'Scenario'}</span>
                    {': 正しい認証情報でログインする'}
                </div>
                <div className="code-line">
                    {'    '}
                    <span className="hljs-keyword">{'Given'}</span>
                    {' ユーザー '}
                    <span className="hljs-string">{'"Bob"'}</span>
                    {' が登録済みである'}
                </div>
                <div className="code-line">
                    {'    '}
                    <span className="hljs-keyword">{'When'}</span>{' '}
                    <span className="hljs-string">{'"Bob"'}</span>
                    {' としてログインする'}
                </div>
                <div className="code-line">
                    {'    '}
                    <span className="hljs-keyword">{'Then'}</span>
                    {' ダッシュボード画面が表示される'}
                </div>
                <div className="code-line"></div>
                <div className="code-line">
                    {'  '}
                    <span className="hljs-keyword">{'Scenario'}</span>
                    {': 誤ったパスワードでログインする'}
                </div>
                <div className="code-line">
                    {'    '}
                    <span className="hljs-keyword">{'Given'}</span>
                    {' ユーザー '}
                    <span className="hljs-string">{'"Bob"'}</span>
                    {' が登録済みである'}
                </div>
                <div className="code-line">
                    {'    '}
                    <span className="hljs-keyword">{'When'}</span>{' '}
                    <span className="hljs-string">{'"Bob"'}</span>
                    {' として誤ったパスワードでログインする'}
                </div>
                <div className="code-line">
                    {'    '}
                    <span className="hljs-keyword">{'Then'}</span>
                    {' エラーメッセージ '}
                    <span className="hljs-string">{'"認証に失敗しました"'}</span>
                    {' が表示される'}
                </div>
            </code>
        </pre>
    );
}
