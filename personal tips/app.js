const dimensions = {
  insight: {
    name: "深度洞察", short: "洞察", color: "#65e5ff",
    phrase: "看见表象背后的关键规律",
    strength: "你倾向于先理解问题本质，再形成判断，能够从零散信息中抓住真正影响结果的线索。"
  },
  action: {
    name: "目标行动", short: "行动", color: "#d8ff4f",
    phrase: "把想法持续推向真实结果",
    strength: "你对停滞较为敏感，习惯建立可行动的起点，再用反馈修正路径并推动结果发生。"
  },
  empathy: {
    name: "人际感知", short: "感知", color: "#ff9f57",
    phrase: "理解他人未说出口的需要",
    strength: "你能注意到语气、情绪和关系中的细微变化，并根据他人的接受方式调整表达。"
  },
  structure: {
    name: "系统秩序", short: "秩序", color: "#ae8cff",
    phrase: "让复杂事务变得清楚可控",
    strength: "你习惯建立顺序、标准和边界，把混乱信息整理成能够稳定推进和重复执行的系统。"
  },
  creativity: {
    name: "开放探索", short: "探索", color: "#ff72b6",
    phrase: "从熟悉事物中发现新可能",
    strength: "你对不同观点和未知路径保持开放，容易建立新连接，并愿意挑战惯常答案。"
  }
};

const dimensionOrder = ["insight", "action", "empathy", "structure", "creativity"];

const questions = [
  { dim: "insight", text: "面对一项复杂任务，我通常会先寻找真正决定结果的关键变量。" },
  { dim: "action", text: "即使信息还不完全，我也愿意先迈出可调整的第一步。" },
  { dim: "empathy", text: "即使对方没有明说，我也经常能察觉他的顾虑或情绪变化。" },
  { dim: "structure", text: "我会自然地把混乱事项整理成清单、步骤或规则。" },
  { dim: "creativity", text: "看到常见做法时，我很容易想到另一种实现方式。" },
  { dim: "insight", text: "时间紧迫时，我通常只处理眼前现象，不再追问问题根源。", reverse: true },
  { dim: "action", text: "如果不能确定方案已经足够成熟，我宁愿暂时不开始。", reverse: true },
  { dim: "empathy", text: "只要观点正确，我通常不太在意对方是否能接受我的表达方式。", reverse: true },
  { dim: "structure", text: "没有明确安排时，我容易因为任务混乱而失去推进节奏。", reverse: true },
  { dim: "creativity", text: "已有成熟做法时，我很少再尝试新的实现路径。", reverse: true },
  { dim: "insight", text: "复盘一件事时，我能区分偶然结果和可重复的规律。" },
  { dim: "action", text: "当大家迟迟无法决定时，我愿意提出方案并推动下一步。" },
  { dim: "empathy", text: "发生分歧时，我会先理解对方的真实诉求，而不只回应字面观点。" },
  { dim: "structure", text: "我能较长时间维护流程、细节和质量的一致性。" },
  { dim: "creativity", text: "把两个看似无关的想法组合起来，会让我产生新的解决方案。" },
  { dim: "insight", text: "相比快速给出答案，我更习惯先确认大家是否问对了问题。" },
  { dim: "action", text: "完成并获得反馈，通常比继续追求完美更能让我获得能量。" },
  { dim: "empathy", text: "我能够根据不同人的理解方式，调整自己的沟通表达。" },
  { dim: "structure", text: "即使没人要求，我也会主动建立标准、期限和检查节点。" },
  { dim: "creativity", text: "探索新路径通常比重复执行已知方法更能激发我的投入。" }
];

const archetypePairs = {
  "action|insight": {
    name: "战略推进者",
    line: "你既能看清真正的问题，也愿意把判断迅速转化为行动。",
    personality: "你的性格底色是清醒而有推进感。你不满足于只理解局面，更希望让关键判断尽快进入现实。面对复杂问题，你通常先抓重点，再寻找可以验证的下一步。",
    decision: "先识别关键变量，再选择一条能够快速获得反馈的路径。",
    pressure: "压力增大时，你可能同时加快分析和行动，容易忽略团队理解速度或恢复时间。",
    jobs: ["产品经理", "战略咨询", "项目负责人", "运营管理", "创业与业务拓展"],
    work: ["目标清楚且拥有适度决策权", "需要快速判断并持续推进", "能够把复杂问题转化为行动方案"]
  },
  "creativity|insight": {
    name: "原创洞察者",
    line: "你擅长穿透表象，并从关键规律中生长出不同寻常的答案。",
    personality: "你对事物为何如此保持强烈好奇，不容易满足于现成解释。你的创造并非凭空想象，而是建立在深度观察、独立判断和跨领域连接之上。",
    decision: "需要先理解问题本质，再比较不同可能性，最终选择最有新意且合理的方向。",
    pressure: "压力增大时，你可能反复推演或持续打开新方向，导致决定和交付变慢。",
    jobs: ["研究与研发", "用户研究", "品牌策略", "内容策划", "创新咨询"],
    work: ["允许深度研究和独立思考", "问题开放且答案不唯一", "重视原创判断而非机械执行"]
  },
  "insight|structure": {
    name: "系统思考者",
    line: "你能识别复杂系统中的关键关系，并把它们整理成清晰路径。",
    personality: "你偏好有依据、有结构的理解方式。面对混乱信息，你会自然地区分层次、关系与因果，再建立一个可以解释和预测结果的框架。",
    decision: "通过信息分析、风险比较和逻辑验证形成稳健结论。",
    pressure: "压力增大时，你可能增加规则与检查，希望通过控制细节降低不确定性。",
    jobs: ["数据分析", "工程研发", "系统架构", "风险管理", "科研与技术规划"],
    work: ["复杂度高且需要系统分析", "标准明确并允许持续优化", "重视准确性、逻辑和长期可靠性"]
  },
  "empathy|insight": {
    name: "深度理解者",
    line: "你同时关注事情的底层逻辑与人的真实感受。",
    personality: "你既会追问事情为什么发生，也会在意它对不同的人意味着什么。你对隐含信息较为敏锐，擅长把事实、动机和情绪放在同一张图里理解。",
    decision: "综合事实逻辑与人的影响，倾向于寻找兼顾长期关系的答案。",
    pressure: "压力增大时，你可能吸收过多外界情绪，也可能因为考虑太多立场而延迟表达自己的判断。",
    jobs: ["用户研究", "教育培训", "人才发展", "编辑策划", "咨询与客户洞察"],
    work: ["需要理解复杂需求与人性动机", "允许倾听、研究和形成深度判断", "成果能够真实改善他人体验"]
  },
  "action|creativity": {
    name: "开拓实践者",
    line: "你用行动验证新想法，在尝试和反馈中开辟道路。",
    personality: "你喜欢让新想法尽快进入真实世界。与长时间论证相比，小步试验、快速反馈和持续迭代更符合你的节奏。变化对你而言往往意味着机会。",
    decision: "倾向于选择可快速试验的方案，用真实反馈代替过度假设。",
    pressure: "压力增大时，你可能同时启动过多尝试，或因追求变化而低估收尾与维护的重要性。",
    jobs: ["创业", "市场增长", "新媒体与内容", "广告创意", "产品创新"],
    work: ["变化快、反馈直接、允许试验", "能够从零到一创建新项目", "结果导向但不过度限制实现方式"]
  },
  "action|structure": {
    name: "稳健执行者",
    line: "你既重视推进速度，也善于建立可靠的交付秩序。",
    personality: "你的可靠感来自行动与秩序的结合。你会把目标拆成步骤、节点与责任，并持续关注交付质量，是让计划真正落地的重要力量。",
    decision: "依据目标、资源和期限快速形成可执行计划，并在推进中校正。",
    pressure: "压力增大时，你可能把责任过多留给自己，对偏离计划或低效率表现出不耐烦。",
    jobs: ["项目管理", "运营管理", "供应链管理", "工程交付", "质量与流程管理"],
    work: ["目标、职责和期限相对清楚", "需要持续推进与稳定交付", "能够优化流程并看见具体成果"]
  },
  "action|empathy": {
    name: "温度推动者",
    line: "你能照顾人的感受，同时让事情继续向前。",
    personality: "你在人与结果之间保持动态平衡。你愿意主动承担、回应需要，也能通过关系建立信任并促成行动，因此常成为团队中的连接点和推动者。",
    decision: "优先理解关键人的需要，再寻找能够被共同接受并立即推进的方案。",
    pressure: "压力增大时，你可能为了维持进度或关系承担过多责任，忽略自己的边界。",
    jobs: ["客户成功", "咨询式销售", "团队管理", "公共关系", "社区与用户运营"],
    work: ["需要频繁沟通并产生可见结果", "重视信任、反馈与共同目标", "能够直接帮助客户或团队解决问题"]
  },
  "creativity|structure": {
    name: "创新设计者",
    line: "你不仅产生新想法，也能为创意搭建可实现的结构。",
    personality: "你既享受突破旧框架，也重视新方案能否真正成立。你擅长在自由探索与清晰约束之间工作，让创意从灵感变成完整体验或可用系统。",
    decision: "先拓展可能性，再用原则、场景和可行性逐步收敛。",
    pressure: "压力增大时，你可能在创新程度与完成标准之间来回拉扯，对作品产生过高要求。",
    jobs: ["产品设计", "交互与体验设计", "工业设计", "品牌系统", "内容产品策划"],
    work: ["既有明确问题又保留创作空间", "需要兼顾创意、逻辑与使用体验", "能够完整打磨一个产品或系统"]
  },
  "creativity|empathy": {
    name: "人本创想者",
    line: "你的创意往往来自对真实需要的敏锐理解。",
    personality: "你容易被人的故事、感受和未被满足的需要触发灵感。你希望创造的不只是新鲜事物，而是更友好、更有意义并能引起情感共鸣的体验。",
    decision: "从真实用户和情境出发，在多种创意中选择最能改善体验的方向。",
    pressure: "压力增大时，你可能对反馈过于敏感，或为了满足所有人而让创意失去重点。",
    jobs: ["用户体验", "服务设计", "教育产品", "内容创作", "社会创新"],
    work: ["直接接触用户与真实需求", "鼓励表达、试验和跨领域合作", "工作成果具有体验价值或社会意义"]
  },
  "empathy|structure": {
    name: "细致支持者",
    line: "你用清晰、可靠的方式回应他人的真实需要。",
    personality: "你的体贴不仅停留在感受层面，还会转化为周到安排和稳定支持。你重视承诺、细节与关系质量，善于让他人在清楚而安心的环境中完成事情。",
    decision: "兼顾规则、细节和相关人的真实处境，寻找风险较低且照顾周全的方案。",
    pressure: "压力增大时，你可能默默承担太多琐事，并因为不愿让人失望而难以拒绝。",
    jobs: ["人力资源", "客户运营", "培训与教务", "行政协调", "服务质量管理"],
    work: ["流程清楚且能持续帮助他人", "重视耐心、准确与长期关系", "团队氛围稳定并尊重个体差异"]
  }
};

const state = {
  index: 0,
  answers: Array(questions.length).fill(null),
  name: "",
  context: "职场",
  scores: null,
  top: null,
  shareUrl: null
};

const $ = (id) => document.getElementById(id);
const scaleLabels = ["很不符合", "较不符合", "不确定", "比较符合", "非常符合"];

function showScreen(id) {
  ["intro", "quiz", "result"].forEach((screen) => $(screen).classList.toggle("is-hidden", screen !== id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveProgress() {
  localStorage.setItem("advantageCompass", JSON.stringify({
    index: state.index, answers: state.answers, name: state.name, context: state.context
  }));
}

function startQuiz() {
  state.name = $("displayName").value.trim();
  state.context = document.querySelector('input[name="context"]:checked').value;
  state.index = 0;
  state.answers = Array(questions.length).fill(null);
  saveProgress();
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  const question = questions[state.index];
  const number = state.index + 1;
  $("progressLabel").textContent = `${String(number).padStart(2, "0")} / ${questions.length}`;
  $("progressPercent").textContent = `${Math.round(number / questions.length * 100)}%`;
  $("progressBar").style.width = `${number / questions.length * 100}%`;
  $("questionText").textContent = question.text;
  $("questionTag").textContent = `${state.context}场景 · 按照多数时候的真实状态作答`;
  $("answerScale").innerHTML = scaleLabels.map((label, index) => {
    const value = index + 1;
    const selected = state.answers[state.index] === value;
    return `<label class="answer-option ${selected ? "is-selected" : ""}" title="${label}">
      <input type="radio" name="answer" value="${value}" ${selected ? "checked" : ""} />
      <span>${value}</span>
    </label>`;
  }).join("");
  document.querySelectorAll('.answer-option input').forEach((input) => input.addEventListener("change", (event) => {
    state.answers[state.index] = Number(event.target.value);
    saveProgress();
    renderQuestion();
  }));
  $("backBtn").style.visibility = state.index === 0 ? "hidden" : "visible";
  $("nextBtn").disabled = state.answers[state.index] === null;
  $("nextBtn").innerHTML = state.index === questions.length - 1
    ? "查看我的性格画像 <span>→</span>"
    : "下一题 <span>→</span>";
}

function calculateScores() {
  const totals = Object.fromEntries(dimensionOrder.map((key) => [key, { sum: 0, count: 0 }]));
  questions.forEach((question, index) => {
    const answer = question.reverse ? 6 - state.answers[index] : state.answers[index];
    totals[question.dim].sum += answer;
    totals[question.dim].count += 1;
  });
  state.scores = Object.fromEntries(dimensionOrder.map((key) => [
    key,
    Math.round(((totals[key].sum / totals[key].count) - 1) / 4 * 100)
  ]));
  state.top = [...dimensionOrder].sort((a, b) => state.scores[b] - state.scores[a]).slice(0, 2);
}

function getArchetype() {
  return archetypePairs[[...state.top].sort().join("|")];
}

function polarPoint(index, radius) {
  const angle = (-90 + index * 72) * Math.PI / 180;
  return [220 + Math.cos(angle) * radius, 220 + Math.sin(angle) * radius];
}

function polygonPoints(radiusForKey) {
  return dimensionOrder.map((key, index) => {
    const [x, y] = polarPoint(index, radiusForKey(key));
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

function renderRadar() {
  const grid = [0.25, 0.5, 0.75, 1].map((level) =>
    `<polygon class="radar-grid" points="${polygonPoints(() => 145 * level)}"></polygon>`
  ).join("");
  const axes = dimensionOrder.map((key, index) => {
    const [x, y] = polarPoint(index, 145);
    return `<line class="radar-axis" x1="220" y1="220" x2="${x}" y2="${y}"></line>`;
  }).join("");
  const dataPoints = polygonPoints((key) => Math.max(12, 145 * state.scores[key] / 100));
  const dots = dimensionOrder.map((key, index) => {
    const [x, y] = polarPoint(index, Math.max(12, 145 * state.scores[key] / 100));
    return `<circle class="radar-dot" cx="${x}" cy="${y}" r="6"></circle>`;
  }).join("");
  const labels = dimensionOrder.map((key, index) => {
    const [x, y] = polarPoint(index, 188);
    return `<text class="radar-name" x="${x}" y="${y - 4}">${dimensions[key].name}</text>
      <text class="radar-value" x="${x}" y="${y + 15}">${state.scores[key]}%</text>`;
  }).join("");
  $("personalityRadar").innerHTML = `${grid}${axes}<polygon class="radar-shape" points="${dataPoints}"></polygon>${dots}${labels}`;
  $("traitLegend").innerHTML = dimensionOrder.map((key) => `
    <div class="trait-item"><i style="background:${dimensions[key].color}"></i><span>${dimensions[key].name}</span><b>${state.scores[key]}%</b></div>
  `).join("");
}

function renderPersonality(archetype) {
  const [first, second] = state.top;
  $("personalitySummary").innerHTML = `
    <h2>${dimensions[first].short} × ${dimensions[second].short}</h2>
    <p>${archetype.personality}</p>
    <div class="personality-points">
      <div class="personality-point"><b>你的决策方式</b><span>${archetype.decision}</span></div>
      <div class="personality-point"><b>压力下的倾向</b><span>${archetype.pressure}</span></div>
    </div>`;
}

function renderCareer(archetype) {
  $("careerDirections").innerHTML = archetype.jobs.map((job) => `<span class="career-tag">${job}</span>`).join("");
  $("workTypes").innerHTML = archetype.work.map((item) => `<div class="work-type">${item}</div>`).join("");
}

function contextAdvice() {
  const advice = {
    "职场": "选择一个正在推进的真实任务，明确写下你最想贡献的优势，并与关键协作者确认彼此期待。",
    "学习": "选择一项重要学习任务，用你的优势重新设计输入、练习和反馈方式，而不是照搬他人的节奏。",
    "创业": "从一个最关键的客户问题出发，让优势服务于验证需求、交付价值和建立合作。",
    "生活": "观察哪些日常活动让你自然投入、完成后仍有能量，并主动为这些活动保留稳定时间。"
  };
  return advice[state.context];
}

function buildManual() {
  const [first, second] = state.top;
  const low = [...dimensionOrder].sort((a, b) => state.scores[a] - state.scores[b])[0];
  const name = state.name || "你";
  const archetype = getArchetype();
  const blindSpots = {
    insight: "洞察过度时，可能不断分析却迟迟不做决定。给思考设定截止点，并用一次小规模行动验证判断。",
    action: "行动过度时，可能在目标尚未对齐前投入过快。开始前先确认成功标准与停止条件。",
    empathy: "感知过度时，可能承担不属于自己的情绪和责任。理解他人不等于替对方解决一切。",
    structure: "秩序过度时，可能把变化视为干扰。为计划预留试验区，让规则服务于结果。",
    creativity: "探索过度时，可能持续开启新方向却降低完成率。每次只保留一个核心创新变量。"
  };
  const lowAdvice = {
    insight: "面对重要选择时，多问一次“真正要解决的问题是什么”。",
    action: "把下一步缩小到30分钟内可以启动的动作。",
    empathy: "在回应结论前，先复述一次对方的真实关切。",
    structure: "为重复任务建立一份最小清单或固定节奏。",
    creativity: "每周刻意尝试一种与惯常方法不同的小方案。"
  };
  const collaboration = {
    insight: "给我必要背景和思考空间，并告诉我哪些假设最需要验证。",
    action: "与我明确目标和权限，让我尽快启动并用结果同步进展。",
    empathy: "坦诚说明你的关切和限制，比只交代任务更有助于我发挥。",
    structure: "明确成功标准、截止时间和责任边界，我会让推进更加可靠。",
    creativity: "告诉我真正不能改变的约束，其余空间允许我提出不同路径。"
  };
  return `
    <section class="manual-section wide"><span class="manual-no">01 · 性格底色</span><h3>${archetype.name}</h3><p>${archetype.personality}</p></section>
    <section class="manual-section"><span class="manual-no">02 · 行为与决策</span><h3>你通常如何理解并推动事情</h3><p>${archetype.decision}</p><ul><li>${dimensions[first].strength}</li><li>${dimensions[second].strength}</li></ul></section>
    <section class="manual-section"><span class="manual-no">03 · 压力反应</span><h3>当优势被调得太大声</h3><p>${archetype.pressure}</p><ul><li>${blindSpots[first]}</li><li>${blindSpots[second]}</li></ul></section>
    <section class="manual-section wide"><span class="manual-no">04 · 职业方向</span><h3>更容易发挥优势的工作领域</h3><p>${name}可以重点探索${archetype.jobs.join("、")}等方向。它们的共同点不是职位名称，而是能够同时调用你的“${dimensions[first].name}”与“${dimensions[second].name}”。</p><ul>${archetype.work.map((item) => `<li>${item}</li>`).join("")}</ul></section>
    <section class="manual-section"><span class="manual-no">05 · 协作说明</span><h3>别人如何更好地与你合作</h3><ul><li>${collaboration[first]}</li><li>${collaboration[second]}</li><li>如果意见不同，请直接说明事实依据与目标影响。</li></ul></section>
    <section class="manual-section"><span class="manual-no">06 · 成长支点</span><h3>不必补齐所有短板</h3><p>你当前相对不突出的特征是“${dimensions[low].name}”。这不是缺陷，只表示它暂时不是你最自然的反应方式。建议从一个小动作开始：${lowAdvice[low]}</p></section>
    <section class="manual-section wide"><span class="manual-no">07 · 30天行动建议</span><h3>让性格优势转化为真实结果</h3><ol><li><b>第1周：</b>记录三次自己进入专注状态的时刻，确认当时使用了哪些优势。</li><li><b>第2周：</b>${contextAdvice()}</li><li><b>第3周：</b>询问一位熟悉你的人：“你认为我在哪类事情上最能创造价值？”</li><li><b>第4周：</b>复盘一次成果，保留有效方式，并为过度使用的优势设置一条边界。</li></ol></section>`;
}

function renderResult() {
  calculateScores();
  const archetype = getArchetype();
  $("archetypeName").textContent = archetype.name;
  $("archetypeLine").textContent = `${state.name ? `${state.name}，` : ""}${archetype.line}`;
  renderRadar();
  renderPersonality(archetype);
  renderCareer(archetype);
  $("fullReport").classList.add("is-hidden");
  $("unlockPanel").classList.remove("is-hidden");
  showScreen("result");
}

function unlockReport() {
  $("checkoutDialog").close();
  $("manualSections").innerHTML = buildManual();
  $("reportDate").textContent = new Date().toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" });
  $("reportName").textContent = state.name ? `${state.name}的` : "你的";
  $("unlockPanel").classList.add("is-hidden");
  $("fullReport").classList.remove("is-hidden");
  $("fullReport").scrollIntoView({ behavior: "smooth", block: "start" });
}

function wrapCanvasText(ctx, text, maxWidth) {
  const lines = [];
  let line = "";
  [...text].forEach((character) => {
    const next = line + character;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = character;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function drawShareCard() {
  const canvas = $("shareCanvas");
  const ctx = canvas.getContext("2d");
  const archetype = getArchetype();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#090c11";
  ctx.fillRect(0, 0, 1080, 1350);
  const glow = ctx.createRadialGradient(880, 140, 20, 880, 140, 560);
  glow.addColorStop(0, "rgba(101,229,255,.22)");
  glow.addColorStop(1, "rgba(9,12,17,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 1080, 700);
  ctx.strokeStyle = "rgba(255,255,255,.16)";
  ctx.lineWidth = 2;
  ctx.strokeRect(70, 70, 940, 1210);
  ctx.fillStyle = "#d8ff4f";
  ctx.font = '700 28px "Microsoft YaHei", sans-serif';
  ctx.fillText("优势罗盘 · PERSONAL PROFILE", 115, 150);
  ctx.fillStyle = "#f4f6f8";
  ctx.font = '700 36px "Microsoft YaHei", sans-serif';
  ctx.fillText(`${state.name || "我"}的性格优势类型`, 115, 270);
  ctx.fillStyle = "#d8ff4f";
  ctx.font = '800 92px "Microsoft YaHei", sans-serif';
  ctx.fillText(archetype.name, 110, 395);
  ctx.fillStyle = "#aeb8c5";
  ctx.font = '30px "Microsoft YaHei", sans-serif';
  wrapCanvasText(ctx, archetype.line, 830).slice(0, 2).forEach((line, index) => ctx.fillText(line, 115, 475 + index * 46));

  dimensionOrder.forEach((key, index) => {
    const y = 650 + index * 95;
    ctx.fillStyle = dimensions[key].color;
    ctx.font = '700 27px "Microsoft YaHei", sans-serif';
    ctx.fillText(dimensions[key].name, 115, y);
    ctx.fillStyle = "#27313d";
    ctx.fillRect(300, y - 24, 540, 24);
    ctx.fillStyle = dimensions[key].color;
    ctx.fillRect(300, y - 24, 540 * state.scores[key] / 100, 24);
    ctx.fillStyle = "#f4f6f8";
    ctx.font = '700 27px "Microsoft YaHei", sans-serif';
    ctx.textAlign = "right";
    ctx.fillText(`${state.scores[key]}%`, 930, y);
    ctx.textAlign = "left";
  });

  ctx.strokeStyle = "rgba(255,255,255,.14)";
  ctx.beginPath();
  ctx.moveTo(115, 1160);
  ctx.lineTo(965, 1160);
  ctx.stroke();
  ctx.fillStyle = "#d8dee7";
  ctx.font = '26px "Microsoft YaHei", sans-serif';
  ctx.fillText("优势不是标签，是你反复创造价值的方式。", 115, 1225);
  return canvas;
}

function generateShareCard() {
  $("shareLoading").classList.remove("is-hidden");
  $("sharePreview").classList.add("is-hidden");
  $("downloadCard").disabled = true;
  $("shareDialog").showModal();
  const canvas = drawShareCard();
  canvas.toBlob((blob) => {
    if (!blob) {
      state.shareUrl = canvas.toDataURL("image/png");
    } else {
      if (state.shareUrl && state.shareUrl.startsWith("blob:")) URL.revokeObjectURL(state.shareUrl);
      state.shareUrl = URL.createObjectURL(blob);
    }
    $("sharePreview").src = state.shareUrl;
    $("sharePreview").classList.remove("is-hidden");
    $("shareLoading").classList.add("is-hidden");
    $("downloadCard").disabled = false;
  }, "image/png");
}

function downloadShareCard() {
  if (!state.shareUrl) return;
  const anchor = document.createElement("a");
  anchor.href = state.shareUrl;
  anchor.download = `优势罗盘-${getArchetype().name}.png`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

$("startBtn").addEventListener("click", startQuiz);
$("legalConsent").addEventListener("change", (event) => {
  $("startBtn").disabled = !event.target.checked;
});
$("exitBtn").addEventListener("click", () => showScreen("intro"));
$("backBtn").addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    saveProgress();
    renderQuestion();
  }
});
$("nextBtn").addEventListener("click", () => {
  if (state.answers[state.index] === null) return;
  if (state.index < questions.length - 1) {
    state.index += 1;
    saveProgress();
    renderQuestion();
  } else {
    renderResult();
  }
});
$("restartBtn").addEventListener("click", () => {
  localStorage.removeItem("advantageCompass");
  showScreen("intro");
});
$("unlockBtn").addEventListener("click", () => $("checkoutDialog").showModal());
$("closeDialog").addEventListener("click", () => $("checkoutDialog").close());
$("demoUnlock").addEventListener("click", unlockReport);
$("shareBtn").addEventListener("click", generateShareCard);
$("downloadCard").addEventListener("click", downloadShareCard);
$("closeShareDialog").addEventListener("click", () => $("shareDialog").close());
$("checkoutDialog").addEventListener("click", (event) => {
  if (event.target === $("checkoutDialog")) $("checkoutDialog").close();
});
$("shareDialog").addEventListener("click", (event) => {
  if (event.target === $("shareDialog")) $("shareDialog").close();
});
