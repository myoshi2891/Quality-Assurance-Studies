import React from 'react';

export default function Section00() {
    return <section id="sec0">
        <div className="table-wrap">
            <div className="table-title">
                {"書籍情報"}
            </div>
            <table className="kv-table">
                <tbody>
                    <tr>
                        <th>
                            {"タイトル"}
                        </th>
                        <td>
                            <em>
                                {"Quality Is Free: The Art of Making Quality Certain"}
                            </em>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {"著者"}
                        </th>
                        <td>
                            {"Philip B. Crosby"}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {"初版"}
                        </th>
                        <td>
                            {"1979年（McGraw-Hill）"}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {"参照版"}
                        </th>
                        <td>
                            {" New American Library, 1980（270ページ、ISBN 0451624688 / 9780451624680） "}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {"ジャンル"}
                        </th>
                        <td>
                            {" 品質マネジメント／TQM（Total Quality Management）の古典 "}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {"一言で言うと"}
                        </th>
                        <td>
                            {" 「品質を追求することは、それ自体が最もコストの低い経営戦略である」ことを、豊富な実例で説く本 "}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            {" 参考: "}
            <a href="https://books.google.com/books/about/Quality_is_Free.html?id=3TMQt73LDooC" target="_blank" rel="noopener noreferrer">
                {"Google Books - Quality is Free"}
            </a>
        </p>
    </section>;
}
