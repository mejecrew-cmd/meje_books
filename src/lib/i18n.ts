import type { Book, Chapter } from "./books";

export const locales = ["ko", "en", "ja", "zh-Hant", "zh-Hans"] as const;
export type Locale = (typeof locales)[number];
export type RoutedLocale = Exclude<Locale, "ko" | "en">;

export const routedLocales: RoutedLocale[] = ["ja", "zh-Hant", "zh-Hans"];

export const localeSegments: Record<Locale, string> = {
  ko: "",
  en: "en",
  ja: "ja",
  "zh-Hant": "zh-hant",
  "zh-Hans": "zh-hans"
};

export const localeLabels: Record<Locale, string> = {
  ko: "KO",
  en: "EN",
  ja: "JA",
  "zh-Hant": "繁體",
  "zh-Hans": "简体"
};

type BookTranslation = Partial<Pick<Book, "title" | "subtitle" | "line" | "category" | "author" | "description">>;

const englishBooks: Record<string, BookTranslation> = {
  "fifth-cult-community": {
    title: "The Age of the Fifth Cult Community, Opened by AI",
    subtitle: "An observation report on the fifth wave, with worldbuilding design tools",
    line: "KIM DONG-EUN",
    category: "Fifth Wave",
    author: "Kim Dong-eun WhtDrgon.",
    description: "An observation report that maps the waves of belief communities that rose each time a new medium arrived, and gathers from a century of religious history the worldbuilding design tools that turn viewers into residents. It comprises 15 main chapters, 6 separate case files, and appendices."
  },
  "worldview-designer": {
    title: "The Worldview Designer",
    subtitle: "A 15-part knowledge system that organizes worldbuilding as a professional craft",
    line: "KIM DONG-EUN",
    category: "Worldbuilding",
    author: "Kim Dong-eun WhtDrgon.",
    description: "A complete knowledge system that organizes worldbuilding as a single professional craft. The general theory settles the concept, verisimilitude, and utility; the typology divides the branches of worlds by time, space, tradition, SF, and monsters and heroes; and the practice covers design elements, keyword theory, definition and naming, the data pipeline, storytelling by medium, and the self-propelled world, across 15 parts of the main text."
  },
  "meje-librarying": {
    title: "MEJE Librarying Workflow",
    subtitle: "A production workflow for organizing source materials into worldbuilding knowledge systems",
    line: "MEJE PROCESS",
    category: "Process 02",
    author: "MEJE Works",
    description: "MEJE's librarying workflow extracts keywords, concepts, relationships, places, and events from dispersed source materials, then organizes them into a usable worldbuilding knowledge system."
  },
  "meje-seoyeongak": {
    title: "MEJE Seoyeongak Translation Workflow",
    subtitle: "A production workflow for translation, adaptation, and reference editions",
    line: "MEJE PROCESS",
    category: "Process 03",
    author: "MEJE Works",
    description: "A practical manuscript on the Seoyeongak workflow, from planning to delivery for multilingual content, translation, adaptation, and reference editions."
  },
  "pride-and-prejudice-data": {
    title: "Pride and Prejudice Worldbuilding Data",
    subtitle: "A Seoyeongak deliverable sample with setting sheets and character sheets",
    line: "MEJE PROCESS",
    category: "Reference",
    author: "MEJE Works",
    description: "A Seoyeongak deliverable sample that brings together setting sheets and character sheets for Pride and Prejudice."
  },
  "meje-lorebook": {
    title: "MEJE Lorebook Production Workflow",
    subtitle: "A workflow for worldbuilding guides and lorebook production",
    line: "MEJE PROCESS",
    category: "Process 04",
    author: "MEJE Works",
    description: "MEJE's workflow for editing libraryed knowledge into official setting guides, lorebooks, public wikis, and book structures."
  },
  "meje-character-process": {
    title: "MEJE Character Creation Workflow",
    subtitle: "A design guide for character creation and character sheets",
    line: "MEJE PROCESS",
    category: "Process 05",
    author: "MEJE Works",
    description: "A new-character workflow that develops a character through narrative, desire, lack, relationships, voice, visual elements, and working sheets."
  },
  "meje-storytelling-100": {
    title: "MEJE Storytelling 100",
    subtitle: "From worldbuilding and characters to one hundred story scenes",
    line: "MEJE PROCESS",
    category: "Process 06",
    author: "MEJE Works",
    description: "A storytelling workflow that produces one hundred scenes of daily life, events, changing relationships, and audience participation from worldbuilding and character sheets."
  },
  "atmosphere-engineering": {
    title: "Atmosphere Engineering",
    subtitle: "How place, sensation, and relationships create a story",
    line: "KIM DONG-EUN",
    category: "Essay",
    author: "Kim Dong-eun WhtDrgon.",
    description: "A manuscript series by Kim Dong-eun WhtDrgon., MEJE's founder and worldbuilder, on atmosphere, sensation, place, and relationships."
  },
  "mobile-game-bm-renewal": {
    title: "New-Content Business Models and the IP Expansion Economy",
    subtitle: "Payment habits and monetization across games, music, video, webtoons, and IP",
    line: "KIM DONG-EUN",
    category: "Essay",
    author: "Kim Dong-eun WhtDrgon.",
    description: "A manuscript on new-content business models, tracing payment habits through games, music, video, webtoons, and the IP expansion economy."
  },
  "new-content-ftue": {
    title: "FTUE: First-Time User Experience",
    subtitle: "Designing the first encounter with a new content world",
    line: "KIM DONG-EUN",
    category: "Essay",
    author: "Kim Dong-eun WhtDrgon.",
    description: "A manuscript on first-time user experience, from the user's state and prior experience to feedback, recovery, measurement, and iteration."
  },
  "reading-the-world-through-universe": {
    title: "Reading the World Through Worldbuilding",
    subtitle: "Worldbuilding as a lens for systems, communities, fandom, and IP",
    line: "KIM DONG-EUN",
    category: "Essay",
    author: "Kim Dong-eun WhtDrgon.",
    description: "A manuscript that reads systems, communities, fandom, and IP through worldbuilding, by Kim Dong-eun WhtDrgon., MEJE's founder and worldbuilder."
  }
};

const localizedBookTitles: Partial<Record<Locale, Record<string, BookTranslation>>> = {
  ja: {
    "fifth-cult-community": {
      title: "AIが開く第五次カルト・コミュニティの時代",
      subtitle: "五番目の波の観測報告と世界観設計ツール",
      line: "KIM DONG-EUN", category: "第五の波", author: "キム・ドンウン WhtDrgon.",
      description: "新しい媒体が現れるたびに起こってきた信念共同体の波を地図に描き、視聴者を居住者へと変える世界観設計ツールを百年の宗教史から収めて整理した観測報告です。本編15章と別冊ケースファイル6編、付録で構成されます。"
    },
    "worldview-designer": {
      title: "世界観設計者",
      subtitle: "世界観をつくる仕事を職業の技術として整理した15編の知識体系",
      line: "KIM DONG-EUN", category: "ワールドビルディング", author: "キム・ドンウン WhtDrgon.",
      description: "世界観をつくる仕事を一つの職業技術として整理した完結型の知識体系です。総論で概念と迫真性と効用を確定し、類型論で時間・空間・伝統・SF・怪物と英雄によって世界の系統を分け、実務論で設計の要素とキーワード論、定義とネーミング、データパイプライン、媒体別のストーリーテリング、自己駆動の世界までを扱う本編15編で構成されます。"
    },
    "meje-librarying": {
      title: "MEJE ライブラリング・ワークフロー白書",
      subtitle: "資料を世界観の知識構造へまとめる制作工程",
      line: "MEJE PROCESS", category: "プロセス 02", author: "MEJE Works",
      description: "散在する原資料からキーワード、概念、関係、場所、事件を抽出し、利用可能な世界観の知識構造へまとめるMEJEのライブラリング工程です。"
    },
    "meje-seoyeongak": {
      title: "MEJE ソヨンガク翻訳ワークフロー",
      subtitle: "翻訳・翻案・解説資料集の制作工程",
      line: "MEJE PROCESS", category: "プロセス 03", author: "MEJE Works",
      description: "MEJE Worksの翻訳組織ソヨンガクにおける、企画から納品までの多言語コンテンツ制作、翻訳、翻案、資料集制作を扱う実務原稿です。"
    },
    "pride-and-prejudice-data": {
      title: "『高慢と偏見』世界観データ",
      subtitle: "設定シートとキャラクターシートで見るソヨンガク成果物サンプル",
      line: "MEJE PROCESS", category: "参考資料", author: "MEJE Works",
      description: "ソヨンガクの翻訳・資料集工程の成果物サンプルとして、『高慢と偏見』の設定シートとキャラクターシートをまとめた資料です。"
    },
    "meje-lorebook": {
      title: "MEJE ロアブック制作ワークフロー",
      subtitle: "世界観設定集とロアブックの制作工程",
      line: "MEJE PROCESS", category: "プロセス 04", author: "MEJE Works",
      description: "ライブラリングされた知識を公式設定集、ロアブック、公開Wiki、書籍構造へ編集するMEJEの世界観設定集制作工程です。"
    },
    "meje-character-process": {
      title: "MEJE キャラクター創作ワークフロー",
      subtitle: "キャラクター創作とシート制作のデザインガイド",
      line: "MEJE PROCESS", category: "プロセス 05", author: "MEJE Works",
      description: "物語、欲望、欠如、関係、話し方、視覚要素、運用シートを通じて新しいキャラクターを制作する工程です。"
    },
    "meje-storytelling-100": {
      title: "MEJE ストーリーテリング100",
      subtitle: "世界観とキャラクターから100の物語場面へ",
      line: "MEJE PROCESS", category: "プロセス 06", author: "MEJE Works",
      description: "世界観とキャラクターシートを基に、日常の断面、事件、関係の変化、参加型場面からなる100のシーンを生み出すストーリーテリング工程です。"
    },
    "atmosphere-engineering": {
      title: "雰囲気工学", subtitle: "空間、感覚、関係が物語を作る方法",
      line: "KIM DONG-EUN", category: "エッセイ", author: "キム・ドンウン WhtDrgon.",
      description: "MEJE代表で世界観制作者のキム・ドンウン WhtDrgon.による、雰囲気、感覚、空間、関係をめぐる原稿シリーズです。"
    },
    "mobile-game-bm-renewal": {
      title: "ニューコンテンツ・ビジネスモデルとIP拡張経済",
      subtitle: "ゲーム、音楽、映像、ウェブトゥーンを結ぶ支払い習慣と課金構造",
      line: "KIM DONG-EUN", category: "ビジネスモデル", author: "キム・ドンウン WhtDrgon.",
      description: "支払い習慣の歴史から、ゲーム、音楽、映像、ウェブトゥーン、IP拡張経済までをたどるニューコンテンツのビジネスモデル原稿です。"
    },
    "new-content-ftue": {
      title: "FTUE：初回ユーザー体験", subtitle: "ニューコンテンツの最初の場面と導入体験の設計",
      line: "KIM DONG-EUN", category: "FTUE", author: "キム・ドンウン WhtDrgon.",
      description: "サービスとコンテンツの最初の画面、最初の感情、最初の関係をどう設計するかを扱う初回ユーザー体験の原稿集です。"
    },
    "reading-the-world-through-universe": {
      title: "世界観から世界を読む", subtitle: "世界観を設定集ではなく解釈レンズとして読む",
      line: "KIM DONG-EUN", category: "世界観", author: "キム・ドンウン WhtDrgon.",
      description: "世界観を解釈レンズ、組織原理、創作工程、事業構造として読む書籍の原稿です。"
    }
  },
  "zh-Hant": {
    "fifth-cult-community": {
      title: "AI開啟的第五次崇拜社群時代",
      subtitle: "第五次浪潮的觀測報告與世界觀設計工具",
      line: "KIM DONG-EUN", category: "第五波", author: "Kim Dong-eun WhtDrgon.",
      description: "描繪每逢新媒體出現便掀起的信念共同體浪潮，並從百年宗教史中汲取能將觀眾轉化為居民的世界觀設計工具的觀測報告。全書由正文十五章、別冊案例檔案六篇與附錄構成。"
    },
    "worldview-designer": {
      title: "世界觀設計師",
      subtitle: "將世界觀創作整理為職業技術的十五篇知識體系",
      line: "KIM DONG-EUN", category: "世界觀建構", author: "Kim Dong-eun WhtDrgon.",
      description: "將世界觀創作整理為一門職業技術的完整知識體系。總論確立概念、逼真性與效用；類型論以時間、空間、傳統、科幻、怪物與英雄劃分世界的分支；實務論涵蓋設計要素與關鍵詞論、定義與命名、資料管線、各媒體的敘事，直到自驅動的世界，構成本編十五篇。"
    },
    "meje-librarying": {
      title: "MEJE 知識庫化工作流程白皮書", subtitle: "將資料整合為世界觀知識結構的製作流程",
      line: "MEJE PROCESS", category: "流程 02", author: "MEJE Works",
      description: "MEJE的Librarying流程從分散的原始資料中提取關鍵字、概念、關係、場所與事件，再整理為可運用的世界觀知識結構。"
    },
    "meje-seoyeongak": {
      title: "MEJE 西詠閣翻譯工作流程", subtitle: "翻譯、改編與解說資料集的製作流程",
      line: "MEJE PROCESS", category: "流程 03", author: "MEJE Works",
      description: "這份實務原稿介紹MEJE Works旗下翻譯組織西詠閣從企劃到交付的多語內容製作、翻譯、改編與資料集製作流程。"
    },
    "pride-and-prejudice-data": {
      title: "《傲慢與偏見》世界觀資料", subtitle: "以設定表與角色表呈現的西詠閣成果範例",
      line: "MEJE PROCESS", category: "參考資料", author: "MEJE Works",
      description: "西詠閣翻譯與資料集流程的成果範例，彙整《傲慢與偏見》的背景設定表與角色表。"
    },
    "meje-lorebook": {
      title: "MEJE Lorebook 製作工作流程", subtitle: "世界觀設定集與Lorebook的製作流程",
      line: "MEJE PROCESS", category: "流程 04", author: "MEJE Works",
      description: "MEJE將Librarying後的知識編輯為官方設定集、Lorebook、公開Wiki與書籍結構的世界觀設定集製作流程。"
    },
    "meje-character-process": {
      title: "MEJE 角色創作工作流程", subtitle: "角色創作與角色表製作設計指南",
      line: "MEJE PROCESS", category: "流程 05", author: "MEJE Works",
      description: "以敘事、慾望、缺失、關係、語氣、視覺元素與營運表單來製作新角色的創作流程。"
    },
    "meje-storytelling-100": {
      title: "MEJE 敘事100", subtitle: "從世界觀與角色走向一百個故事場景",
      line: "MEJE PROCESS", category: "流程 06", author: "MEJE Works",
      description: "以世界觀與角色表為基礎，製作一百個日常片段、事件、關係變化與參與式場景的敘事流程。"
    },
    "atmosphere-engineering": {
      title: "氛圍工程", subtitle: "空間、感官與關係如何創造故事",
      line: "KIM DONG-EUN", category: "隨筆", author: "Kim Dong-eun WhtDrgon.",
      description: "MEJE代表暨世界觀創作者Kim Dong-eun WhtDrgon.關於氛圍、感官、空間與關係的系列原稿。"
    },
    "mobile-game-bm-renewal": {
      title: "新內容商業模式與IP擴張經濟", subtitle: "串連遊戲、音樂、影像與網路漫畫的支付習慣和付費結構",
      line: "KIM DONG-EUN", category: "商業模式", author: "Kim Dong-eun WhtDrgon.",
      description: "從支付習慣的歷史出發，延伸至遊戲、音樂、影像、網路漫畫與IP擴張經濟的新內容商業模式原稿。"
    },
    "new-content-ftue": {
      title: "FTUE：首次使用者體驗", subtitle: "新內容的第一個場景與進入體驗設計",
      line: "KIM DONG-EUN", category: "FTUE", author: "Kim Dong-eun WhtDrgon.",
      description: "探討如何設計服務與內容的第一個畫面、第一份感受與第一段關係的首次使用者體驗原稿集。"
    },
    "reading-the-world-through-universe": {
      title: "透過世界觀閱讀世界", subtitle: "把世界觀視為解讀鏡頭，而非設定集",
      line: "KIM DONG-EUN", category: "世界觀", author: "Kim Dong-eun WhtDrgon.",
      description: "將世界觀視為解讀鏡頭、組織原理、創作流程與商業結構的書籍原稿。"
    }
  },
  "zh-Hans": {
    "fifth-cult-community": {
      title: "AI开启的第五次崇拜社区时代",
      subtitle: "第五次浪潮的观测报告与世界观设计工具",
      line: "KIM DONG-EUN", category: "第五波", author: "Kim Dong-eun WhtDrgon.",
      description: "描绘每逢新媒体出现便掀起的信念共同体浪潮，并从百年宗教史中汲取能将观众转化为居民的世界观设计工具的观测报告。全书由正文十五章、别册案例档案六篇与附录构成。"
    },
    "worldview-designer": {
      title: "世界观设计师",
      subtitle: "将世界观创作整理为职业技术的十五篇知识体系",
      line: "KIM DONG-EUN", category: "世界观建构", author: "Kim Dong-eun WhtDrgon.",
      description: "将世界观创作整理为一门职业技术的完整知识体系。总论确立概念、逼真性与效用；类型论以时间、空间、传统、科幻、怪物与英雄划分世界的分支；实务论涵盖设计要素与关键词论、定义与命名、数据管线、各媒体的叙事，直到自驱动的世界，构成本编十五篇。"
    },
    "meje-librarying": {
      title: "MEJE 知识库化工作流程白皮书", subtitle: "将资料整合为世界观知识结构的制作流程",
      line: "MEJE PROCESS", category: "流程 02", author: "MEJE Works",
      description: "MEJE的Librarying流程从分散的原始资料中提取关键词、概念、关系、地点与事件，再整理为可使用的世界观知识结构。"
    },
    "meje-seoyeongak": {
      title: "MEJE 西咏阁翻译工作流程", subtitle: "翻译、改编与解说资料集的制作流程",
      line: "MEJE PROCESS", category: "流程 03", author: "MEJE Works",
      description: "这份实务原稿介绍MEJE Works旗下翻译组织西咏阁从策划到交付的多语言内容制作、翻译、改编与资料集制作流程。"
    },
    "pride-and-prejudice-data": {
      title: "《傲慢与偏见》世界观资料", subtitle: "以设定表与角色表呈现的西咏阁成果示例",
      line: "MEJE PROCESS", category: "参考资料", author: "MEJE Works",
      description: "西咏阁翻译与资料集流程的成果示例，汇总《傲慢与偏见》的背景设定表与角色表。"
    },
    "meje-lorebook": {
      title: "MEJE Lorebook 制作工作流程", subtitle: "世界观设定集与Lorebook的制作流程",
      line: "MEJE PROCESS", category: "流程 04", author: "MEJE Works",
      description: "MEJE将Librarying后的知识编辑为官方设定集、Lorebook、公开Wiki与书籍结构的世界观设定集制作流程。"
    },
    "meje-character-process": {
      title: "MEJE 角色创作工作流程", subtitle: "角色创作与角色表制作设计指南",
      line: "MEJE PROCESS", category: "流程 05", author: "MEJE Works",
      description: "以叙事、欲望、缺失、关系、语气、视觉元素与运营表单来制作新角色的创作流程。"
    },
    "meje-storytelling-100": {
      title: "MEJE 叙事100", subtitle: "从世界观与角色走向一百个故事场景",
      line: "MEJE PROCESS", category: "流程 06", author: "MEJE Works",
      description: "以世界观与角色表为基础，制作一百个日常片段、事件、关系变化与参与式场景的叙事流程。"
    },
    "atmosphere-engineering": {
      title: "氛围工程", subtitle: "空间、感官与关系如何创造故事",
      line: "KIM DONG-EUN", category: "随笔", author: "Kim Dong-eun WhtDrgon.",
      description: "MEJE代表兼世界观创作者Kim Dong-eun WhtDrgon.关于氛围、感官、空间与关系的系列原稿。"
    },
    "mobile-game-bm-renewal": {
      title: "新内容商业模式与IP扩张经济", subtitle: "串联游戏、音乐、影像与网络漫画的支付习惯和付费结构",
      line: "KIM DONG-EUN", category: "商业模式", author: "Kim Dong-eun WhtDrgon.",
      description: "从支付习惯的历史出发，延伸至游戏、音乐、影像、网络漫画与IP扩张经济的新内容商业模式原稿。"
    },
    "new-content-ftue": {
      title: "FTUE：首次用户体验", subtitle: "新内容的第一个场景与进入体验设计",
      line: "KIM DONG-EUN", category: "FTUE", author: "Kim Dong-eun WhtDrgon.",
      description: "探讨如何设计服务与内容的第一个画面、第一份感受与第一段关系的首次用户体验原稿集。"
    },
    "reading-the-world-through-universe": {
      title: "通过世界观阅读世界", subtitle: "把世界观视为解读镜头，而非设定集",
      line: "KIM DONG-EUN", category: "世界观", author: "Kim Dong-eun WhtDrgon.",
      description: "将世界观视为解读镜头、组织原理、创作流程与商业结构的书籍原稿。"
    }
  }
};

export const copy = {
  ko: {
    home: "홈",
    books: "책",
    allBooks: "전체 책",
    catalog: "전체 목록",
    contents: "목차",
    chapters: "편",
    chapter: "편",
    author: "저자",
    assets: "자료",
    line: "시리즈",
    readOriginal: "한국어 원문 보기",
    originalAvailable: "한국어 원문 공개",
    languageLabel: "언어 선택",
    primaryNav: "주요 탐색",
    chapterNavigation: "장 이동",
    englishEdition: "영문판",
    previous: "이전",
    next: "다음",
    originalTitle: "한국어 원제",
    translationPendingTitle: "이 장은 현재 한국어로 공개되어 있습니다.",
    translationPendingBody: "전체 본문은 한국어 원문에서 읽을 수 있습니다.",
    booksCount: "권"
  },
  en: {
    home: "Home",
    books: "Books",
    allBooks: "All books",
    catalog: "Catalog",
    contents: "Contents",
    chapters: "chapters",
    chapter: "chapter",
    author: "Author",
    assets: "Assets",
    line: "Line",
    readOriginal: "Read the Korean original",
    originalAvailable: "Korean original available",
    languageLabel: "Language",
    primaryNav: "Primary navigation",
    chapterNavigation: "Chapter navigation",
    englishEdition: "English edition",
    previous: "Previous",
    next: "Next",
    originalTitle: "Korean original",
    translationPendingTitle: "This chapter is currently published in Korean.",
    translationPendingBody: "Open the Korean source manuscript to read the complete chapter.",
    booksCount: "books"
  },
  ja: {
    home: "ホーム", books: "ブックス", allBooks: "すべての本", catalog: "カタログ", contents: "目次",
    chapters: "章", chapter: "章", author: "著者", assets: "資料", line: "ライン", readOriginal: "韓国語原文を読む",
    originalAvailable: "韓国語原文あり", languageLabel: "言語", primaryNav: "メインナビゲーション", chapterNavigation: "章の移動", englishEdition: "英語版", previous: "前へ", next: "次へ",
    originalTitle: "韓国語原題", translationPendingTitle: "この章は現在、韓国語で公開されています。",
    translationPendingBody: "全文は韓国語の原文でお読みいただけます。", booksCount: "冊"
  },
  "zh-Hant": {
    home: "首頁", books: "書籍", allBooks: "全部書籍", catalog: "目錄", contents: "目錄", chapters: "章", chapter: "章",
    author: "作者", assets: "資源", line: "系列", readOriginal: "閱讀韓文原文", originalAvailable: "提供韓文原文",
    languageLabel: "語言", primaryNav: "主要導覽", chapterNavigation: "章節導覽", englishEdition: "英文版", previous: "上一章", next: "下一章", originalTitle: "韓文原標題",
    translationPendingTitle: "本章目前以韓文發布。", translationPendingBody: "請前往韓文原文閱讀完整內容。", booksCount: "本"
  },
  "zh-Hans": {
    home: "首页", books: "书籍", allBooks: "全部书籍", catalog: "目录", contents: "目录", chapters: "章", chapter: "章",
    author: "作者", assets: "资源", line: "系列", readOriginal: "阅读韩文原文", originalAvailable: "提供韩文原文",
    languageLabel: "语言", primaryNav: "主要导航", chapterNavigation: "章节导航", englishEdition: "英文版", previous: "上一章", next: "下一章", originalTitle: "韩文原标题",
    translationPendingTitle: "本章目前以韩文发布。", translationPendingBody: "请前往韩文原文阅读完整内容。", booksCount: "本"
  }
} as const;

export function localizeBook(book: Book, locale: Locale): Book {
  const translation = locale === "en" ? englishBooks[book.slug] : localizedBookTitles[locale]?.[book.slug];
  return { ...book, ...(translation ?? {}) };
}

export function localizeBooks(books: Book[], locale: Locale): Book[] {
  return books.map((book) => localizeBook(book, locale));
}

export function bookTitleWithCount(book: Pick<Book, "title" | "chapterCount">, locale: Locale): string {
  return `${book.title} (${chapterCountLabel(book, locale)})`;
}

export function chapterCountLabel(book: Pick<Book, "chapterCount">, locale: Locale): string {
  return locale === "ko" ? `${book.chapterCount}편` : `${book.chapterCount} ${copy[locale].chapters}`;
}

export function localePrefix(locale: Locale): string {
  const segment = localeSegments[locale];
  return segment ? `/${segment}` : "";
}

export function bookHref(book: Pick<Book, "slug">, locale: Locale): string {
  return `${localePrefix(locale)}/books/${book.slug}/`;
}

export function chapterHref(book: Pick<Book, "slug">, chapter: Chapter, locale: Locale): string {
  if (chapter.externalUrl) return `${localePrefix(locale)}${chapter.externalUrl}`;
  return `${localePrefix(locale)}/books/${book.slug}/${chapter.slug}/`;
}

export function localizePath(pathname: string, locale: Locale): string {
  const localizedPrefix = /^\/(en|ja|zh-hant|zh-hans)(?=\/|$)/;
  const koreanPath = pathname.replace(localizedPrefix, "") || "/";
  return `${localePrefix(locale)}${koreanPath}` || "/";
}
