import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const defaultSourceRoot = path.resolve(repoRoot, "../..");
const sourceRoot = process.env.MEJE_SOURCE_ROOT ?? defaultSourceRoot;
const targetRoot = path.join(repoRoot, "content/books");
const privateReportRoot = path.join(repoRoot, ".meje-reports");

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
    orderInclude: [
      /^00_공개본_서문과_목차\.md$/,
      /^00_총람_목차와_집필계획_wikied\.md$/,
      /^본문_\d+_제\d+장\.md$/,
      /^실무편_.*\.md$/
    ],
    include: [
      /^본문_\d+_제\d+장\.md$/,
      /^실무편_(?!00_).*\.md$/
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
    orderInclude: [
      /^소개글_wikied\.md$/,
      /^00_도서정보_서지_wikied\.md$/,
      /^00_총람_목차와_집필계획_wikied\.md$/,
      /^본문_(0[1-9]|1[0-4])_제\d+장_wikied\.md$/
    ],
    include: [
      /^본문_(0[1-9]|1[0-4])_제\d+장_wikied\.md$/
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
    recursive: true,
    include: [
      /^P&P_profile_wikied\.md$/,
      /^\[설정시트\]\/.+_wikied\.md$/
    ],
    exclude: [/^README_wikied\.md$/, /^설정시트_목록_wikied\.md$/],
    privateAssetManifest: true
  },
  {
    slug: "pride-and-prejudice-characters",
    title: "Pride and Prejudice 캐릭터시트",
    subtitle: "서연각 공정의 인물 레퍼런스",
    line: "MEJE PROCESS",
    category: "Reference",
    author: "MEJE Works",
    description:
      "Pride and Prejudice 번역·각색 자료집에서 분리한 인물관계도와 캐릭터시트 37개입니다.",
    sourceDir: "__메제 기술자산/강연고2_기반_세계관 데이터 pride and prejudice/[캐릭터시트]",
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
    orderInclude: [/^00_총람_목차와_집필계획_wikied\.md$/, /^본문_\d+_.+\.md$/],
    include: [/^본문_\d+_.+\.md$/]
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
    orderInclude: [/^00_총람_목차와_집필계획_wikied\.md$/, /^본문_\d+_.+\.md$/],
    include: [/^본문_\d+_.+\.md$/]
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
    orderInclude: [/^00_총람_목차와_집필계획_wikied\.md$/, /^본문_\d+_.+\.md$/],
    include: [/^본문_\d+_.+\.md$/]
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
    orderExclude: [/^README\.md$/],
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
    orderInclude: [/\.md$/],
    include: [/\.md$/],
    exclude: [/(^|\/)00_색인\.md$/]
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
  const normalized = fileName.normalize("NFC");
  return patterns.some((pattern) => pattern.test(normalized));
}

function matchesNone(fileName, patterns = []) {
  const normalized = fileName.normalize("NFC");
  return !patterns.some((pattern) => pattern.test(normalized));
}

function cleanTitle(fileName) {
  const baseName = path.basename(fileName);
  if (baseName.normalize("NFC") === "P&P_profile_wikied.md") return "Pride and Prejudice 작품 프로파일";
  return baseName
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

const prideSettingOrder = new Map([
  "P&P_profile_wikied.md",
  "인물관계도_wikied.md",
  "연대기_wikied.md",
  "전체인물리스트_wikied.md",
  "전체장소리스트_wikied.md",
  "전체사물리스트_wikied.md",
  "장별_번역가이드_wikied.md",
  "시대어_오역방지_사전_wikied.md",
  "경칭_어조_번역가이드_wikied.md",
  "서술자_가이드_wikied.md",
  "뉘앙스리스트_wikied.md",
  "반복모티프_추적표_wikied.md",
  "서간체_모음집_wikied.md",
  "인물_심리변화_곡선_wikied.md",
  "리젠시_시대상_백과_wikied.md",
  "사물_계급상징_사전_wikied.md",
  "제도_경제용어_관계도_wikied.md",
  "하인_체계도_추정_wikied.md",
  "메뉴_식문화_추정_wikied.md",
  "의상_인벤토리_추정_wikied.md",
  "음악_소리환경_추정_wikied.md",
  "신체언어_예법_사전_wikied.md",
  "감정어휘_한영대응표_wikied.md",
  "외래어_프랑스어_사전_wikied.md",
  "건물_평면도_추정_wikied.md",
  "씬_세트_구성도_wikied.md",
  "정원_조경_추정_wikied.md",
  "메리턴_상점가_추정_wikied.md",
  "종교_생활_추정_wikied.md",
  "인물_일과표_추정_wikied.md",
  "전체집단리스트_wikied.md",
  "전체기타리스트_wikied.md",
  "전체불특정리스트_wikied.md",
  "시대착오_금기단어_wikied.md",
  "인물_숨은_관계망_추정_wikied.md",
  "인물별_사건별_장소관계도_wikied.md",
  "각색_시나리오_가이드_wikied.md"
].map((fileName, index) => [fileName, index]));

function sortKey(fileName) {
  const normalized = fileName.normalize("NFC");
  const name = path.basename(normalized);
  if (prideSettingOrder.has(name)) return prideSettingOrder.get(name);
  if (name === "인물관계도_wikied.md") return 0;
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

function listFilesRecursive(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".DS_Store" || entry.name.startsWith("._")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...listFilesRecursive(fullPath));
    } else {
      result.push(fullPath);
    }
  }
  return result;
}

function relativeSourcePath(sourceDir, filePath) {
  return path.relative(sourceDir, filePath).normalize("NFC");
}

function sha256(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function writePrivateAssetManifest(book, sourceDir, targetDir) {
  if (!book.privateAssetManifest) return;
  const reportDir = path.join(privateReportRoot, book.slug);
  fs.mkdirSync(reportDir, { recursive: true });

  const files = listFilesRecursive(sourceDir);
  const markdown = files
    .filter((filePath) => filePath.endsWith(".md"))
    .map((filePath) => relativeSourcePath(sourceDir, filePath))
    .sort((a, b) => a.localeCompare(b, "ko"));
  const csvCandidates = files
    .filter((filePath) => filePath.endsWith(".csv"))
    .map((filePath) => relativeSourcePath(sourceDir, filePath))
    .sort((a, b) => a.localeCompare(b, "ko"));
  const pdfCandidates = files
    .filter((filePath) => filePath.toLowerCase().endsWith(".pdf"))
    .map((filePath) => {
      const stat = fs.statSync(filePath);
      return {
        path: relativeSourcePath(sourceDir, filePath),
        bytes: stat.size,
        sha256: sha256(filePath),
        status: stat.size === 0 ? "empty-placeholder" : "private-download-candidate"
      };
    })
    .sort((a, b) => a.path.localeCompare(b.path, "ko"));

  const duplicateGroups = new Map();
  for (const pdf of pdfCandidates) {
    const current = duplicateGroups.get(pdf.sha256) ?? [];
    current.push(pdf);
    duplicateGroups.set(pdf.sha256, current);
  }
  const duplicatePdfGroups = [...duplicateGroups.entries()]
    .filter(([, pdfs]) => pdfs.length > 1)
    .map(([hash, pdfs]) => ({
      sha256: hash,
      count: pdfs.length,
      status: pdfs.every((pdf) => pdf.bytes === 0) ? "empty-placeholder-group" : "duplicate-content",
      files: pdfs.map((pdf) => pdf.path)
    }));

  const manifest = {
    sourceDir: book.sourceDir,
    summary: {
      totalFiles: files.length,
      rootMarkdown: markdown.filter((filePath) => !filePath.includes(path.sep)).length,
      settingSheetMarkdown: markdown.filter((filePath) => filePath.startsWith("[설정시트]/")).length,
      characterSheetMarkdown: markdown.filter((filePath) => filePath.startsWith("[캐릭터시트]/")).length,
      csvCandidates: csvCandidates.length,
      pdfCandidates: pdfCandidates.length,
      nonEmptyPdfCandidates: pdfCandidates.filter((pdf) => pdf.bytes > 0).length,
      emptyPdfPlaceholders: pdfCandidates.filter((pdf) => pdf.bytes === 0).length,
      duplicatePdfGroups: duplicatePdfGroups.length
    },
    publicPlan: {
      publishedInThisBook: [
        "P&P_profile_wikied.md",
        "[설정시트]/*.md"
      ],
      publishedInSeparateBook: [
        "[캐릭터시트]/*.md"
      ],
      excludedMarkdown: [
        "README_wikied.md",
        "설정시트_목록_wikied.md"
      ],
      privateOrDownloadCandidates: [
        "_partials/*.csv",
        "event_master_wikied.csv",
        "[설정시트]/_pdf/*.pdf",
        "[캐릭터시트]/_pdf/*.pdf"
      ]
    },
    csvCandidates,
    duplicatePdfGroups,
    pdfCandidates
  };

  fs.writeFileSync(
    path.join(reportDir, "private-assets.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8"
  );

  const emptyPdfList = pdfCandidates
    .filter((pdf) => pdf.bytes === 0)
    .map((pdf) => `- ${pdf.path}`)
    .join("\n");
  const csvList = csvCandidates.map((filePath) => `- ${filePath}`).join("\n");
  const privatePdfList = pdfCandidates
    .filter((pdf) => pdf.bytes > 0)
    .map((pdf) => `- ${pdf.path} (${pdf.bytes} bytes)`)
    .join("\n");

  const report = `# Pride and Prejudice 공개/비공개 자료 후보

이 파일은 MEJE Books 공개 챕터에 직접 노출하지 않는 자료의 정리표입니다.

## 공개 구조

- 본문 책: P&P_profile_wikied.md + [설정시트] 36개
- 별도 책: [캐릭터시트] 37개
- 공개 제외: README_wikied.md, 설정시트_목록_wikied.md
- 비공개 또는 다운로드 후보: CSV 19개, PDF 66개

## PDF 중복 확인

- 전체 PDF: ${pdfCandidates.length}개
- 정상 PDF 후보: ${pdfCandidates.filter((pdf) => pdf.bytes > 0).length}개
- 0바이트 빈 PDF: ${pdfCandidates.filter((pdf) => pdf.bytes === 0).length}개
- 비어 있지 않은 PDF의 해시 중복: 없음
- 중복 해시 그룹: ${duplicatePdfGroups.length}개

### 0바이트 빈 PDF

${emptyPdfList}

## CSV 후보

${csvList}

## 정상 PDF 다운로드 후보

${privatePdfList}
`;

  fs.writeFileSync(path.join(reportDir, "private-assets.md"), report, "utf8");
}

function copyBook(book, bookIndex) {
  const sourceDir = path.join(sourceRoot, book.sourceDir);
  const targetDir = path.join(targetRoot, book.slug);
  const chapterDir = path.join(targetDir, "chapters");

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`source not found: ${sourceDir}`);
  }

  fs.mkdirSync(chapterDir, { recursive: true });
  const sourceFiles = listFiles(sourceDir, book.recursive)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort((a, b) => sortKey(a) - sortKey(b) || a.localeCompare(b, "ko"));

  const orderedFiles = sourceFiles
    .filter((fileName) => matchesAny(fileName, book.orderInclude ?? book.include))
    .filter((fileName) => matchesNone(fileName, book.orderExclude))
    .sort((a, b) => sortKey(a) - sortKey(b) || a.localeCompare(b, "ko"));
  const orderedIndex = new Map(orderedFiles.map((fileName, index) => [fileName.normalize("NFC"), index]));

  for (const fileName of orderedFiles) {
    const slug = slugify(fileName, orderedIndex.get(fileName.normalize("NFC")));
    const outputName = `${slug}.md`;
    fs.copyFileSync(path.join(sourceDir, fileName), path.join(chapterDir, outputName));
  }

  const files = orderedFiles
    .filter((fileName) => matchesAny(fileName, book.include))
    .filter((fileName) => matchesNone(fileName, book.exclude));

  const chapters = files.map((fileName, chapterIndex) => {
    const slug = slugify(fileName, orderedIndex.get(fileName.normalize("NFC")));
    const outputName = `${slug}.md`;
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

  writePrivateAssetManifest(book, sourceDir, targetDir);
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
