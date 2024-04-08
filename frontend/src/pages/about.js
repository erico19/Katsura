import * as React from "react";
import Layout from "../components/Layout";
import { useI18next } from 'gatsby-plugin-react-i18next'; // Import the useI18next hook
import explanation1 from "../images/explanation-1.png";
import explanation2 from "../images/explanation-2.png";
import explanation3 from "../images/explanation-3.png";
import explanationScenarios from "../images/explanation-scenarios.png";
import explanationMap from "../images/explanation-map.png";
import bgimg from "../images/katsura river.jpg";

const About = () => {
  const { language } = useI18next(); // Get the current language

  // Define content in both English and Japanese
  const content = {
    en: {
      projectExplanation: "Project explanations",
      aboutTheProject: "About the Project",
      sensorsMap: "Sensors map",
      aboutWiFiSensorsAndData: "About Wi-Fi packet sensors and Wi-Fi sensor data",
      graphicalDisplayInterface: "About the graphical display interface",
      acknowledgements: "Acknowledgements",
      projectDescription: "Understanding the crowding phenomenon at open, confined and semi-confined spaces during operational hours, is highly consequential for informed trip scheduling and more efficient management of such sites subject to crowd traffic in an institutional setting such as Katsura Campus. In this study, our main objective is to utilize Wi-Fi sensor data to predict crowding at the Main Student Cafeteria (Cafeteria Selene) at Katsura Campus during the Lunch break operational period (11:00 AM - 2:00 PM). The purpose of this Experiment is to enhance a better understanding of the crowding phenomenon at the Cafeteria and to assess the value of the crowd forecast information prior to trip scheduling. Some of the expected project outcomes include but are not limited to shorter waiting times manifesting through shorter queue lengths and an overall better end-user experience. Additional crowd traffic information during both the designated and undesignated operational hours at other access points (other locations), within Katsura Campus has been provided with brief location descriptions and useful links information to encapsulate what is now referred to as “Katsura Campus Wi-Fi Times”.",
      aboutWiFiSensors: "Wi-Fi sensors are relatively small, low-cost, low power devices integrated with a dual set of Wi-Fi sniffers, built upon the Raspberry Pi Model B with an additional Wi-Fi USB dongle for passive collection of Bluetooth and Wi-Fi probe requests spontaneously emitted by Wi-Fi configurable devices such as Smartphones within the influence area of the Wi-Fi packet sensor. Preliminary raw data handling involves the re-configuration of the identities of the captured devices by replacing their original MAC(Media Access Control) addresses with anonymized identifiers (AMACs) consisting of unique arrays of number-letter combinations. The processed probe request records are then uploaded through the long term evolution(LTE) connection to the central server. Each record contains the; Unix Time, Timestamp, Anonymized Media Access Control (AMAC), Bluetooth Signal Parameter(SC), Received Signal Strength Indicator (RSSI), Organizational User Identifier (OUI) and the Unique Access point identifier (AMPID). These records are then retrieved locally and further preprocessed by aggregating the AMAC counts for different time intervals prior to analyzing various aspects of the “crowd” such as presence, movement and density.",
      graphicalDisplayExplanation: "Although the Graphical display interfaces differ, see illustrations below i.e., “Cafeteria Sensors in 15 Minute Intervals” (11:00AM – 2:00PM) and “Other locations sensors in Hourly intervals” (6:00AM – 5:00PM), Both operate upon the same principle as here explained. For any location on the drop down menu, The bar graph shows the relative “busyness” of the location at a particular time on a typical day of the week, based on the average Wi-Fi crowd traffic historical data in Navy Blue (Historical data) of the same (Lecture) day of the week over the past month. If the CURRENT TIME is within the specified range, then the current bar will be highlighted in Light grey (Live Historical data) with  an overlay of the live Wi-Fi crowd traffic count (Live data) in Cyan Blue showing how active the location is as compared to its regular Wi-Fi crowd count at that particular time. The peak times during the day are clearly visible from the graphical display  and a brief description of the live status for each specific time interval is returned such as; “As Busy as Usual”, “Busier than Usual”, “Less Busier than Usual” , “Much Busier than Usual” or “Much less Busier than Usual” as shown in by the Scenarios in the illustrations below.",
      acknowledgementsTitle: "Acknowledgements",
      acknowledgementsContent: "Content about acknowledgements...",
      jrisLink: "https://www.jriss.jp/",
      projectMovieLink: "https://www.youtube.com/watch?v=5fvl1YeWqZE",
      contactEmail: "its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp"
    },
    jp: {
      projectExplanation: "プロジェクトの説明",
      aboutTheProject: "プロジェクトについて",
      sensorsMap: "センサーマップ",
      aboutWiFiSensorsAndData: "Wi-FiパケットセンサーとWi-Fiセンサーデータについて",
      graphicalDisplayInterface: "グラフィカルディスプレイインターフェイスについて",
      acknowledgements: "謝辞",
      projectDescription: "運用時間中のオープン、閉鎖および半閉鎖空間での混雑現象を理解することは、桂キャンパスのような施設での混雑交通に対するより効率的なトリップスケジューリングとより効果的な管理にとって極めて重要です。この研究では、主な目標は、桂キャンパスのメイン学生食堂（カフェテリアセレネ）でのWi-Fiセンサーデータを利用して、ランチ休憩時間帯（11:00 AM - 2:00 PM）における混雑を予測することです。この実験の目的は、カフェテリアでの混雑現象をよりよく理解し、トリップスケジューリングの前に予測情報の価値を評価することです。予想されるプロジェクトの成果には、待ち時間の短縮（キューの長さの短縮を通じて現れる）や、全体的なユーザーエクスペリエンスの向上などが含まれます。また、桂キャンパス内の他のアクセスポイント（他の場所）での指定されたおよび非指定の運用時間中の追加の混雑交通情報が、「桂キャンパスWi-Fiタイムズ」と呼ばれるものを包括するために、簡単な場所の説明と便利なリンク情報が提供されています。",
      aboutWiFiSensors: "Wi-Fiセンサーは、Raspberry Pi Model Bをベースに構築された、比較的小型で低コスト、低消費電力のデバイスで、Wi-Fiパケットセンサーの影響範囲内のスマートフォンなどのWi-Fi構成可能デバイスによって自発的に送信されたBluetoothおよびWi-Fiプローブリクエストを受動的に収集するために、追加のWi-Fi USBドングルが組み込まれた2つのWi-Fiスニファーを備えています。初期の生データ処理では、キャプチャされたデバイスの識別情報を、それらの元のMAC（Media Access Control）アドレスを一意の数字と文字の組み合わせの一意の配列で置き換えることによって行われます。処理されたプローブリクエストレコードは、次に、中央サーバーへの長期エボリューション（LTE）接続を介してアップロードされます。各レコードには、Unix Time、タイムスタンプ、匿名化されたMedia Access Control（AMAC）、Bluetooth Signal Parameter（SC）、Received Signal Strength Indicator（RSSI）、Organizational User Identifier（OUI）が含まれます。およびユニークなアクセスポイント識別子（AMPID）。これらのレコードは、異なる時間間隔ごとのAMACカウントを集計することにより、さまざまな「群衆」の側面（存在、移動、密度など）を分析する前に、ローカルで取得され、さらに前処理されます。",
      graphicalDisplayExplanation: "グラフィカルディスプレイインターフェイスは異なりますが、以下のイラストを参照してください。 「15分間隔のカフェテリアセンサー」（午前11時〜午後2時）および「1時間間隔のその他の場所センサー」（午前6時〜午後5時）。どちらもここで説明されている原則に基づいて動作します。ドロップダウンメニューの任意の場所に対して、バーグラフは、週の同じ（講義）曜日の過去1か月間の平均Wi-Fi混雑交通の履歴データに基づいて、その場所の特定の時間における「混雑度」を示します。ボトムライン（過去のデータ）の海軍ブルーで。 CURRENT TIMEが指定された範囲内にある場合、その時点のバーはライトグレーでハイライト表示され、その特定の時間における通常のWi-Fi混雑交通数と比較して場所がどれだけ活発であるかを示すシアンブルーでライブWi-Fi混雑交通数（ライブデータ）がオーバーレイされます。その時間帯のピークタイムは、グラフィカルディスプレイから明確に見ることができ、各特定の時間間隔のライブステータスの簡単な説明が返されます。以下のイラストに示すシナリオと同様に、「通常通り忙しい」、「通常よりも忙しい」、「通常よりも少し忙しい」、「通常よりもはるかに忙しい」、「通常よりもはるかに少なく忙しい」。",
      acknowledgementsTitle: "謝辞",
      acknowledgementsContent: "謝辞に関する内容...",
      jrisLink: "https://www.jriss.jp/",
      projectMovieLink: "https://www.youtube.com/watch?v=5fvl1YeWqZE",
      contactEmail: "its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp"
    }
  };

  // Function to get content based on language
  const getContent = (key) => content[language][key];

  return (
    <Layout>
      <div className="background-image" />
      <div className="content-container">
        {/* Project explanations */}
        <h1 className="md:text-4xl text-3xl font-bold my-4 md:my-30 py-4 border-b-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white",margin: "65px 0 0 0" }}>
          {getContent('projectExplanation')}
        </h1>
        
        {/* About the Project */}
        <div style={{ backgroundColor: "rgba(255, 255, 255, 1)", padding: "100px", borderRadius: "0px",margin: "-17px 0 0 0"}}>
          <div className="grid md:grid-cols-2 gap-4 items-end">
            <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "0px"}}>
              <img className="flex w-full" src={explanation1} alt="explanation" />
            </div>
            <div style={{ backgroundColor: "white", padding: "0px", borderRadius: "60px"}}>
              <img className="flex w-full" src={explanationScenarios} alt="explanation" />
            </div>
          </div>
        </div>

        {/* About the Project */}
        <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white" }}>
          {getContent('aboutTheProject')}
        </h1>
        <p className="stretch-p" style={{ padding: "60px", backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "0px", margin: "-20px 0 0 0" }}>
          {getContent('projectDescription')}
        </p>

        {/* Sensors map */}
        <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white" }}>
          {getContent('sensorsMap')}
        </h1>
        <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "0px" ,margin: "-20px 0 0 0"}}>
          <img className="flex w-full p-4" src={explanationMap} alt="explanation" />
        </div>

        {/* About Wi-Fi packet sensors and Wi-Fi sensor data */}
        <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white", margin: "0px 0 0 0" }}>
          {getContent('aboutWiFiSensorsAndData')}
        </h1>
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "30px", borderRadius: "3px" }}>
        </div>
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "30px", borderRadius: "3px" }}>
        </div>
        <p className="stretch-p" style={{ padding: "60px", backgroundColor: "rgba(255, 255, 255,1)", borderRadius: "0px" , margin: "-120px 0 0 0"}}>
          {getContent('aboutWiFiSensors')}
        </p>

        {/* About the graphical display interface */}
        <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white" }}>
          {getContent('graphicalDisplayInterface')}
        </h1>
        <p className="stretch-p" style={{ padding: "60px", backgroundColor: "rgba(255, 255, 255,1)", borderRadius: "0px" , margin: "-20px 0 0 0"}}>
          {getContent('graphicalDisplayExplanation')}
        </p>

        {/* Image Display */}
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "60px", borderRadius: "3px", margin: "-120px 0 0 0" }}>
        </div>
        <div style={{ backgroundColor: "rgba(255, 255, 255, 1)", padding: "60px", borderRadius: "3px", margin: "-0px 0 0 0" }}>
          <div className="grid md:grid-cols-2 gap-4 items-end">
            <img className="flex w-full md:py-16" src={explanation2} alt="explanation" />
            <img className="flex w-full md:py-16" src={explanation3} alt="explanation" />
          </div>
        </div>

        {/* Acknowledgements */}
<h1 className="md:text-4xl text-3xl font-bold my-4 md:my-8 py-2 border-b-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white", margin: "-0px 0 0 0" }}>
  {getContent('acknowledgements')}
</h1>
<div className="grid gap-4">
  <p className="stretch-p" style={{ padding: "60px", backgroundColor: "rgba(255, 255, 255,1)", borderRadius: "0px", margin: "0", margin: "-30px 0 0 0"}}>
    {language === 'en' ? (
      <>
        This project was funded by ”Katsura Campus Empirical Research Promotion Fund". We express our gratitude. Also, we would like to thank the Social System Research Institute for their various supports in operating the WiFi sensors. We greatly appreciate it.
        <ul>
          <li>
            Social System Research Institute: <a href="https://www.jriss.jp/" style={{textDecoration: 'underline', color: 'blue'}}>https://www.jriss.jp/</a>
          </li>
          <li>
            Project movie: <a href="https://www.youtube.com/watch?v=5fvl1YeWqZE" style={{textDecoration: 'underline', color: 'blue'}}>https://www.youtube.com/watch?v=5fvl1YeWqZE</a>
          </li>
          <li>
            Contact email: <a href="mailto:its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp" style={{textDecoration: 'underline', color: 'blue'}}>its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp</a>
          </li>
        </ul>
      </>
    ) : (
      <>
        本プロジェクトは、「桂キャンパス実証研究促進ファンド」の助成を受けました。ここに感謝の意を表します。また、Wi-Fiセンサーの運用における様々な支援について、社会システム研究所に感謝いたします。心より感謝申し上げます。
        <ul>
          <li>
            社会システム研究所: <a href="https://www.jriss.jp/" style={{textDecoration: 'underline', color: 'blue'}}>https://www.jriss.jp/</a>
          </li>
          <li>
            プロジェクト動画: <a href="https://www.youtube.com/watch?v=5fvl1YeWqZE" style={{textDecoration: 'underline', color: 'blue'}}>https://www.youtube.com/watch?v=5fvl1YeWqZE</a>
          </li>
          <li>
            お問い合わせメールアドレス: <a href="mailto:its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp" style={{textDecoration: 'underline', color: 'blue'}}>its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp</a>
          </li>
        </ul>
      </>
    )}
  </p>
</div>

      </div>
    </Layout>
  );
};

export default About;
