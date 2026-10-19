export type Entry = {
    id: number
    date: string
    title: string
    type: "income" | "expense"
    category: string
    amount: number
    note: string
}