import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const defaultSourceRoot = path.resolve(repoRoot, "../..");
const sourceRoot = process.env.MEJE_SOURCE_ROOT ?? defaultSourceRoot;
const targetRoot = path.join(repoRoot, "content/books");

const bookDefs = [
  {
    slug: "meje-librarying",
    title: "MEJE 라이브러링 워크플로 백서",
    subtitle: "자료를 세계관 지식 구조로 묶는 제작 공정",
    line: "MEJE PROCESS",
    category: "Process 02",
    author: "MEJE Works",
    description:
      "흩어진 원천 자료에서 키워드, 개념, 관계, 장소, 사건을 추출해 세계관 지식 구조로 묶는 MEJE의 라이브러링 공정입니다.",
    sourceDir: "__메제 기술자산/강연고1_라이브러링 강연고",
    assetDirs: ["_라이브러링 강연고 삽화"],
    include: [
      /^00_공개본_서문과_목차\.md$/,
      /^00_총람_목차와_집필계획_wikied\.md$/,
      /^본문_\d+_제\d+장\.md$/,
      /^실무편_.*\.md$/
    ]
  },
  {
    slug: "meje-seoyeongak",
    title: "MEJE 서연각 번역 프로세스",
    subtitle: "번역, 각색, 해설 자료집 제작 공정",
    line: "MEJE PROCESS",
    category: "Process 03",
    author: "MEJE Works",
    description:
      "MEJEworks 산하 번역 조직 서연각의 기획부터 납품까지, 다국어 콘텐츠 제작과 자료집화를 다루는 실무 원고입니다.",
    sourceDir: "__메제 기술자산/강연고2_서연각 강연고",
    include: [
      /^소개글_wikied\.md$/,
      /^00_도서정보_서지_wikied\.md$/,
      /^00_총람_목차와_집필계획_wikied\.md$/,
      /^본문_\d+_제\d+장_wikied\.md$/,
      /^본문_15_제15장\.md$/
    ]
  },
  {
    slug: "pride-and-prejudice-data",
    title: "Pride and Prejudice 세계관 데이터",
    subtitle: "서연각 공정의 기반 자료 예시",
    line: "MEJE PROCESS",
    category: "Reference",
    author: "MEJE Works",
    description:
      "서연각 번역 및 자료집 공정의 기반 예시로 정리된 Pride and Prejudice 세계관 데이터와 설정 시트 자료입니다.",
    sourceDir: "__메제 기술자산/강연고2_기반_세계관 데이터 pride and prejudice",
    include: [/\.md$/]
  },
  {
    slug: "meje-lorebook",
    title: "MEJE 설정 프로세스 로어북",
    subtitle: "세계관 설정집과 로어북 제작 공정",
    line: "MEJE PROCESS",
    category: "Process 04",
    author: "MEJE Works",
    description:
      "라이브러링된 지식을 공식 설정집, 로어북, 공개 위키, 책 구조로 편집하는 MEJE의 세계관 설정집 제작 공정입니다.",
    sourceDir: "__메제 기술자산/강연고3_LOREBOOK 강연고",
    include: [/^00_총람_목차와_집필계획_wikied\.md$/, /^본문_\d+_.+\.md$/]
  },
  {
    slug: "meje-character-process",
    title: "MEJE 캐릭터특화 프로세스",
    subtitle: "캐릭터 창작 및 시트 제작 디자인 가이드",
    line: "MEJE PROCESS",
    category: "Process 05",
    author: "MEJE Works",
    description:
      "캐릭터를 서사, 욕망, 결핍, 관계, 말투, 시각 요소, 운용 시트 단위로 제작하는 신규창작 공정입니다.",
    sourceDir: "__메제 기술자산/강연고4_meje신규창작_캐릭터특화 강연고",
    assetDirs: ["."],
    include: [/^00_총람_목차와_집필계획_wikied\.md$/, /^본문_\d+_.+\.md$/]
  },
  {
    slug: "meje-storytelling-100",
    title: "MEJE 스토리텔링 100",
    subtitle: "세계관과 캐릭터에서 100개의 이야기 장면으로",
    line: "MEJE PROCESS",
    category: "Process 06",
    author: "MEJE Works",
    description:
      "세계관과 캐릭터 시트를 바탕으로 일상단면, 사건, 관계 변화, 참여형 장면 100개를 생산하는 스토리텔링 공정입니다.",
    sourceDir: "__메제 기술자산/강연고5_스토리텔링100 강연고",
    include: [/^00_총람_목차와_집필계획_wikied\.md$/, /^본문_\d+_.+\.md$/]
  },
  {
    slug: "atmosphere-engineering",
    title: "분위기공학",
    subtitle: "공간, 감각, 관계가 이야기를 만드는 방식",
    line: "KIM DONG-EUN",
    category: "Essay",
    author: "김동은WhtDrgon.",
    description:
      "MEJE 대표이자 세계관 제작자 김동은WhtDrgon.의 분위기, 감각, 공간, 관계에 관한 원고 라인입니다.",
    sourceDir: "김동은 세계관 통합 지식체계 정리/강연고_김동은_분위기공학 3편 260709",
    assetDirs: ["_강연고 삽화"],
    include: [/\.md$/]
  },
  {
    slug: "new-content-ftue",
    title: "FTUE 최초 사용자 경험",
    subtitle: "뉴콘텐츠의 첫 장면과 진입 경험 설계",
    line: "KIM DONG-EUN",
    category: "FTUE",
    author: "김동은WhtDrgon.",
    description:
      "서비스와 콘텐츠의 첫 화면, 첫 감정, 첫 관계를 어떻게 설계할지 다루는 최초 사용자 경험 원고 묶음입니다.",
    sourceDir: "김동은 세계관 통합 지식체계 정리/강연고_김동은_FTUE 최초사용자경험강연고 260604/1고",
    assetDirs: ["삽화"],
    include: [/\.md$/],
    exclude: [/^README\.md$/]
  },
  {
    slug: "mobile-game-bm-renewal",
    title: "모바일 게임 BM 리뉴얼",
    subtitle: "과금 기획, 설계, 데이터 분석과 운영",
    line: "KIM DONG-EUN",
    category: "Business Model",
    author: "김동은WhtDrgon.",
    description:
      "뉴콘텐츠 비즈니스 모델을 게임, 음악, 영상, 웹툰, IP 확장 경제와 연결해 읽는 BM북 리뉴얼 원고입니다.",
    sourceDir: "김동은 세계관 통합 지식체계 정리/강연고_김동은_BM북 리뉴얼  260331/03_집필",
    assetDirs: [".", "../04_표지"],
    include: [/\.md$/]
  },
  {
    slug: "reading-the-world-through-universe",
    title: "세계관으로 세계를 읽는 법",
    subtitle: "세계관을 설정집이 아니라 해석 렌즈로 읽기",
    line: "KIM DONG-EUN",
    category: "Worldview",
    author: "김동은WhtDrgon.",
    description:
      "세계관을 해석 렌즈, 조직 원리, 창작 공정, 사업 구조로 읽는 책의 집필 계획과 원고 보강 자료입니다.",
    sourceDir: "김동은 세계관 통합 지식체계 정리/원고_세계관으로 세계를 읽는 법/장별 원고 초안",
    assetDirs: ["삽화 이미지"],
    recursive: true,
    include: [/\.md$/]
  }
];

const imagePattern = /\.(png|jpe?g|webp|gif|svg)$/i;
const convertibleImagePattern = /\.(png|jpe?g)$/i;
const cwebpLookup = spawnSync("which", ["cwebp"], { encoding: "utf8" });
const cwebpBin = cwebpLookup.status === 0 ? cwebpLookup.stdout.trim() : "";

function listFiles(dir, recursive = false) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    if (entry.name === ".DS_Store" || entry.name.startsWith("._")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (recursive) {
        result.push(...listFiles(fullPath, recursive).map((child) => path.join(entry.name, child)));
      }
    } else {
      result.push(entry.name);
    }
  }
  return result;
}

function matchesAny(fileName, patterns = []) {
  return patterns.some((pattern) => pattern.test(fileName));
}

function matchesNone(fileName, patterns = []) {
  return !patterns.some((pattern) => pattern.test(fileName));
}

function cleanTitle(fileName) {
  return path.basename(fileName)
    .replace(/\.md$/i, "")
    .replace(/_wikied$/i, "")
    .replace(/^본문_/, "")
    .replace(/^00_/, "")
    .replace(/_/g, " ")
    .trim();
}

function slugify(fileName, index) {
  const base = path.basename(fileName)
    .normalize("NFC")
    .replace(/\.md$/i, "")
    .replace(/[^a-zA-Z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return `${String(index + 1).padStart(2, "0")}-${base || "chapter"}`;
}

function sortKey(fileName) {
  const name = path.basename(fileName);
  const numberMatch = name.match(/(?:본문_)?(\d+)[^0-9]/);
  const number = numberMatch ? Number(numberMatch[1]) : 900;
  const appendix = /실무편|부록|참조|예시|양식|체크리스트/.test(name) ? 500 : 0;
  return number + appendix;
}

function assetName(fileName, index) {
  const sourceExt = path.extname(fileName).toLowerCase();
  const targetExt = convertibleImagePattern.test(fileName) && cwebpBin
    ? ".webp"
    : sourceExt;
  const base = path
    .basename(fileName, sourceExt)
    .normalize("NFC")
    .replace(/[^a-zA-Z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return `${String(index + 1).padStart(2, "0")}-${base || "asset"}${targetExt}`;
}

function copyAssetFile(sourcePath, targetPath, sourceName) {
  if (cwebpBin && convertibleImagePattern.test(sourceName)) {
    const result = spawnSync(cwebpBin, ["-quiet", "-q", "82", sourcePath, "-o", targetPath]);
    if (result.status === 0) return;
  }
  fs.copyFileSync(sourcePath, targetPath);
}

function copyAssets(book, sourceDir) {
  const assetDirs = book.assetDirs ?? [];
  const targetDir = path.join(repoRoot, "public/assets/books", book.slug);
  fs.rmSync(targetDir, { recursive: true, force: true });

  const assets = [];
  for (const assetDir of assetDirs) {
    const fullAssetDir = path.resolve(sourceDir, assetDir);
    if (!fs.existsSync(fullAssetDir)) continue;

    const files = listFiles(fullAssetDir, true)
      .filter((fileName) => imagePattern.test(fileName))
      .sort((a, b) => a.localeCompare(b, "ko"));

    for (const fileName of files) {
      const outputName = assetName(fileName, assets.length);
      fs.mkdirSync(targetDir, { recursive: true });
      copyAssetFile(path.join(fullAssetDir, fileName), path.join(targetDir, outputName), fileName);
      assets.push({
        title: cleanTitle(fileName),
        sourceFile: fileName,
        url: `/assets/books/${book.slug}/${outputName}`
      });
    }
  }

  const preferredCover =
    assets.find((asset) => /커버|cover|표지|title|전체/.test(asset.title)) ?? assets[0];

  return {
    assets,
    cover: preferredCover?.url
  };
}

function copyBook(book, bookIndex) {
  const sourceDir = path.join(sourceRoot, book.sourceDir);
  const targetDir = path.join(targetRoot, book.slug);
  const chapterDir = path.join(targetDir, "chapters");

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`source not found: ${sourceDir}`);
  }

  fs.mkdirSync(chapterDir, { recursive: true });
  const files = listFiles(sourceDir, book.recursive)
    .filter((fileName) => fileName.endsWith(".md"))
    .filter((fileName) => matchesAny(fileName, book.include))
    .filter((fileName) => matchesNone(fileName, book.exclude))
    .sort((a, b) => sortKey(a) - sortKey(b) || a.localeCompare(b, "ko"));

  const chapters = files.map((fileName, chapterIndex) => {
    const slug = slugify(fileName, chapterIndex);
    const outputName = `${slug}.md`;
    fs.copyFileSync(path.join(sourceDir, fileName), path.join(chapterDir, outputName));
    return {
      slug,
      title: cleanTitle(fileName),
      sourceFile: fileName,
      file: `chapters/${outputName}`,
      order: chapterIndex + 1
    };
  });

  const { assets, cover } = copyAssets(book, sourceDir);

  const metadata = {
    slug: book.slug,
    title: book.title,
    subtitle: book.subtitle,
    line: book.line,
    category: book.category,
    author: book.author,
    description: book.description,
    order: bookIndex + 1,
    chapterCount: chapters.length,
    cover,
    assetCount: assets.length,
    assets,
    chapters
  };

  fs.writeFileSync(path.join(targetDir, "book.json"), `${JSON.stringify(metadata, null, 2)}\n`, "utf8");
  return metadata;
}

fs.rmSync(targetRoot, { recursive: true, force: true });
fs.mkdirSync(targetRoot, { recursive: true });

const imported = bookDefs.map(copyBook);

fs.writeFileSync(
  path.join(targetRoot, "catalog.json"),
  `${JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      bookCount: imported.length,
      books: imported.map(({ chapters, ...book }) => book)
    },
    null,
    2
  )}\n`,
  "utf8"
);

console.log(`Imported ${imported.length} books into ${targetRoot}`);
for (const book of imported) {
  console.log(`- ${book.title}: ${book.chapterCount} chapters`);
}
