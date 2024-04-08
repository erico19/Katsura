import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

const notice_sensors = ["AMPM18-KJ010", "AMPM18-KJ016", "AMPM18-KJ017"];

const content = {
  en: {
    seleneCafeteria: "Cafeteria Selene is open for lunch from 11:00 AM to 2:00 PM on weekdays and is located at B cluster with a variety of seating arrangements for both individuals and groups, coupled with a delicately imposing natural scenery which will both relax and inspire you. <a class='highlight-link' style='color: white;' href='https://west2-univ.jp/sp/index.php?t=650120'>See today's menu here.</a>",
    cClusterOffice: "C Cluster Administration office is the administrative office of C Cluster and is open from 8:30 AM to 5:00 pm. Adjacent to it is Cafeteria Soleil which opens for lunch from 11:00 AM to 2:00 PM. The graphical display here shows the general level of busyness at the C Cluster office during the day but may also highlight the general level of busyness at the nearby Cafeteria during operational hours.",
    civilEngineeringDepartments: "The Departments of Civil and Earth Resources Engineering, Urban Management, and Environmental Engineering are found in the C1 Building located on the left wing of C Cluster. The C1 Entrance Building Entrance is open from 8:00 AM to 6:00 PM and can be accessed via electronic card identification after 6:00 PM. The graphical display shown here shows the arrival and departure patterns of staff and students but may also capture vehicular arrival and departure patterns at the nearby parking lot during the day.",
    bAdminOffice: "B Administration office is the main administration office related to student and staff support on Katsura Campus and is open from 9:00 AM to 5:00 PM. The foreign student support section is also located here, and the latest scholarships information can be found here. The Graphical display shown here shows the general level of activity at the office during the day but may also capture the level of activity at the adjacent buildings i.e., the Funai Tetsuro Auditorium and the Main student Cafeteria (Cafeteria Selene).",
    katsuraLibrary: "Katsura Main student Library is a modern and well-facilitated library located at B Cluster,open from 9:00 AM to 9:00 PM. Along with a wide range of book collections and special collections of “Unique books”, the Library has an ambient environment for study coupled with the magnificent view of the picturesque landscape of the Iconic Kyoto City. More information about the services offered by Katsura Main Library can be found <a class='highlight-link' style='color: white;' href='https://www.t.kyoto-u.ac.jp/lib/en'>here.</a>",
    molecularEngineeringDepartments: "The departments of Molecular Engineering, Synthetic and Biological Chemistry, and Chemical Engineering are found in A4 Building which is located at the extreme lower right of A cluster. The A4 Building Entrance is open from 8:30 AM to 6:00 PM and serves as the rear access to A Cluster via the Katsura innovation Park Mae Bus Stop for the Keihan and Kyoto City Buses. The graphical display shown here displays the general arrival and departure patterns of staff and students but may also capture vehicular arrival and departure patterns at the nearby parking lot during the day.",
    p3bParking: "P3B Parking is the main designated parking area at A Cluster located between Buildings A3 and A4, open for 24 hours from 6:00 AM to 6:00 PM. The Graphical display shown here may contain an interfusion of both the dynamic variation Human Crowd and Vehicle Traffic at the areas near and around the parking area during the day.",
    seriBakery: "Boulangerie Seri Bakery is open from 8:00 AM to 3:00 PM on weekdays and is located between the upper fringes of A cluster and the lower fringes of B cluster, adjacent to two (2) Bus stops i.e Katsura Campus Mae for the Keihan and Kyoto City Buses, which also serve as the pick and drop-off points for the Kyoto University Shuttle Bus between Yoshida and Katsura. <a class='highlight-link' style='color: white;' href='https://www.t.kyoto-u.ac.jp/en/access/katsura/bus_from-katsura'>See Kyoto University Bus Schedule.</a>"
  },
  jp: {
    seleneCafeteria: "セレネ食堂は平日の11:00〜14:00にランチ営業しており、Bクラスターに位置しています。個人やグループ向けの様々な座席があり、優美な自然景色があなたをリラックスさせ、インスピレーションを与えます。<a class='highlight-link' style='color: white;' href='https://west2-univ.jp/sp/index.php?t=650120'>こちらから今日のメニューをご覧ください。</a>",
    cClusterOffice: "Cクラスター管理事務所はCクラスターの管理事務所であり、平日は午前8:30から午後5:00まで営業しています。隣にはランチ営業のカフェソレイがあり、午前11:00から午後2:00まで営業しています。ここに表示されるグラフは、一般的な営業時間中のCクラスター事務所の忙しさの一般的なレベルを示すが、近くのカフェの営業時間中の一般的な忙しさも示すことがある。",
    civilEngineeringDepartments: "土木・地球資源工学、都市マネジメント、環境工学の各部門は、Cクラスターの左翼に位置するC1ビルにあります。C1入り口ビルの入り口は午前8:00から午後6:00まで開いており、午後6:00以降は電子カード認証でアクセスできます。ここに表示されるグラフは、スタッフと学生の到着および出発のパターンを示すが、日中に近くの駐車場での車両の到着および出発のパターンも捉えることがある。",
    bAdminOffice: "B管理事務所は桂キャンパスの学生およびスタッフサポートに関連する主要な管理事務所であり、午前9:00から午後5:00まで営業しています。外国人留学生サポートセクションもここにあり、最新の奨学金情報がここで入手できます。ここに表示されるグラフは、一般的な活動レベルを示すが、隣接する建物である船井哲郎記念講堂と主要な学生食堂（セレネ食堂）の活動レベルも捉えることがあります。",
    katsuraLibrary: "桂メイン学生図書館はBクラスターに位置する現代的で充実した図書館であり、午前9:00から午後9:00まで営業しています。「ユニークな本」の幅広いコレクションや特別なコレクションに加えて、図書館には京都市の美しい景観が一望できる学習用の環境があります。<a class='highlight-link' style='color: white;' href='https://www.t.kyoto-u.ac.jp/lib/en'>こちらから詳細をご覧ください。</a>",
    molecularEngineeringDepartments: "分子工学、合成・生物化学、化学工学の各部門はAクラスターの極右に位置するA4ビルにあります。A4ビルの入り口は午前8:30から午後6:00まで開いており、京阪や京都市バスの桂イノベーションパーク前バス停を経由してAクラスターへの裏アクセスとして機能します。ここに表示されるグラフは、スタッフと学生の到着および出発のパターンを一般的に示しますが、日中に近くの駐車場での車両の到着および出発のパターンも捉えることがあります。",
    p3bParking: "P3B駐車場はAクラスターの主要指定駐車エリアであり、A3ビルとA4ビルの間に位置し、午前6:00から午後6:00まで24時間営業しています。ここに表示されるグラフは、日中の駐車場の周辺や周辺地域の人の動きや車両の交通の動的変動を含む場合があります。",
    seriBakery: "ブーランジェリーセリは平日の午前8:00から午後3:00まで営業しており、Aクラスターの上部とBクラスターの下部に位置し、京阪や京都市バスの桂キャンパス前バス停など2つのバス停に隣接しています。<a class='highlight-link' style='color: white;' href='https://www.t.kyoto-u.ac.jp/en/access/katsura/bus_from-katsura'>こちらから京都大学バスのスケジュールをご覧ください。</a>"
  }
};


const DescriptionBox = ({ location }) => {
  const { language } = useI18next();

  const getDescription = (location) => {
    switch (location) {
      case "AMPM18-KJ008":
        return content[language].cClusterOffice;
      case "AMPM18-KJ009":
        return content[language].civilEngineeringDepartments;
      case "AMPM18-KJ011":
        return content[language].bAdminOffice;
      case "AMPM18-KJ012":
        return content[language].katsuraLibrary;
      case "AMPM18-KJ013":
        return content[language].molecularEngineeringDepartments;
      case "AMPM18-KJ014":
        return content[language].p3bParking;
      case "AMPM18-KJ015":
        return content[language].seriBakery;
      default:
        return notice_sensors.includes(location) ? content[language].seleneCafeteria : "";
    }
  };

   return (
    <div className="description-box pb-4 md:pb-8">
  <p className="prose max-w-none text-base md:text-lg text-white text-justify font-arial font-medium mb-4 md:mb-0" style={{ wordSpacing: '-1px' }} dangerouslySetInnerHTML={{ __html: getDescription(location) }} />
</div>

  );
};

export default DescriptionBox;
