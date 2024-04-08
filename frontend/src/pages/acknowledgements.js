import * as React from "react";
import Layout from "../components/Layout";
import explanation1 from "../images/explanation-1.png";
import explanation2 from "../images/explanation-2.png";
import explanation3 from "../images/explanation-3.png";
import explanationScenarios from "../images/explanation-scenarios.png";
import explanationMap from "../images/explanation-map.png";
import kyodaiLogo from "../images/katsura-library-at-kyoto.jpg";

const Acknowledgements = () => (
  <Layout>
    <div className="max-w-6xl mx-auto text-justify" style={{ color: "black" }}>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "80px", borderRadius: "3px" }}></div>
      <h1 className="md:text-4xl text-3xl font-bold my-4 md:my-30 py-4 border-b-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white" }}>
        プロジェクトの説明
      </h1>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 1)", padding: "100px", borderRadius: "5px", margin: "-17px 0 0 0" }}>
        <div className="grid md:grid-cols-2 gap-4 items-end">
          <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px" }}>
            <img className="flex w-full" src={explanation1} alt="説明" />
          </div>
          <div style={{ backgroundColor: "white", padding: "0px", borderRadius: "60px" }}>
            <img className="flex w-full" src={explanationScenarios} alt="説明" />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "30px", borderRadius: "3px" }}></div>
      <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white" }}>
        プロジェクトについて
      </h1>
      <p className="stretch-p" style={{ padding: "60px", backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "5px", margin: "-20px 0 0 0" }}>
        オープン、閉鎖および半閉鎖空間における混雑現象の理解は、桂キャンパスのような機関設定における交通量に対するトリップスケジューリングの為の情報収集とより効率的な管理に非常に重要です。この研究では、メインスチューデントカフェテリア（カフェテリアセレネ）におけるWi-Fiセンサーデータを利用して、昼休み営業時間（11:00〜14:00）における桂キャンパスの混雑を予測することを主な目的としています。この実験の目的は、カフェテリアでの混雑現象をより良く理解し、トリップスケジューリング前の混雑予測情報の価値を評価することです。予想されるプロジェクトの成果には、キューの長さが短くなり、全体的なエンドユーザーエクスペリエンスが向上することなどが含まれます。また、桂キャンパス内の指定されたおよび未指定の営業時間中の追加の交通量情報が、「桂キャンパスWi-Fi Times」として参照されるように、簡単なロケーションの説明と有用なリンク情報とともに提供されました。
      </p>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "30px", borderRadius: "3px" }}></div>
      <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white", margin: "-80px 0 0 0" }}>
        センサーマップ
      </h1>
      <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px", margin: "-20px 0 0 0" }}>
        <img className="flex w-full p-4" src={explanationMap} alt="説明" />
      </div>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "80px", borderRadius: "3px" }}></div>
      <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white", margin: "-80px 0 0 0" }}>
        Wi-FiパケットセンサーとWi-Fiセンサーデータについて
      </h1>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "30px", borderRadius: "3px" }}></div>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "30px", borderRadius: "3px" }}></div>
      <p className="stretch-p" style={{ padding: "60px", backgroundColor: "rgba(255, 255, 255,1)", borderRadius: "5px", margin: "-120px 0 0 0" }}>
        Wi-Fiセンサーは
比較的小型で低コスト、低消費電力のデバイスであり、Raspberry Pi Model Bをベースに構築されています。これには、Wi-Fiパケットセンサーの影響範囲内で自発的に発信されるBluetoothおよびWi-Fiプローブリクエストを収集するための追加のWi-Fi USBドングルが含まれています。初期の生データ処理には、キャプチャされたデバイスの元のMAC（Media Access Control）アドレスを、ユニークな数字と文字の組み合わせで構成される匿名化された識別子（AMACs）で置き換えることが含まれます。処理されたプローブリクエストレコードは、その後、長期エボリューション（LTE）接続を介して中央サーバーにアップロードされます。各レコードにはUnix Time、タイムスタンプ、匿名化されたメディアアクセスコントロール（AMAC）、Bluetoothシグナルパラメータ（SC）、受信信号強度指示子（RSSI）、組織ユーザー識別子（OUI）、およびユニークなアクセスポイント識別子（AMPID）が含まれます。これらのレコードは、ローカルで取得され、さまざまな時間間隔のAMACカウントを集計することでさらに前処理され、その後、「混雑」という様々な側面（存在、移動、密度など）を分析するために使用されます。

</p>
<div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "80px", borderRadius: "3px" }}></div>
<h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white" }}>
  グラフィカルディスプレイインターフェースについて
</h1>
<p className="stretch-p" style={{ padding: "10px", backgroundColor: "rgba(255, 255, 255,1)", borderRadius: "5px", margin: "-20px 0 0 0" }}>
  グラフィカルディスプレイインターフェースは異なりますが、下の図を参照してください。すなわち、「15分間隔のカフェテリアセンサー」（11:00〜14:00）および「1時間間隔の他の場所センサー」（6:00〜17:00）、どちらもここで説明した原理に基づいて操作されます。ドロップダウンメニューの任意の場所について、バーグラフは通常の週の同じ（講義）曜日に過去1か月間の平均Wi-Fiクラウドトラフィック履歴データに基づいて、特定の時点での場所の相対的な「忙しさ」を示します。現在の時間が指定された範囲内にある場合、現在のバーはライトグレーで強調表示されます（ライブヒストリカルデータ）、ライブWi-Fiクラウドトラフィックカウント（ライブデータ）のオーバーレイがシアンブルーで表示され、その特定の時点での場所の通常のWi-Fiクラウドカウントに比べてアクティブであるかどうかが示されます。一日のピークタイムはグラフィカルディスプレイから明確に確認でき、各特定の時間間隔のライブステータスの簡単な説明が返されます。以下のイラストで示されているシナリオによって、「いつものように忙しい」、「いつもより忙しい」、「いつもより少ない忙しい」、「いつもよりずっと忙しい」、「いつもよりずっと少ない忙しい」といった、ライブステータスが表示されます。
</p>
<div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "60px", borderRadius: "3px" }}></div>
<div style={{ backgroundColor: "rgba(255, 255, 255, 1)", padding: "60px", borderRadius: "3px", margin: "-0px 0 0 0" }}>
  <div className="grid md:grid-cols-2 gap-4 items-end">
    <img className="flex w-full md:py-16" src={explanation2} alt="説明" />
    <img className="flex w-full md:py-16" src={explanation3} alt="説明" />
  </div>
</div>
<h1 className="md:text-4xl text-3xl font-bold my-4 md:my-8 py-2 border-b-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white" }}>
  謝辞
</h1>
<div className="grid gap-4">
  <p className="stretch-p" style={{ padding: "10px", backgroundColor: "rgba(255, 255, 255,1)", borderRadius: "5px", margin: "0", margin: "-40px 0 0 0" }}>
    (日本語) 本プロジェクトは、桂キャンパス実証研
    <ul>
  <li>
    JRISS: <a href="https://www.jriss.jp/" style={{textDecoration: 'underline', color: 'blue'}}>https://www.jriss.jp/</a>
  </li>
  <li>
    Project movie: <a href="https://www.youtube.com/watch?v=5fvl1YeWqZE" style={{textDecoration: 'underline', color: 'blue'}}>https://www.youtube.com/watch?v=5fvl1YeWqZE</a>
  </li>
  <li>
    Contact e-mail for questions or comments: <a href="mailto:its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp" style={{textDecoration: 'underline', color: 'blue'}}>its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp</a>
  </li>
</ul>
  </p>
</div>
</div>
</Layout>
);
export default Acknowledgements;