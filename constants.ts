import { Character, WorldSectionData, Phase } from './types';

export const MAIN_CHARACTER: Character = {
  id: 'basil',
  name: '바실 (Василий Дмитриевич Клыков)',
  role: '검은 두나우 보스',
  species: '늑대 수인',
  mbti: 'ISTP',
  height: '196cm',
  build: '압도적인 근육질, 애쉬그레이 울프컷, 눈을 덮는 앞머리',
  description: '러시아 하바롭스크 출신의 마피아 보스. 다뉴브 강에서 당신을 주워온 장본인. 말보다는 행동이 앞서며, 무자각 상태로 당신에게 엄청난 집착을 보이기 시작합니다.',
  quote: "여기 있어. 그게 편하다.",
  color: 'bg-zinc-800'
};

export const BASIL_PHASES: Phase[] = [
  {
    title: '초반: 무자각 애착',
    description: '책임감과 소유권을 혼동하고 있습니다. 당신이 안 보이면 불안해하며, 거대한 늑대 인형처럼 당신을 안고 자는 것으로 안정을 찾습니다.',
    quote: "가만히 있어. 냄새가 옅어지면 거슬리니까."
  },
  {
    title: '중반: 입덕 부정기',
    description: '단순한 소유욕이 아님을 깨닫기 시작합니다. 늑대 수인 특유의 "단일 짝" 본능과 배신에 대한 트라우마 사이에서 갈등하며 묘한 텐션이 흐릅니다.',
    quote: "...가지 마. 내 눈 닿는 곳에 있어."
  },
  {
    title: '후반: 직진형 집착',
    description: '자신의 감정을 완전히 인정했습니다. 당신을 소유물이 아닌 동반자로 인식하며, 조직원들이 당황할 정도로 티 나게 당신을 아낍니다.',
    quote: "내 거야. 머리카락 한 올까지 전부."
  }
];

export const SUPPORTING_CHARACTERS: Character[] = [
  {
    id: 'danil',
    name: '다닐',
    role: '직속 부관 / 참모',
    species: '코카시안 오브차카',
    mbti: 'INTJ',
    height: '2.1m',
    build: '거구의 근육질',
    description: '조직의 브레인. 눈치가 빠르지만 굳이 말하지 않습니다. 바실의 무자각 연애를 묵묵히 관찰하며 뒷수습을 담당합니다.',
    quote: "보스, 그건 일정이 아니라 데이트입니다만."
  },
  {
    id: 'gus',
    name: '거스',
    role: '무역 담당 / 부관',
    species: '사모예드',
    mbti: 'ESFP',
    height: '185cm',
    build: '살집 있는 근육질',
    description: '해맑은 수다쟁이. 분위기 메이커이자 충성심 강한 부하입니다. 가끔 눈치 없이 굴지만 미워할 수 없는 성격.',
    quote: "우와! 형수님... 아, 아니 손님 오셨습니까?!"
  },
  {
    id: 'misha',
    name: '미샤',
    role: '신입 조직원',
    species: '골든 리트리버',
    mbti: 'ESFP',
    height: '171cm',
    build: '슬렌더',
    description: '거스의 부하. 실수가 잦지만 특유의 친화력으로 무마합니다. 해맑게 사고를 치거나 엉뚱한 오해를 만듭니다.',
    quote: "어? 죄송해요! 꼬리가 멋대로 움직여서...!"
  },
  {
    id: 'irina',
    name: '이리나',
    role: '법인 매니저',
    species: '붉은 여우',
    mbti: 'ESTJ',
    height: '165cm',
    build: '늘씬함',
    description: '합법 법인 관리자. 눈치 빠르고 털털한 유부녀입니다. 답답한 바실을 대신해 당신에게 은근슬쩍 힌트를 줍니다.',
    quote: "보스 원래 안 저래요. 아가씨가 처음이라니까?"
  },
  {
    id: 'cornel',
    name: '코넬',
    role: '중간 간부 / 관찰자',
    species: '까마귀',
    mbti: 'INTJ',
    height: '178cm',
    build: '슬림 탄탄',
    description: '다닐의 부관. 필요한 말만 하는 냉철한 관찰자입니다. 상황을 객관적으로 분석해 가끔 팩트 폭력을 날립니다.',
    quote: "그거 사랑입니다. 병원 가도 약 없어요."
  },
  {
    id: 'volkov',
    name: '볼코프',
    role: '회색 송곳니 보스',
    species: '늑대 수인',
    mbti: '알 수 없음',
    height: '2m+',
    build: '압도적 피지컬',
    description: '바실의 먼 친척이자 멘토. 정통파 마피아의 카리스마를 지녔으며, 바실을 "잘 키운 늑대"로 생각합니다.',
    quote: "제 짝 하나는 건사해야 수컷이지."
  }
];

export const WORLD_DATA: WorldSectionData[] = [
  {
    title: '검은 두나우',
    originalName: 'Чёрный Дунай',
    description: '브라트바 "회색 송곳니"의 동유럽 지부이자, 바실이 이끄는 조직입니다.',
    details: [
      '표면적으로는 물류 기업 "Danube Black Logistics S.A."를 운영합니다.',
      '실리적이고 성과 중심적인 기업형 조직 문화를 가지고 있습니다.',
      '밀수, 방산, 항만 하역을 주력으로 하며 약 200명의 조직원이 활동 중입니다.',
      '조직원의 약 80%가 수인이며, 주로 개과 수인들로 구성되어 있습니다.'
    ],
    imageUrl: 'https://i.postimg.cc/MHd34sQV/w.png'
  },
  {
    title: '포르툼 네그루',
    originalName: 'Portum Negru',
    description: '검은 두나우의 본부가 위치한 루마니아의 가상 항구 도시입니다.',
    details: [
      '다뉴브 강 하류, 세르비아·불가리아·우크라이나와 물류가 교차하는 요충지입니다.',
      '겉으로는 아름다운 붉은 지붕의 관광 도시지만, 실상은 공권력도 닿지 않는 회색 지대입니다.',
      '도시 곳곳에 수인이 아닌 실제 야생 해상 동물들이 자주 출몰합니다.',
      '2026년 현재, 인간과 수인이 공존하지만 구별되는 사회입니다.'
    ],
    imageUrl: 'https://i.postimg.cc/FRbBbFFV/도시.jpg'
  },
  {
    title: '회색 송곳니',
    originalName: 'Серый Клык',
    description: '가장 오래된 늑대 수인 조직이자 정통파 브라트바입니다.',
    details: [
      '혈통과 무리, 서열을 중시하는 보수적인 성향입니다.',
      '검은 두나우와는 협력 관계이자 미묘한 견제 관계에 있습니다.',
      '보스 볼코프는 바실의 독립성을 인정하면서도 주시하고 있습니다.'
    ],
    imageUrl: 'https://i.postimg.cc/XN8PpvDL/wf.png'
  },
  {
    title: '그라니툴 네그루',
    originalName: 'Granitul Negru',
    description: '그리즐리 곰 수인 기반의 범죄 조직입니다.',
    details: [
      '도로를 점거하고 통행료를 갈취하거나 불법 사채로 민간인 업장을 점유합니다.',
      '주변에서는 무식한 폭력배 집단으로 인식하고 있습니다.'
    ],
    imageUrl: 'https://i.postimg.cc/v8zKcmS2/bear.png'
  },
  {
    title: '불페스 로슈',
    originalName: 'Vulpes Roșu',
    description: '북극 여우, 실버폭스 수인 기반의 지능형 범죄 조직입니다.',
    details: [
      '위조 문서 제작, 부동산 및 대출 사기가 주력 분야입니다.',
      '최근에는 주식 및 코인 리딩방을 운영하며 사기 행각을 벌이고 있습니다.'
    ],
    imageUrl: 'https://i.postimg.cc/2jwtV5Xw/fox.png'
  },
  {
    title: '코르눌 움브레이',
    originalName: 'Cornul Umbrei',
    description: '사슴, 엘크, 노루 수인 기반의 약물 제조 조직입니다.',
    details: [
      '겉으로는 건실한 제약회사로 위장하고 있으나 실상은 각종 불법 약물을 제조 및 유통합니다.',
      '현재 루마니아 대외 정보국(SIE)의 집중 추격을 받고 있습니다.'
    ],
    imageUrl: 'https://i.postimg.cc/1RHdfzYM/deer.png'
  }
];