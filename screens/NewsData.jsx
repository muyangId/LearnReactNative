export const CATEGORY_INTERNAL = 'internal'; //社内
export const CATEGORY_EXTERNAL = 'external'; //社外

 const NEWS_LIST = [
  {
    id : 1,
    category : CATEGORY_INTERNAL,
    title : '株式会社ハイシンクジャパン創立20周年記念式典開催',
    image : require('../assets/jhc_news001.jpg'),
    pubDate : '2019-10-25',
    content : '2019年10月25日　株式会社ハイシンクジャパン創立20周年記念式典をザ・プリンスパークタワー東京で開催しました。\n' +
      '今回のテーマは「感謝、自信、希望」であり、主要顧客やグループ会社代表、社員代表など約200人が参加しました。',
  },
  {
    id : 2,
    category : CATEGORY_EXTERNAL,
    title : '大連華信はPivotalと正式に「グローバル戦略提携パートナー」契約を締結',
    image : require('../assets/jhc_news002.jpg'),
    pubDate : '2019-08-07',
    content : '８月１日大連華信とPivotalは「グローバル戦略提携パートナー」となる契約を締結した。両社はPivotalの企業級のPaaSプラットフォームおよびテクノロジ製品と大連華信のプラットフォーム技術および各業界にソリューションを提供する能力に基づいて、力を合わせ、両社それぞれの強みを活かし、業務提携により世界中のお客様にサービスを提供する\n' +
      '\n' +
      'Pivotalグローバル副総裁兼大中華区総裁于志偉氏、アジア太平洋地域のチャネルパートナー総経理陳光明氏、大連華信総裁王悦氏、副総裁岳雪峰氏等、双方の高層指導者たちがこの重要な時に立ち会った\n' +
      '\n' +
      'Pivotalグローバル副総裁兼大中華区総裁于志偉氏はスピーチの中で次のように述べた。「パートナーと共に勝ち組の生態を築くことは、常にPivotalの重要な戦略の一つである。過去10年間パートナーとの協力により、相互の強みを活かして、短期間でPivotalは全世界で様々なタイプをカバーができるエコシステムを構築した。マイクロソフト、GOOGLE、AWS、DELL、VMWAREのようなクラウドパートナーもあるし、大連華信のようなITサービスおよびソリューション提供のパートナーもあり、Pivotalの技術を改善し続けることで、Pivotalのエコシステムは市場シェアを拡大している。大連華信との業務提携はPivotalが大中華区の戦略を実行するための重要な選択となった。私達の取引先に対する戦略方向性は一致している。取引先は政府と業界のトップクラスである。私達は業務と技術の相互補完することで、双方の業務提携はお客様にとって、企業を最適なITモデルにスムーズに移行し、ビジネスの革新とデジタル化への転換のペースを促進することができる。」',
  },
  {
    id : 3,
    category : CATEGORY_INTERNAL,
    title : '取締役就任に関するお知らせ',
    image : require('../assets/jhc_news003.jpg'),
    pubDate : '2019-05-09',
    content : '平成31年3月31日開催の株主総会において、下記取締役の就任を決定しました。\n' +
      '\n' +
      '【役員一覧】\n' +
      '代表取締役社長　　小笠原　睦之\n' +
      '取締役副社長　　　王　興海\n' +
      '（大連華信計算機技術股份有限公司 董事副総裁）\n' +
      '取締役　　　　　　王　悦\n' +
      '（大連華信計算機技術股份有限公司 董事総裁）\n' +
      '取締役　　　　　　小菅　栄修（新任）\n' +
      '監査役　　　　　　上矢　博\n',
  },
  {
    id : 4,
    category : CATEGORY_INTERNAL,
    title : 'マージン率の公開（2019年度　決算後の事業報告に基づく数字）',
    image : require('../assets/jhc_news004.jpg'),
    pubDate : '2020-08-31',
    content : 'マージン率の公開\n' +
      '\n' +
      '2019年12月決算後の事業報告に基づく数字となります。\n' +
      '・派遣労働者の数: 59人（2019年12月末）\n' +
      '・派遣先の数: 12社\n' +
      '・マージン率: 29.2%\n' +
      '・教育訓練に関する事項: 情報セキュリティ教育（全社員）\n' +
      '・派遣料金の1人あたりの平均額: 30,910円（1日8時間当たり換算）\n' +
      '・派遣社員の賃金の平均額: 21,880円（1日8時間当たり換算）\n' +
      '\n' +
      '※マージンには、派遣元事業主として会社が負担する健康保険・厚生年金・雇用保険・労働保険の費用となる社会保険料などの保険料、事業運営費として営業担当者・本社事務担当の人件費や営業活動諸費用・オフィス賃貸料、福利厚生費、研修費等が含まれています。',
  },
  {
    id : 5,
    category : CATEGORY_EXTERNAL,
    title : '会社名変更に関するお知らせ',
    image : require('../assets/jhc_news005.jpg'),
    pubDate : '2020-08-31',
    content : '平成28年3月29日開催の株主総会において、下記のとおり会社名の変更を決定しましたので、お知らせいたします。\n' +
      '\n' +
      '【会社名】\n' +
      '株式会社 ハイシンクジャパン（略称：JHC）\n' +
      'Japan Hi-Think Corporation',
  },
  {
    id : 6,
    category : CATEGORY_INTERNAL,
    title : '取締役交代に関するお知らせ',
    image : require('../assets/jhc_news006.jpg'),
    pubDate : '2016-03-01',
    content : '平成28年2月29日開催の取締役会および臨時株主総会において、下記のとおり取締役の交代を決定しましたので、お知らせいたします。\n' +
      '\n' +
      '【役員一覧】\n' +
      '　　代表取締役社長　　小笠原　睦之\n' +
      '　　取締役副社長　　　今枝　一平\n' +
      '　　取締役　　　　　　王　悦\n' +
      '　　（大連華信計算機技術股份有限公司 董事総裁）\n' +
      '　　取締役　　　　　　王　興海（新任）\n' +
      '　　（大連華信計算機技術股份有限公司 董事副総裁）\n' +
      '　　監査役　　　　　　上矢　博',
  },
  {
    id : 7,
    category : CATEGORY_EXTERNAL,
    title : ' TOKYO MX「企業魂」にて当社が紹介されました',
    image : require('../assets/jhc_news007.jpg'),
    pubDate : '2016-06-26',
    content : '2015年6月18日に TOKYO MX 「企業魂」にて、当社が紹介されました。',
  },
  {
    id : 8,
    category : CATEGORY_INTERNAL,
    title : '情報セキュリティマネジメント認証更新(規格改訂含む)のお知らせ',
    image : require('../assets/jhc_news008.jpg'),
    pubDate : '2014-08-12',
    content : '2014年8月18日付で財団法人日本情報処理協会及び英国認証機関認定審議会(United Kingdom Accreditation Service)の情報セキュリティマネジメントの国際規格「ISO/IEC 27001:2013 & JIS Q 27001:2014」の認証更新(規格改訂含む)を行いました。',
  },
  {
    id : 9,
    category : CATEGORY_INTERNAL,
    title : 'プライバシーマーク認証更新のお知らせ',
    image : require('../assets/jhc_news009.jpg'),
    pubDate : '2014-03-10',
    content : '2014年3月10日付で一般財団法人日本情報経済社会推進協会のプライバシーマークの認証更新を行いました。',
  },
  {
    id : 10,
    category : CATEGORY_INTERNAL,
    title : '品質マネジメント認証取得のお知らせ',
    image : require('../assets/jhc_news010.jpg'),
    pubDate : '2014-01-14',
    content : '2014年1月10日付で公益財団法人日本適合性認定協会及び英国認証機関認定審議会(United Kingdom Accreditation Service)より品質マネジメントの国際規格「ISO 9001:2008 & JIS Q 9001:2008」の認証を取得しました。',
  },
];

export default NEWS_LIST;