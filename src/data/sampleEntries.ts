import type { Entry } from '../types/entry'

export const sampleEntries: Entry[] = [
  { id: 1, date: "2026-09-01", title: "お小遣い", type: "income", category: "お小遣い", amount: 30000, note: "" },
  { id: 2, date: "2026-09-05", title: "ランチ", type: "expense", category: "食費", amount: 1200, note: "同期と駅前の定食屋" },
  { id: 3, date: "2026-09-12", title: "映画", type: "expense", category: "娯楽", amount: 1900, note: "" },
  { id: 4, date: "2026-09-20", title: "定期券", type: "expense", category: "交通費", amount: 12500, note: "1 か月分。次回更新は 10/20" },
  { id: 5, date: "2026-10-01", title: "お小遣い", type: "income", category: "お小遣い", amount: 30000, note: "" },
  { id: 6, date: "2026-10-03", title: "コンビニ", type: "expense", category: "食費", amount: 680, note: "おにぎり 2 個と飲み物" },
  { id: 7, date: "2026-10-08", title: "本", type: "expense", category: "娯楽", amount: 1650, note: "React の入門書\n読み終わったら感想をメモする" },
  { id: 8, date: "2026-10-11", title: "電車", type: "expense", category: "交通費", amount: 420, note: "" },
  { id: 9, date: "2026-10-14", title: "ドラッグストア", type: "expense", category: "未分類", amount: 2400, note: "レシートをなくしたので内訳が不明。思い出したらカテゴリを直す" },
]