import React from 'react';
import Card from '../components/card/index';

import { version } from '../../../package.json';

export default class Index extends React.Component {
  render() {
    return (
      <Card title={<span>Shift Manager v{ version }</span>}>
        <p>
          シフトマネージャーです。データを元に自動でシフトテーブルを生成します。<br/>
          全てフロントエンドで完結するウェブアプリですので、データはアクセスしている端末内に保管されます。<br/>
          その為、ブラウザがリセットされたりしたらデータ飛びます。当然他の人はあなたのセーブデータは覗けません。
        </p>

        <p>
          このソフトウェアはAGPL-3.0でライセンスされています。
          <a href="https://github.com/yuzulabo/shift-manager" target="_blank" rel="noopener noreferrer">ソースコードはGitHubから入手可能です。</a>
        </p>
      </Card>
    );
  }
}
