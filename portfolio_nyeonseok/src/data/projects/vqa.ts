import type { Project } from '../types';

const vqa: Project = {
  slug: 'vqa',
  name: 'AI 이미지 VQA Fine-tuning',
  tone: 'violet',
  tagline: '제한된 GPU 환경에서 VLM을 Fine-tuning한 4지선다 VQA 모델',
  context: 'SSAFY AI 챌린지',
  period: '2026.04.02 – 2026.04.06',
  org: '삼성청년SW·AI아카데미 (SSAFY)',
  role: '모델 선정 · Fine-tuning · 데이터 전처리 · 추론/검증',

  card: {
    role: '모델 선정 · Fine-tuning · 검증',
    stack: ['Qwen2.5-VL', 'LoRA', '4-bit Quantization', 'PyTorch'],
    metric: { value: '약 68% → 약 91%', label: 'Validation Accuracy · 508개 기준' },
    highlight: 'Validation Accuracy 약 68% → 약 91%',
  },

  stack: ['Qwen2.5-VL', 'Hugging Face', 'Transformers', 'PyTorch', 'PEFT', 'LoRA', 'BitsAndBytes'],

  keyResults: [
    { value: '약 68% → 약 91%', label: 'Validation Accuracy' },
    { value: '약 23%p', label: '정확도 개선' },
    { value: '508개', label: 'Validation 데이터' },
  ],
  keyResultsNote:
    'Test가 아닌 Validation 기준입니다. Train / Validation을 9:1로 나누고 Validation Loss 기준으로 Best Model을 저장했습니다.',

  overview: [
    '재활용 관련 이미지를 보고, 질문과 4개의 보기를 바탕으로 정답을 선택하는 VQA 모델입니다.',
  ],

  focus: '모델 선정부터 학습 환경 구성, 데이터 전처리, 출력 형식 제어와 검증까지 진행했습니다.',

  contributions: [
    {
      title: '모델 · 학습',
      items: ['Qwen2.5-VL-7B-Instruct 계열 모델 선정', '4-bit NF4 양자화 + LoRA Fine-tuning 환경 구성'],
    },
    {
      title: '데이터',
      items: [
        'EXIF 방향 보정',
        'Horizontal Flip · Color Jitter · Random Crop · Gaussian Blur',
        '이미지 입력 해상도 256×256 ~ 1280×1280 범위 처리',
      ],
    },
    {
      title: '출력 · 검증',
      items: ['System Prompt 설계와 출력 형식 제어', 'Train / Validation 분리와 Best Model 선택'],
    },
  ],

  cases: [
    {
      id: 'limited-gpu',
      title: '제한된 GPU 환경에서 7B VLM 학습',
      problem: [
        '이미지와 텍스트를 동시에 이해하는 Vision-Language Model이 필요했지만, 7B 규모 모델을 제한된 GPU 환경에서 학습해야 했습니다.',
      ],
      decision: [
        '전체 7B 파라미터를 모두 학습하지 않고, 4-bit로 양자화한 모델에 LoRA를 적용해 필요한 projection만 학습하기로 했습니다.',
      ],
      table: {
        caption: '학습 구성',
        columns: ['항목', '설정'],
        rows: [
          ['모델', 'Qwen2.5-VL-7B-Instruct 계열'],
          ['양자화', '4-bit NF4'],
          ['LoRA', 'r=16, alpha=32'],
          ['LoRA 적용 대상', 'Attention q/k/v/o projection · MLP gate/up/down projection'],
          ['Batch', 'Batch Size 2 + Gradient Accumulation → Effective Batch Size 8'],
          ['메모리 절약', 'Gradient Checkpointing · bfloat16 Mixed Precision'],
        ],
      },
      results: ['전체 7B 파라미터를 모두 학습하지 않고 Fine-tuning 환경 구성'],
      media: 'training',
    },
    {
      id: 'output-control',
      title: '서비스가 처리할 수 있는 출력 형식으로 제어',
      problem: ['모델이 자유로운 자연어가 아니라, 서비스가 처리할 수 있는 a / b / c / d 형식으로 답해야 했습니다.'],
      decision: ['정확도만이 아니라 애플리케이션이 바로 사용할 수 있는 출력 형식까지 모델 요구사항으로 정의했습니다.'],
      actions: [
        '질문과 보기를 [질문], [보기] 형태로 구조화',
        '이미지의 색상·재질·형태·내용물에 집중해 판단하도록 System Prompt 설계',
        '출력값을 소문자 a / b / c / d 한 글자로 제한',
        'do_sample=False, 정규식 후처리',
      ],
    },
    {
      id: 'validation',
      title: '학습 결과 검증',
      decision: ['학습이 실제로 나아졌는지 수치로 확인하기 위해, 같은 Validation 데이터로 학습 전후 정확도를 비교했습니다.'],
      actions: ['Train / Validation 9:1 분리', 'Validation Loss 기준 Best Model 저장'],
      resultTable: {
        caption: '학습 및 검증 결과',
        columns: ['항목', '값'],
        rows: [
          ['학습 데이터', '5,073개'],
          ['학습', '5 Epoch'],
          ['Best Validation Loss', '6.5424'],
          ['Validation Accuracy (508개)', '약 68% → 약 91%'],
          ['개선 폭', '약 23%p'],
        ],
        numeric: [false, true],
      },
    },
  ],

  takeaway:
    '정확도만 높이는 것이 아니라 애플리케이션이 바로 사용할 수 있는 출력 형식까지 모델 요구사항으로 정의하고 검증했습니다.',

  media: [
    { dir: 'examples', label: '추론 예시', placement: 'screens' },
    { dir: 'results', label: '결과 자료', placement: 'results' },
  ],
  captions: {},
};

export default vqa;
